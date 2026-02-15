# 🍃 Spring Boot Exam Prep

Application web **100% offline** pour préparer l'examen Spring Boot (JPA + REST Controllers + Services).

## 🚀 Démarrage Rapide

1. **Ouvrir le site**: Double-cliquez sur `index.html` ou ouvrez-le dans votre navigateur
2. **Naviguer**: Utilisez le menu latéral pour accéder aux différentes sections
3. **Pratiquer**: Complétez les exercices, révélez les solutions, apprenez des pièges

**Aucun serveur requis** — tout fonctionne en local!

---

## 📂 Structure du Projet

```
spring-exam-prep/
├── index.html          # Page principale
├── styles.css          # Thème sombre + mode impression
├── app.js              # Logique interactive
├── data/
│   └── exercises.json  # Banque de 25 exercices
└── README.md           # Ce fichier
```

---

## 📚 Sections Disponibles

| Section | Description |
|---------|-------------|
| **Cours de Base** | 43 réflexes "Si tu vois X → pense Y" extraits du PDF |
| **Topics & Traps** | Liste des 16 pièges fréquents avec explications |
| **Exercices** | 25 exercices code-à-compléter avec hints et solutions |
| **Mock Exams** | 2 examens blancs complets avec barème |
| **Cheatsheet** | Référence rapide des annotations |
| **Révision Rapide** | Top 5 pièges + 10 exercices express |

---

## ⌨️ Raccourcis Clavier

| Touche | Action |
|--------|--------|
| `H` | Afficher/Masquer les indices |
| `S` | Afficher/Masquer la solution |
| `N` | Exercice suivant |
| `R` | Piège aléatoire |
| `←` `→` | Naviguer entre exercices |

---

## 🖨️ Mode Impression

Pour imprimer une section:
1. Appuyez sur `Ctrl+P` (ou `Cmd+P` sur Mac)
2. Le CSS s'adapte automatiquement pour l'impression
3. La navigation est masquée, seul le contenu est imprimé

---

## ➕ Ajouter des Exercices

Éditez `data/exercises.json` et ajoutez un nouvel objet dans le tableau `exercises`:

```json
{
  "id": "mon-exercice-01",
  "domain": "training",
  "topic": "entity-annotation",
  "difficulty": "Easy",
  "examWeight": "High",
  "statement": "Description de l'exercice...",
  "starterCode": "/* TODO */\\npublic class...",
  "solutionCode": "@Entity\\npublic class...",
  "explanation": "Explication de la solution...",
  "hints": ["Indice 1", "Indice 2"],
  "traps": [
    {
      "wrongAnswer": "Erreur courante",
      "whyWrong": "Pourquoi c'est faux",
      "correctReflex": "Réflexe correct"
    }
  ],
  "sourceRefs": [{"file": "...", "lines": "...", "note": "..."}]
}
```

### Valeurs possibles:

| Champ | Valeurs |
|-------|---------|
| `domain` | `training`, `aeroport`, `dossier-medical`, `gestion-notes`, `mediatheque`, `scrutin` |
| `topic` | `entity-annotation`, `relation`, `composite-key`, `inheritance`, `service`, `controller` |
| `difficulty` | `Easy`, `Medium`, `Hard` |
| `examWeight` | `High`, `Medium`, `Low` |

---

## 📋 Contenu des Exercices

### Par Topic:
- **Entity Annotations** (4): @Entity, @Id, @GeneratedValue
- **Relations** (8): @ManyToOne, @OneToMany, @OneToOne, @ManyToMany
- **Composite Keys** (2): @Embeddable, @EmbeddedId
- **Inheritance** (2): @Inheritance(JOINED)
- **Repository** (2): JpaRepository, custom queries
- **Service** (4): @Service, @Autowired, CRUD logic
- **Controller** (6): @RestController, @GetMapping, @PostMapping, etc.

### Par Domaine:
- `training` — Domaine synthétique User/Training/Reservation
- `aeroport` — Vol, Reservation, Escale, Passager
- `dossier-medical` — Patient, DossierMedical
- `gestion-notes` — Professeur, Matiere, Note
- `mediatheque` — Document, Livre, FicheEmprunt

---

## 📝 Examens Blancs

### Examen #1: Gestion de Formations (20 pts)
- Partie 1: Entités JPA (8 pts) — User, Training, Reservation
- Partie 2: Repository + Service (6 pts)
- Partie 3: Controller REST (6 pts)

### Examen #2: Bibliothèque (20 pts)
- Partie 1: Entités avec Héritage (10 pts) — Document, Livre, DVD
- Partie 2: Service avec Logique (5 pts)
- Partie 3: Controller (5 pts)

---

## 🔧 Résolution de Problèmes

### Les exercices ne chargent pas
- Vérifiez que `data/exercises.json` existe
- Ouvrez la console du navigateur (F12) pour voir les erreurs
- Si vous êtes sur Chrome, utilisez un serveur local ou Firefox (CORS)

### Le style ne s'affiche pas
- Vérifiez que `styles.css` est dans le même dossier que `index.html`

### Les raccourcis clavier ne fonctionnent pas
- Assurez-vous de ne pas être dans un champ de texte
- Vérifiez que vous êtes dans la bonne section (Exercices)

---

## 📖 Sources

Ce projet est basé sur:
- `cours2024.pdf` — Cours officiel Spring Boot
- 5 projets d'examen: `aeroport`, `dossier-medical`, `gestion-notes`, `mediatheque`, `scrutin`

---

## 🎯 Conseils pour l'Examen

1. **Mémorise les 5 pièges les plus fréquents** (voir Révision Rapide)
2. **Pratique les exercices sans regarder la solution**
3. **Comprends le "pourquoi" derrière chaque annotation**
4. **Fais les 2 examens blancs en conditions réelles** (1h30, pas d'IDE)
5. **Utilise le Cheatsheet pour réviser juste avant l'examen**

---

Bonne chance pour ton examen! 🍀
