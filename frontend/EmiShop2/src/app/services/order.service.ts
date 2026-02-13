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
 * Interface pour un item de commande
 */
export interface OrderItem {
    productId: number;
    title: string;
    price: number;
    qty: number;
}

/**
 * Interface pour une commande
 */
export interface Order {
    id?: string;
    userId: string;
    userEmail: string;
    items: OrderItem[];
    total: number;
    status: 'created' | 'processing' | 'shipped' | 'delivered';
    createdAt: Timestamp | null;
}

/**
 * Service de gestion des commandes (Firestore)
 */
@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private collectionName = 'orders';

    constructor(private authService: AuthService) { }

    /**
     * Créer une nouvelle commande
     * @param items - Liste des articles
     * @param total - Total de la commande
     */
    async createOrder(items: OrderItem[], total: number): Promise<string> {
        const user = this.authService.currentUser();

        if (!user) {
            throw new Error('Vous devez être connecté pour passer une commande.');
        }

        const orderData = {
            userId: user.uid,
            userEmail: user.email || 'Anonyme',
            items,
            total,
            status: 'created',
            createdAt: serverTimestamp()
        };

        const docRef = await addDoc(collection(firebaseDb, this.collectionName), orderData);
        return docRef.id;
    }

    /**
     * Récupérer les commandes de l'utilisateur connecté
     */
    async getMyOrders(): Promise<Order[]> {
        const user = this.authService.currentUser();

        if (!user) {
            throw new Error('Vous devez être connecté pour voir vos commandes.');
        }

        // Simple query without orderBy to avoid requiring composite index
        const q = query(
            collection(firebaseDb, this.collectionName),
            where('userId', '==', user.uid)
        );

        const snapshot = await getDocs(q);

        const orders = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
        } as Order));

        // Sort client-side by createdAt (newest first)
        return orders.sort((a, b) => {
            if (!a.createdAt) return 1;
            if (!b.createdAt) return -1;
            return b.createdAt.seconds - a.createdAt.seconds;
        });
    }
}
