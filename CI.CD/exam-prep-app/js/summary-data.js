// Summary Data - Synthèse orientée examen CI/CD
// Définitions clés, distinctions, réflexes et pièges courants

const summaryData = {
    // ========== DÉFINITIONS CLÉS ==========
    definitions: [
        {
            term: "CI (Continuous Integration)",
            definition: "Pratique d'intégration fréquente du code dans un dépôt partagé, avec builds et tests automatisés à chaque commit.",
            important: "Focus sur la détection précoce des erreurs"
        },
        {
            term: "CD (Continuous Delivery/Deployment)",
            definition: "Delivery = prêt à déployer manuellement. Deployment = déploiement automatique en production.",
            important: "Delivery ≠ Deployment"
        },
        {
            term: "Pipeline",
            definition: "Séquence automatisée d'étapes (stages) exécutées sur le code : build → test → deploy.",
            important: "Chaque stage contient des jobs"
        },
        {
            term: "Stage",
            definition: "Étape d'un pipeline (ex: build, test, sonar, deploy). Les jobs d'un même stage s'exécutent en parallèle.",
            important: "Stages s'exécutent séquentiellement"
        },
        {
            term: "Job",
            definition: "Tâche unitaire dans un stage, exécutée dans un environnement isolé (conteneur Docker).",
            important: "Chaque job = 1 image Docker"
        },
        {
            term: "Artifact",
            definition: "Fichier généré par un build (JAR, WAR, binaire) conservé et partageable entre jobs/stages.",
            important: "Différent de cache (performance)"
        },
        {
            term: "Runner (GitLab)",
            definition: "Agent qui exécute les jobs du pipeline. Types: Docker, Shell, Kubernetes.",
            important: "Shell runner pour accès local"
        },
        {
            term: "pom.xml",
            definition: "Fichier de configuration Maven définissant dépendances, plugins et phases de build pour Java.",
            important: "Équivalent de package.json pour Node"
        },
        {
            term: "Jenkinsfile",
            definition: "Fichier définissant un pipeline Jenkins en syntaxe Groovy DSL.",
            important: "Différent de .gitlab-ci.yml (YAML)"
        },
        {
            term: "WAR (Web Application Archive)",
            definition: "Format de packaging Java pour déploiement sur serveur d'applications (Tomcat).",
            important: "JAR = standalone, WAR = serveur"
        },
        {
            term: "ServletInitializer",
            definition: "Classe étendant SpringBootServletInitializer nécessaire pour exécuter Spring Boot dans Tomcat externe.",
            important: "Obligatoire pour WAR externe"
        },
        {
            term: "SonarCloud/SonarQube",
            definition: "Plateforme d'analyse statique de code détectant bugs, vulnérabilités et code smells.",
            important: "Cloud = SaaS, Qube = self-hosted"
        },
        {
            term: "SAST (Static Application Security Testing)",
            definition: "Analyse du code source pour détecter des vulnérabilités sans exécution.",
            important: "Statique = sans exécution"
        },
        {
            term: "Secret Detection",
            definition: "Scan du code pour détecter des secrets hardcodés (clés API, tokens, mots de passe).",
            important: "Outil GitLab: Gitleaks"
        },
        {
            term: "Ansible Inventory",
            definition: "Fichier listant les machines cibles (hosts) et leurs groupes pour Ansible.",
            important: "Défaut: /etc/ansible/hosts"
        },
        {
            term: "Ansible Playbook",
            definition: "Fichier YAML définissant une série de tâches à exécuter sur les hosts cibles.",
            important: "Extension .yml, commence par ---"
        },
        // ========== NOUVELLES DÉFINITIONS ==========
        {
            term: "Idempotence (Ansible)",
            definition: "Propriété d'appliquer la même opération plusieurs fois s'assurer que le résultat reste le même, sans effets de bord.",
            important: "Crucial pour l'automatisation fiable"
        },
        {
            term: "Agentless (Ansible)",
            definition: "Architecture ne nécessitant aucune installation de logiciel sur les nœuds gérés. Utilise SSH standard.",
            important: "Simplifie la gestion de flotte"
        },
        {
            term: "Infrastructure as Code (IaC)",
            definition: "Gestion et provisionnement de l'infrastructure via du code (fichiers de config) plutôt que manuellement.",
            important: "Reproductible, versionnable (Git)"
        },
        {
            term: "Quality Gate (SonarCloud)",
            definition: "Ensemble de conditions (seuils) que le code doit respecter pour être accepté (ex: 0 bug critique, couverture > 80%).",
            important: "Bloque le pipeline si échec"
        },
        {
            term: "Webhook",
            definition: "Mécanisme HTTP permettant à un système (GitLab) de notifier un autre (Jenkins) instantanément lors d'un événement (Push).",
            important: "Déclenchement automatique des builds"
        },
        {
            term: "DoD (Definition of Done)",
            definition: "Liste de critères à valider pour qu'une user story soit considérée comme terminée (inclut souvent tests, CI passée, code review).",
            important: "Assure la qualité uniforme"
        },
        {
            term: "Shift Left Security",
            definition: "Intégration de la sécurité le plus tôt possible dans le cycle de développement (DevSecOps), pas juste à la fin.",
            important: "Moins coûteux de corriger tôt"
        },
        {
            term: "Regression Testing",
            definition: "Tests visant à s'assurer qu'une nouvelle modification de code n'a pas cassé les fonctionnalités existantes.",
            important: "Automatisé via CI"
        },
        {
            term: "Blue/Green Deployment",
            definition: "Stratégie de déploiement avec deux environnements identiques (Blue=Prod, Green=New). On bascule le trafic vers Green après validation.",
            important: "Zero downtime deployment"
        },
        {
            term: "Canary Deployment",
            definition: "Déploiement progressif de la nouvelle version à un petit sous-ensemble d'utilisateurs avant de généraliser.",
            important: "Minimise l'impact des bugs"
        }
    ],

    // ========== DISTINCTIONS CLÉS (A vs B) ==========
    distinctions: [
        {
            itemA: "GitLab CI/CD (.gitlab-ci.yml)",
            itemB: "Jenkins (Jenkinsfile)",
            comparison: [
                { aspect: "Format", valueA: "YAML", valueB: "Groovy DSL" },
                { aspect: "Location", valueA: "Racine du projet", valueB: "Racine du projet" },
                { aspect: "Exécution", valueA: "Runners", valueB: "Agents/Nodes" },
                { aspect: "Étapes", valueA: "stages:", valueB: "stages { }" }
            ]
        },
        {
            itemA: "JAR (Java Archive)",
            itemB: "WAR (Web Archive)",
            comparison: [
                { aspect: "Usage", valueA: "Application standalone", valueB: "Déploiement sur serveur (Tomcat)" },
                { aspect: "Tomcat", valueA: "Embarqué", valueB: "Externe" },
                { aspect: "Commande", valueA: "java -jar app.jar", valueB: "Copie dans webapps/" },
                { aspect: "pom.xml", valueA: "<packaging>jar</packaging>", valueB: "<packaging>war</packaging>" }
            ]
        },
        {
            itemA: "Merge",
            itemB: "Rebase",
            comparison: [
                { aspect: "Historique", valueA: "Conservé avec commit de fusion", valueB: "Linéaire, réécrit" },
                { aspect: "Lisibilité", valueA: "Historique réel mais bruité", valueB: "Propre et linéaire" },
                { aspect: "Risque", valueA: "Moins risqué", valueB: "Peut nécessiter force-push" },
                { aspect: "Collaboratif", valueA: "Préféré en équipe", valueB: "Attention si branche partagée" }
            ]
        },
        {
            itemA: "SAST (Static)",
            itemB: "DAST (Dynamic)",
            comparison: [
                { aspect: "Analyse", valueA: "Code source", valueB: "Application en exécution" },
                { aspect: "Quand", valueA: "Pendant le build", valueB: "Après déploiement" },
                { aspect: "Exemples", valueA: "Semgrep, SonarCloud", valueB: "OWASP ZAP, Burp Suite" },
                { aspect: "Trouve", valueA: "SQL Injection dans code", valueB: "XSS exploitable" }
            ]
        },
        {
            itemA: "npm install",
            itemB: "npm ci",
            comparison: [
                { aspect: "Source", valueA: "package.json", valueB: "package-lock.json" },
                { aspect: "Déterminisme", valueA: "Peut varier", valueB: "Exactement reproductible" },
                { aspect: "node_modules", valueA: "Met à jour", valueB: "Supprime et réinstalle" },
                { aspect: "Usage", valueA: "Développement", valueB: "CI/CD pipelines" }
            ]
        },
        {
            itemA: "scope compile (Maven)",
            itemB: "scope provided (Maven)",
            comparison: [
                { aspect: "Inclus dans le packaging", valueA: "Oui", valueB: "Non" },
                { aspect: "Fourni par", valueA: "Le JAR/WAR", valueB: "Le serveur (Tomcat)" },
                { aspect: "Exemple usage", valueA: "Dépendances métier", valueB: "spring-boot-starter-tomcat" },
                { aspect: "Taille artefact", valueA: "Plus grande", valueB: "Plus petite" }
            ]
        },
        {
            itemA: "SonarCloud",
            itemB: "SonarQube",
            comparison: [
                { aspect: "Hébergement", valueA: "SaaS (cloud)", valueB: "Self-hosted (serveur)" },
                { aspect: "URL", valueA: "sonarcloud.io", valueB: "http://localhost:9000" },
                { aspect: "Maintenance", valueA: "Aucune", valueB: "À gérer" },
                { aspect: "Coût", valueA: "Gratuit open source", valueB: "Gratuit Community" }
            ]
        }
    ],

    // ========== RÉFLEXES "SI TU VOIS X → PENSE Y" ==========
    reflexes: [
        { trigger: "mvn clean package", think: "Nettoie target/, compile, exécute tests, crée JAR/WAR" },
        { trigger: "-DskipTests", think: "Sauter les tests (pas les compiler)" },
        { trigger: "stages:", think: "Fichier GitLab CI/CD (.gitlab-ci.yml)" },
        { trigger: "stage { }", think: "Fichier Jenkins (Jenkinsfile, Groovy)" },
        { trigger: "image:", think: "Image Docker pour le job GitLab" },
        { trigger: "artifacts:", think: "Fichiers à conserver entre stages (ex: *.war)" },
        { trigger: "needs:", think: "DAG - exécuter dès que la dépendance est prête" },
        { trigger: "only: [main]", think: "Job exécuté uniquement sur branche main" },
        { trigger: "tags: [local-shell]", think: "Runner shell local (pour Tomcat local)" },
        { trigger: "<packaging>war</packaging>", think: "Déploiement Tomcat externe" },
        { trigger: "SpringBootServletInitializer", think: "Classe nécessaire pour WAR sur Tomcat" },
        { trigger: "scope provided", think: "Dépendance fournie par le serveur (Tomcat)" },
        { trigger: "sonar:sonar", think: "Goal Maven pour analyse SonarCloud" },
        { trigger: "SONAR_TOKEN", think: "Variable CI/CD pour authentification SonarCloud" },
        { trigger: "CWE-89", think: "SQL Injection" },
        { trigger: "Gitleaks", think: "Outil Secret Detection GitLab" },
        { trigger: "Semgrep", think: "Outil SAST GitLab" },
        { trigger: "1 vuln = 1 branche = 1 MR", think: "Règle DevSecOps de correction" },
        { trigger: ".env dans .gitignore", think: "Ne pas versionner les secrets" },
        { trigger: "ansible all -m ping", think: "Tester connectivité SSH Ansible" },
        { trigger: "inventory", think: "Fichier listant les hosts Ansible" },
        { trigger: "playbook", think: "Fichier YAML Ansible avec tasks" },
        { trigger: "module: copy", think: "Ansible: copier fichier vers host" },
        { trigger: "withSonarQubeEnv", think: "Jenkins DSL pour analyse SonarCloud" }
    ],

    // ========== PIÈGES COURANTS ==========
    commonMistakes: [
        {
            mistake: "Confondre stages et jobs",
            correction: "Stages = étapes séquentielles (build, test). Jobs = tâches dans un stage (parallèles).",
            example: "build-springboot et build-nodejs sont des JOBS dans le STAGE 'build'"
        },
        {
            mistake: "Utiliser --skip-tests au lieu de -DskipTests",
            correction: "Maven utilise la syntaxe -D pour les propriétés système.",
            example: "mvn package -DskipTests (correct) vs mvn package --skip-tests (incorrect)"
        },
        {
            mistake: "Oublier SpringBootServletInitializer pour WAR",
            correction: "Cette classe est obligatoire pour que Spring Boot démarre dans Tomcat externe.",
            example: "public class ServletInitializer extends SpringBootServletInitializer { ... }"
        },
        {
            mistake: "Utiliser un Docker runner pour déployer sur Tomcat local",
            correction: "Un Shell runner avec tag approprié est nécessaire pour accéder aux ressources locales.",
            example: "tags: [local-shell]"
        },
        {
            mistake: "Confondre sonar:sonar et sonar:scan",
            correction: "Le goal correct est sonar:sonar, sonar:scan n'existe pas.",
            example: "mvn sonar:sonar -Dsonar.token=$SONAR_TOKEN"
        },
        {
            mistake: "Encoder un secret en base64 pour le sécuriser",
            correction: "Base64 n'est pas du chiffrement, le secret reste visible. Utiliser les variables CI/CD.",
            example: "Créer variable MASKED dans GitLab CI/CD > Settings > Variables"
        },
        {
            mistake: "Confondre pom.xml et package.json",
            correction: "pom.xml = Maven (Java), package.json = npm (Node.js)",
            example: "Spring Boot → pom.xml, React → package.json"
        },
        {
            mistake: "Oublier GIT_DEPTH: '0' pour SonarCloud",
            correction: "SonarCloud nécessite l'historique Git complet pour certaines analyses.",
            example: "variables: GIT_DEPTH: '0'"
        },
        {
            mistake: "Penser que 'only:' et 'rules:' sont identiques",
            correction: "'rules:' est plus flexible et moderne, permet des conditions complexes.",
            example: "only: est déprécié au profit de rules:"
        },
        {
            mistake: "Confondre artifacts et cache",
            correction: "Artifacts = résultats de build partagés. Cache = accélération (dépendances).",
            example: "artifacts: paths: ['target/*.war'] vs cache: paths: ['.m2/repository']"
        }
    ],

    // ========== COMMANDES ESSENTIELLES ==========
    essentialCommands: {
        maven: [
            { cmd: "mvn clean", desc: "Supprime le dossier target/" },
            { cmd: "mvn compile", desc: "Compile le code source" },
            { cmd: "mvn test", desc: "Exécute les tests unitaires" },
            { cmd: "mvn package", desc: "Crée le JAR/WAR" },
            { cmd: "mvn clean package -DskipTests", desc: "Build complet sans tests" },
            { cmd: "mvn sonar:sonar", desc: "Lance analyse SonarCloud" }
        ],
        dotnet: [
            { cmd: "dotnet restore", desc: "Restaure les dépendances NuGet" },
            { cmd: "dotnet build", desc: "Compile le projet" },
            { cmd: "dotnet run", desc: "Exécute le projet" },
            { cmd: "dotnet test", desc: "Exécute les tests" },
            { cmd: "dotnet build --configuration Release", desc: "Build en mode release" }
        ],
        npm: [
            { cmd: "npm init", desc: "Initialise un projet Node.js" },
            { cmd: "npm install", desc: "Installe les dépendances" },
            { cmd: "npm ci", desc: "Installation déterministe (CI/CD)" },
            { cmd: "npm run build", desc: "Exécute le script build" },
            { cmd: "npm test", desc: "Exécute les tests" }
        ],
        git: [
            { cmd: "git init", desc: "Initialise un dépôt" },
            { cmd: "git add .", desc: "Stage tous les fichiers" },
            { cmd: "git commit -m 'msg'", desc: "Crée un commit" },
            { cmd: "git push", desc: "Pousse vers remote" },
            { cmd: "git checkout -b branche", desc: "Crée et switch vers branche" }
        ],
        ansible: [
            { cmd: "ansible --version", desc: "Vérifie l'installation" },
            { cmd: "ansible all -m ping", desc: "Teste connectivité" },
            { cmd: "ansible-playbook playbook.yml", desc: "Exécute un playbook" },
            { cmd: "ansible all -m shell -a 'cmd'", desc: "Exécute commande sur hosts" }
        ],
        docker: [
            { cmd: "docker --version", desc: "Vérifie l'installation" },
            { cmd: "docker run hello-world", desc: "Teste Docker" },
            { cmd: "docker pull image:tag", desc: "Télécharge une image" },
            { cmd: "docker ps", desc: "Liste les conteneurs actifs" }
        ]
    }
};

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { summaryData };
}
