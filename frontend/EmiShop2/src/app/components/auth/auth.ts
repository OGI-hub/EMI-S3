import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

/**
 * Composant d'Authentification
 * 
 * Ce composant gère l'interface utilisateur pour :
 * - La connexion (login) des utilisateurs existants
 * - L'inscription (register) de nouveaux utilisateurs
 * 
 * Il utilise le service AuthService pour communiquer avec Firebase.
 */
@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  // Onglet actif : 'login' ou 'register'
  activeTab = signal<'login' | 'register'>('login');

  // Données du formulaire de connexion
  loginEmail = signal('');
  loginPassword = signal('');

  // Données du formulaire d'inscription
  registerEmail = signal('');
  registerPassword = signal('');
  confirmPassword = signal('');
  firstName = signal('');
  lastName = signal('');
  acceptTerms = signal(false);

  // Messages de feedback
  successMessage = signal<string | null>(null);
  errorMessage = signal<string | null>(null);

  // État de chargement
  isSubmitting = signal(false);

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  /**
   * Change l'onglet actif (Connexion / Inscription)
   */
  setActiveTab(tab: 'login' | 'register') {
    this.activeTab.set(tab);
    this.clearMessages();
  }

  /**
   * Efface les messages de succès et d'erreur
   */
  clearMessages() {
    this.successMessage.set(null);
    this.errorMessage.set(null);
  }

  /**
   * Gère la soumission du formulaire de connexion
   * 
   * 1. Valide les champs
   * 2. Appelle le service d'authentification
   * 3. Affiche un message de succès ou d'erreur
   * 4. Redirige vers la page d'accueil en cas de succès
   */
  async onLogin() {
    this.clearMessages();

    // Validation des champs
    if (!this.loginEmail() || !this.loginPassword()) {
      this.errorMessage.set('Veuillez remplir tous les champs.');
      return;
    }

    this.isSubmitting.set(true);

    try {
      await this.authService.login(this.loginEmail(), this.loginPassword());
      this.successMessage.set('Connexion réussie ! Redirection...');

      // Redirection après 1.5 secondes
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 1500);
    } catch (error: any) {
      this.errorMessage.set(error.message);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  /**
   * Gère la soumission du formulaire d'inscription
   * 
   * 1. Valide les champs (email, mot de passe, confirmation)
   * 2. Vérifie que les mots de passe correspondent
   * 3. Appelle le service d'authentification
   * 4. Affiche un message de succès ou d'erreur
   */
  async onRegister() {
    this.clearMessages();

    // Validation des champs obligatoires
    if (!this.registerEmail() || !this.registerPassword() || !this.confirmPassword()) {
      this.errorMessage.set('Veuillez remplir tous les champs obligatoires.');
      return;
    }

    // Vérification des mots de passe
    if (this.registerPassword() !== this.confirmPassword()) {
      this.errorMessage.set('Les mots de passe ne correspondent pas.');
      return;
    }

    // Vérification de la longueur du mot de passe
    if (this.registerPassword().length < 6) {
      this.errorMessage.set('Le mot de passe doit contenir au moins 6 caractères.');
      return;
    }

    // Vérification des conditions générales
    if (!this.acceptTerms()) {
      this.errorMessage.set('Veuillez accepter les conditions générales.');
      return;
    }

    this.isSubmitting.set(true);

    try {
      await this.authService.register(this.registerEmail(), this.registerPassword());
      this.successMessage.set('Compte créé avec succès ! Vous êtes maintenant connecté.');

      // Réinitialiser le formulaire
      this.registerEmail.set('');
      this.registerPassword.set('');
      this.confirmPassword.set('');
      this.firstName.set('');
      this.lastName.set('');
      this.acceptTerms.set(false);

      // Redirection après 2 secondes
      setTimeout(() => {
        this.router.navigate(['/']);
      }, 2000);
    } catch (error: any) {
      this.errorMessage.set(error.message);
    } finally {
      this.isSubmitting.set(false);
    }
  }

  /**
   * Déconnecte l'utilisateur
   */
  async onLogout() {
    await this.authService.logout();
    this.successMessage.set('Vous avez été déconnecté.');
  }
}
