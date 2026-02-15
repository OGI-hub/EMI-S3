/* ========================================
   Spring Boot Exam Prep - Application Logic
   ======================================== */

// ========================================
// Embedded Exercise Data (to avoid CORS issues with file://)
// ========================================
const EXERCISES_DATA = [
    {
        "id": "entity-basic-01",
        "domain": "training",
        "topic": "entity-annotation",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Complétez les annotations JPA pour transformer la classe Training en entité persistante avec un ID auto-incrémenté.",
        "starterCode": "/* TODO: annotation entité */\npublic class Training {\n    /* TODO: annotation clé primaire */\n    /* TODO: annotation génération auto */\n    private Long id;\n    private String title;\n    private Integer duration;\n    private Double price;\n\n    public Training() {}\n\n    // getters et setters...\n}",
        "solutionCode": "@Entity\npublic class Training {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String title;\n    private Integer duration;\n    private Double price;\n\n    public Training() {}\n\n    // getters et setters...\n}",
        "explanation": "Toute classe JPA doit avoir @Entity au niveau de la classe, @Id sur le champ clé primaire, et @GeneratedValue pour l'auto-incrémentation.",
        "hints": ["Quelle annotation marque une classe comme entité JPA?", "Comment indiquer que le champ id est la clé primaire?", "GenerationType.IDENTITY est utilisé pour l'auto-incrémentation"],
        "traps": [{ "wrongAnswer": "Oublier @GeneratedValue", "whyWrong": "L'ID ne sera pas auto-généré, causant des erreurs de contrainte", "correctReflex": "Toujours mettre @Id ET @GeneratedValue ensemble" }]
    },
    {
        "id": "entity-basic-02",
        "domain": "aeroport",
        "topic": "entity-annotation",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Complétez les annotations pour l'entité Aeroport. Le code doit être une chaîne non auto-générée.",
        "starterCode": "/* TODO: annotation */\npublic class Aeroport {\n    /* TODO: annotation clé primaire */\n    private String code;\n    private String nom;\n    private String ville;\n\n    public Aeroport() {}\n}",
        "solutionCode": "@Entity\npublic class Aeroport {\n    @Id\n    private String code;\n    private String nom;\n    private String ville;\n\n    public Aeroport() {}\n}",
        "explanation": "Quand l'ID est un String assigné manuellement (comme un code aéroport), on met @Id sans @GeneratedValue.",
        "hints": ["L'ID n'est pas un Long auto-généré ici", "Le code aéroport est fourni, pas généré"],
        "traps": [{ "wrongAnswer": "Ajouter @GeneratedValue sur String", "whyWrong": "@GeneratedValue ne fonctionne pas bien avec les IDs String", "correctReflex": "Pour les IDs String manuels, utiliser seulement @Id" }]
    },
    {
        "id": "relation-manytoone-01",
        "domain": "aeroport",
        "topic": "relation",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Une Reservation appartient à un Client. Complétez l'annotation de relation.",
        "starterCode": "@Entity\npublic class Reservation {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private LocalDate date;\n    \n    /* TODO: annotation relation */\n    private Client client;\n\n    public Reservation() {}\n}",
        "solutionCode": "@Entity\npublic class Reservation {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private LocalDate date;\n    \n    @ManyToOne\n    private Client client;\n\n    public Reservation() {}\n}",
        "explanation": "Plusieurs réservations peuvent appartenir à un seul client → @ManyToOne sur le côté 'Many'.",
        "hints": ["Plusieurs réservations, un client → quel côté de la relation?", "La FK sera dans la table Reservation"],
        "traps": [{ "wrongAnswer": "Mettre @OneToMany", "whyWrong": "@OneToMany irait sur Client, pas Reservation", "correctReflex": "Le côté Many porte @ManyToOne" }]
    },
    {
        "id": "relation-onetomany-01",
        "domain": "aeroport",
        "topic": "relation",
        "difficulty": "Medium",
        "examWeight": "High",
        "statement": "Un Passager peut avoir plusieurs Reservations. Complétez la relation bidirectionnelle côté Passager.",
        "starterCode": "@Entity\npublic class Passager extends Personne {\n    /* TODO: annotation relation inverse */\n    /* TODO: annotation pour éviter boucle JSON */\n    private List<Reservation> reservations;\n\n    public Passager() {}\n}",
        "solutionCode": "@Entity\npublic class Passager extends Personne {\n    @OneToMany(mappedBy = \"passager\")\n    @JsonIgnore\n    private List<Reservation> reservations;\n\n    public Passager() {}\n}",
        "explanation": "Côté inverse (One) utilise @OneToMany avec mappedBy pointant vers le champ dans l'autre entité. @JsonIgnore évite la récursion JSON.",
        "hints": ["mappedBy = nom du champ dans Reservation qui pointe vers Passager", "Sans @JsonIgnore, JSON boucle infiniment"],
        "traps": [{ "wrongAnswer": "Oublier mappedBy", "whyWrong": "Crée une table de jointure inutile", "correctReflex": "Toujours mappedBy sur @OneToMany bidirectionnel" }, { "wrongAnswer": "mappedBy = \"Passager\" (majuscule)", "whyWrong": "C'est le nom du champ Java (camelCase), pas le nom de classe", "correctReflex": "mappedBy = nom exact du champ dans l'autre entité" }]
    },
    {
        "id": "relation-manytoone-joincolumn-01",
        "domain": "dossier-medical",
        "topic": "relation",
        "difficulty": "Medium",
        "examWeight": "Medium",
        "statement": "Complétez la relation entre Reservation et Vol, en spécifiant le nom de la colonne FK.",
        "starterCode": "@Entity\npublic class Reservation {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    /* TODO: annotation relation */\n    /* TODO: annotation nom colonne FK = \"vol\" */\n    private Vol vol;\n}",
        "solutionCode": "@Entity\npublic class Reservation {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    \n    @ManyToOne\n    @JoinColumn(name = \"vol\")\n    private Vol vol;\n}",
        "explanation": "@JoinColumn permet de personnaliser le nom de la colonne FK dans la table.",
        "hints": ["@JoinColumn est optionnel mais permet de contrôler le nom", "name = nom de la colonne dans la base de données"],
        "traps": [{ "wrongAnswer": "Oublier @ManyToOne", "whyWrong": "@JoinColumn seul ne définit pas la relation", "correctReflex": "@ManyToOne + @JoinColumn vont ensemble" }]
    },
    {
        "id": "relation-onetoone-01",
        "domain": "dossier-medical",
        "topic": "relation",
        "difficulty": "Medium",
        "examWeight": "Medium",
        "statement": "Un Patient a un seul DossierMedical. Complétez la relation OneToOne.",
        "starterCode": "@Entity\npublic class Patient {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String nom;\n    \n    /* TODO: annotation relation */\n    /* TODO: annotation colonne FK = \"dossier\", référence = \"numero\" */\n    private DossierMedical dossier;\n}",
        "solutionCode": "@Entity\npublic class Patient {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String nom;\n    \n    @OneToOne\n    @JoinColumn(name = \"dossier\", referencedColumnName = \"numero\")\n    private DossierMedical dossier;\n}",
        "explanation": "@OneToOne pour relation 1-1. referencedColumnName spécifie quelle colonne de l'autre table est référencée (utile si PK a un nom différent).",
        "hints": ["referencedColumnName pointe vers la PK de DossierMedical", "La PK de DossierMedical s'appelle 'numero'"],
        "traps": [{ "wrongAnswer": "Confondre name et referencedColumnName", "whyWrong": "name = colonne locale, referencedColumnName = colonne distante", "correctReflex": "name = ma colonne FK, referencedColumnName = leur PK" }]
    },
    {
        "id": "relation-manytomany-01",
        "domain": "gestion-notes",
        "topic": "relation",
        "difficulty": "Hard",
        "examWeight": "Medium",
        "statement": "Plusieurs Professeurs enseignent plusieurs Matieres. Complétez le côté propriétaire (Matiere).",
        "starterCode": "@Entity\npublic class Matiere {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String nom;\n    \n    /* TODO: annotation ManyToMany */\n    /* TODO: annotation table jointure \"prof_matiere\" */\n    /* TODO: joinColumns = colonne locale \"matiere_id\" */\n    /* TODO: inverseJoinColumns = colonne distante \"prof_id\" */\n    private Set<Professeur> professeurs = new HashSet<>();\n}",
        "solutionCode": "@Entity\npublic class Matiere {\n    @Id\n    @GeneratedValue(strategy = GenerationType.IDENTITY)\n    private Long id;\n    private String nom;\n    \n    @ManyToMany\n    @JoinTable(name = \"prof_matiere\",\n        joinColumns = @JoinColumn(name = \"matiere_id\"),\n        inverseJoinColumns = @JoinColumn(name = \"prof_id\"))\n    private Set<Professeur> professeurs = new HashSet<>();\n}",
        "explanation": "Le côté propriétaire d'un ManyToMany définit @JoinTable. joinColumns = FK vers cette entité, inverseJoinColumns = FK vers l'autre.",
        "hints": ["joinColumns pointe vers l'entité actuelle (Matiere)", "inverseJoinColumns pointe vers l'autre (Professeur)"],
        "traps": [{ "wrongAnswer": "Inverser joinColumns et inverseJoinColumns", "whyWrong": "Les FKs seront dans le mauvais sens", "correctReflex": "join = moi, inverse = l'autre" }]
    },
    {
        "id": "relation-manytomany-inverse-01",
        "domain": "gestion-notes",
        "topic": "relation",
        "difficulty": "Medium",
        "examWeight": "Medium",
        "statement": "Complétez le côté inverse de la relation ManyToMany dans Professeur.",
        "starterCode": "@Entity\npublic class Professeur extends Personne {\n    private String grade;\n    \n    /* TODO: annotation ManyToMany inverse */\n    private Set<Matiere> matieres = new HashSet<>();\n}",
        "solutionCode": "@Entity\npublic class Professeur extends Personne {\n    private String grade;\n    \n    @ManyToMany(mappedBy = \"professeurs\")\n    private Set<Matiere> matieres = new HashSet<>();\n}",
        "explanation": "Le côté inverse utilise mappedBy pointant vers le nom du champ dans l'entité propriétaire.",
        "hints": ["mappedBy = nom du champ Set<Professeur> dans Matiere", "Pas de @JoinTable sur le côté inverse"],
        "traps": [{ "wrongAnswer": "Mettre @JoinTable des deux côtés", "whyWrong": "Crée deux tables de jointure!", "correctReflex": "@JoinTable sur un seul côté, mappedBy sur l'autre" }]
    },
    {
        "id": "composite-key-01",
        "domain": "aeroport",
        "topic": "composite-key",
        "difficulty": "Hard",
        "examWeight": "Medium",
        "statement": "Créez la classe de clé composite PK pour Escale (Vol + Aeroport).",
        "starterCode": "/* TODO: annotation classe imbriquable */\npublic class PK {\n    /* TODO: annotation relation */\n    private Aeroport aeroport;\n    /* TODO: annotation relation */\n    private Vol vol;\n\n    public PK() {}\n    public PK(Aeroport aeroport, Vol vol) {\n        this.aeroport = aeroport;\n        this.vol = vol;\n    }\n}",
        "solutionCode": "@Embeddable\npublic class PK {\n    @ManyToOne\n    private Aeroport aeroport;\n    @ManyToOne\n    private Vol vol;\n\n    public PK() {}\n    public PK(Aeroport aeroport, Vol vol) {\n        this.aeroport = aeroport;\n        this.vol = vol;\n    }\n}",
        "explanation": "@Embeddable marque une classe comme clé composite. Les champs peuvent être des relations @ManyToOne.",
        "hints": ["Une clé composite est 'imbriquable' dans l'entité", "Les relations dans la PK utilisent aussi @ManyToOne"],
        "traps": [{ "wrongAnswer": "Utiliser @Entity au lieu de @Embeddable", "whyWrong": "@Embeddable n'est pas une entité indépendante", "correctReflex": "PK composite = @Embeddable, pas @Entity" }]
    },
    {
        "id": "composite-key-02",
        "domain": "aeroport",
        "topic": "composite-key",
        "difficulty": "Medium",
        "examWeight": "Medium",
        "statement": "Utilisez la clé composite PK dans l'entité Escale.",
        "starterCode": "@Entity\npublic class Escale {\n    /* TODO: annotation pour clé composite */\n    private PK id;\n    private LocalTime heureDepart;\n    private LocalTime heureArrivee;\n\n    public Escale() {}\n}",
        "solutionCode": "@Entity\npublic class Escale {\n    @EmbeddedId\n    private PK id;\n    private LocalTime heureDepart;\n    private LocalTime heureArrivee;\n\n    public Escale() {}\n}",
        "explanation": "@EmbeddedId indique que l'ID est une clé composite définie dans une classe @Embeddable.",
        "hints": ["La PK est 'embedded' (imbriquée) dans l'entité", "Pas de @Id simple quand on utilise @EmbeddedId"],
        "traps": [{ "wrongAnswer": "Mettre @Id sur un champ de type PK", "whyWrong": "@Id est pour les types simples, @EmbeddedId pour les composites", "correctReflex": "Clé composite → @EmbeddedId" }]
    },
    {
        "id": "inheritance-01",
        "domain": "mediatheque",
        "topic": "inheritance",
        "difficulty": "Medium",
        "examWeight": "Medium",
        "statement": "Document est une classe abstraite parente de Livre, Audio, Video. Configurez l'héritage JOINED.",
        "starterCode": "@Entity\n/* TODO: annotation stratégie héritage JOINED */\npublic abstract class Document {\n    @Id\n    private String code;\n    private String titre;\n    private String auteur;\n\n    public abstract Double getTarif();\n}",
        "solutionCode": "@Entity\n@Inheritance(strategy = InheritanceType.JOINED)\npublic abstract class Document {\n    @Id\n    private String code;\n    private String titre;\n    private String auteur;\n\n    public abstract Double getTarif();\n}",
        "explanation": "JOINED = chaque classe a sa propre table, liées par FK. La table parent contient les champs communs.",
        "hints": ["InheritanceType.JOINED = tables séparées jointes par FK", "L'annotation va sur la classe parent"],
        "traps": [{ "wrongAnswer": "Mettre @Inheritance sur les sous-classes", "whyWrong": "@Inheritance se met sur la classe parent uniquement", "correctReflex": "Parent: @Inheritance, Enfants: juste extends" }]
    },
    {
        "id": "inheritance-child-01",
        "domain": "mediatheque",
        "topic": "inheritance",
        "difficulty": "Easy",
        "examWeight": "Medium",
        "statement": "Livre hérite de Document. Que faut-il mettre comme annotations?",
        "starterCode": "/* TODO: annotation entité */\npublic class Livre extends Document {\n    private Integer nombrePage;\n\n    @Override\n    public Double getTarif() {\n        return 0.5;\n    }\n}",
        "solutionCode": "@Entity\npublic class Livre extends Document {\n    private Integer nombrePage;\n\n    @Override\n    public Double getTarif() {\n        return 0.5;\n    }\n}",
        "explanation": "Les sous-classes d'une entité héritent de la stratégie d'héritage du parent. Elles ont juste besoin de @Entity.",
        "hints": ["La stratégie est déjà définie sur Document", "Juste @Entity suffit pour la sous-classe"],
        "traps": [{ "wrongAnswer": "Répéter @Inheritance sur Livre", "whyWrong": "La stratégie est héritée du parent", "correctReflex": "@Inheritance seulement sur la racine de l'héritage" }]
    },
    {
        "id": "enum-01",
        "domain": "gestion-notes",
        "topic": "entity-annotation",
        "difficulty": "Easy",
        "examWeight": "Low",
        "statement": "Professeur a un champ 'grade' de type enum GradeType. Configurez-le pour stocker le nom de l'enum.",
        "starterCode": "@Entity\npublic class Professeur extends Personne {\n    /* TODO: annotation pour stocker en STRING */\n    private GradeType grade;\n}",
        "solutionCode": "@Entity\npublic class Professeur extends Personne {\n    @Enumerated(EnumType.STRING)\n    private GradeType grade;\n}",
        "explanation": "@Enumerated(EnumType.STRING) stocke le nom de l'enum ('PA', 'PH') au lieu de l'ordinal (0, 1).",
        "hints": ["Sans annotation, les enums sont stockés comme nombres (ordinal)", "STRING est plus lisible et robuste aux changements d'ordre"],
        "traps": [{ "wrongAnswer": "Oublier @Enumerated", "whyWrong": "L'enum sera stocké comme 0, 1, 2... fragile si l'ordre change", "correctReflex": "Toujours @Enumerated(EnumType.STRING) pour les enums" }]
    },
    {
        "id": "transient-01",
        "domain": "mediatheque",
        "topic": "entity-annotation",
        "difficulty": "Easy",
        "examWeight": "Low",
        "statement": "Le champ 'depasse' est calculé dynamiquement, il ne doit pas être persisté. Quelle annotation?",
        "starterCode": "@Entity\npublic class FicheEmprunt {\n    @EmbeddedId\n    private PK id;\n    private LocalDate dateLimite;\n    \n    /* TODO: annotation champ non persisté */\n    private Boolean depasse;\n\n    public Boolean isDepasse() {\n        return LocalDate.now().isAfter(this.dateLimite);\n    }\n}",
        "solutionCode": "@Entity\npublic class FicheEmprunt {\n    @EmbeddedId\n    private PK id;\n    private LocalDate dateLimite;\n    \n    @Transient\n    private Boolean depasse;\n\n    public Boolean isDepasse() {\n        return LocalDate.now().isAfter(this.dateLimite);\n    }\n}",
        "explanation": "@Transient indique que le champ ne doit pas être persisté en base de données.",
        "hints": ["Le champ est calculé, pas stocké", "Transitoire = temporaire, pas persisté"],
        "traps": [{ "wrongAnswer": "Utiliser le mot-clé Java 'transient'", "whyWrong": "Le mot-clé Java fonctionne mais @Transient JPA est plus explicite", "correctReflex": "Utiliser @Transient (jakarta.persistence) pour JPA" }]
    },
    {
        "id": "repository-01",
        "domain": "training",
        "topic": "service",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Créez le repository pour l'entité Training avec un ID Long.",
        "starterCode": "/* TODO: annotation ou interface à étendre? */\npublic interface TrainingRepo {\n\n}",
        "solutionCode": "public interface TrainingRepo extends JpaRepository<Training, Long> {\n\n}",
        "explanation": "Un repository JPA étend JpaRepository<Entity, IdType> pour obtenir les méthodes CRUD.",
        "hints": ["JpaRepository fournit findAll(), findById(), save(), deleteById()...", "Premier paramètre = entité, second = type de l'ID"],
        "traps": [{ "wrongAnswer": "Mettre @Repository", "whyWrong": "@Repository est optionnel avec Spring Data JPA", "correctReflex": "Juste extends JpaRepository suffit" }]
    },
    {
        "id": "repository-custom-01",
        "domain": "aeroport",
        "topic": "service",
        "difficulty": "Medium",
        "examWeight": "Low",
        "statement": "Ajoutez une méthode pour trouver les vols par compagnie.",
        "starterCode": "public interface VolRepo extends JpaRepository<Vol, Long> {\n    /* TODO: méthode personnalisée */\n}",
        "solutionCode": "public interface VolRepo extends JpaRepository<Vol, Long> {\n    List<Vol> findByCompagnie(Compagnie compagnie);\n}",
        "explanation": "Spring Data génère la requête à partir du nom de méthode: findBy + nom du champ.",
        "hints": ["Le champ s'appelle 'compagnie' dans Vol", "Spring génère: SELECT * FROM vol WHERE compagnie_id = ?"],
        "traps": [{ "wrongAnswer": "findByCompagnieId au lieu de findByCompagnie", "whyWrong": "Les deux fonctionnent, mais findByCompagnie est plus naturel avec l'objet", "correctReflex": "Utiliser le nom exact du champ Java" }]
    },
    {
        "id": "service-getbyid-01",
        "domain": "training",
        "topic": "service",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Complétez la méthode getById dans le service.",
        "starterCode": "@Service\npublic class TrainingService {\n    @Autowired\n    private TrainingRepo trainingRepo;\n\n    public Training getById(Long id) {\n        /* TODO: appel repository + gestion null */\n    }\n}",
        "solutionCode": "@Service\npublic class TrainingService {\n    @Autowired\n    private TrainingRepo trainingRepo;\n\n    public Training getById(Long id) {\n        return trainingRepo.findById(id).orElse(null);\n    }\n}",
        "explanation": "findById retourne un Optional. orElse(null) retourne l'entité ou null si non trouvée.",
        "hints": ["findById retourne Optional<Training>", "orElse(null) décompresse l'Optional"],
        "traps": [{ "wrongAnswer": "trainingRepo.findById(id) sans .orElse()", "whyWrong": "Retourne Optional, pas Training. Erreur de compilation!", "correctReflex": "Toujours .orElse(null) ou .orElseThrow() après findById" }]
    },
    {
        "id": "service-save-01",
        "domain": "dossier-medical",
        "topic": "service",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Complétez la méthode pour sauvegarder un patient.",
        "starterCode": "@Service\npublic class PatientService {\n    @Autowired\n    private PatientRepo patientRepo;\n\n    public Patient savePatient(Patient patient) {\n        /* TODO: appel repository */\n    }\n}",
        "solutionCode": "@Service\npublic class PatientService {\n    @Autowired\n    private PatientRepo patientRepo;\n\n    public Patient savePatient(Patient patient) {\n        return patientRepo.save(patient);\n    }\n}",
        "explanation": "save() persiste une nouvelle entité ou met à jour une existante. Retourne l'entité avec l'ID généré.",
        "hints": ["save() fonctionne pour create ET update", "Retourner l'entité permet de récupérer l'ID généré"],
        "traps": [{ "wrongAnswer": "Ne pas retourner le résultat", "whyWrong": "Le client ne récupère pas l'ID auto-généré", "correctReflex": "Toujours return repo.save(entity)" }]
    },
    {
        "id": "service-delete-01",
        "domain": "dossier-medical",
        "topic": "service",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Complétez la méthode pour supprimer un patient par ID.",
        "starterCode": "@Service\npublic class PatientService {\n    @Autowired\n    private PatientRepo patientRepo;\n\n    public void deleteById(Long id) {\n        /* TODO: appel repository */\n    }\n}",
        "solutionCode": "@Service\npublic class PatientService {\n    @Autowired\n    private PatientRepo patientRepo;\n\n    public void deleteById(Long id) {\n        patientRepo.deleteById(id);\n    }\n}",
        "explanation": "deleteById supprime l'entité correspondant à l'ID. Ne retourne rien (void).",
        "hints": ["La méthode est void, pas besoin de return", "deleteById ne lance pas d'exception si l'ID n'existe pas"],
        "traps": [{ "wrongAnswer": "Écrire delete(id) au lieu de deleteById(id)", "whyWrong": "delete() prend une entité, pas un ID", "correctReflex": "deleteById(id) pour supprimer par ID" }]
    },
    {
        "id": "service-link-01",
        "domain": "dossier-medical",
        "topic": "service",
        "difficulty": "Medium",
        "examWeight": "Medium",
        "statement": "Créez un Patient et liez-le à un DossierMedical existant.",
        "starterCode": "@Service\npublic class PatientService {\n    @Autowired\n    private PatientRepo patientRepo;\n    @Autowired\n    private DossierMedicalService dossierService;\n\n    public Patient createWithDossier(Patient patient, Long dossierId) {\n        /* TODO: récupérer dossier, vérifier null, lier, sauvegarder */\n    }\n}",
        "solutionCode": "@Service\npublic class PatientService {\n    @Autowired\n    private PatientRepo patientRepo;\n    @Autowired\n    private DossierMedicalService dossierService;\n\n    public Patient createWithDossier(Patient patient, Long dossierId) {\n        DossierMedical dossier = dossierService.getDossierById(dossierId);\n        if (dossier == null) {\n            return null;\n        }\n        patient.setDossier(dossier);\n        return patientRepo.save(patient);\n    }\n}",
        "explanation": "Pour lier des entités: 1) Récupérer l'entité liée, 2) Vérifier non null, 3) Setter la relation, 4) Sauvegarder.",
        "hints": ["D'abord récupérer le dossier existant", "Vérifier null avant d'utiliser", "Setter la relation avant save"],
        "traps": [{ "wrongAnswer": "Sauvegarder sans setter la relation", "whyWrong": "La FK sera null en base", "correctReflex": "Toujours setter la relation AVANT save()" }]
    },
    {
        "id": "controller-getall-01",
        "domain": "training",
        "topic": "controller",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Créez un endpoint GET pour récupérer toutes les formations.",
        "starterCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    /* TODO: annotation mapping GET */\n    public List<Training> getAll() {\n        return trainingService.getAll();\n    }\n}",
        "solutionCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    @GetMapping(\"\")\n    public List<Training> getAll() {\n        return trainingService.getAll();\n    }\n}",
        "explanation": "@GetMapping(\"\") sur /training = GET /training retourne toutes les formations.",
        "hints": ["@GetMapping pour les requêtes GET", "Chemin vide = même URL que le @RequestMapping de base"],
        "traps": [{ "wrongAnswer": "@GetMapping sans paramètre", "whyWrong": "Fonctionne, mais @GetMapping(\"\") est plus explicite", "correctReflex": "@GetMapping(\"\") ou @GetMapping pour la racine" }]
    },
    {
        "id": "controller-getbyid-01",
        "domain": "training",
        "topic": "controller",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Créez un endpoint GET pour récupérer une formation par ID.",
        "starterCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    /* TODO: annotation mapping GET avec path variable */\n    public Training getById(/* TODO: annotation pour extraire id */ Long id) {\n        return trainingService.getById(id);\n    }\n}",
        "solutionCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    @GetMapping(\"/{id}\")\n    public Training getById(@PathVariable Long id) {\n        return trainingService.getById(id);\n    }\n}",
        "explanation": "@GetMapping(\"/{id}\") définit une variable de chemin. @PathVariable l'extrait.",
        "hints": ["{id} dans le path = variable", "@PathVariable lie le paramètre à la variable du path"],
        "traps": [{ "wrongAnswer": "Oublier @PathVariable", "whyWrong": "Le paramètre id sera null", "correctReflex": "Path variable = {x} dans path + @PathVariable x" }]
    },
    {
        "id": "controller-post-01",
        "domain": "training",
        "topic": "controller",
        "difficulty": "Easy",
        "examWeight": "High",
        "statement": "Créez un endpoint POST pour ajouter une formation.",
        "starterCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    /* TODO: annotation mapping POST */\n    public Training create(/* TODO: annotation pour corps JSON */ Training training) {\n        return trainingService.save(training);\n    }\n}",
        "solutionCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    @PostMapping(\"/add\")\n    public Training create(@RequestBody Training training) {\n        return trainingService.save(training);\n    }\n}",
        "explanation": "@PostMapping pour créer. @RequestBody désérialise le JSON du corps de la requête en objet Java.",
        "hints": ["POST = création de ressource", "@RequestBody convertit JSON → Java"],
        "traps": [{ "wrongAnswer": "Oublier @RequestBody", "whyWrong": "L'objet training sera vide/null", "correctReflex": "Toujours @RequestBody pour les données JSON entrantes" }]
    },
    {
        "id": "controller-put-01",
        "domain": "training",
        "topic": "controller",
        "difficulty": "Medium",
        "examWeight": "High",
        "statement": "Créez un endpoint PUT pour modifier une formation.",
        "starterCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    /* TODO: annotation mapping PUT */\n    public Training update(\n            /* TODO: annotation path variable */ Long id,\n            /* TODO: annotation corps JSON */ Training training) {\n        return trainingService.update(id, training);\n    }\n}",
        "solutionCode": "@RestController\n@RequestMapping(\"/training\")\npublic class TrainingController {\n    @Autowired\n    private TrainingService trainingService;\n\n    @PutMapping(\"/update/{id}\")\n    public Training update(\n            @PathVariable Long id,\n            @RequestBody Training training) {\n        return trainingService.update(id, training);\n    }\n}",
        "explanation": "PUT combine @PathVariable pour l'ID et @RequestBody pour les nouvelles données.",
        "hints": ["PUT = mise à jour complète", "On a besoin de l'ID (path) ET des données (body)"],
        "traps": [{ "wrongAnswer": "Utiliser @RequestParam au lieu de @PathVariable", "whyWrong": "@RequestParam = ?id=1, @PathVariable = /update/1", "correctReflex": "RESTful = ID dans le path, donc @PathVariable" }]
    }
];

// ========================================
// State Management
// ========================================
const state = {
    exercises: [],
    filteredExercises: [],
    currentExerciseIndex: 0,
    hintsShown: false,
    solutionShown: false,
    currentSection: 'cours',
    traps: [
        { name: "Oublier @Entity", why: "La classe ne sera pas mappée en base", reflex: "Toujours @Entity sur la classe", weight: "High" },
        { name: "@Id sans @GeneratedValue", why: "L'ID ne sera pas auto-incrémenté", reflex: "Mettre les deux annotations ensemble", weight: "High" },
        { name: "Mauvais mappedBy", why: "La relation sera cassée, FK au mauvais endroit", reflex: "mappedBy = nom du champ dans l'AUTRE classe", weight: "High" },
        { name: "@OneToMany sans mappedBy", why: "Crée une table de jointure non voulue", reflex: "Ajouter mappedBy pointant vers le côté owning", weight: "High" },
        { name: "Oublier @JsonIgnore sur inverse", why: "Boucle infinie JSON", reflex: "Ajouter @JsonIgnore sur @OneToMany", weight: "Medium" },
        { name: "Utiliser javax.persistence", why: "Mauvais package pour Spring Boot 3.x", reflex: "Utiliser jakarta.persistence", weight: "Medium" },
        { name: "Oublier @RequestBody", why: "Le body JSON ne sera pas désérialisé", reflex: "Toujours @RequestBody sur POST/PUT", weight: "High" },
        { name: "Oublier @PathVariable", why: "La variable de chemin ne sera pas extraite", reflex: "Ajouter @PathVariable sur le paramètre", weight: "High" },
        { name: "Confondre Path et Query params", why: "Mauvaise source du paramètre", reflex: "Path: /{id}, Query: ?id=1", weight: "Medium" },
        { name: "findById() sans .orElse()", why: "Retourne Optional, pas Entity", reflex: "Utiliser .orElse(null) ou .orElseThrow()", weight: "Medium" },
        { name: "Oublier @Autowired", why: "NullPointerException au runtime", reflex: "Ajouter @Autowired sur le champ repo", weight: "High" },
        { name: "Oublier constructeur par défaut", why: "JPA ne peut pas instancier l'entité", reflex: "Ajouter public Entity() {}", weight: "Medium" },
        { name: "@ManyToMany sans @JoinTable", why: "Pas de table de jointure définie correctement", reflex: "Ajouter @JoinTable sur le côté propriétaire", weight: "Medium" },
        { name: "Entité abstraite sans @Inheritance", why: "Les sous-types ne seront pas mappés correctement", reflex: "Ajouter @Inheritance(strategy=...) sur le parent", weight: "Medium" },
        { name: "Oublier @Enumerated", why: "L'enum sera stocké comme ordinal (0, 1, 2...)", reflex: "Ajouter @Enumerated(EnumType.STRING)", weight: "Low" },
        { name: "Mauvais type ID dans JpaRepository", why: "Erreur de compilation", reflex: "Le type doit correspondre au @Id de l'entité", weight: "Medium" }
    ]
};

// ========================================
// Initialization
// ========================================
document.addEventListener('DOMContentLoaded', async () => {
    await loadExercises();
    setupNavigation();
    setupFilters();
    setupExerciseControls();
    setupKeyboardShortcuts();
    setupTrapSection();
    setupRapidMode();
    setupMockExams();

    // Show first section
    showSection('cours');
});

// ========================================
// Load Exercises (using embedded data to avoid CORS)
// ========================================
function loadExercises() {
    state.exercises = EXERCISES_DATA;
    state.filteredExercises = [...state.exercises];
    renderExercise();
}

// ========================================
// Navigation
// ========================================
function setupNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const section = link.dataset.section;
            showSection(section);

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });
}

function showSection(sectionId) {
    state.currentSection = sectionId;

    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });

    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
}

// ========================================
// Filters
// ========================================
function setupFilters() {
    const domainFilter = document.getElementById('domain-filter');
    const difficultyFilter = document.getElementById('difficulty-filter');
    const topicFilter = document.getElementById('topic-filter');
    const weightFilter = document.getElementById('weight-filter');

    [domainFilter, difficultyFilter, topicFilter].forEach(filter => {
        if (filter) {
            filter.addEventListener('change', applyFilters);
        }
    });

    if (weightFilter) {
        weightFilter.addEventListener('change', filterTraps);
    }
}

function applyFilters() {
    const domain = document.getElementById('domain-filter').value;
    const difficulty = document.getElementById('difficulty-filter').value;
    const topic = document.getElementById('topic-filter').value;

    state.filteredExercises = state.exercises.filter(ex => {
        const matchDomain = domain === 'all' || ex.domain === domain;
        const matchDifficulty = difficulty === 'all' || ex.difficulty === difficulty;
        const matchTopic = topic === 'all' || ex.topic === topic;
        return matchDomain && matchDifficulty && matchTopic;
    });

    state.currentExerciseIndex = 0;
    renderExercise();
}

function filterTraps() {
    const weight = document.getElementById('weight-filter').value;
    renderTraps(weight);
}

// ========================================
// Exercise Rendering
// ========================================
function renderExercise() {
    if (state.filteredExercises.length === 0) {
        document.getElementById('exercise-statement').textContent =
            'Aucun exercice ne correspond aux filtres sélectionnés.';
        document.getElementById('starter-code').textContent = '';
        return;
    }

    const exercise = state.filteredExercises[state.currentExerciseIndex];

    // Reset state
    state.hintsShown = false;
    state.solutionShown = false;
    document.getElementById('hints-container').style.display = 'none';
    document.getElementById('solution-container').style.display = 'none';

    // Render badges
    document.getElementById('exercise-domain').textContent = exercise.domain;
    document.getElementById('exercise-difficulty').textContent = exercise.difficulty;
    document.getElementById('exercise-weight').textContent = exercise.examWeight;
    document.getElementById('exercise-counter').textContent =
        `${state.currentExerciseIndex + 1} / ${state.filteredExercises.length}`;

    // Render content
    document.getElementById('exercise-statement').textContent = exercise.statement;
    document.getElementById('starter-code').textContent = exercise.starterCode;
    document.getElementById('solution-code').textContent = exercise.solutionCode;
    document.getElementById('explanation-text').textContent = exercise.explanation;

    // Render hints
    const hintsList = document.getElementById('hints-list');
    hintsList.innerHTML = '';
    exercise.hints.forEach(hint => {
        const li = document.createElement('li');
        li.textContent = hint;
        hintsList.appendChild(li);
    });

    // Render traps
    const trapsList = document.getElementById('exercise-traps-list');
    trapsList.innerHTML = '';
    exercise.traps.forEach(trap => {
        const li = document.createElement('li');
        li.innerHTML = `
            <strong>${trap.wrongAnswer}</strong><br>
            <span style="color: var(--accent-red);">❌ ${trap.whyWrong}</span><br>
            <span style="color: var(--accent-green);">✅ ${trap.correctReflex}</span>
        `;
        trapsList.appendChild(li);
    });
}

// ========================================
// Exercise Controls
// ========================================
function setupExerciseControls() {
    const hintBtn = document.getElementById('hint-btn');
    const solutionBtn = document.getElementById('solution-btn');
    const nextBtn = document.getElementById('next-btn');

    if (hintBtn) {
        hintBtn.addEventListener('click', showHint);
    }

    if (solutionBtn) {
        solutionBtn.addEventListener('click', showSolution);
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', nextExercise);
    }
}

function showHint() {
    if (state.filteredExercises.length === 0) return;
    const container = document.getElementById('hints-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
    state.hintsShown = true;
}

function showSolution() {
    if (state.filteredExercises.length === 0) return;
    const container = document.getElementById('solution-container');
    container.style.display = container.style.display === 'none' ? 'block' : 'none';
    state.solutionShown = true;
}

function nextExercise() {
    if (state.filteredExercises.length === 0) return;
    state.currentExerciseIndex = (state.currentExerciseIndex + 1) % state.filteredExercises.length;
    renderExercise();
}

function previousExercise() {
    if (state.filteredExercises.length === 0) return;
    state.currentExerciseIndex = state.currentExerciseIndex === 0
        ? state.filteredExercises.length - 1
        : state.currentExerciseIndex - 1;
    renderExercise();
}

// ========================================
// Keyboard Shortcuts
// ========================================
function setupKeyboardShortcuts() {
    document.addEventListener('keydown', (e) => {
        // Ignore if typing in an input
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        switch (e.key.toLowerCase()) {
            case 'h':
                if (state.currentSection === 'exercises' || state.currentSection === 'rapid') {
                    showHint();
                }
                break;
            case 's':
                if (state.currentSection === 'exercises' || state.currentSection === 'rapid') {
                    showSolution();
                }
                break;
            case 'n':
                if (state.currentSection === 'exercises' || state.currentSection === 'rapid') {
                    nextExercise();
                }
                break;
            case 'r':
                showRandomTrap();
                break;
            case 'arrowleft':
                if (state.currentSection === 'exercises') {
                    previousExercise();
                }
                break;
            case 'arrowright':
                if (state.currentSection === 'exercises') {
                    nextExercise();
                }
                break;
        }
    });
}

// ========================================
// Traps Section
// ========================================
function setupTrapSection() {
    renderTraps('all');

    const randomTrapBtn = document.getElementById('random-trap-btn');
    if (randomTrapBtn) {
        randomTrapBtn.addEventListener('click', showRandomTrap);
    }
}

function renderTraps(weightFilter) {
    const trapList = document.getElementById('trap-list');
    if (!trapList) return;

    trapList.innerHTML = '';

    const filteredTraps = weightFilter === 'all'
        ? state.traps
        : state.traps.filter(t => t.weight === weightFilter);

    filteredTraps.forEach(trap => {
        const div = document.createElement('div');
        div.className = 'trap-item';
        div.innerHTML = `
            <span class="trap-name">❌ ${trap.name}</span>
            <span class="trap-desc">${trap.reflex}</span>
        `;
        trapList.appendChild(div);
    });
}

function showRandomTrap() {
    const display = document.getElementById('random-trap-display');
    if (!display) return;

    const randomIndex = Math.floor(Math.random() * state.traps.length);
    const trap = state.traps[randomIndex];

    document.getElementById('trap-text').textContent = trap.name;
    document.getElementById('trap-why').textContent = trap.why;
    document.getElementById('trap-reflex').textContent = trap.reflex;

    display.style.display = 'block';

    // Scroll to it if in topics section
    if (state.currentSection === 'topics') {
        display.scrollIntoView({ behavior: 'smooth' });
    }
}

// ========================================
// Rapid Revision Mode
// ========================================
function setupRapidMode() {
    const rapidList = document.getElementById('rapid-exercise-list');
    if (!rapidList) return;

    // Get 10 easiest exercises
    const easyExercises = state.exercises
        .filter(e => e.difficulty === 'Easy')
        .slice(0, 10);

    rapidList.innerHTML = '';

    easyExercises.forEach((ex, index) => {
        const div = document.createElement('div');
        div.className = 'rapid-exercise-item';
        div.innerHTML = `
            <span>${index + 1}. ${ex.topic}</span>
            <span style="color: var(--accent-purple);">${ex.domain}</span>
        `;
        div.addEventListener('click', () => {
            goToExercise(ex.id);
        });
        rapidList.appendChild(div);
    });
}

function goToExercise(exerciseId) {
    // Reset filters
    document.getElementById('domain-filter').value = 'all';
    document.getElementById('difficulty-filter').value = 'all';
    document.getElementById('topic-filter').value = 'all';

    state.filteredExercises = [...state.exercises];

    // Find index
    const index = state.filteredExercises.findIndex(ex => ex.id === exerciseId);
    if (index !== -1) {
        state.currentExerciseIndex = index;
        renderExercise();
        showSection('exercises');

        // Update nav
        document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
        document.querySelector('[data-section="exercises"]').classList.add('active');
    }
}

// ========================================
// Mock Exams
// ========================================
function setupMockExams() {
    const startButtons = document.querySelectorAll('.btn-start-exam');
    startButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const examNum = btn.dataset.exam;
            loadMockExam(examNum);
        });
    });
}

function loadMockExam(examNum) {
    const content = document.getElementById('mock-exam-content');
    const list = document.querySelector('.mock-exam-list');

    if (!content || !list) return;

    list.style.display = 'none';
    content.style.display = 'block';

    if (examNum === '1') {
        content.innerHTML = getMockExam1();
    } else if (examNum === '2') {
        content.innerHTML = getMockExam2();
    } else if (examNum === '3') {
        content.innerHTML = getMockExam3();
    } else if (examNum === '4') {
        content.innerHTML = getMockExam4();
    } else if (examNum === '5') {
        content.innerHTML = getMockExam5();
    } else if (examNum === '6') {
        content.innerHTML = getMockExam6();
    } else if (examNum === '7') {
        content.innerHTML = getMockExam7();
    } else if (examNum === '8') {
        content.innerHTML = getMockExam8();
    } else if (examNum === '9') {
        content.innerHTML = getMockExam9();
    }
}

function getMockExam1() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #1 — Gestion de Formations</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités JPA (8 pts)</h4>
            <p>On souhaite modéliser un système de formations avec:</p>
            <ul>
                <li>Un <strong>User</strong> (id, nom, email)</li>
                <li>Une <strong>Training</strong> (id, titre, durée, prix)</li>
                <li>Une <strong>Reservation</strong> (id, date, user, training)</li>
            </ul>
            <p>Relations:</p>
            <ul>
                <li>Un User peut avoir plusieurs Reservations</li>
                <li>Une Training peut avoir plusieurs Reservations</li>
                <li>Une Reservation appartient à un User ET à une Training</li>
            </ul>
            
            <div class="code-block">
                <h4>User.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class User {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;
    private String nom;
    private String email;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation */</span><span class="solution-text">@OneToMany(mappedBy = "user")
    @JsonIgnore</span></span>
    private List&lt;Reservation&gt; reservations;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Training.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class Training {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;
    private String titre;
    private Integer duree;
    private Double prix;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation */</span><span class="solution-text">@OneToMany(mappedBy = "training")
    @JsonIgnore</span></span>
    private List&lt;Reservation&gt; reservations;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Reservation.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class Reservation {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;
    private LocalDate date;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relations */</span><span class="solution-text">@ManyToOne
    @JoinColumn(name = "user_id")
    private User user;
    
    @ManyToOne
    @JoinColumn(name = "training_id")</span></span>
    private Training training;
}</pre>
            </div>
            
            <h4>Partie 2: Repository + Service (6 pts)</h4>
            
            <div class="code-block">
                <h4>ReservationRepo.java (1 pt)</h4>
                <pre>public interface ReservationRepo <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">extends JpaRepository&lt;Reservation, Long&gt;</span></span> {

}</pre>
            </div>
            
            <div class="code-block">
                <h4>ReservationService.java (5 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotation */</span><span class="solution-text">@Service</span></span>
public class ReservationService {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private ReservationRepo repo;
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private UserService userService;
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private TrainingService trainingService;
    
    public List&lt;Reservation&gt; getAll() {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: 1 pt */</span><span class="solution-text">return repo.findAll();</span></span>
    }
    
    public Reservation getById(Long id) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: 1 pt */</span><span class="solution-text">return repo.findById(id).orElse(null);</span></span>
    }
    
    public Reservation create(Reservation r, Long userId, Long trainingId) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: récupérer user et training, les setter, sauvegarder (3 pts) */</span><span class="solution-text">User user = userService.getById(userId);
        Training training = trainingService.getById(trainingId);
        if (user == null || training == null) {
            return null;
        }
        r.setUser(user);
        r.setTraining(training);
        return repo.save(r);</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (6 pts)</h4>
            
            <div class="code-block">
                <h4>ReservationController.java (6 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotations controller */</span><span class="solution-text">@RestController
@RequestMapping("/reservation")</span></span>
public class ReservationController {
    @Autowired
    private ReservationService service;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /reservation (1 pt) */</span><span class="solution-text">@GetMapping("")</span></span>
    public List&lt;Reservation&gt; getAll() {
        return service.getAll();
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /reservation/{id} (2 pts) */</span><span class="solution-text">@GetMapping("/{id}")</span></span>
    public Reservation getById(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@PathVariable</span></span> Long id) {
        return service.getById(id);
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: POST /reservation/add avec userId et trainingId en query params (3 pts) */</span><span class="solution-text">@PostMapping("/add")</span></span>
    public Reservation create(
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestBody</span></span> Reservation r,
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> Long userId,
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> Long trainingId) {
        return service.create(r, userId, trainingId);
    }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity, @Id, @GeneratedValue: 0.5 pt chaque</li>
                <li>@ManyToOne: 1 pt</li>
                <li>@OneToMany(mappedBy) + @JsonIgnore: 1.5 pt</li>
                <li>extends JpaRepository: 1 pt</li>
                <li>@Service, @Autowired: 0.5 pt chaque</li>
                <li>findById().orElse(null): 1 pt</li>
                <li>Logique create complète: 3 pts</li>
                <li>@RestController, @RequestMapping: 1 pt</li>
                <li>@GetMapping, @PathVariable: 1 pt chaque</li>
                <li>@PostMapping, @RequestBody, @RequestParam: 1 pt chaque</li>
            </ul>
        </div>
    `;
}

function getMockExam2() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #2 — Bibliothèque</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités avec Héritage (10 pts)</h4>
            <p>Modéliser une bibliothèque avec:</p>
            <ul>
                <li><strong>Document</strong> (abstrait): code (String), titre, auteur</li>
                <li><strong>Livre</strong> extends Document: nombrePages</li>
                <li><strong>DVD</strong> extends Document: duree</li>
                <li><strong>Emprunt</strong>: id, dateEmprunt, document, emprunteur</li>
            </ul>
            
            <div class="code-block">
                <h4>Document.java (4 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: inheritance JOINED */</span><span class="solution-text">@Inheritance(strategy = InheritanceType.JOINED)</span></span>
public abstract class Document {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id (String, pas auto-généré) */</span><span class="solution-text">@Id</span></span>
    private String code;
    private String titre;
    private String auteur;
    
    public abstract Double getTarif();
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Livre.java (2 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class Livre extends Document {
    private Integer nombrePages;
    
    @Override
    public Double getTarif() {
        return 0.5;
    }
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Emprunt.java (4 pts) - Clé composite</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: embeddable */</span><span class="solution-text">@Embeddable</span></span>
public class EmpruntPK implements Serializable {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation */</span><span class="solution-text">@ManyToOne</span></span>
    private Document document;
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation */</span><span class="solution-text">@ManyToOne</span></span>
    private Client client;
}

<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class Emprunt {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: embedded id */</span><span class="solution-text">@EmbeddedId</span></span>
    private EmpruntPK id;
    private LocalDate dateEmprunt;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: champ calculé, non persisté */</span><span class="solution-text">@Transient</span></span>
    private Boolean enRetard;
}</pre>
            </div>
            
            <h4>Partie 2: Service avec Logique (5 pts)</h4>
            
            <div class="code-block">
                <h4>DocumentService.java</h4>
                <pre>@Service
public class DocumentService {
    @Autowired
    private DocumentRepo repo;
    
    // Ajouter un document seulement s'il n'existe pas déjà
    public Document addDocument(Document doc) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: vérifier si existe avec findById, si oui return null, sinon save (3 pts) */</span><span class="solution-text">if (repo.findById(doc.getCode()).isPresent()) {
            return null;
        }
        return repo.save(doc);</span></span>
    }
    
    // Mettre à jour titre et auteur
    public Document update(String code, String titre, String auteur) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: récupérer, vérifier null, mettre à jour, sauvegarder (2 pts) */</span><span class="solution-text">Document doc = repo.findById(code).orElse(null);
        if (doc == null) {
            return null;
        }
        doc.setTitre(titre);
        doc.setAuteur(auteur);
        return repo.save(doc);</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller (5 pts)</h4>
            
            <div class="code-block">
                <h4>DocumentController.java</h4>
                <pre>@RestController
@RequestMapping("/document")
public class DocumentController {
    @Autowired
    private DocumentService service;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: PUT /document/update/{code}?titre=xxx&auteur=yyy (3 pts) */</span><span class="solution-text">@PutMapping("/update/{code}")</span></span>
    public Document update(
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@PathVariable</span></span> String code,
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> String titre,
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> String auteur) {
        return service.update(code, titre, auteur);
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: DELETE /document/delete/{code} (2 pts) */</span><span class="solution-text">@DeleteMapping("/delete/{code}")</span></span>
    public void delete(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@PathVariable</span></span> String code) {
        service.delete(code);
    }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity + @Inheritance(JOINED): 2 pts</li>
                <li>@Id sans @GeneratedValue (String ID): 1 pt</li>
                <li>Sous-classe @Entity seul: 1 pt</li>
                <li>@Embeddable + @EmbeddedId: 2 pts</li>
                <li>@ManyToOne dans PK: 1 pt chaque</li>
                <li>@Transient: 1 pt</li>
                <li>isPresent() / isEmpty() check: 1 pt</li>
                <li>Logique update complète: 2 pts</li>
                <li>@PutMapping + @PathVariable + @RequestParam: 3 pts</li>
                <li>@DeleteMapping + @PathVariable: 2 pts</li>
            </ul>
        </div>
    `;
}

function getMockExam3() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #3 — Aéroport (Clé Composite)</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités JPA avec Clé Composite (10 pts)</h4>
            <p>On souhaite modéliser un système aéroportuaire avec:</p>
            <ul>
                <li><strong>Aeroport</strong>: code (String), nom, ville</li>
                <li><strong>Vol</strong>: numVol (Long), compagnie, dateDepart</li>
                <li><strong>Escale</strong>: (aeroport, vol) comme clé composite, heureArrivee, heureDepart</li>
            </ul>
            <p>Relations:</p>
            <ul>
                <li>Un Vol passe par plusieurs Aeroports (via Escale)</li>
                <li>Un Aeroport accueille plusieurs Vols (via Escale)</li>
                <li>L'Escale est une classe d'association avec clé composite</li>
            </ul>
            
            <div class="code-block">
                <h4>Aeroport.java (2 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class Aeroport {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id String non auto-généré */</span><span class="solution-text">@Id</span></span>
    private String code;
    private String nom;
    private String ville;
    
    public Aeroport() {}
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Vol.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class Vol {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id auto-incrémenté */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long numVol;
    private String compagnie;
    private LocalDate dateDepart;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation OneToMany vers Escale, mappedBy = "id.vol" */
    /* TODO: éviter boucle JSON */</span><span class="solution-text">@OneToMany(mappedBy = "id.vol", fetch = FetchType.EAGER)
    @JsonIgnore</span></span>
    private List&lt;Escale&gt; escales = new ArrayList&lt;&gt;();
    
    public Vol() {}
}</pre>
            </div>
            
            <div class="code-block">
                <h4>PK.java - Clé Composite (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotation pour classe clé composite */</span><span class="solution-text">@Embeddable</span></span>
public class PK implements Serializable {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation ManyToOne vers Aeroport */</span><span class="solution-text">@ManyToOne</span></span>
    private Aeroport aeroport;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation ManyToOne vers Vol */</span><span class="solution-text">@ManyToOne</span></span>
    private Vol vol;
    
    public PK() {}
    public PK(Aeroport aeroport, Vol vol) {
        this.aeroport = aeroport;
        this.vol = vol;
    }
    
    // equals() et hashCode() requis pour clé composite
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Escale.java (2 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class Escale {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: clé composite embedded */</span><span class="solution-text">@EmbeddedId</span></span>
    private PK id;
    
    private LocalTime heureArrivee;
    private LocalTime heureDepart;
    
    public Escale() {}
}</pre>
            </div>
            
            <h4>Partie 2: Service avec Clé Composite (5 pts)</h4>
            
            <div class="code-block">
                <h4>EscaleService.java</h4>
                <pre>@Service
public class EscaleService {
    @Autowired
    private EscaleRepo escaleRepo;
    @Autowired
    private AeroportService aeroportService;
    @Autowired
    private VolService volService;
    
    // Créer une escale en récupérant aeroport et vol par leurs IDs
    public Escale createEscale(String codeAeroport, Long numVol, 
                               LocalTime heureArrivee, LocalTime heureDepart) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: 
           1. Récupérer aeroport par code (1 pt)
           2. Récupérer vol par numVol (1 pt)
           3. Vérifier que les deux existent (1 pt)
           4. Créer la clé PK (1 pt)
           5. Créer et sauvegarder l'escale (1 pt)
        */</span><span class="solution-text">Aeroport aeroport = aeroportService.getByCode(codeAeroport);
        Vol vol = volService.getById(numVol);
        if (aeroport == null || vol == null) {
            return null;
        }
        PK pk = new PK(aeroport, vol);
        Escale escale = new Escale();
        escale.setId(pk);
        escale.setHeureArrivee(heureArrivee);
        escale.setHeureDepart(heureDepart);
        return escaleRepo.save(escale);</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (5 pts)</h4>
            
            <div class="code-block">
                <h4>EscaleController.java</h4>
                <pre>@RestController
@RequestMapping("/escale")
public class EscaleController {
    @Autowired
    private EscaleService service;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /escale - retourner toutes les escales (1 pt) */</span><span class="solution-text">@GetMapping("")</span></span>
    public List&lt;Escale&gt; getAll() {
        return service.getAll();
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: POST /escale/add?aeroport=XXX&vol=123 
       avec heures en body JSON (4 pts) */</span><span class="solution-text">@PostMapping("/add")</span></span>
    public Escale create(
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: query param aeroport */</span><span class="solution-text">@RequestParam String codeAeroport,</span></span>
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: query param vol */</span><span class="solution-text">@RequestParam Long numVol,</span></span>
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: body pour heures */</span><span class="solution-text">@RequestBody Escale escale) {
        return service.createEscale(codeAeroport, numVol, 
            escale.getHeureArrivee(), escale.getHeureDepart());</span></span>
    }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity: 0.5 pt chaque</li>
                <li>@Id seul (String): 1 pt</li>
                <li>@Id + @GeneratedValue: 1.5 pt</li>
                <li>@Embeddable: 1 pt</li>
                <li>@ManyToOne dans PK: 1 pt chaque</li>
                <li>@EmbeddedId: 1 pt</li>
                <li>@OneToMany(mappedBy="id.vol"): 1.5 pt</li>
                <li>@JsonIgnore: 0.5 pt</li>
                <li>Logique création clé composite: 2 pts</li>
                <li>@GetMapping: 1 pt</li>
                <li>@PostMapping + @RequestParam + @RequestBody: 4 pts</li>
            </ul>
        </div>
    `;
}

function getMockExam4() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #4 — Gestion des Notes (ManyToMany)</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités JPA avec ManyToMany (10 pts)</h4>
            <p>On souhaite modéliser un système de gestion de notes avec:</p>
            <ul>
                <li><strong>Personne</strong> (abstraite): id, nom, prenom</li>
                <li><strong>Professeur</strong> extends Personne: grade (enum)</li>
                <li><strong>Matiere</strong>: id, nom, coefficient</li>
                <li>Un Professeur peut enseigner plusieurs Matières</li>
                <li>Une Matière peut être enseignée par plusieurs Professeurs</li>
            </ul>
            
            <div class="code-block">
                <h4>Personne.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: inheritance JOINED */</span><span class="solution-text">@Inheritance(strategy = InheritanceType.JOINED)</span></span>
public abstract class Personne {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id auto-incrémenté */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;
    private String nom;
    private String prenom;
    
    public Personne() {}
}</pre>
            </div>
            
            <div class="code-block">
                <h4>GradeType.java</h4>
                <pre>public enum GradeType {
    PA, PH, PES
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Professeur.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class Professeur extends Personne {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: stocker enum en STRING */</span><span class="solution-text">@Enumerated(EnumType.STRING)</span></span>
    private GradeType grade;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: ManyToMany inverse, mappedBy="professeurs" */</span><span class="solution-text">@ManyToMany(mappedBy = "professeurs")</span></span>
    private Set&lt;Matiere&gt; matieres = new HashSet&lt;&gt;();
    
    public Professeur() {}
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Matiere.java (4 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class Matiere {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id auto-incrémenté */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;
    private String nom;
    private Double coefficient;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: ManyToMany propriétaire */
    /* TODO: JoinTable name="prof_matiere", 
             joinColumns = matiere_id, 
             inverseJoinColumns = prof_id */</span><span class="solution-text">@ManyToMany
    @JoinTable(name = "prof_matiere",
        joinColumns = @JoinColumn(name = "matiere_id"),
        inverseJoinColumns = @JoinColumn(name = "prof_id"))</span></span>
    private Set&lt;Professeur&gt; professeurs = new HashSet&lt;&gt;();
    
    public Matiere() {}
}</pre>
            </div>
            
            <h4>Partie 2: Service avec ManyToMany (5 pts)</h4>
            
            <div class="code-block">
                <h4>MatiereService.java</h4>
                <pre>@Service
public class MatiereService {
    @Autowired
    private MatiereRepo matiereRepo;
    @Autowired
    private ProfesseurService profService;
    
    // Assigner un professeur à une matière
    public Matiere assignProfesseur(Long matiereId, Long profId) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO:
           1. Récupérer la matière (1 pt)
           2. Récupérer le professeur (1 pt)
           3. Vérifier non null (1 pt)
           4. Ajouter le prof à la collection (1 pt)
           5. Sauvegarder (1 pt)
        */</span><span class="solution-text">Matiere matiere = matiereRepo.findById(matiereId).orElse(null);
        Professeur prof = profService.getById(profId);
        if (matiere == null || prof == null) {
            return null;
        }
        matiere.getProfesseurs().add(prof);
        return matiereRepo.save(matiere);</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (5 pts)</h4>
            
            <div class="code-block">
                <h4>MatiereController.java</h4>
                <pre>@RestController
@RequestMapping("/matiere")
public class MatiereController {
    @Autowired
    private MatiereService service;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /matiere - toutes les matières (1 pt) */</span><span class="solution-text">@GetMapping("")</span></span>
    public List&lt;Matiere&gt; getAll() {
        return service.getAll();
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /matiere/{id} (2 pts) */</span><span class="solution-text">@GetMapping("/{id}")</span></span>
    public Matiere getById(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@PathVariable</span></span> Long id) {
        return service.getById(id);
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: PUT /matiere/{matiereId}/assign?profId=X (2 pts) */</span><span class="solution-text">@PutMapping("/{matiereId}/assign")</span></span>
    public Matiere assignProf(
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@PathVariable</span></span> Long matiereId,
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> Long profId) {
        return service.assignProfesseur(matiereId, profId);
    }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity: 0.5 pt chaque</li>
                <li>@Inheritance(JOINED): 1 pt</li>
                <li>@Id + @GeneratedValue: 1 pt</li>
                <li>@Enumerated(EnumType.STRING): 1 pt</li>
                <li>@ManyToMany(mappedBy): 1 pt</li>
                <li>@ManyToMany + @JoinTable complet: 3 pts</li>
                <li>Logique assignation collection: 3 pts</li>
                <li>@GetMapping: 1 pt chaque</li>
                <li>@PathVariable: 1 pt chaque</li>
                <li>@PutMapping + @RequestParam: 2 pts</li>
            </ul>
        </div>
    `;
}

function getMockExam5() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #5 — Dossier Médical (OneToOne)</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités JPA avec OneToOne (10 pts)</h4>
            <p>On souhaite modéliser un système médical avec:</p>
            <ul>
                <li><strong>Patient</strong>: id, nom, dateNaissance</li>
                <li><strong>DossierMedical</strong>: numero (Long), dateCreation, groupeSanguin</li>
                <li><strong>FicheDeSoin</strong>: id, date, description, dossier</li>
                <li>Un Patient a exactement un DossierMedical (OneToOne)</li>
                <li>Un DossierMedical contient plusieurs FichesDeSoin (OneToMany)</li>
            </ul>
            
            <div class="code-block">
                <h4>DossierMedical.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class DossierMedical {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id auto-incrémenté */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long numero;
    private LocalDate dateCreation;
    private String groupeSanguin;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation OneToMany vers FicheDeSoin */
    /* TODO: mappedBy = "dossierMedical" */</span><span class="solution-text">@OneToMany(mappedBy = "dossierMedical")
    @JsonIgnore</span></span>
    private Set&lt;FicheDeSoin&gt; fichesDeSoin = new HashSet&lt;&gt;();
    
    public DossierMedical() {}
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Patient.java (4 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class Patient {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id auto-incrémenté */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;
    private String nom;
    private LocalDate dateNaissance;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation OneToOne vers DossierMedical */
    /* TODO: JoinColumn name="dossier", referencedColumnName="numero" */</span><span class="solution-text">@OneToOne
    @JoinColumn(name = "dossier", referencedColumnName = "numero")</span></span>
    private DossierMedical dossier;
    
    public Patient() {}
}</pre>
            </div>
            
            <div class="code-block">
                <h4>FicheDeSoin.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: entity */</span><span class="solution-text">@Entity</span></span>
public class FicheDeSoin {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: id auto-incrémenté */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;
    private LocalDate date;
    private String description;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: relation ManyToOne vers DossierMedical */</span><span class="solution-text">@ManyToOne</span></span>
    private DossierMedical dossierMedical;
    
    public FicheDeSoin() {}
}</pre>
            </div>
            
            <h4>Partie 2: Service avec Logique Métier (5 pts)</h4>
            
            <div class="code-block">
                <h4>PatientService.java</h4>
                <pre>@Service
public class PatientService {
    @Autowired
    private PatientRepo patientRepo;
    @Autowired
    private DossierMedicalService dossierService;
    
    // Créer un patient et lui associer un nouveau dossier médical
    public Patient createWithDossier(Patient patient) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO:
           1. Créer un nouveau DossierMedical avec date du jour (1 pt)
           2. Sauvegarder le dossier (1 pt)
           3. Associer le dossier au patient (1 pt)
           4. Sauvegarder le patient (1 pt)
           5. Retourner le patient (1 pt)
        */</span><span class="solution-text">DossierMedical dossier = new DossierMedical();
        dossier.setDateCreation(LocalDate.now());
        dossier = dossierService.save(dossier);
        patient.setDossier(dossier);
        return patientRepo.save(patient);</span></span>
    }
    
    // Récupérer le dossier médical d'un patient
    public DossierMedical getDossierByPatientId(Long patientId) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO:
           Récupérer patient, vérifier non null, retourner son dossier
        */</span><span class="solution-text">Patient patient = patientRepo.findById(patientId).orElse(null);
        if (patient == null) {
            return null;
        }
        return patient.getDossier();</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (5 pts)</h4>
            
            <div class="code-block">
                <h4>PatientController.java</h4>
                <pre>@RestController
@RequestMapping("/patient")
public class PatientController {
    @Autowired
    private PatientService service;
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /patient - tous les patients (1 pt) */</span><span class="solution-text">@GetMapping("")</span></span>
    public List&lt;Patient&gt; getAll() {
        return service.getAll();
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: POST /patient/add - créer patient avec dossier (2 pts) */</span><span class="solution-text">@PostMapping("/add")</span></span>
    public Patient create(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestBody</span></span> Patient patient) {
        return service.createWithDossier(patient);
    }
    
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /patient/{id}/dossier - récupérer le dossier d'un patient (2 pts) */</span><span class="solution-text">@GetMapping("/{id}/dossier")</span></span>
    public DossierMedical getDossier(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@PathVariable</span></span> Long id) {
        return service.getDossierByPatientId(id);
    }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity: 0.5 pt chaque</li>
                <li>@Id + @GeneratedValue: 1 pt chaque</li>
                <li>@OneToOne: 1 pt</li>
                <li>@JoinColumn avec referencedColumnName: 2 pts</li>
                <li>@OneToMany(mappedBy): 1.5 pt</li>
                <li>@ManyToOne: 1 pt</li>
                <li>Logique création avec association: 3 pts</li>
                <li>Navigation relation: 1 pt</li>
                <li>@GetMapping: 1 pt chaque</li>
                <li>@PostMapping + @RequestBody: 2 pts</li>
                <li>@PathVariable: 1 pt</li>
            </ul>
        </div>
    `;
}

// ===== EXAMEN 6 - Bibliothèque (@Column + Relations) =====
function getMockExam6() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #6 — Bibliothèque (@Column + Relations)</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités JPA (8 pts)</h4>
            <p>On souhaite modéliser une bibliothèque avec:</p>
            <ul>
                <li><strong>Member</strong> (id, nom, email)</li>
                <li><strong>Book</strong> (id, titre, prix, categorie)</li>
                <li><strong>Borrowing</strong> (id, date, member, book)</li>
            </ul>
            <p>Contraintes colonnes:</p>
            <ul>
                <li>email: not null, unique, length=120</li>
                <li>titre: not null, length=100</li>
                <li>categorie: enum en STRING</li>
            </ul>
            
            <div class="code-block">
                <h4>Member.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity
@Table(name = "members")</span></span>
public class Member {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO @Column not null length 50 */</span><span class="solution-text">@Column(nullable = false, length = 50)</span></span>
    private String nom;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO @Column not null unique length 120 */</span><span class="solution-text">@Column(nullable = false, unique = true, length = 120)</span></span>
    private String email;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @OneToMany(mappedBy="member") + @JsonIgnore */</span><span class="solution-text">@OneToMany(mappedBy = "member")
    @JsonIgnore</span></span>
    private List&lt;Borrowing&gt; borrowings;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Book.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity
@Table(name = "books")</span></span>
public class Book {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO @Column not null length 100 */</span><span class="solution-text">@Column(nullable = false, length = 100)</span></span>
    private String titre;

    private Double prix;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO @Enumerated(EnumType.STRING) */</span><span class="solution-text">@Enumerated(EnumType.STRING)</span></span>
    private Category categorie;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @OneToMany(mappedBy="book") + @JsonIgnore */</span><span class="solution-text">@OneToMany(mappedBy = "book")
    @JsonIgnore</span></span>
    private List&lt;Borrowing&gt; borrowings;

    public enum Category { ROMAN, SCIENCE, HISTORY }
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Borrowing.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity
@Table(name = "borrowings")</span></span>
public class Borrowing {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;

    private LocalDate date;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @ManyToOne + @JoinColumn(nullable=false) */</span><span class="solution-text">@ManyToOne
    @JoinColumn(name = "member_id", nullable = false)</span></span>
    private Member member;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @ManyToOne + @JoinColumn(nullable=false) */</span><span class="solution-text">@ManyToOne
    @JoinColumn(name = "book_id", nullable = false)</span></span>
    private Book book;
}</pre>
            </div>
            
            <h4>Partie 2: Repository + Service (6 pts)</h4>
            
            <div class="code-block">
                <h4>BorrowingRepo.java (1 pt)</h4>
                <pre>public interface BorrowingRepo <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">extends JpaRepository&lt;Borrowing, Long&gt;</span></span> { }</pre>
            </div>
            
            <div class="code-block">
                <h4>BorrowingService.java (5 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotation */</span><span class="solution-text">@Service</span></span>
public class BorrowingService {

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private BorrowingRepo repo;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private MemberService memberService;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private BookService bookService;

    public List&lt;Borrowing&gt; getAll() {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">return repo.findAll();</span></span>
    }

    public Borrowing getById(Long id) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">return repo.findById(id).orElse(null);</span></span>
    }

    public Borrowing create(Borrowing b, Long memberId, Long bookId) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: récupérer member+book, setter, save */</span><span class="solution-text">Member m = memberService.getById(memberId);
        Book bk = bookService.getById(bookId);
        if (m == null || bk == null) {
            return null;
        }
        b.setMember(m);
        b.setBook(bk);
        return repo.save(b);</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (6 pts)</h4>
            
            <div class="code-block">
                <h4>BorrowingController.java (6 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotations controller */</span><span class="solution-text">@RestController
@RequestMapping("/borrowing")</span></span>
public class BorrowingController {

    @Autowired
    private BorrowingService service;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /borrowing */</span><span class="solution-text">@GetMapping</span></span>
    public List&lt;Borrowing&gt; getAll() { return service.getAll(); }

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /borrowing/{id} */</span><span class="solution-text">@GetMapping("/{id}")</span></span>
    public Borrowing getById(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@PathVariable</span></span> Long id) { return service.getById(id); }

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: POST /borrowing/add?memberId=...&bookId=... */</span><span class="solution-text">@PostMapping("/add")</span></span>
    public Borrowing create(
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestBody</span></span> Borrowing b,
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> Long memberId,
            <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> Long bookId
    ) { return service.create(b, memberId, bookId); }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity, @Id, @GeneratedValue: 0.5 pt chacun</li>
                <li>@Column contraintes (nullable, unique, length): 1 pt</li>
                <li>@ManyToOne + @JoinColumn(nullable): 1.5 pt</li>
                <li>@OneToMany(mappedBy) + @JsonIgnore: 1.5 pt</li>
                <li>@Enumerated(EnumType.STRING): 1 pt</li>
                <li>extends JpaRepository: 1 pt</li>
                <li>@Service, @Autowired: 0.5 pt chaque</li>
                <li>Logique create: 3 pts</li>
                <li>@RestController, @RequestMapping: 1 pt</li>
                <li>@GetMapping, @PathVariable: 1 pt</li>
                <li>@PostMapping, @RequestBody, @RequestParam: 1 pt chaque</li>
            </ul>
        </div>
    `;
}

// ===== EXAMEN 7 - Notes Étudiant (@Transient + ManyToOne Unidirectional) =====
function getMockExam7() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #7 — Notes Étudiant (ManyToOne Unidirectionnelle)</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités JPA (8 pts)</h4>
            <p>On souhaite modéliser:</p>
            <ul>
                <li><strong>Student</strong> (matricule, nom, prenom, mail)</li>
                <li><strong>Note</strong> (id, note)</li>
                <li>Une Note appartient à un Student (ManyToOne unidirectionnelle)</li>
                <li>Dans Student: mail est @Transient (non persisté)</li>
            </ul>
            <p>Contraintes:</p>
            <ul>
                <li>Student.nom: not null, unique, length=50, name="name"</li>
            </ul>
            
            <div class="code-block">
                <h4>Student.java (4 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity
@Table(name = "etudiants")</span></span>
public class Student {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id</span></span>
    private Long matricule;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO @Column(name="name", nullable=false, unique=true, length=50) */</span><span class="solution-text">@Column(name = "name", nullable = false, unique = true, length = 50)</span></span>
    private String nom;

    private String prenom;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO @Transient */</span><span class="solution-text">@Transient</span></span>
    private String mail;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Note.java (4 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity
@Table(name = "notes")</span></span>
public class Note {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;

    private Long note;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @ManyToOne + @JoinColumn(name="student_matricule", nullable=false) */</span><span class="solution-text">@ManyToOne
    @JoinColumn(name = "student_matricule", nullable = false)</span></span>
    private Student student;
}</pre>
            </div>
            
            <h4>Partie 2: Repository + Service (6 pts)</h4>
            
            <div class="code-block">
                <h4>NoteRepo.java (1 pt)</h4>
                <pre>public interface NoteRepo <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">extends JpaRepository&lt;Note, Long&gt;</span></span> { }</pre>
            </div>
            
            <div class="code-block">
                <h4>NoteService.java (5 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotation */</span><span class="solution-text">@Service</span></span>
public class NoteService {

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private NoteRepo repo;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private StudentService studentService;

    public Note create(Note n, Long studentId) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: récupérer student, setter, save */</span><span class="solution-text">Student s = studentService.getById(studentId);
        if (s == null) {
            return null;
        }
        n.setStudent(s);
        return repo.save(n);</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (6 pts)</h4>
            
            <div class="code-block">
                <h4>NoteController.java (6 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotations controller */</span><span class="solution-text">@RestController
@RequestMapping("/note")</span></span>
public class NoteController {

    @Autowired
    private NoteService service;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: POST /note/add?studentId=... */</span><span class="solution-text">@PostMapping("/add")</span></span>
    public Note create(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestBody</span></span> Note n, <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestParam</span></span> Long studentId) {
        return service.create(n, studentId);
    }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity: 0.5 pt chaque</li>
                <li>@Id seul (sans @GeneratedValue): 1 pt</li>
                <li>@Id + @GeneratedValue: 1.5 pt</li>
                <li>@Column avec name, nullable, unique, length: 2 pts</li>
                <li>@Transient: 1 pt</li>
                <li>@ManyToOne + @JoinColumn(name, nullable): 2 pts</li>
                <li>extends JpaRepository: 1 pt</li>
                <li>@Service, @Autowired: 0.5 pt chaque</li>
                <li>Logique create: 2 pts</li>
                <li>@RestController, @RequestMapping: 1 pt</li>
                <li>@PostMapping, @RequestBody, @RequestParam: 1 pt chaque</li>
            </ul>
        </div>
    `;
}

// ===== EXAMEN 8 - RH Héritage JOINED =====
function getMockExam8() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #8 — RH (Héritage JOINED)</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <h4>Partie 1: Entités JPA (8 pts)</h4>
            <p>Système RH avec héritage JOINED:</p>
            <ul>
                <li><strong>Personne</strong> (id, nom, prenom) - classe parente</li>
                <li><strong>Employee</strong> extends Personne (salaire)</li>
                <li><strong>Trainer</strong> extends Personne (specialite)</li>
            </ul>
            <p>Stratégie: JOINED (tables séparées, jointures)</p>
            
            <div class="code-block">
                <h4>Personne.java (3 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @Entity + @Inheritance(JOINED) */</span><span class="solution-text">@Entity
@Inheritance(strategy = InheritanceType.JOINED)</span></span>
public class Personne {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)</span></span>
    private Long id;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO @Column(nullable=false, length=50) */</span><span class="solution-text">@Column(nullable = false, length = 50)</span></span>
    private String nom;

    private String prenom;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Employee.java (2.5 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class Employee extends Personne {
    private Double salaire;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>Trainer.java (2.5 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class Trainer extends Personne {
    private String specialite;
}</pre>
            </div>
            
            <h4>Partie 2: Repository + Service (6 pts)</h4>
            
            <div class="code-block">
                <h4>PersonneRepo.java (1 pt)</h4>
                <pre>public interface PersonneRepo <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">extends JpaRepository&lt;Personne, Long&gt;</span></span> { }</pre>
            </div>
            
            <div class="code-block">
                <h4>PersonneService.java (5 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @Service */</span><span class="solution-text">@Service</span></span>
public class PersonneService {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: injection */</span><span class="solution-text">@Autowired</span></span>
    private PersonneRepo repo;

    public List&lt;Personne&gt; getAll() { 
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">return repo.findAll();</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (6 pts)</h4>
            
            <div class="code-block">
                <h4>PersonneController.java (6 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: annotations controller */</span><span class="solution-text">@RestController
@RequestMapping("/personne")</span></span>
public class PersonneController {

    @Autowired
    private PersonneService service;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: GET /personne */</span><span class="solution-text">@GetMapping</span></span>
    public List&lt;Personne&gt; getAll() { return service.getAll(); }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity sur classe parente: 0.5 pt</li>
                <li>@Inheritance(strategy = InheritanceType.JOINED): 2 pts</li>
                <li>@Id + @GeneratedValue: 1.5 pt</li>
                <li>@Column contraintes: 1 pt</li>
                <li>@Entity sur sous-classes: 0.5 pt chaque</li>
                <li>extends JpaRepository: 1 pt</li>
                <li>@Service, @Autowired: 0.5 pt chaque</li>
                <li>findAll(): 1 pt</li>
                <li>@RestController, @RequestMapping: 1 pt</li>
                <li>@GetMapping: 1 pt</li>
            </ul>
            
            <div style="background: rgba(251, 191, 36, 0.1); border: 1px solid var(--accent-yellow); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                <h4 style="color: var(--accent-yellow);">💡 Note sur JOINED:</h4>
                <ul>
                    <li>Crée une table par classe (Personne, Employee, Trainer)</li>
                    <li>Les sous-classes ont une FK vers la table parente</li>
                    <li>Requêtes polymorphiques nécessitent des JOIN</li>
                    <li>✅ Compatible avec @GeneratedValue(IDENTITY)</li>
                </ul>
            </div>
        </div>
    `;
}

// ===== EXAMEN 9 - Paiements TABLE_PER_CLASS (Piège IDENTITY) =====
function getMockExam9() {
    return `
        <div class="mock-exam">
            <div class="exam-controls">
                <button class="btn" onclick="closeMockExam()">← Retour</button>
                <button class="btn btn-reveal-all" onclick="revealAllTodos()">👁️ Tout Révéler</button>
                <button class="btn btn-hide-all" onclick="hideAllTodos()">🙈 Tout Masquer</button>
            </div>
            <h3>📄 Examen Blanc #9 — Paiements (TABLE_PER_CLASS ⚠️)</h3>
            <p><strong>Durée:</strong> 1h30 | <strong>Total:</strong> 20 points</p>
            <p class="reveal-hint">💡 Cliquez sur les éléments orange pour révéler la correction</p>
            <hr style="border-color: var(--border-color); margin: 1rem 0;">
            
            <div style="background: rgba(248, 113, 113, 0.2); border: 1px solid var(--accent-red); padding: 1rem; border-radius: 8px; margin-bottom: 1rem;">
                <h4 style="color: var(--accent-red);">⚠️ PIÈGE IMPORTANT:</h4>
                <p>Avec TABLE_PER_CLASS, <strong>@GeneratedValue(IDENTITY) NE FONCTIONNE PAS!</strong></p>
                <p>Il faut utiliser <strong>@GeneratedValue(AUTO)</strong> ou <strong>TABLE</strong>.</p>
            </div>
            
            <h4>Partie 1: Entités JPA (8 pts)</h4>
            <p>Système de paiements:</p>
            <ul>
                <li><strong>Payment</strong> (id, montant, date) - classe parente</li>
                <li><strong>CardPayment</strong> extends Payment (cardNumber)</li>
                <li><strong>CashPayment</strong> extends Payment (cashDesk)</li>
            </ul>
            <p>Stratégie: TABLE_PER_CLASS (une table par classe concrète)</p>
            
            <div class="code-block">
                <h4>Payment.java (4 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)</span></span>
public class Payment {

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: @Id + @GeneratedValue( ??? ) (PAS IDENTITY!) */</span><span class="solution-text">@Id
    @GeneratedValue(strategy = GenerationType.AUTO)</span></span>
    private Long id;

    private Double montant;
    private LocalDate date;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>CardPayment.java (2 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class CardPayment extends Payment {
    private String cardNumber;
}</pre>
            </div>
            
            <div class="code-block">
                <h4>CashPayment.java (2 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Entity</span></span>
public class CashPayment extends Payment {
    private String cashDesk;
}</pre>
            </div>
            
            <h4>Partie 2: Repository + Service (6 pts)</h4>
            
            <div class="code-block">
                <h4>PaymentRepo.java (1 pt)</h4>
                <pre>public interface PaymentRepo <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">extends JpaRepository&lt;Payment, Long&gt;</span></span> { }</pre>
            </div>
            
            <div class="code-block">
                <h4>PaymentService.java (5 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@Service</span></span>
public class PaymentService {
    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO injection */</span><span class="solution-text">@Autowired</span></span>
    private PaymentRepo repo;

    public Payment create(Payment p) {
        <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">return repo.save(p);</span></span>
    }
}</pre>
            </div>
            
            <h4>Partie 3: Controller REST (6 pts)</h4>
            
            <div class="code-block">
                <h4>PaymentController.java (6 pts)</h4>
                <pre><span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RestController
@RequestMapping("/payment")</span></span>
public class PaymentController {

    @Autowired
    private PaymentService service;

    <span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO: POST /payment/add */</span><span class="solution-text">@PostMapping("/add")</span></span>
    public Payment create(<span class="todo-slot" onclick="toggleTodo(this)"><span class="todo-text">/* TODO */</span><span class="solution-text">@RequestBody</span></span> Payment p) {
        return service.create(p);
    }
}</pre>
            </div>
            
            <h4>Barème:</h4>
            <ul>
                <li>@Entity sur classe parente: 0.5 pt</li>
                <li>@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS): 2 pts</li>
                <li>@Id + @GeneratedValue(AUTO ou TABLE): 2 pts</li>
                <li>❌ -2 pts si IDENTITY utilisé avec TABLE_PER_CLASS</li>
                <li>@Entity sur sous-classes: 0.5 pt chaque</li>
                <li>extends JpaRepository: 1 pt</li>
                <li>@Service, @Autowired: 0.5 pt chaque</li>
                <li>repo.save(): 1 pt</li>
                <li>@RestController, @RequestMapping: 1 pt</li>
                <li>@PostMapping, @RequestBody: 1 pt chaque</li>
            </ul>
            
            <div style="background: rgba(110, 231, 183, 0.1); border: 1px solid var(--accent-green); padding: 1rem; border-radius: 8px; margin-top: 1rem;">
                <h4 style="color: var(--accent-green);">✅ Résumé Héritage + GenerationType:</h4>
                <table style="width: 100%; border-collapse: collapse; margin-top: 0.5rem;">
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <th style="text-align: left; padding: 0.5rem;">Stratégie</th>
                        <th style="text-align: left; padding: 0.5rem;">IDENTITY</th>
                        <th style="text-align: left; padding: 0.5rem;">AUTO/TABLE</th>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.5rem;">SINGLE_TABLE</td>
                        <td style="padding: 0.5rem; color: var(--accent-green);">✅ OK</td>
                        <td style="padding: 0.5rem; color: var(--accent-green);">✅ OK</td>
                    </tr>
                    <tr style="border-bottom: 1px solid var(--border-color);">
                        <td style="padding: 0.5rem;">JOINED</td>
                        <td style="padding: 0.5rem; color: var(--accent-green);">✅ OK</td>
                        <td style="padding: 0.5rem; color: var(--accent-green);">✅ OK</td>
                    </tr>
                    <tr>
                        <td style="padding: 0.5rem;">TABLE_PER_CLASS</td>
                        <td style="padding: 0.5rem; color: var(--accent-red);">❌ NON</td>
                        <td style="padding: 0.5rem; color: var(--accent-green);">✅ OK</td>
                    </tr>
                </table>
            </div>
        </div>
    `;
}

function closeMockExam() {
    const content = document.getElementById('mock-exam-content');
    const list = document.querySelector('.mock-exam-list');

    if (content) content.style.display = 'none';
    if (list) list.style.display = 'grid';
}

// Toggle individual TODO slot
function toggleTodo(element) {
    element.classList.toggle('revealed');
}

// Reveal all TODO slots
function revealAllTodos() {
    document.querySelectorAll('.todo-slot').forEach(slot => {
        slot.classList.add('revealed');
    });
}

// Hide all TODO slots
function hideAllTodos() {
    document.querySelectorAll('.todo-slot').forEach(slot => {
        slot.classList.remove('revealed');
    });
}

// Make functions available globally
window.closeMockExam = closeMockExam;
window.toggleTodo = toggleTodo;
window.revealAllTodos = revealAllTodos;
window.hideAllTodos = hideAllTodos;
