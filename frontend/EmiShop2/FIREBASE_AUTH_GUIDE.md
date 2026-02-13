# Guide Complet : Intégration Firebase Authentication

Ce document explique en détail toutes les étapes réalisées pour intégrer Firebase Authentication dans l'application EmiShop2.

---

## 📋 Table des matières

1. [Vue d'ensemble](#vue-densemble)
2. [Installation de Firebase](#1-installation-de-firebase)
3. [Configuration Firebase](#2-configuration-firebase)
4. [Service d'Authentification](#3-service-dauthentification)
5. [Composant Auth](#4-composant-auth)
6. [Routing](#5-routing)
7. [Configuration du projet Firebase](#6-configuration-du-projet-firebase)
8. [Test de l'application](#7-test-de-lapplication)
9. [Dépannage](#8-dépannage)

---

## Vue d'ensemble

### Qu'est-ce que Firebase Authentication ?

Firebase Authentication est un service backend de Google qui permet de gérer l'authentification des utilisateurs sans avoir à développer son propre serveur. Il offre :

- **Sécurité** : Mots de passe hashés, tokens JWT sécurisés
- **Simplicité** : API simple à utiliser
- **Fiabilité** : Infrastructure Google scalable
- **Gratuité** : Gratuit jusqu'à 10K authentifications/mois

### Architecture de l'implémentation

```
┌─────────────────────────────────────────────────────────────┐
│                    Application Angular                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────┐    ┌─────────────────────────────────┐ │
│  │  Composant Auth │───▶│      Service AuthService        │ │
│  │  (Interface UI) │    │   (Logique d'authentification)  │ │
│  └─────────────────┘    └─────────────────────────────────┘ │
│                                        │                     │
│                                        ▼                     │
│                         ┌─────────────────────────────────┐ │
│                         │     firebase.config.ts          │ │
│                         │   (Clés de configuration)       │ │
│                         └─────────────────────────────────┘ │
└────────────────────────────────┬────────────────────────────┘
                                 │
                                 ▼
                    ┌─────────────────────────┐
                    │    Firebase Backend     │
                    │  (Serveurs Google)      │
                    └─────────────────────────┘
```

---

## 1. Installation de Firebase

### Commande exécutée

```bash
npm install firebase
```

### Pourquoi cette installation ?

- **firebase** : Le SDK officiel Firebase qui contient tous les modules (Auth, Firestore, Storage, etc.)

### Note importante

La bibliothèque `@angular/fire` (wrapper Angular officiel) n'est pas compatible avec Angular 21 au moment de cette implémentation. Nous utilisons donc le SDK Firebase directement, ce qui fonctionne parfaitement et offre plus de contrôle.

---

## 2. Configuration Firebase

### Fichier créé : `src/app/firebase.config.ts`

```typescript
export const firebaseConfig = {
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJET.firebaseapp.com",
  projectId: "VOTRE_PROJET",
  storageBucket: "VOTRE_PROJET.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abc123"
};
```

### Explication de chaque clé

| Clé | Description | Exemple |
|-----|-------------|---------|
| `apiKey` | Clé d'API publique pour identifier votre projet | `AIzaSyC...` |
| `authDomain` | Domaine pour les redirections d'authentification | `monprojet.firebaseapp.com` |
| `projectId` | Identifiant unique de votre projet Firebase | `monprojet-12345` |
| `storageBucket` | Bucket pour le stockage de fichiers | `monprojet.appspot.com` |
| `messagingSenderId` | ID pour les notifications push | `123456789012` |
| `appId` | Identifiant unique de votre application web | `1:123...:web:abc...` |

### Pourquoi un fichier séparé ?

1. **Maintenabilité** : Facile à modifier sans toucher au code
2. **Clarté** : Configuration centralisée en un seul endroit
3. **Sécurité** : Peut être facilement exclu du versioning (gitignore) si nécessaire

---

## 3. Service d'Authentification

### Fichier créé : `src/app/services/auth.service.ts`

### Pourquoi un service ?

Un service Angular est une classe réutilisable qui encapsule la logique métier. Avantages :

1. **Séparation des responsabilités** : Le composant gère l'UI, le service gère la logique
2. **Réutilisabilité** : Le service peut être injecté dans n'importe quel composant
3. **Testabilité** : Plus facile à tester unitairement
4. **Singleton** : Une seule instance partagée dans toute l'application

### Méthodes du service

#### `login(email, password)`

```typescript
async login(email: string, password: string): Promise<UserCredential>
```

- **But** : Connecter un utilisateur existant
- **Paramètres** : Email et mot de passe
- **Retour** : Informations de l'utilisateur connecté
- **Erreurs possibles** : Email invalide, mot de passe incorrect, utilisateur inexistant

#### `register(email, password)`

```typescript
async register(email: string, password: string): Promise<UserCredential>
```

- **But** : Créer un nouveau compte utilisateur
- **Paramètres** : Email et mot de passe (min 6 caractères)
- **Retour** : Informations du nouvel utilisateur
- **Erreurs possibles** : Email déjà utilisé, mot de passe trop faible

#### `logout()`

```typescript
async logout(): Promise<void>
```

- **But** : Déconnecter l'utilisateur actuel
- **Effet** : Supprime le token de session

### Signals Angular

Le service utilise les **Signals** (nouvelle fonctionnalité Angular 16+) pour une réactivité optimale :

```typescript
private _currentUser = signal<User | null>(null);
readonly isAuthenticated = computed(() => this._currentUser() !== null);
```

**Avantages des Signals :**
- Plus performants que les Observables pour les états simples
- Mise à jour automatique de l'UI quand la valeur change
- Syntaxe plus simple et lisible

---

## 4. Composant Auth

### Fichiers modifiés

- `src/app/components/auth/auth.ts` - Logique du composant
- `src/app/components/auth/auth.html` - Template HTML

### Structure du composant

Le composant gère deux onglets :

1. **Connexion** : Formulaire email + mot de passe
2. **Inscription** : Formulaire complet avec validation

### Fonctionnalités implémentées

| Fonctionnalité | Description |
|----------------|-------------|
| Onglets dynamiques | Switch entre Connexion et Inscription |
| Validation des champs | Vérifie que tous les champs sont remplis |
| Confirmation mot de passe | Vérifie que les 2 mots de passe correspondent |
| Messages d'erreur | Affiche les erreurs Firebase traduites en français |
| Messages de succès | Confirme la connexion/inscription réussie |
| État de chargement | Spinner pendant les requêtes |
| Vue "connecté" | Affiche l'email et bouton de déconnexion |

### Binding des formulaires

Nous utilisons `ngModel` avec les Signals :

```html
<input 
  [ngModel]="loginEmail()"
  (ngModelChange)="loginEmail.set($event)"
  name="loginEmail">
```

**Explication :**
- `[ngModel]="loginEmail()"` : Lit la valeur du Signal
- `(ngModelChange)="loginEmail.set($event)"` : Met à jour le Signal quand l'utilisateur tape

---

## 5. Routing

### Fichier modifié : `src/app/app.routes.ts`

### Route ajoutée

```typescript
{
  path: 'auth',
  loadComponent: () =>
    import('./components/auth/auth').then(m => m.Auth),
}
```

### Pourquoi le lazy loading ?

- `loadComponent: () => import(...)` charge le composant uniquement quand l'utilisateur accède à `/auth`
- **Avantage** : Réduit la taille du bundle initial
- **Résultat** : Chargement plus rapide de l'application

### Modification de app.ts

L'import du composant Auth a été supprimé car il est maintenant chargé via le routing :

```diff
- import { Auth as AuthComponent } from './components/auth/auth';
```

---

## 6. Configuration du projet Firebase

### Étape 1 : Créer un projet Firebase

1. Aller sur [console.firebase.google.com](https://console.firebase.google.com/)
2. Cliquer sur "Add project" (ou "Créer un projet")
3. Donner un nom au projet (ex: "EmiShop-Auth")
4. Optionnel : Désactiver Google Analytics
5. Cliquer sur "Create project"

### Étape 2 : Ajouter une application Web

1. Sur la page d'accueil du projet, cliquer sur l'icône Web (`</>`)
2. Donner un nom à l'app (ex: "EmiShop")
3. Ne pas cocher "Firebase Hosting"
4. Cliquer sur "Register app"

### Étape 3 : Copier les clés de configuration

Firebase affiche un bloc de code comme ceci :

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyC1234567890abcdefg",
  authDomain: "emishop-auth.firebaseapp.com",
  projectId: "emishop-auth",
  // ... autres clés
};
```

**Copiez ces valeurs dans `src/app/firebase.config.ts`**

### Étape 4 : Activer l'authentification Email/Password

1. Dans la console Firebase, aller dans "Authentication" (menu de gauche)
2. Cliquer sur "Get started"
3. Dans "Sign-in method", cliquer sur "Email/Password"
4. Activer la première option "Email/Password"
5. Cliquer sur "Save"

---

## 7. Test de l'application

### Démarrer l'application

```bash
ng serve
```

### Accéder à la page d'authentification

Ouvrir : [http://localhost:4200/auth](http://localhost:4200/auth)

### Tests à effectuer

1. **Test d'inscription**
   - Remplir le formulaire d'inscription
   - Vérifier le message "Compte créé avec succès"
   - Vérifier dans Firebase Console → Authentication → Users

2. **Test de connexion**
   - Se déconnecter (si connecté)
   - Aller sur l'onglet "Connexion"
   - Utiliser les identifiants créés
   - Vérifier le message "Connexion réussie"

3. **Test des erreurs**
   - Essayer de s'inscrire avec un email déjà utilisé
   - Essayer de se connecter avec un mauvais mot de passe
   - Vérifier que les messages d'erreur s'affichent

---

## 8. Dépannage

### Erreur : "Firebase: Error (auth/api-key-not-valid)"

**Cause** : Les clés de configuration sont incorrectes ou placeholder

**Solution** : Vérifier que `firebase.config.ts` contient vos vraies clés Firebase

### Erreur : "auth/network-request-failed"

**Cause** : Problème de connexion réseau

**Solution** : 
- Vérifier la connexion internet
- Vérifier que le pare-feu n'bloque pas Firebase

### L'utilisateur n'apparaît pas dans Firebase Console

**Cause** : L'authentification Email/Password n'est pas activée

**Solution** : 
1. Firebase Console → Authentication → Sign-in method
2. Activer "Email/Password"

### Erreur de compilation TypeScript

**Cause** : Types manquants

**Solution** :
```bash
npm install --save-dev @types/node
```

---

## 📁 Résumé des fichiers

| Fichier | Action | Description |
|---------|--------|-------------|
| `firebase.config.ts` | CRÉÉ | Configuration Firebase |
| `auth.service.ts` | CRÉÉ | Service d'authentification |
| `auth.ts` | MODIFIÉ | Composant avec logique Firebase |
| `auth.html` | MODIFIÉ | Template avec formulaires |
| `app.routes.ts` | MODIFIÉ | Ajout route `/auth` |
| `app.ts` | MODIFIÉ | Suppression import inutilisé |
| `package.json` | MODIFIÉ | Ajout dépendance firebase |

---

## ✅ Checklist finale

- [ ] Créer un projet Firebase
- [ ] Ajouter une application Web au projet
- [ ] Activer Authentication → Email/Password
- [ ] Copier les clés dans `firebase.config.ts`
- [ ] Tester l'inscription
- [ ] Tester la connexion
- [ ] Vérifier dans Firebase Console que les utilisateurs sont créés

---

*Documentation créée le 26 décembre 2024 pour le projet EmiShop2*
