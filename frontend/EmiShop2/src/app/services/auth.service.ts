import { Injectable, signal, computed } from '@angular/core';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    User,
    UserCredential
} from 'firebase/auth';
import { firebaseAuth } from '../firebase';

/**
 * Service d'Authentification Firebase
 * 
 * Ce service centralise toute la logique d'authentification.
 * Il utilise les Signals Angular pour une réactivité optimale.
 * 
 * Méthodes disponibles :
 * - login(email, password) : Connexion avec email/mot de passe
 * - register(email, password) : Création d'un nouveau compte
 * - logout() : Déconnexion de l'utilisateur
 * 
 * Propriétés réactives :
 * - currentUser() : L'utilisateur actuellement connecté (ou null)
 * - isAuthenticated() : Boolean indiquant si un utilisateur est connecté
 * - isLoading() : Boolean indiquant si une opération est en cours
 */
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    // Signals pour l'état de l'authentification
    private _currentUser = signal<User | null>(null);
    private _isLoading = signal<boolean>(true);
    private _error = signal<string | null>(null);

    // Computed signals (lecture seule)
    readonly currentUser = this._currentUser.asReadonly();
    readonly isLoading = this._isLoading.asReadonly();
    readonly error = this._error.asReadonly();
    readonly isAuthenticated = computed(() => this._currentUser() !== null);

    constructor() {
        // Utilise l'instance Firebase partagée de firebase.ts
        onAuthStateChanged(firebaseAuth, (user) => {
            this._currentUser.set(user);
            this._isLoading.set(false);
        });
    }

    /**
     * Connexion avec email et mot de passe
     * 
     * @param email - L'adresse email de l'utilisateur
     * @param password - Le mot de passe de l'utilisateur
     * @returns Promise avec les informations de l'utilisateur connecté
     * @throws Erreur si la connexion échoue (mauvais identifiants, etc.)
     */
    async login(email: string, password: string): Promise<UserCredential> {
        this._isLoading.set(true);
        this._error.set(null);

        try {
            const result = await signInWithEmailAndPassword(firebaseAuth, email, password);
            return result;
        } catch (error: any) {
            const errorMessage = this.getErrorMessage(error.code);
            this._error.set(errorMessage);
            throw new Error(errorMessage);
        } finally {
            this._isLoading.set(false);
        }
    }

    /**
     * Inscription d'un nouvel utilisateur
     * 
     * @param email - L'adresse email du nouvel utilisateur
     * @param password - Le mot de passe (minimum 6 caractères)
     * @returns Promise avec les informations du nouvel utilisateur
     * @throws Erreur si l'inscription échoue (email déjà utilisé, etc.)
     */
    async register(email: string, password: string): Promise<UserCredential> {
        this._isLoading.set(true);
        this._error.set(null);

        try {
            const result = await createUserWithEmailAndPassword(firebaseAuth, email, password);
            return result;
        } catch (error: any) {
            const errorMessage = this.getErrorMessage(error.code);
            this._error.set(errorMessage);
            throw new Error(errorMessage);
        } finally {
            this._isLoading.set(false);
        }
    }

    /**
     * Déconnexion de l'utilisateur
     * 
     * @returns Promise qui se résout quand la déconnexion est terminée
     */
    async logout(): Promise<void> {
        this._isLoading.set(true);
        try {
            await signOut(firebaseAuth);
        } finally {
            this._isLoading.set(false);
        }
    }

    /**
     * Traduit les codes d'erreur Firebase en messages lisibles
     * 
     * @param code - Le code d'erreur Firebase
     * @returns Message d'erreur en français
     */
    private getErrorMessage(code: string): string {
        switch (code) {
            case 'auth/email-already-in-use':
                return 'Cette adresse email est déjà utilisée.';
            case 'auth/invalid-email':
                return 'Adresse email invalide.';
            case 'auth/weak-password':
                return 'Le mot de passe doit contenir au moins 6 caractères.';
            case 'auth/user-not-found':
                return 'Aucun compte n\'existe avec cette adresse email.';
            case 'auth/wrong-password':
                return 'Mot de passe incorrect.';
            case 'auth/invalid-credential':
                return 'Email ou mot de passe incorrect.';
            case 'auth/too-many-requests':
                return 'Trop de tentatives. Veuillez réessayer plus tard.';
            default:
                return 'Une erreur est survenue. Veuillez réessayer.';
        }
    }
}
