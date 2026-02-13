import { Injectable } from '@angular/core';
import {
    collection,
    addDoc,
    query,
    where,
    orderBy,
    getDocs,
    serverTimestamp,
    Timestamp
} from 'firebase/firestore';
import { firebaseDb } from '../firebase';
import { AuthService } from './auth.service';

/**
 * Interface pour un commentaire
 */
export interface Comment {
    id?: string;
    productId: string;
    userId: string;
    userEmail: string;
    content: string;
    createdAt: Timestamp | null;
}

/**
 * Service de gestion des commentaires (Firestore)
 */
@Injectable({
    providedIn: 'root'
})
export class CommentService {
    private collectionName = 'comments';

    constructor(private authService: AuthService) { }

    /**
     * Ajouter un commentaire
     * @param productId - ID du produit
     * @param content - Contenu du commentaire
     */
    async addComment(productId: string, content: string): Promise<void> {
        const user = this.authService.currentUser();

        if (!user) {
            throw new Error('Vous devez être connecté pour commenter.');
        }

        const commentData = {
            productId,
            userId: user.uid,
            userEmail: user.email || 'Anonyme',
            content,
            createdAt: serverTimestamp()
        };

        await addDoc(collection(firebaseDb, this.collectionName), commentData);
    }

    /**
     * Récupérer les commentaires d'un produit
     * @param productId - ID du produit
     */
    async getCommentsByProductId(productId: string): Promise<Comment[]> {
        // Simple query without orderBy to avoid requiring composite index
        const q = query(
            collection(firebaseDb, this.collectionName),
            where('productId', '==', productId)
        );

        const snapshot = await getDocs(q);

        const comments = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Comment));

        // Sort client-side by createdAt (newest first)
        return comments.sort((a, b) => {
            if (!a.createdAt) return 1;
            if (!b.createdAt) return -1;
            return b.createdAt.seconds - a.createdAt.seconds;
        });
    }
}
