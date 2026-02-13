import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ProductService, DummyJsonProduct } from '../../services/product.service';
import { CartService } from '../../services/cart.service';
import { CommentService, Comment } from '../../services/comment.service';
import { AuthService } from '../../services/auth.service';

@Component({
    selector: 'app-product-detail',
    standalone: true,
    imports: [CommonModule, RouterModule, FormsModule],
    templateUrl: './product-detail.html',
    styleUrl: './product-detail.css',
})
export class ProductDetail implements OnInit {
    // Using signals for reactive state
    product = signal<DummyJsonProduct | null>(null);
    loading = signal(true);
    currentImageIndex = signal(0);

    // Commentaires
    comments = signal<Comment[]>([]);
    commentsLoading = signal(false);
    commentError = signal<string | null>(null);
    commentSuccess = signal<string | null>(null);
    newComment = signal('');
    submittingComment = signal(false);

    // Computed property for promo price
    promoPrice = computed(() => {
        const p = this.product();
        if (!p) return 0;
        const discounted = p.price - (p.price * p.discountPercentage / 100);
        return Math.round(discounted * 100) / 100;
    });

    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private cart: CartService,
        private commentService: CommentService,
        public authService: AuthService
    ) { }

    ngOnInit(): void {
        const idParam = this.route.snapshot.paramMap.get('id');
        const id = idParam ? Number(idParam) : null;

        if (id && !isNaN(id)) {
            this.productService.getProductById(id).subscribe({
                next: (productData) => {
                    this.product.set(productData);
                    this.loading.set(false);
                    // Charger les commentaires
                    this.loadComments(String(id));
                },
                error: () => {
                    this.loading.set(false);
                }
            });
        } else {
            this.loading.set(false);
        }
    }

    /**
     * Charger les commentaires du produit
     */
    async loadComments(productId: string): Promise<void> {
        this.commentsLoading.set(true);
        this.commentError.set(null);

        try {
            const comments = await this.commentService.getCommentsByProductId(productId);
            this.comments.set(comments);
        } catch (error: any) {
            this.commentError.set('Erreur lors du chargement des commentaires.');
        } finally {
            this.commentsLoading.set(false);
        }
    }

    /**
     * Ajouter un commentaire
     */
    async submitComment(): Promise<void> {
        const currentProduct = this.product();
        if (!currentProduct || !this.newComment().trim()) {
            return;
        }

        this.submittingComment.set(true);
        this.commentError.set(null);
        this.commentSuccess.set(null);

        try {
            await this.commentService.addComment(String(currentProduct.id), this.newComment().trim());
            this.commentSuccess.set('Commentaire ajouté avec succès !');
            this.newComment.set('');
            // Recharger les commentaires
            await this.loadComments(String(currentProduct.id));
        } catch (error: any) {
            this.commentError.set(error.message || 'Erreur lors de l\'ajout du commentaire.');
        } finally {
            this.submittingComment.set(false);
        }
    }

    fullStars(rating: number): number[] {
        return Array(Math.floor(rating)).fill(0);
    }

    hasHalfStar(rating: number): boolean {
        return rating - Math.floor(rating) >= 0.5;
    }

    setCurrentImage(index: number): void {
        this.currentImageIndex.set(index);
    }

    addToCart(): void {
        const currentProduct = this.product();
        if (currentProduct) {
            this.cart.add({
                id: currentProduct.id,
                title: currentProduct.title,
                price: this.promoPrice(),
                thumbnail: currentProduct.thumbnail
            }, 1);
        }
    }
}

