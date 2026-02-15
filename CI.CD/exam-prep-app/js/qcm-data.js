// QCM Data - Questions difficiles pour examen CI/CD
// 30+ questions couvrant les 6 ateliers

const qcmQuestions = [
  // ========== ATELIER 1: ENVIRONNEMENT & OUTILS ==========
  {
    id: 1,
    category: "Atelier 1 - Environnement",
    question: "Dans un projet Maven, quel fichier définit les dépendances, plugins et configuration du build ?",
    options: [
      { letter: "A", text: "build.gradle (Configuration Gradle)" },
      { letter: "B", text: "pom.xml (Project Object Model)" },
      { letter: "C", text: "package.json (Configuration Node)" },
      { letter: "D", text: "settings.xml (Global Config)" }
    ],
    correct: "B",
    justification: "Le fichier pom.xml (Project Object Model) est le fichier de configuration central de Maven qui définit les dépendances, plugins, et phases de build.",
    traps: {
      A: "build.gradle est utilisé par Gradle, pas Maven - confusion fréquente entre les deux outils de build Java.",
      C: "package.json est le fichier de configuration pour npm/Node.js, pas pour les projets Java.",
      D: "settings.xml configure Maven globalement (credentials, proxies) mais ne définit pas les dépendances du projet."
    }
  },
  {
    id: 2,
    category: "Atelier 1 - Environnement",
    question: "Quelle commande Maven permet de compiler le code source SANS exécuter les tests ?",
    options: [
      { letter: "A", text: "mvn compile -DskipTests=true" },
      { letter: "B", text: "mvn clean package -DskipTests" },
      { letter: "C", text: "mvn build --no-tests --force" },
      { letter: "D", text: "mvn package --skip-tests all" }
    ],
    correct: "B",
    justification: "mvn clean package -DskipTests nettoie, compile et package le projet en sautant l'exécution des tests. L'option -DskipTests est la syntaxe correcte.",
    traps: {
      A: "mvn compile ne fait que compiler, sans packager. De plus, elle n'inclut pas l'option pour skip les tests.",
      C: "La syntaxe --no-tests n'existe pas dans Maven. C'est une confusion avec d'autres outils.",
      D: "La syntaxe --skip-tests est incorrecte. Maven utilise -DskipTests (avec D majuscule)."
    }
  },
  {
    id: 3,
    category: "Atelier 1 - Environnement",
    question: "Pour un projet .NET, quelle commande restaure les dépendances NuGet avant la compilation ?",
    options: [
      { letter: "A", text: "dotnet install" },
      { letter: "B", text: "nuget restore" },
      { letter: "C", text: "dotnet restore" },
      { letter: "D", text: "dotnet packages" }
    ],
    correct: "C",
    justification: "dotnet restore télécharge et restaure toutes les dépendances NuGet définies dans le fichier .csproj.",
    traps: {
      A: "dotnet install n'existe pas. C'est une confusion avec npm install.",
      B: "nuget restore existe mais n'est pas la commande dotnet CLI standard utilisée dans les pipelines modernes.",
      D: "dotnet packages n'est pas une commande valide."
    }
  },
  {
    id: 4,
    category: "Atelier 1 - Environnement",
    question: "Quel plugin Jenkins est nécessaire pour exécuter des builds Maven dans les pipelines ?",
    options: [
      { letter: "A", text: "Maven Builder" },
      { letter: "B", text: "Maven Integration" },
      { letter: "C", text: "Apache Maven" },
      { letter: "D", text: "Build Maven" }
    ],
    correct: "B",
    justification: "Maven Integration est le plugin officiel Jenkins pour l'intégration de Maven, permettant la configuration des outils Maven et l'exécution des goals.",
    traps: {
      A: "Maven Builder n'est pas le nom officiel du plugin.",
      C: "Apache Maven n'est pas un nom de plugin Jenkins.",
      D: "Build Maven n'existe pas comme plugin Jenkins."
    }
  },
  {
    id: 5,
    category: "Atelier 1 - Environnement",
    question: "Dans Node.js, quelle est la différence entre 'npm install' et 'npm ci' ?",
    options: [
      { letter: "A", text: "npm ci installe uniquement les dépendances de développement (devDependencies)" },
      { letter: "B", text: "npm ci utilise package-lock.json pour une installation déterministe (CI/CD)" },
      { letter: "C", text: "npm install est recommandé pour les pipelines CI/CD car il est plus rapide" },
      { letter: "D", text: "npm ci génère automatiquement un nouveau fichier package-lock.json" }
    ],
    correct: "B",
    justification: "npm ci (Clean Install) utilise package-lock.json pour garantir des installations identiques à chaque exécution, idéal pour les pipelines CI/CD.",
    traps: {
      A: "npm ci installe TOUTES les dépendances, pas seulement celles de développement.",
      C: "C'est l'inverse : npm ci est souvent plus rapide car il supprime node_modules et fait une installation propre.",
      D: "npm ci requiert que package.json et package-lock.json existent déjà."
    }
  },

  // ========== ATELIER 2: GITLAB CI/CD & DOCKER ==========
  {
    id: 6,
    category: "Atelier 2 - GitLab CI/CD",
    question: "Dans un fichier .gitlab-ci.yml, quel mot-clé définit les étapes du pipeline dans l'ordre ?",
    options: [
      { letter: "A", text: "phases" },
      { letter: "B", text: "steps" },
      { letter: "C", text: "stages" },
      { letter: "D", text: "jobs" }
    ],
    correct: "C",
    justification: "Le mot-clé 'stages' définit les étapes du pipeline GitLab CI/CD et leur ordre d'exécution (ex: build, test, deploy).",
    traps: {
      A: "phases est utilisé dans Maven, pas dans GitLab CI/CD.",
      B: "steps est utilisé dans Jenkins ou GitHub Actions, pas GitLab.",
      D: "jobs définit les tâches individuelles, pas les étapes globales du pipeline."
    }
  },
  {
    id: 7,
    category: "Atelier 2 - GitLab CI/CD",
    question: "Quelle clé GitLab CI/CD permet de spécifier l'image Docker à utiliser pour un job ?",
    options: [
      { letter: "A", text: "container:" },
      { letter: "B", text: "docker:" },
      { letter: "C", text: "image:" },
      { letter: "D", text: "from:" }
    ],
    correct: "C",
    justification: "La clé 'image:' spécifie l'image Docker dans laquelle le job sera exécuté (ex: image: maven:3.9-eclipse-temurin-17).",
    traps: {
      A: "container: n'est pas une clé GitLab CI/CD valide.",
      B: "docker: n'est pas utilisé pour spécifier l'image du job.",
      D: "from: est utilisé dans Dockerfile, pas dans .gitlab-ci.yml."
    }
  },
  {
    id: 8,
    category: "Atelier 2 - GitLab CI/CD",
    question: "Dans GitLab CI/CD, que permet la clé 'artifacts' ?",
    options: [
      { letter: "A", text: "Télécharger automatiquement les dépendances externes du projet" },
      { letter: "B", text: "Conserver et partager des fichiers générés entre jobs/stages" },
      { letter: "C", text: "Définir les variables d'environnement globales pour le pipeline" },
      { letter: "D", text: "Configurer le cache Docker pour accélérer les builds futurs" }
    ],
    correct: "B",
    justification: "Les artifacts permettent de conserver des fichiers générés (ex: .war, .jar) et de les partager entre les jobs ou les stages suivants.",
    traps: {
      A: "Les dépendances sont gérées par les gestionnaires de packages (Maven, npm), pas par artifacts.",
      C: "Les variables d'environnement sont définies avec 'variables:'.",
      D: "Le cache Docker est géré différemment, avec 'cache:' pour les fichiers."
    }
  },
  {
    id: 9,
    category: "Atelier 2 - GitLab CI/CD",
    question: "Quelle image Docker est recommandée pour builder un projet Spring Boot dans GitLab CI ?",
    options: [
      { letter: "A", text: "openjdk:17-jdk-alpine" },
      { letter: "B", text: "maven:3.9-eclipse-temurin-17" },
      { letter: "C", text: "springboot:latest-stable" },
      { letter: "D", text: "java:17-maven-builder" }
    ],
    correct: "B",
    justification: "maven:3.9-eclipse-temurin-17 inclut à la fois Maven et le JDK, parfait pour compiler des projets Spring Boot.",
    traps: {
      A: "openjdk:17 contient le JDK mais pas Maven, donc mvn ne fonctionnera pas.",
      C: "springboot:latest n'est pas une image Docker officielle.",
      D: "java:17-maven n'est pas le format standard des images Docker officielles."
    }
  },
  {
    id: 10,
    category: "Atelier 2 - GitLab CI/CD",
    question: "Que fait la clé 'needs' dans un job GitLab CI/CD ?",
    options: [
      { letter: "A", text: "Définit les pré-requis système obligatoires pour le job" },
      { letter: "B", text: "Permet d'exécuter un job sans attendre la fin du stage précédent (DAG)" },
      { letter: "C", text: "Spécifie les tags du runner requis pour l'exécution" },
      { letter: "D", text: "Configure les secrets et variables nécessaires au job" }
    ],
    correct: "B",
    justification: "'needs' crée un DAG (Directed Acyclic Graph) permettant à un job de démarrer dès que ses dépendances spécifiques sont terminées, sans attendre tout le stage.",
    traps: {
      A: "Les dépendances système sont gérées dans le script ou via l'image Docker.",
      C: "Les tags du runner sont définis avec 'tags:', pas 'needs:'.",
      D: "Les secrets sont gérés via les variables CI/CD de GitLab."
    }
  },
  {
    id: 11,
    category: "Atelier 2 - Docker",
    question: "Quelle commande vérifie que Docker est correctement installé et fonctionnel ?",
    options: [
      { letter: "A", text: "docker status" },
      { letter: "B", text: "docker run hello-world" },
      { letter: "C", text: "docker check" },
      { letter: "D", text: "docker test" }
    ],
    correct: "B",
    justification: "docker run hello-world télécharge et exécute un conteneur de test officiel qui confirme le bon fonctionnement de Docker.",
    traps: {
      A: "docker status n'est pas une commande Docker valide.",
      C: "docker check n'existe pas.",
      D: "docker test n'est pas une commande Docker."
    }
  },

  // ========== ATELIER 3: TOMCAT & DÉPLOIEMENT WAR ==========
  {
    id: 12,
    category: "Atelier 3 - Tomcat",
    question: "Pour déployer une application Spring Boot sur Tomcat externe, quel type de packaging faut-il utiliser ?",
    options: [
      { letter: "A", text: "<packaging>jar</packaging>" },
      { letter: "B", text: "<packaging>war</packaging>" },
      { letter: "C", text: "<packaging>ear</packaging>" },
      { letter: "D", text: "<packaging>zip</packaging>" }
    ],
    correct: "B",
    justification: "Le packaging WAR (Web Application Archive) est nécessaire pour déployer sur un serveur d'applications comme Tomcat.",
    traps: {
      A: "JAR est le format par défaut pour Spring Boot standalone, mais ne se déploie pas sur Tomcat externe.",
      C: "EAR (Enterprise Archive) est pour les applications Java EE complètes, pas Spring Boot.",
      D: "ZIP n'est pas un format de packaging Maven standard."
    }
  },
  {
    id: 13,
    category: "Atelier 3 - Tomcat",
    question: "Pourquoi faut-il déclarer spring-boot-starter-tomcat avec scope 'provided' pour un déploiement sur Tomcat externe ?",
    options: [
      { letter: "A", text: "Pour éviter les conflits de version avec le serveur Tomcat embarqué dans le JAR" },
      { letter: "B", text: "Parce que le serveur Tomcat externe fournit déjà ces bibliothèques à l'exécution" },
      { letter: "C", text: "Pour réduire la taille du fichier WAR final en excluant ces librairies" },
      { letter: "D", text: "Pour activer le mode debug du plugin Tomcat Maven au déploiement" }
    ],
    correct: "D",
    justification: "Le scope 'provided' indique que Tomcat fournira ces dépendances à l'exécution. Cela évite conflits, inclut les bonnes bibliothèques, et réduit la taille du WAR.",
    traps: {
      A: "Partiellement vrai mais incomplet.",
      B: "Partiellement vrai mais incomplet.",
      C: "Partiellement vrai mais incomplet."
    }
  },
  {
    id: 14,
    category: "Atelier 3 - Tomcat",
    question: "Quelle classe doit être créée pour permettre à Spring Boot de s'initialiser dans un conteneur Servlet externe ?",
    options: [
      { letter: "A", text: "TomcatInitializer" },
      { letter: "B", text: "WebApplicationInitializer" },
      { letter: "C", text: "ServletInitializer extends SpringBootServletInitializer" },
      { letter: "D", text: "BootstrapServlet" }
    ],
    correct: "C",
    justification: "Une classe étendant SpringBootServletInitializer (souvent nommée ServletInitializer) est nécessaire pour l'initialisation de Spring Boot dans Tomcat.",
    traps: {
      A: "TomcatInitializer n'est pas une classe standard Spring Boot.",
      B: "WebApplicationInitializer est une interface Spring, mais pas la bonne approche pour Spring Boot.",
      D: "BootstrapServlet n'existe pas dans ce contexte."
    }
  },
  {
    id: 15,
    category: "Atelier 3 - Tomcat",
    question: "Dans quel dossier Tomcat faut-il copier le fichier .war pour le déployer ?",
    options: [
      { letter: "A", text: "/var/lib/tomcat/deploy/" },
      { letter: "B", text: "/var/lib/tomcat/webapps/" },
      { letter: "C", text: "/var/lib/tomcat/applications/" },
      { letter: "D", text: "/var/lib/tomcat/wars/" }
    ],
    correct: "B",
    justification: "Le dossier webapps/ est le répertoire de déploiement par défaut de Tomcat où les fichiers WAR sont automatiquement déployés.",
    traps: {
      A: "Le dossier deploy/ n'est pas le standard Tomcat.",
      C: "applications/ n'est pas un dossier Tomcat standard.",
      D: "wars/ n'existe pas dans la structure Tomcat."
    }
  },
  {
    id: 16,
    category: "Atelier 3 - Tomcat",
    question: "Quelle clé GitLab CI/CD permet de s'assurer qu'un job de déploiement récupère les artifacts d'un job de build précédent ?",
    options: [
      { letter: "A", text: "dependencies: [job: build, artifacts: true]" },
      { letter: "B", text: "needs: [{job: 'build', artifacts: true}]" },
      { letter: "C", text: "artifacts: {download: true, from: 'build'}" },
      { letter: "D", text: "get_artifacts: {job: 'build', required: true}" }
    ],
    correct: "B",
    justification: "La syntaxe 'needs' avec 'artifacts: true' permet de récupérer explicitement les artifacts d'un job spécifique (DAG).",
    traps: {
      A: "dependencies: existe mais 'needs' avec artifacts est plus explicite pour le DAG.",
      C: "Cette syntaxe n'existe pas dans GitLab CI/CD.",
      D: "get_artifacts n'est pas une clé valide."
    }
  },

  // ========== ATELIER 4: SONARCLOUD / SONARQUBE ==========
  {
    id: 17,
    category: "Atelier 4 - SonarCloud",
    question: "Quelle variable d'environnement GitLab CI/CD stocke le token d'authentification SonarCloud ?",
    options: [
      { letter: "A", text: "SONAR_PASSWORD" },
      { letter: "B", text: "SONAR_TOKEN" },
      { letter: "C", text: "SONAR_API_KEY" },
      { letter: "D", text: "SONARCLOUD_SECRET" }
    ],
    correct: "B",
    justification: "SONAR_TOKEN est la variable standard pour stocker le token d'authentification SonarCloud dans GitLab CI/CD.",
    traps: {
      A: "SonarCloud utilise des tokens, pas des mots de passe traditionnels.",
      C: "SONAR_API_KEY n'est pas le nom de variable standard.",
      D: "SONARCLOUD_SECRET n'est pas une convention utilisée."
    }
  },
  {
    id: 18,
    category: "Atelier 4 - SonarCloud",
    question: "Quel goal Maven exécute l'analyse SonarCloud ?",
    options: [
      { letter: "A", text: "mvn sonar:analyze" },
      { letter: "B", text: "mvn sonar:scan" },
      { letter: "C", text: "mvn sonar:sonar" },
      { letter: "D", text: "mvn sonarcloud:check" }
    ],
    correct: "C",
    justification: "Le goal 'sonar:sonar' du plugin Maven SonarQube exécute l'analyse de code et envoie les résultats à SonarCloud.",
    traps: {
      A: "sonar:analyze n'est pas le goal correct.",
      B: "sonar:scan n'existe pas dans le plugin Maven SonarQube.",
      D: "sonarcloud:check n'est pas un goal Maven valide."
    }
  },
  {
    id: 19,
    category: "Atelier 4 - SonarCloud",
    question: "Quelle propriété Maven spécifie l'URL du serveur SonarCloud ?",
    options: [
      { letter: "A", text: "-Dsonar.server.url" },
      { letter: "B", text: "-Dsonar.host.url" },
      { letter: "C", text: "-Dsonar.cloud.url" },
      { letter: "D", text: "-Dsonar.endpoint" }
    ],
    correct: "B",
    justification: "-Dsonar.host.url spécifie l'URL du serveur SonarCloud (https://sonarcloud.io).",
    traps: {
      A: "sonar.server.url n'est pas la propriété correcte.",
      C: "sonar.cloud.url n'existe pas.",
      D: "sonar.endpoint n'est pas une propriété SonarQube valide."
    }
  },
  {
    id: 20,
    category: "Atelier 4 - SonarCloud",
    question: "Qu'est-ce qu'un 'Code Smell' détecté par SonarCloud ?",
    options: [
      { letter: "A", text: "Une faille de sécurité critique" },
      { letter: "B", text: "Un problème de maintenabilité qui n'est pas un bug" },
      { letter: "C", text: "Un test unitaire qui échoue" },
      { letter: "D", text: "Une dépendance obsolète" }
    ],
    correct: "B",
    justification: "Un Code Smell est un indicateur de mauvaise pratique de code affectant la maintenabilité, sans être un bug ou une vulnérabilité.",
    traps: {
      A: "Les failles de sécurité sont classées comme 'Vulnerabilities', pas Code Smells.",
      C: "Les tests qui échouent sont des erreurs de build, pas des Code Smells.",
      D: "Les dépendances obsolètes peuvent être détectées mais ne sont pas des Code Smells."
    }
  },
  {
    id: 21,
    category: "Atelier 4 - SonarCloud",
    question: "Dans Jenkins, comment configure-t-on le serveur SonarCloud ?",
    options: [
      { letter: "A", text: "Manage Jenkins → Global Tool Configuration" },
      { letter: "B", text: "Manage Jenkins → Configure System → SonarQube servers" },
      { letter: "C", text: "Manage Jenkins → Plugins → SonarCloud Settings" },
      { letter: "D", text: "Job Configuration → SonarCloud Section" }
    ],
    correct: "B",
    justification: "La configuration du serveur SonarCloud se fait dans Configure System → SonarQube servers avec l'URL et le credential token.",
    traps: {
      A: "Global Tool Configuration est pour les outils comme Maven ou JDK, pas les serveurs SonarCloud.",
      C: "La section Plugins ne contient pas de settings SonarCloud.",
      D: "La configuration serveur est globale, pas au niveau du job."
    }
  },

  // ========== ATELIER 5: DEVSECOPS ==========
  {
    id: 22,
    category: "Atelier 5 - DevSecOps",
    question: "Que signifie SAST dans le contexte DevSecOps ?",
    options: [
      { letter: "A", text: "Security Analysis and Software Testing" },
      { letter: "B", text: "Static Application Security Testing" },
      { letter: "C", text: "Secure Application Scanning Tool" },
      { letter: "D", text: "Source Application Security Test" }
    ],
    correct: "B",
    justification: "SAST (Static Application Security Testing) analyse le code source pour détecter des vulnérabilités sans exécuter l'application.",
    traps: {
      A: "Ce n'est pas le bon acronyme.",
      C: "SAST n'est pas un outil spécifique mais une catégorie de testing.",
      D: "Ce n'est pas la définition correcte."
    }
  },
  {
    id: 23,
    category: "Atelier 5 - DevSecOps",
    question: "Quelle vulnérabilité SAST est identifiée par CWE-89 ?",
    options: [
      { letter: "A", text: "Cross-Site Scripting (XSS) via DOM" },
      { letter: "B", text: "SQL Injection via paramètres non échappés" },
      { letter: "C", text: "Buffer Overflow de la pile d'exécution" },
      { letter: "D", text: "Broken Authentication et Session hijacking" }
    ],
    correct: "B",
    justification: "CWE-89 identifie les vulnérabilités d'injection SQL causées par la concaténation de paramètres utilisateur dans les requêtes SQL.",
    traps: {
      A: "XSS est CWE-79, pas CWE-89.",
      C: "Buffer Overflow a un CWE différent.",
      D: "Broken Authentication n'est pas CWE-89."
    }
  },
  {
    id: 24,
    category: "Atelier 5 - DevSecOps",
    question: "Quel outil GitLab détecte les secrets (clés API, tokens) codés en dur dans le code ?",
    options: [
      { letter: "A", text: "Semgrep (Analyse SAST généraliste)" },
      { letter: "B", text: "OWASP Dependency Check (Scan dépendances)" },
      { letter: "C", text: "Gitleaks (Détection de secrets hardcodés)" },
      { letter: "D", text: "Trivy (Scan de conteneurs et fs)" }
    ],
    correct: "C",
    justification: "Gitleaks est l'outil utilisé par GitLab Secret Detection pour détecter les secrets hardcodés comme les clés AWS ou tokens.",
    traps: {
      A: "Semgrep est utilisé pour SAST, pas Secret Detection.",
      B: "OWASP Dependency Check analyse les dépendances vulnérables, pas les secrets.",
      D: "Trivy analyse les vulnérabilités des conteneurs Docker, pas les secrets dans le code."
    }
  },
  {
    id: 25,
    category: "Atelier 5 - DevSecOps",
    question: "Selon les bonnes pratiques DevSecOps, comment doit-on corriger chaque vulnérabilité détectée ?",
    options: [
      { letter: "A", text: "Regrouper toutes les corrections dans une seule 'release branch'" },
      { letter: "B", text: "Une vulnérabilité = une branche = une Merge Request" },
      { letter: "C", text: "Commit direct sur main pour corriger au plus vite (Hotfix)" },
      { letter: "D", text: "Ignorer les vulnérabilités non-critiques temporairement" }
    ],
    correct: "B",
    justification: "La règle '1 vulnérabilité = 1 branche = 1 MR' permet un suivi précis, une revue de code ciblée et une traçabilité complète.",
    traps: {
      A: "Regrouper les corrections rend le suivi et la revue difficiles.",
      C: "Les commits directs sur main violent les bonnes pratiques de protection des branches.",
      D: "Aucune vulnérabilité ne doit être ignorée sans analyse."
    }
  },
  {
    id: 26,
    category: "Atelier 5 - DevSecOps",
    question: "Comment corriger un secret détecté dans un fichier .env versionné ?",
    options: [
      { letter: "A", text: "Supprimer le secret du fichier et laisser l'historique tel quel" },
      { letter: "B", text: "Ajouter .env au .gitignore et utiliser des variables CI/CD" },
      { letter: "C", text: "Renommer le fichier en .env.safe et le chiffrer manuellement" },
      { letter: "D", text: "Encoder le secret en base64 dans le fichier pour le masquer" }
    ],
    correct: "B",
    justification: "Il faut retirer .env du tracking Git, l'ajouter au .gitignore, et utiliser les variables CI/CD (masked) pour les secrets.",
    traps: {
      A: "Supprimer sans ajouter au .gitignore n'empêche pas le ré-ajout accidentel.",
      C: "Renommer ne résout pas le problème de sécurité.",
      D: "Base64 n'est pas un chiffrement, le secret reste visible."
    }
  },
  {
    id: 27,
    category: "Atelier 5 - DevSecOps",
    question: "Quelle est la différence principale entre Merge et Rebase ?",
    options: [
      { letter: "A", text: "Merge est plus rapide mais perd l'historique, Rebase est plus lent" },
      { letter: "B", text: "Rebase crée un historique linéaire, Merge garde l'historique de fusion" },
      { letter: "C", text: "Merge est interdit sur main, Rebase est la seule option valide" },
      { letter: "D", text: "Rebase ne fonctionne que localement, Merge fonctionne sur le serveur" }
    ],
    correct: "B",
    justification: "Rebase réécrit l'historique pour créer une ligne droite de commits, tandis que Merge conserve l'historique avec un commit de fusion visible.",
    traps: {
      A: "La vitesse n'est pas la différence principale.",
      C: "Merge est autorisé sur les branches protégées via MR.",
      D: "Rebase fonctionne parfaitement avec GitLab."
    }
  },

  // ========== ATELIER 6: ANSIBLE ==========
  {
    id: 28,
    category: "Atelier 6 - Ansible",
    question: "Quel fichier Ansible définit les machines cibles (hosts) à configurer ?",
    options: [
      { letter: "A", text: "hosts.yml" },
      { letter: "B", text: "inventory" },
      { letter: "C", text: "targets.conf" },
      { letter: "D", text: "machines.ini" }
    ],
    correct: "B",
    justification: "Le fichier inventory (par défaut /etc/ansible/hosts ou un fichier personnalisé) liste les machines cibles avec leurs groupes.",
    traps: {
      A: "hosts.yml peut être un format mais 'inventory' est le terme générique.",
      C: "targets.conf n'est pas un fichier Ansible standard.",
      D: "machines.ini n'est pas utilisé par Ansible."
    }
  },
  {
    id: 29,
    category: "Atelier 6 - Ansible",
    question: "Quelle commande Ansible teste la connectivité SSH vers tous les hosts de l'inventory ?",
    options: [
      { letter: "A", text: "ansible all -m ssh-test" },
      { letter: "B", text: "ansible-ping --all" },
      { letter: "C", text: "ansible all -m ping" },
      { letter: "D", text: "ansible-check connectivity" }
    ],
    correct: "C",
    justification: "'ansible all -m ping' utilise le module ping pour tester la connexion SSH et la disponibilité de Python sur tous les hosts.",
    traps: {
      A: "ssh-test n'est pas un module Ansible.",
      B: "La syntaxe ansible-ping n'existe pas.",
      D: "ansible-check n'est pas une commande valide."
    }
  },
  {
    id: 30,
    category: "Atelier 6 - Ansible",
    question: "Comment s'appelle un fichier Ansible YAML définissant une série de tâches à exécuter ?",
    options: [
      { letter: "A", text: "Runbook" },
      { letter: "B", text: "Playbook" },
      { letter: "C", text: "Taskfile" },
      { letter: "D", text: "Recipe" }
    ],
    correct: "B",
    justification: "Un Playbook est un fichier YAML Ansible contenant des plays et des tasks à exécuter sur les hosts cibles.",
    traps: {
      A: "Runbook est un terme général d'opérations, pas spécifique à Ansible.",
      C: "Taskfile est utilisé par d'autres outils, pas Ansible.",
      D: "Recipe est terminologie Chef, pas Ansible."
    }
  },
  {
    id: 31,
    category: "Atelier 6 - Ansible",
    question: "Quel module Ansible permet de copier un fichier vers un host distant ?",
    options: [
      { letter: "A", text: "file" },
      { letter: "B", text: "copy" },
      { letter: "C", text: "transfer" },
      { letter: "D", text: "scp" }
    ],
    correct: "B",
    justification: "Le module 'copy' transfère des fichiers du contrôleur Ansible vers les machines cibles.",
    traps: {
      A: "Le module 'file' gère les permissions et la création de fichiers/dossiers, pas la copie.",
      C: "transfer n'est pas un module Ansible.",
      D: "scp n'est pas un module Ansible, c'est une commande système."
    }
  },
  {
    id: 32,
    category: "Atelier 6 - Ansible",
    question: "Dans un Jenkinsfile, comment exécuter un playbook Ansible sur une machine distante via SSH ?",
    options: [
      { letter: "A", text: "ansiblePlaybook playbook: 'deploy.yml'" },
      { letter: "B", text: "sh 'ssh user@host ansible-playbook playbook.yml'" },
      { letter: "C", text: "ansible { playbook 'deploy.yml' }" },
      { letter: "D", text: "runAnsible 'deploy.yml'" }
    ],
    correct: "B",
    justification: "Via SSH, on exécute ansible-playbook sur la machine contrôleur Ansible qui lancera ensuite le playbook vers les cibles.",
    traps: {
      A: "ansiblePlaybook est un DSL Jenkins Ansible plugin mais la question parle d'exécution SSH distante.",
      C: "Cette syntaxe n'est pas valide dans un Jenkinsfile.",
      D: "runAnsible n'est pas une commande Jenkins standard."
    }
  },

  // ========== QUESTIONS TRANSVERSALES / PIÈGES ==========
  {
    id: 33,
    category: "Questions transversales",
    question: "Quelle est la différence entre Jenkins et GitLab CI/CD dans la définition des pipelines ?",
    options: [
      { letter: "A", text: "Jenkins utilise YAML déclaratif, GitLab utilise Groovy scripté" },
      { letter: "B", text: "Jenkins utilise Jenkinsfile (Groovy), GitLab utilise .gitlab-ci.yml (YAML)" },
      { letter: "C", text: "Les deux utilisent exactement le même format standard (CNCF)" },
      { letter: "D", text: "GitLab n'a pas de pipeline code, tout se fait via l'interface UI" }
    ],
    correct: "B",
    justification: "Jenkins utilise un Jenkinsfile écrit en Groovy DSL, tandis que GitLab CI/CD utilise un fichier .gitlab-ci.yml au format YAML.",
    traps: {
      A: "C'est l'inverse : Jenkins utilise Groovy, GitLab utilise YAML.",
      C: "Les formats sont différents (Groovy vs YAML).",
      D: "GitLab a bien des pipelines composés de stages et jobs."
    }
  },
  {
    id: 34,
    category: "Questions transversales",
    question: "Quel fichier est équivalent au pom.xml pour un projet Node.js ?",
    options: [
      { letter: "A", text: "node.xml" },
      { letter: "B", text: "package.json" },
      { letter: "C", text: "npm.config" },
      { letter: "D", text: "dependencies.json" }
    ],
    correct: "B",
    justification: "package.json définit le projet Node.js, ses dépendances, scripts et métadonnées, similaire au rôle du pom.xml pour Maven.",
    traps: {
      A: "node.xml n'existe pas.",
      C: "npm.config n'est pas le fichier principal de configuration projet.",
      D: "dependencies.json n'est pas un fichier Node.js standard."
    }
  },
  {
    id: 35,
    category: "Questions transversales",
    question: "Quel est l'équivalent de 'mvn clean package' pour un projet .NET ?",
    options: [
      { letter: "A", text: "dotnet clean build" },
      { letter: "B", text: "dotnet restore && dotnet build --configuration Release" },
      { letter: "C", text: "dotnet package" },
      { letter: "D", text: "dotnet compile release" }
    ],
    correct: "B",
    justification: "'dotnet restore' restaure les dépendances et 'dotnet build --configuration Release' compile en mode release.",
    traps: {
      A: "La syntaxe 'dotnet clean build' n'est pas valide en une seule commande.",
      C: "'dotnet package' n'existe pas comme commande directe.",
      D: "'dotnet compile' n'est pas une commande valide."
    }
  },
  {
    id: 36,
    category: "Questions transversales",
    question: "Lors d'un déploiement GitLab CI/CD sur un serveur local (Tomcat), quel type de runner est nécessaire ?",
    options: [
      { letter: "A", text: "Docker runner avec accès privilégié (dind)" },
      { letter: "B", text: "Shell runner configuré avec le tag approprié" },
      { letter: "C", text: "Kubernetes runner sur le même cluster" },
      { letter: "D", text: "SSH runner connecté au localhost" }
    ],
    correct: "B",
    justification: "Un Shell runner local avec un tag spécifique (ex: local-shell) est nécessaire pour accéder aux ressources locales comme Tomcat.",
    traps: {
      A: "Docker runner isole le job et n'a pas accès direct aux services locaux.",
      C: "Kubernetes runner est pour les déploiements cloud, pas locaux.",
      D: "SSH runner exécuterait sur une machine distante, pas locale."
    }
  },
  {
    id: 37,
    category: "Questions transversales",
    question: "Quelle clé GitLab CI/CD restreint l'exécution d'un job à la branche main uniquement ?",
    options: [
      { letter: "A", text: "branch: main" },
      { letter: "B", text: "only: [main]" },
      { letter: "C", text: "restrict: main" },
      { letter: "D", text: "when: main" }
    ],
    correct: "B",
    justification: "'only:' avec la liste des branches (ex: [main]) restreint l'exécution du job à ces branches uniquement.",
    traps: {
      A: "'branch:' n'est pas une clé GitLab CI/CD valide.",
      C: "'restrict:' n'existe pas dans la syntaxe GitLab.",
      D: "'when:' définit des conditions différentes (on_success, manual, etc.)."
    }
  },
  {
    id: 38,
    category: "Questions transversales",
    question: "Dans le contexte CI/CD, que signifie 'artifact' ?",
    options: [
      { letter: "A", text: "Un fichier de configuration pour le runner" },
      { letter: "B", text: "Un fichier généré par le build (JAR/WAR) à conserver" },
      { letter: "C", text: "Un log détaillé de l'exécution du job" },
      { letter: "D", text: "Un secret chiffré stocké temporairement" }
    ],
    correct: "B",
    justification: "Un artifact est un fichier généré pendant le build (ex: .war, .jar) qui peut être conservé et réutilisé dans les stages suivants.",
    traps: {
      A: "Les fichiers YAML sont des configurations, pas des artifacts de build.",
      C: "Les logs ne sont pas des artifacts au sens CI/CD.",
      D: "Les secrets sont stockés dans les variables CI/CD, pas comme artifacts."
    }
  },
  {
    id: 39,
    category: "Questions transversales",
    question: "Quel est le rôle de la variable GIT_DEPTH dans GitLab CI/CD ?",
    options: [
      { letter: "A", text: "Définir la profondeur maximale des sous-modules" },
      { letter: "B", text: "Limiter le nombre de commits clonés (shallow clone)" },
      { letter: "C", text: "Configurer le niveau de logs Git" },
      { letter: "D", text: "Définir le nombre de branches à cloner" }
    ],
    correct: "B",
    justification: "GIT_DEPTH contrôle le nombre de commits historiques clonés. GIT_DEPTH: '0' clone tout l'historique (nécessaire pour SonarCloud).",
    traps: {
      A: "Les sous-modules ont leur propre configuration.",
      C: "GIT_DEPTH ne concerne pas les logs.",
      D: "GIT_DEPTH ne limite pas les branches mais les commits."
    }
  },
  {
    id: 40,
    category: "Questions transversales",
    question: "Pour protéger une branche dans GitLab, quel paramètre empêche les push directs ?",
    options: [
      { letter: "A", text: "Allowed to push: No one" },
      { letter: "B", text: "Push protection: enabled" },
      { letter: "C", text: "Direct push: false" },
      { letter: "D", text: "Merge only: true" }
    ],
    correct: "A",
    justification: "En configurant 'Allowed to push: No one' dans les branches protégées, seules les Merge Requests permettent de modifier la branche.",
    traps: {
      B: "Cette option n'existe pas avec cette syntaxe dans GitLab.",
      C: "Cette configuration n'existe pas.",
      D: "'Merge only' n'est pas un paramètre GitLab direct."
    }
  },

  // ========== NOUVELLES QUESTIONS PRATIQUES - ATELIER 1 ==========
  {
    id: 41,
    category: "Atelier 1 - Pratique",
    question: "Quelle commande permet de vérifier la version de Maven installée sur votre machine ?",
    options: [
      { letter: "A", text: "maven --version" },
      { letter: "B", text: "mvn -v" },
      { letter: "C", text: "mvn --check" },
      { letter: "D", text: "maven -version" }
    ],
    correct: "B",
    justification: "La commande 'mvn -v' ou 'mvn -version' affiche la version de Maven, le JDK utilisé et les chemins de configuration.",
    traps: {
      A: "L'exécutable s'appelle 'mvn', pas 'maven'.",
      C: "--check n'est pas une option Maven valide.",
      D: "L'exécutable n'est pas 'maven' mais 'mvn'."
    }
  },
  {
    id: 42,
    category: "Atelier 1 - Pratique",
    question: "Pour créer un nouveau projet console .NET, quelle commande utilise-t-on ?",
    options: [
      { letter: "A", text: "dotnet create application console" },
      { letter: "B", text: "dotnet init --type console" },
      { letter: "C", text: "dotnet new console -n MonProjet" },
      { letter: "D", text: "dotnet generate console-app" }
    ],
    correct: "C",
    justification: "'dotnet new console -n NomDuProjet' crée un nouveau projet console avec le nom spécifié.",
    traps: {
      A: "'create' n'est pas la commande correcte, c'est 'new'.",
      B: "'init' n'existe pas dans dotnet CLI.",
      D: "'generate' n'est pas une commande dotnet."
    }
  },
  {
    id: 43,
    category: "Atelier 1 - Pratique",
    question: "Où stocke-t-on la clé initiale pour déverrouiller Jenkins après installation sur Linux ?",
    options: [
      { letter: "A", text: "/etc/jenkins/config/adminPassword" },
      { letter: "B", text: "/var/lib/jenkins/secrets/initialAdminPassword" },
      { letter: "C", text: "/home/jenkins/.auth/admin-secret" },
      { letter: "D", text: "/opt/jenkins/security/init.key" }
    ],
    correct: "B",
    justification: "Le fichier initialAdminPassword se trouve dans /var/lib/jenkins/secrets/ et contient la clé pour le premier accès.",
    traps: {
      A: "Ce chemin n'est pas standard pour Jenkins.",
      C: "Jenkins s'installe dans /var/lib/ pas dans le home directory.",
      D: "Ce chemin n'existe pas par défaut."
    }
  },
  {
    id: 44,
    category: "Atelier 1 - Pratique",
    question: "Dans la structure du projet Maven créé, où se trouve le fichier pom.xml ?",
    options: [
      { letter: "A", text: "Dans le dossier src/" },
      { letter: "B", text: "À la racine du projet" },
      { letter: "C", text: "Dans le dossier config/" },
      { letter: "D", text: "Dans le dossier target/" }
    ],
    correct: "B",
    justification: "Le fichier pom.xml est toujours à la racine du projet Maven, au même niveau que les dossiers src/ et target/.",
    traps: {
      A: "src/ contient le code source, pas la configuration Maven.",
      C: "Maven n'utilise pas de dossier config/ par défaut.",
      D: "target/ contient les fichiers compilés, pas la configuration."
    }
  },
  {
    id: 45,
    category: "Atelier 1 - Pratique",
    question: "Quel fichier .NET définit les dépendances NuGet et le framework cible du projet ?",
    options: [
      { letter: "A", text: "packages.config" },
      { letter: "B", text: "nuget.json" },
      { letter: "C", text: "*.csproj" },
      { letter: "D", text: "dependencies.xml" }
    ],
    correct: "C",
    justification: "Le fichier .csproj (C# Project) définit le framework cible, les références NuGet et la configuration de build pour les projets .NET modernes.",
    traps: {
      A: "packages.config est l'ancien format, .csproj est le format moderne.",
      B: "nuget.json n'existe pas.",
      D: "dependencies.xml n'est pas un fichier .NET standard."
    }
  },

  // ========== QUESTIONS MAÎTRISE - ATELIER 2 ==========
  {
    id: 46,
    category: "Atelier 2 - Maîtrise",
    question: "Pourquoi les stages GitLab CI/CD s'exécutent-ils séquentiellement alors que les jobs d'un même stage s'exécutent en parallèle ?",
    options: [
      { letter: "A", text: "C'est une limitation technique de GitLab" },
      { letter: "B", text: "Pour garantir que les dépendances entre étapes sont respectées (ex: tester après avoir buildé)" },
      { letter: "C", text: "Pour économiser les ressources du runner" },
      { letter: "D", text: "Les stages s'exécutent aussi en parallèle" }
    ],
    correct: "B",
    justification: "Les stages sont séquentiels pour respecter les dépendances logiques (on ne peut pas tester du code non compilé). Les jobs parallèles dans un stage permettent d'optimiser le temps.",
    traps: {
      A: "C'est un choix de design logique, pas une limitation.",
      C: "Le parallélisme consomme plus de ressources, pas moins.",
      D: "Les stages sont bien séquentiels par défaut."
    }
  },
  {
    id: 47,
    category: "Atelier 2 - Maîtrise",
    question: "Quelle est la différence entre le mot-clé 'script' et 'before_script' dans .gitlab-ci.yml ?",
    options: [
      { letter: "A", text: "before_script s'exécute avant chaque job, script contient les commandes principales" },
      { letter: "B", text: "Ils sont identiques, c'est juste une question de style" },
      { letter: "C", text: "script s'exécute en premier, before_script en dernier" },
      { letter: "D", text: "before_script est optionnel et n'a aucun effet" }
    ],
    correct: "A",
    justification: "before_script s'exécute avant le script principal de chaque job, utile pour les préparations communes (cd, env setup).",
    traps: {
      B: "Ils ont des rôles distincts dans l'ordre d'exécution.",
      C: "C'est l'inverse: before_script AVANT script.",
      D: "before_script s'exécute bien et affecte le job."
    }
  },
  {
    id: 48,
    category: "Atelier 2 - Pratique",
    question: "Quelle commande est exécutée dans le job build-dotnet du .gitlab-ci.yml ?",
    options: [
      { letter: "A", text: "dotnet build" },
      { letter: "B", text: "dotnet restore && dotnet build --configuration Release" },
      { letter: "C", text: "msbuild /p:Configuration=Release" },
      { letter: "D", text: "dotnet compile" }
    ],
    correct: "B",
    justification: "Le script exécute d'abord 'dotnet restore' puis 'dotnet build --configuration Release' pour compiler en mode release.",
    traps: {
      A: "Il manque le restore et la configuration Release.",
      C: "msbuild est Windows, le TP utilise la CLI dotnet.",
      D: "'dotnet compile' n'existe pas."
    }
  },
  {
    id: 49,
    category: "Atelier 2 - Pratique",
    question: "Dans un Jenkinsfile, quelle syntaxe définit un stage ?",
    options: [
      { letter: "A", text: "stage: 'Build'" },
      { letter: "B", text: "stages { Build { } }" },
      { letter: "C", text: "stage('Build') { steps { } }" },
      { letter: "D", text: "- stage: Build" }
    ],
    correct: "C",
    justification: "En Groovy DSL Jenkins, un stage est défini avec stage('NomDuStage') { steps { ... } }.",
    traps: {
      A: "C'est la syntaxe YAML GitLab, pas Groovy Jenkins.",
      B: "La syntaxe correcte est stage('Name') pas stages { Name { } }.",
      D: "Le tiret est YAML, pas Groovy."
    }
  },
  {
    id: 50,
    category: "Atelier 2 - Pratique",
    question: "Dans Jenkins, quelle commande permet d'exécuter un script shell ?",
    options: [
      { letter: "A", text: "run 'commande'" },
      { letter: "B", text: "sh 'commande'" },
      { letter: "C", text: "shell 'commande'" },
      { letter: "D", text: "exec 'commande'" }
    ],
    correct: "B",
    justification: "Dans un Jenkinsfile, 'sh' est la fonction pour exécuter des commandes shell sur Linux/Mac.",
    traps: {
      A: "'run' n'est pas une fonction Jenkins pipeline.",
      C: "'shell' n'existe pas, c'est 'sh'.",
      D: "'exec' n'est pas la syntaxe Jenkins."
    }
  },
  {
    id: 51,
    category: "Atelier 2 - Pratique",
    question: "Quelle fonction Jenkins change le répertoire de travail pour exécuter des commandes ?",
    options: [
      { letter: "A", text: "cd('/chemin')" },
      { letter: "B", text: "chdir('/chemin') { }" },
      { letter: "C", text: "dir('/chemin') { }" },
      { letter: "D", text: "workdir('/chemin')" }
    ],
    correct: "C",
    justification: "La fonction 'dir('/chemin') { ... }' change le répertoire de travail pour les commandes à l'intérieur du bloc.",
    traps: {
      A: "cd est une commande shell, pas une fonction Jenkins.",
      B: "chdir n'existe pas en Jenkins DSL.",
      D: "workdir n'est pas une fonction Jenkins standard."
    }
  },
  {
    id: 52,
    category: "Atelier 2 - Maîtrise",
    question: "Pourquoi utilise-t-on 'bat' au lieu de 'sh' dans un Jenkinsfile sur Windows ?",
    options: [
      { letter: "A", text: "bat est plus rapide que sh" },
      { letter: "B", text: "sh exécute des commandes shell Unix, bat exécute des commandes cmd Windows" },
      { letter: "C", text: "bat est la nouvelle version de sh" },
      { letter: "D", text: "Les deux sont interchangeables" }
    ],
    correct: "B",
    justification: "'sh' utilise le shell Unix (bash), 'bat' utilise l'interpréteur de commandes Windows (cmd.exe). Il faut utiliser le bon selon l'OS de l'agent.",
    traps: {
      A: "La performance n'est pas la différence.",
      C: "Ce sont deux commandes différentes pour deux OS.",
      D: "sh ne fonctionne pas sur Windows sans Cygwin/WSL."
    }
  },

  // ========== NOUVELLES QUESTIONS PRATIQUES - ATELIER 3 ==========
  {
    id: 53,
    category: "Atelier 3 - Pratique",
    question: "Quelle commande vérifie que Tomcat est actif sur Linux ?",
    options: [
      { letter: "A", text: "tomcat status" },
      { letter: "B", text: "systemctl status tomcat10" },
      { letter: "C", text: "service tomcat check" },
      { letter: "D", text: "tomcat --status" }
    ],
    correct: "B",
    justification: "'systemctl status tomcat10' affiche l'état du service Tomcat (active/inactive) sur les systèmes Linux modernes.",
    traps: {
      A: "'tomcat' n'est pas une commande système.",
      C: "La syntaxe est 'systemctl' pas 'service ... check'.",
      D: "Tomcat n'a pas d'option --status directe."
    }
  },
  {
    id: 54,
    category: "Atelier 3 - Maîtrise",
    question: "Pourquoi le port 80 nécessite-t-il des droits root sur Linux alors que 8080 n'en a pas besoin ?",
    options: [
      { letter: "A", text: "80 est un port réservé exclusivement au système d'exploitation" },
      { letter: "B", text: "Les ports inférieurs à 1024 sont privilégiés et nécessitent root" },
      { letter: "C", text: "8080 est le seul port compatible avec la machine virtuelle Java" },
      { letter: "D", text: "C'est une configuration de sécurité spécifique à Tomcat par défaut" }
    ],
    correct: "B",
    justification: "Sur Linux, les ports 0-1023 sont 'well-known ports' et nécessitent des privilèges root. 8080 (>1024) peut être utilisé par un utilisateur normal.",
    traps: {
      A: "80 n'est pas 'réservé', il est privilégié.",
      C: "8080 n'est pas spécifique à Java, c'est une convention.",
      D: "C'est une règle Linux, pas Tomcat."
    }
  },
  {
    id: 55,
    category: "Atelier 3 - Pratique",
    question: "Quelle dépendance Maven doit être ajoutée avec scope 'provided' pour le déploiement Tomcat externe ?",
    options: [
      { letter: "A", text: "spring-boot-starter-web" },
      { letter: "B", text: "spring-boot-starter-tomcat" },
      { letter: "C", text: "javax.servlet-api" },
      { letter: "D", text: "tomcat-embed-core" }
    ],
    correct: "B",
    justification: "spring-boot-starter-tomcat doit être en scope 'provided' car Tomcat externe fournit ces bibliothèques.",
    traps: {
      A: "spring-boot-starter-web reste en scope 'compile'.",
      C: "C'est la dépendance starter-tomcat qui englobe les APIs servlet.",
      D: "tomcat-embed-core est déjà inclus dans starter-tomcat."
    }
  },
  {
    id: 56,
    category: "Atelier 3 - Pratique",
    question: "Quelle commande copie le fichier WAR vers Tomcat dans le job de déploiement GitLab ?",
    options: [
      { letter: "A", text: "cp -r target/* /usr/share/tomcat/webapps/ ROOT.war" },
      { letter: "B", text: "sudo cp springboot-app/target/*.war /var/lib/tomcat10/webapps/" },
      { letter: "C", text: "deploy --source target/*.war --dest /var/lib/tomcat --force" },
      { letter: "D", text: "scp -i key.pem target/*.war admin@localhost:/webapps/deploy/" }
    ],
    correct: "B",
    justification: "Le script utilise 'sudo cp' avec le chemin complet vers springboot-app/target/*.war et le dossier webapps de Tomcat.",
    traps: {
      A: "Il manque 'sudo' et le chemin 'springboot-app/'.",
      C: "'deploy' n'est pas une commande système.",
      D: "scp est pour la copie distante, pas locale."
    }
  },
  {
    id: 57,
    category: "Atelier 3 - Pratique",
    question: "Après avoir copié le WAR, quelle commande redémarre Tomcat ?",
    options: [
      { letter: "A", text: "tomcat restart" },
      { letter: "B", text: "sudo systemctl restart tomcat10" },
      { letter: "C", text: "service tomcat reload" },
      { letter: "D", text: "/etc/init.d/tomcat restart" }
    ],
    correct: "B",
    justification: "'sudo systemctl restart tomcat10' redémarre le service Tomcat pour charger la nouvelle application.",
    traps: {
      A: "'tomcat' n'est pas une commande directe.",
      C: "'reload' ne redémarre pas complètement le service.",
      D: "/etc/init.d est l'ancien système, systemctl est le standard moderne."
    }
  },
  {
    id: 58,
    category: "Atelier 3 - Maîtrise",
    question: "Pourquoi utilise-t-on un Shell runner plutôt qu'un Docker runner pour déployer sur Tomcat local ?",
    options: [
      { letter: "A", text: "Docker runner est trop lent pour les déploiements locaux" },
      { letter: "B", text: "Le Shell runner a accès direct aux services locaux (Tomcat, fichiers système)" },
      { letter: "C", text: "Docker ne supporte pas le déploiement d'applications Java natives" },
      { letter: "D", text: "Le Shell runner garantit une isolation de sécurité supérieure à Docker" }
    ],
    correct: "B",
    justification: "Le Docker runner isole le job dans un conteneur sans accès aux services host. Le Shell runner exécute directement sur la machine et peut accéder à Tomcat, systemctl, etc.",
    traps: {
      A: "La vitesse n'est pas le facteur déterminant.",
      C: "Docker supporte parfaitement Java.",
      D: "Le Shell runner est généralement moins isolé que Docker."
    }
  },

  // ========== NOUVELLES QUESTIONS PRATIQUES - ATELIER 4 ==========
  {
    id: 59,
    category: "Atelier 4 - Pratique",
    question: "Quelles variables CI/CD doivent être configurées dans GitLab pour SonarCloud ?",
    options: [
      { letter: "A", text: "SONAR_USER, SONAR_PASSWORD, SONAR_DB_URL" },
      { letter: "B", text: "SONAR_TOKEN, SONAR_HOST_URL, SONAR_ORGANIZATION" },
      { letter: "C", text: "SONARCLOUD_KEY, SONARCLOUD_SECRET, SONAR_PROJECT" },
      { letter: "D", text: "SONAR_API_KEY, SONAR_SERVER, SONAR_LOGIN" }
    ],
    correct: "B",
    justification: "Les trois variables requises sont SONAR_TOKEN (auth), SONAR_HOST_URL (https://sonarcloud.io), et SONAR_ORGANIZATION.",
    traps: {
      A: "SonarCloud utilise des tokens, pas user/password.",
      C: "Ces noms de variables ne sont pas standard.",
      D: "Il faut les trois variables, pas une seule."
    }
  },
  {
    id: 60,
    category: "Atelier 4 - Pratique",
    question: "Pourquoi faut-il définir GIT_DEPTH: '0' pour l'analyse SonarCloud ?",
    options: [
      { letter: "A", text: "Pour accélérer le clonage en ne téléchargeant que le dernier commit" },
      { letter: "B", text: "Pour cloner tout l'historique Git, nécessaire pour certaines analyses" },
      { letter: "C", text: "Pour limiter la taille du dépôt et économiser l'espace disque du runner" },
      { letter: "D", text: "Pour ignorer les sous-modules et les fichiers binaires volumineux" }
    ],
    correct: "B",
    justification: "GIT_DEPTH: '0' clone l'historique complet, ce qui est nécessaire pour l'analyse de blame et l'historique des changements par SonarCloud.",
    traps: {
      A: "GIT_DEPTH: '0' ralentit le clonage car tout l'historique est téléchargé.",
      C: "C'est l'inverse: '0' télécharge tout, une valeur numérique limite.",
      D: "GIT_DEPTH ne concerne pas les sous-modules."
    }
  },
  {
    id: 61,
    category: "Atelier 4 - Maîtrise",
    question: "Quelle est la différence entre un Bug, un Code Smell et une Vulnerability dans SonarCloud ?",
    options: [
      { letter: "A", text: "Bug = erreur, Code Smell = bonne pratique, Vulnerability = faille" },
      { letter: "B", text: "Ce sont trois noms synonymes pour désigner n'importe quel défaut" },
      { letter: "C", text: "Bug = sécurité, Vulnerability = performance, Code Smell = style" },
      { letter: "D", text: "Bug = crash, Code Smell = style, Vulnerability = bug mineur" }
    ],
    correct: "A",
    justification: "Bug = problème qui peut causer un comportement incorrect. Code Smell = code difficile à maintenir. Vulnerability = faille de sécurité exploitable.",
    traps: {
      B: "Ce sont trois catégories distinctes avec des impacts différents.",
      C: "Les catégories sont mal définies dans cette réponse.",
      D: "Les trois types peuvent nécessiter une correction selon le contexte."
    }
  },
  {
    id: 62,
    category: "Atelier 4 - Pratique",
    question: "Où configure-t-on le token SonarCloud dans Jenkins ?",
    options: [
      { letter: "A", text: "Manage Jenkins → Global Tool Configuration" },
      { letter: "B", text: "Manage Jenkins → Credentials → Add Credentials (Secret text)" },
      { letter: "C", text: "Job Configuration → Environment Variables" },
      { letter: "D", text: "Manage Jenkins → Plugins → SonarQube Settings" }
    ],
    correct: "B",
    justification: "Le token SonarCloud est ajouté comme credential de type 'Secret text' dans Manage Jenkins → Credentials.",
    traps: {
      A: "Global Tool Configuration est pour les outils (JDK, Maven), pas les credentials.",
      C: "Les secrets ne doivent pas être en clair dans la configuration du job.",
      D: "Les Plugins ne stockent pas les credentials."
    }
  },
  {
    id: 63,
    category: "Atelier 4 - Pratique",
    question: "Quelle fonction Jenkins injecte automatiquement les variables SonarCloud dans le pipeline ?",
    options: [
      { letter: "A", text: "sonarEnv('SonarCloudServer')" },
      { letter: "B", text: "withSonarQubeEnv('SonarCloudServer')" },
      { letter: "C", text: "useSonar('SonarCloudServer')" },
      { letter: "D", text: "injectSonar('SonarCloudServer')" }
    ],
    correct: "B",
    justification: "'withSonarQubeEnv(nomDuServeur)' est la fonction Jenkins qui injecte les variables d'environnement SonarCloud.",
    traps: {
      A: "sonarEnv n'est pas la syntaxe correcte.",
      C: "useSonar n'existe pas.",
      D: "injectSonar n'est pas une fonction Jenkins."
    }
  },
  {
    id: 64,
    category: "Atelier 4 - Maîtrise",
    question: "Pourquoi place-t-on généralement le stage d'analyse SonarCloud APRÈS le stage de build ?",
    options: [
      { letter: "A", text: "SonarCloud a besoin des fichiers compilés (.class) pour certaines analyses" },
      { letter: "B", text: "C'est purement esthétique pour avoir un pipeline ordonné chronologiquement" },
      { letter: "C", text: "SonarCloud compile lui-même le code source avant de l'analyser" },
      { letter: "D", text: "Le stage peut être placé n'importe où, l'ordre n'a aucune importance" }
    ],
    correct: "A",
    justification: "SonarCloud analyse le bytecode compilé pour certaines règles (détection de bugs, complexité). Sans les .class, l'analyse est incomplète.",
    traps: {
      B: "L'ordre a une importance fonctionnelle.",
      C: "SonarCloud analyse le code, il ne compile pas.",
      D: "L'ordre impacte la qualité de l'analyse."
    }
  },

  // ========== QUESTIONS MAÎTRISE - ATELIER 5 ==========
  {
    id: 65,
    category: "Atelier 5 - Maîtrise",
    question: "Pourquoi utilise-t-on une branche 'develop' intermédiaire plutôt que de pusher directement sur 'main' ?",
    options: [
      { letter: "A", text: "develop permet d'intégrer et tester les features avant de les mettre en production sur main" },
      { letter: "B", text: "C'est une obligation technique imposée par le protocole Git standard" },
      { letter: "C", text: "develop est plus rapide à déployer car elle ne contient pas les tags de version" },
      { letter: "D", text: "main est protégée en écriture et ne peut jamais recevoir de nouveaux commits" }
    ],
    correct: "A",
    justification: "develop sert de branche d'intégration où les features sont testées ensemble avant d'être fusionnées vers main (production). Cela protège main des régressions.",
    traps: {
      B: "Ce n'est pas obligatoire, c'est une bonne pratique (Git Flow).",
      C: "La vitesse n'est pas le facteur.",
      D: "main peut recevoir des commits via MR."
    }
  },
  {
    id: 66,
    category: "Atelier 5 - Maîtrise",
    question: "Comment le SAST détecte-t-il une injection SQL dans le code source ?",
    options: [
      { letter: "A", text: "Il exécute le code dans un environnement sandbox et teste les entrées" },
      { letter: "B", text: "Il analyse le code statiquement et détecte les patterns dangereux (concaténation de strings)" },
      { letter: "C", text: "Il se connecte à la base de données de production pour simuler des attaques" },
      { letter: "D", text: "Il vérifie les logs d'erreurs du serveur d'application en temps réel" }
    ],
    correct: "B",
    justification: "SAST (Static) analyse le code source sans l'exécuter. Il recherche des patterns connus comme la concaténation de paramètres utilisateur dans des requêtes SQL.",
    traps: {
      A: "C'est DAST (Dynamic) qui exécute le code, pas SAST.",
      C: "SAST n'interagit pas avec l'infrastructure.",
      D: "L'analyse des logs est du monitoring, pas du SAST."
    }
  },
  {
    id: 67,
    category: "Atelier 5 - Maîtrise",
    question: "Pourquoi les fichiers .env ne doivent-ils JAMAIS être committés dans Git ?",
    options: [
      { letter: "A", text: "Git ne supporte techniquement pas le versionnement des fichiers .env" },
      { letter: "B", text: "Ils contiennent souvent des secrets (clés API, mots de passe) qui seraient exposés" },
      { letter: "C", text: "Ils sont trop volumineux et ralentiraient les opérations de clonage" },
      { letter: "D", text: ".env est un format obsolète qui n'est plus reconnu par les outils modernes" }
    ],
    correct: "B",
    justification: "Les fichiers .env contiennent typiquement des variables d'environnement sensibles. Une fois dans Git, les secrets restent dans l'historique même après suppression.",
    traps: {
      A: "Git peut parfaitement versionner les .env, c'est juste dangereux.",
      C: "La taille n'est pas le problème.",
      D: ".env est toujours largement utilisé."
    }
  },
  {
    id: 68,
    category: "Atelier 5 - Maîtrise",
    question: "Comment corriger une injection SQL détectée par SAST ?",
    options: [
      { letter: "A", text: "Supprimer complètement la requête SQL du code source" },
      { letter: "B", text: "Utiliser des requêtes paramétrées (PreparedStatement) au lieu de concaténer" },
      { letter: "C", text: "Encoder le paramètre utilisateur en base64 avant la requête" },
      { letter: "D", text: "Ajouter des doubles guillemets autour du paramètre dans la chaîne" }
    ],
    correct: "B",
    justification: "Les requêtes paramétrées (PreparedStatement en Java) séparent le code SQL des données, empêchant l'injection même si l'utilisateur entre du SQL malveillant.",
    traps: {
      A: "Supprimer la requête n'est pas une solution viable.",
      C: "Base64 est un encodage, pas une protection contre l'injection.",
      D: "Les guillemets peuvent être contournés par des techniques d'évasion."
    }
  },
  {
    id: 69,
    category: "Atelier 5 - Pratique",
    question: "Quel outil est utilisé par GitLab pour le scan SAST ?",
    options: [
      { letter: "A", text: "SonarQube" },
      { letter: "B", text: "Semgrep" },
      { letter: "C", text: "Checkmarx" },
      { letter: "D", text: "Fortify" }
    ],
    correct: "B",
    justification: "GitLab utilise Semgrep comme outil principal pour l'analyse SAST (Static Application Security Testing).",
    traps: {
      A: "SonarQube est pour l'analyse de qualité, pas le SAST GitLab natif.",
      C: "Checkmarx est un outil commercial, pas intégré nativement.",
      D: "Fortify est également un outil commercial séparé."
    }
  },
  {
    id: 70,
    category: "Atelier 5 - Pratique",
    question: "Comment corriger un secret hardcodé dans .env pour les pipelines CI/CD ?",
    options: [
      { letter: "A", text: "Chiffrer le fichier .env avec une clé GPG sécurisée avant le commit" },
      { letter: "B", text: "Ajouter .env au .gitignore + créer une variable CI/CD masquée dans GitLab" },
      { letter: "C", text: "Renommer .env en .env.local pour qu'il ne soit pas détecté" },
      { letter: "D", text: "Compresser .env en .env.zip avec un mot de passe fort" }
    ],
    correct: "B",
    justification: "La correction consiste à retirer .env du dépôt, l'ajouter au .gitignore, et utiliser les variables CI/CD avec l'option 'Masked'.",
    traps: {
      A: "Le chiffrement complique et ne résout pas le problème de versionnement.",
      C: "Renommer ne retire pas le fichier du dépôt Git.",
      D: "La compression n'est pas une solution de sécurité."
    }
  },
  {
    id: 71,
    category: "Atelier 5 - Pratique",
    question: "Dans GitLab, où configure-t-on l'option 'Masked' pour protéger une variable ?",
    options: [
      { letter: "A", text: "Project → Settings → CI/CD → Variables" },
      { letter: "B", text: "Project → Settings → Repository → Protected" },
      { letter: "C", text: "Project → Settings → Security" },
      { letter: "D", text: "Project → CI/CD → Pipeline Editor" }
    ],
    correct: "A",
    justification: "Les variables CI/CD se configurent dans Settings → CI/CD → Variables avec les options Masked et Protected.",
    traps: {
      B: "Repository → Protected concerne les branches, pas les variables.",
      C: "Settings → Security concerne d'autres configurations.",
      D: "Pipeline Editor est pour éditer le .gitlab-ci.yml."
    }
  },
  {
    id: 72,
    category: "Atelier 5 - Maîtrise",
    question: "Pourquoi la règle '1 vulnérabilité = 1 branche = 1 MR' est-elle une bonne pratique ?",
    options: [
      { letter: "A", text: "Pour générer plus de commits" },
      { letter: "B", text: "Pour permettre une revue ciblée, un rollback facile, et une traçabilité complète" },
      { letter: "C", text: "Pour ralentir le développement" },
      { letter: "D", text: "C'est obligatoire dans GitLab" }
    ],
    correct: "B",
    justification: "Une MR par correction permet: revue de code focalisée, CI/CD séparée, rollback ciblé si la correction cause un problème, et traçabilité clear de qui a corrigé quoi.",
    traps: {
      A: "Le nombre de commits n'est pas l'objectif.",
      C: "Cela structure le travail, pas le ralentit.",
      D: "C'est une bonne pratique, pas une obligation."
    }
  },

  // ========== QUESTIONS MAÎTRISE - ATELIER 6 ==========
  {
    id: 73,
    category: "Atelier 6 - Maîtrise",
    question: "Pourquoi Ansible utilise-t-il SSH plutôt qu'un agent installé sur les machines cibles ?",
    options: [
      { letter: "A", text: "SSH est plus lent mais plus fiable" },
      { letter: "B", text: "Architecture agentless: pas besoin d'installer/maintenir un agent sur chaque serveur" },
      { letter: "C", text: "SSH est obligatoire pour tous les outils de configuration" },
      { letter: "D", text: "Ansible ne peut pas utiliser d'autres protocoles" }
    ],
    correct: "B",
    justification: "Ansible est 'agentless': il se connecte via SSH standard, évitant la complexité d'installer et maintenir des agents sur chaque serveur géré.",
    traps: {
      A: "SSH n'est pas plus lent que les agents.",
      C: "D'autres outils comme Chef/Puppet utilisent des agents.",
      D: "Ansible peut aussi utiliser WinRM pour Windows."
    }
  },
  {
    id: 74,
    category: "Atelier 6 - Maîtrise",
    question: "Quelle est la différence entre la clé publique et la clé privée SSH ?",
    options: [
      { letter: "A", text: "La clé publique est partagée avec les serveurs, la clé privée reste secrète sur votre machine" },
      { letter: "B", text: "Les deux sont identiques avec des noms différents" },
      { letter: "C", text: "La clé privée est envoyée aux serveurs" },
      { letter: "D", text: "Seule la clé publique est chiffrée" }
    ],
    correct: "A",
    justification: "La clé publique (id_rsa.pub) va dans authorized_keys des serveurs. La clé privée (id_rsa) reste sur votre machine et ne doit JAMAIS être partagée.",
    traps: {
      B: "Elles sont mathématiquement liées mais différentes.",
      C: "C'est l'inverse: la clé publique va sur les serveurs.",
      D: "Les deux sont des clés cryptographiques."
    }
  },
  {
    id: 75,
    category: "Atelier 6 - Maîtrise",
    question: "Pourquoi utilise-t-on 'ssh-copy-id' plutôt que de copier manuellement la clé ?",
    options: [
      { letter: "A", text: "ssh-copy-id est plus rapide" },
      { letter: "B", text: "Il ajoute automatiquement la clé dans authorized_keys avec les bonnes permissions" },
      { letter: "C", text: "La copie manuelle est impossible" },
      { letter: "D", text: "ssh-copy-id chiffre la clé" }
    ],
    correct: "B",
    justification: "ssh-copy-id gère automatiquement la création du dossier .ssh, le fichier authorized_keys, et les permissions correctes (chmod 600).",
    traps: {
      A: "La vitesse n'est pas le facteur principal.",
      C: "La copie manuelle est possible mais plus risquée.",
      D: "La clé publique n'a pas besoin d'être chiffrée."
    }
  },
  {
    id: 76,
    category: "Atelier 6 - Maîtrise",
    question: "À quoi servent les groupes (ex: [webservers]) dans le fichier inventory Ansible ?",
    options: [
      { letter: "A", text: "Purement décoratif" },
      { letter: "B", text: "Permettent de cibler des ensembles de serveurs avec des playbooks spécifiques" },
      { letter: "C", text: "Obligatoires pour que Ansible fonctionne" },
      { letter: "D", text: "Définissent les permissions des utilisateurs" }
    ],
    correct: "B",
    justification: "Les groupes permettent d'organiser les serveurs et d'exécuter des playbooks sur des sous-ensembles: ansible webservers -m ping cible seulement ce groupe.",
    traps: {
      A: "Les groupes ont une utilité fonctionnelle importante.",
      C: "On peut utiliser 'all' sans définir de groupes.",
      D: "Les groupes ne gèrent pas les permissions OS."
    }
  },
  {
    id: 77,
    category: "Atelier 6 - Pratique",
    question: "Quelle commande Ansible exécute un module shell sur tous les hosts ?",
    options: [
      { letter: "A", text: "ansible all -m command -a 'whoami'" },
      { letter: "B", text: "ansible all -m shell -a 'whoami && hostname'" },
      { letter: "C", text: "ansible-run all 'whoami'" },
      { letter: "D", text: "ansible exec all 'whoami'" }
    ],
    correct: "B",
    justification: "'ansible all -m shell -a \"commande\"' exécute une commande shell sur tous les hosts de l'inventory.",
    traps: {
      A: "Le module 'command' fonctionne mais 'shell' permet les pipes et redirections.",
      C: "'ansible-run' n'existe pas.",
      D: "'ansible exec' n'est pas la syntaxe correcte."
    }
  },
  {
    id: 78,
    category: "Atelier 6 - Maîtrise",
    question: "Quelle est la différence entre un module Ansible 'command' et 'shell' ?",
    options: [
      { letter: "A", text: "Ils sont identiques" },
      { letter: "B", text: "shell permet les pipes, redirections et variables d'environnement, command exécute directement" },
      { letter: "C", text: "command est plus sécurisé mais plus lent" },
      { letter: "D", text: "shell ne fonctionne que sur Linux" }
    ],
    correct: "B",
    justification: "'command' exécute directement sans passer par un shell. 'shell' passe par /bin/sh et permet les fonctionnalités shell (pipes |, &&, variables $VAR).",
    traps: {
      A: "Ils ont des comportements différents.",
      C: "La sécurité et la vitesse ne sont pas les différences principales.",
      D: "shell fonctionne partout où un shell est disponible."
    }
  },
  {
    id: 79,
    category: "Atelier 6 - Maîtrise",
    question: "Que fait le module Ansible 'copy' comparé au module 'fetch' ?",
    options: [
      { letter: "A", text: "copy et fetch font la même chose" },
      { letter: "B", text: "copy envoie des fichiers vers les hosts, fetch récupère des fichiers depuis les hosts" },
      { letter: "C", text: "fetch est plus rapide" },
      { letter: "D", text: "copy ne fonctionne qu'avec des fichiers texte" }
    ],
    correct: "B",
    justification: "copy: contrôleur → hosts cibles (push). fetch: hosts cibles → contrôleur (pull). Ce sont des directions opposées.",
    traps: {
      A: "Ils ont des directions opposées.",
      C: "La vitesse dépend de la taille du fichier, pas du module.",
      D: "Les deux fonctionnent avec tous types de fichiers."
    }
  },
  {
    id: 80,
    category: "Atelier 6 - Maîtrise",
    question: "Pourquoi utilise-t-on le module 'stat' avant 'copy' dans un playbook ?",
    options: [
      { letter: "A", text: "stat est obligatoire avant toute copie de fichier pour éviter les erreurs d'écriture" },
      { letter: "B", text: "Pour vérifier si le fichier existe déjà et éviter une copie inutile (idempotence)" },
      { letter: "C", text: "stat accélère significativement le transfert en compressant les données" },
      { letter: "D", text: "stat convertit automatiquement le format du fichier (encodage, fin de ligne)" }
    ],
    correct: "B",
    justification: "stat vérifie l'existence et les attributs d'un fichier. Combiné avec 'when', on peut conditionner la copie: quand le fichier n'existe pas ou a changé.",
    traps: {
      A: "stat est optionnel, c'est une bonne pratique.",
      C: "stat ne change pas la vitesse de copie.",
      D: "stat ne modifie pas les fichiers."
    }
  },
  {
    id: 81,
    category: "Atelier 6 - Maîtrise",
    question: "Que signifie 'idempotence' dans le contexte Ansible ?",
    options: [
      { letter: "A", text: "Lancer un playbook plusieurs fois produit toujours le même état final stable" },
      { letter: "B", text: "Le playbook ne peut être exécuté qu'une seule fois par machine cible" },
      { letter: "C", text: "Ansible détecte et corrige automatiquement toutes les erreurs de syntaxe" },
      { letter: "D", text: "Les tâches s'exécutent simultanément sur tous les cœurs du processeur" }
    ],
    correct: "A",
    justification: "Un module idempotent vérifie l'état actuel avant d'agir. Si l'état désiré est déjà atteint, il ne fait rien. Exécuter 10x = même résultat que 1x.",
    traps: {
      B: "Un playbook peut être exécuté plusieurs fois.",
      C: "L'idempotence ne concerne pas la détection d'erreurs.",
      D: "Le parallélisme est une autre fonctionnalité."
    }
  },

  // ========== QUESTIONS SYNTAXE ET PIÈGES ==========
  {
    id: 82,
    category: "Syntaxe et Configuration",
    question: "Dans .gitlab-ci.yml, quelle est la bonne syntaxe pour définir un artifact avec expiration ?",
    options: [
      { letter: "A", text: "artifacts: [paths: 'target/*.war', expire: '1 week', when: 'always']" },
      { letter: "B", text: "artifacts:\\n  paths:\\n    - target/*.war\\n  expire_in: 1 week" },
      { letter: "C", text: "save_artifacts:\\n  files:\\n    - target/*.war\\n  lifetime: 7 days" },
      { letter: "D", text: "output:\\n  target: target/*.war\\n  retention: 1 week" }
    ],
    correct: "B",
    justification: "La clé 'artifacts' contient 'paths' (liste) et 'expire_in' pour définir la durée de conservation.",
    traps: {
      A: "La syntaxe YAML n'utilise pas les crochets ainsi.",
      C: "'save_artifacts' n'existe pas.",
      D: "'output' et 'expiration' ne sont pas des clés valides."
    }
  },
  {
    id: 83,
    category: "Syntaxe et Configuration",
    question: "Comment déclare-t-on l'agent dans un Jenkinsfile déclaratif ?",
    options: [
      { letter: "A", text: "runner any" },
      { letter: "B", text: "agent any" },
      { letter: "C", text: "executor: any" },
      { letter: "D", text: "node any" }
    ],
    correct: "B",
    justification: "'agent any' indique que le pipeline peut s'exécuter sur n'importe quel agent Jenkins disponible.",
    traps: {
      A: "'runner' est terminologie GitLab, pas Jenkins.",
      C: "'executor' n'est pas la syntaxe Jenkinsfile.",
      D: "'node' est utilisé en scripted pipeline, pas déclaratif."
    }
  },
  {
    id: 84,
    category: "Syntaxe et Configuration",
    question: "Quelle variable GitLab CI contient le chemin du répertoire du projet ?",
    options: [
      { letter: "A", text: "$PROJECT_PATH" },
      { letter: "B", text: "$CI_PROJECT_DIR" },
      { letter: "C", text: "$WORKSPACE" },
      { letter: "D", text: "$GIT_DIR" }
    ],
    correct: "B",
    justification: "$CI_PROJECT_DIR contient le chemin complet vers le répertoire du projet cloné par le runner.",
    traps: {
      A: "$PROJECT_PATH n'est pas une variable GitLab prédéfinie.",
      C: "$WORKSPACE est utilisé par Jenkins, pas GitLab.",
      D: "$GIT_DIR est le dossier .git, pas le projet."
    }
  },
  {
    id: 85,
    category: "Syntaxe et Configuration",
    question: "Quelle est la commande complète pour lancer l'analyse SonarCloud avec Maven ?",
    options: [
      { letter: "A", text: "mvn sonar:sonar -Dsonar.login=admin -Dsonar.password=admin --batch-mode" },
      { letter: "B", text: "mvn clean verify sonar:sonar -Dsonar.projectKey=... -Dsonar.host.url=... -Dsonar.token=..." },
      { letter: "C", text: "mvn analyze:sonarcloud --with-token=$SONAR_TOKEN --full-scan" },
      { letter: "D", text: "mvn sonarcloud:scan -Dproject.settings=sonar-project.properties --force" }
    ],
    correct: "B",
    justification: "La commande complète inclut les phases Maven et tous les paramètres Sonar requis (projectKey, organization, host.url, token).",
    traps: {
      A: "mvn sonar:sonar seul nécessite les paramètres en plus.",
      C: "analyze:sonarcloud n'est pas un goal Maven valide.",
      D: "sonarcloud:scan n'existe pas."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - MAVEN (très utilisé) ==========
  {
    id: 86,
    category: "Commandes Maven",
    question: "Que fait la commande 'mvn clean' ?",
    options: [
      { letter: "A", text: "Supprime le dossier target/ contenant tous les fichiers générés (classes, JAR/WAR)" },
      { letter: "B", text: "Nettoie le cache local Maven (~/.m2) pour forcer le téléchargement" },
      { letter: "C", text: "Supprime les dépendances orphelines déclarées dans le pom.xml" },
      { letter: "D", text: "Réinitialise le fichier pom.xml à sa configuration par défaut" }
    ],
    correct: "A",
    justification: "'mvn clean' supprime le dossier target/ qui contient tous les fichiers générés (classes compilées, JAR, WAR, etc.).",
    traps: {
      B: "Le cache Maven (.m2/repository) n'est pas affecté par clean.",
      C: "clean ne gère pas les dépendances.",
      D: "pom.xml n'est jamais modifié par clean."
    }
  },
  {
    id: 87,
    category: "Commandes Maven",
    question: "Quelle est la différence entre 'mvn compile' et 'mvn package' ?",
    options: [
      { letter: "A", text: "compile crée l'archive JAR/WAR, alors que package compile uniquement les classes" },
      { letter: "B", text: "compile compile le code source, package exécute compile + test + création du JAR/WAR" },
      { letter: "C", text: "Ils sont identiques et peuvent être utilisés de manière interchangeable" },
      { letter: "D", text: "package prépare le projet pour le déploiement mais ne compile pas le code" }
    ],
    correct: "B",
    justification: "'mvn compile' compile le code source. 'mvn package' exécute compile + test + création du JAR/WAR. Package inclut compile.",
    traps: {
      A: "C'est l'inverse: compile ne crée pas le JAR.",
      C: "Ils ont des phases différentes.",
      D: "package inclut la compilation."
    }
  },
  {
    id: 88,
    category: "Commandes Maven",
    question: "Que signifie l'option -DskipTests dans 'mvn clean package -DskipTests' ?",
    options: [
      { letter: "A", text: "Skip la compilation des tests" },
      { letter: "B", text: "Skip l'exécution des tests mais les compile" },
      { letter: "C", text: "Supprime les fichiers de test" },
      { letter: "D", text: "Désactive le plugin de test" }
    ],
    correct: "B",
    justification: "-DskipTests compile les tests mais ne les exécute pas. Pour ne pas compiler les tests : -Dmaven.test.skip=true.",
    traps: {
      A: "Les tests sont compilés, juste pas exécutés.",
      C: "Aucun fichier n'est supprimé.",
      D: "Le plugin reste actif, seule l'exécution est skippée."
    }
  },
  {
    id: 89,
    category: "Commandes Maven",
    question: "Que fait 'mvn test' exactement ?",
    options: [
      { letter: "A", text: "Exécute uniquement les tests" },
      { letter: "B", text: "Compile le code, compile les tests, puis exécute les tests" },
      { letter: "C", text: "Affiche la liste des tests disponibles" },
      { letter: "D", text: "Génère un rapport de couverture" }
    ],
    correct: "B",
    justification: "'mvn test' exécute les phases: validate, compile, test-compile, puis test. Il compile tout avant d'exécuter les tests.",
    traps: {
      A: "Il compile aussi avant de tester.",
      C: "Il exécute les tests, ne les liste pas.",
      D: "La couverture nécessite Jacoco ou un plugin spécifique."
    }
  },
  {
    id: 90,
    category: "Commandes Maven",
    question: "Quelle commande crée un nouveau projet Maven interactif ?",
    options: [
      { letter: "A", text: "mvn new project" },
      { letter: "B", text: "mvn archetype:generate" },
      { letter: "C", text: "mvn init" },
      { letter: "D", text: "mvn create:project" }
    ],
    correct: "B",
    justification: "'mvn archetype:generate' lance un assistant interactif pour créer un projet à partir d'un archétype Maven.",
    traps: {
      A: "new n'est pas un goal Maven.",
      C: "init n'existe pas dans Maven (c'est npm/git).",
      D: "create:project n'est pas un goal valide."
    }
  },
  {
    id: 91,
    category: "Commandes Maven",
    question: "Que fait 'mvn install' de plus que 'mvn package' ?",
    options: [
      { letter: "A", text: "Il déploie l'application sur un serveur d'application distant configuré" },
      { letter: "B", text: "Il installe l'artifact (JAR/WAR) dans le repository local Maven (~/.m2/repository)" },
      { letter: "C", text: "Il télécharge et installe toutes les dépendances manquantes du projet" },
      { letter: "D", text: "Il génère les fichiers de configuration pour l'IDE (IntelliJ/Eclipse)" }
    ],
    correct: "B",
    justification: "'mvn install' fait tout ce que 'package' fait, plus l'installation de l'artifact dans le repo local pour être utilisé par d'autres projets.",
    traps: {
      A: "Le déploiement distant est fait par 'mvn deploy'.",
      C: "Les dépendances sont téléchargées automatiquement, pas par install.",
      D: "install ne configure pas le projet."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - GIT (très utilisé) ==========
  {
    id: 92,
    category: "Commandes Git",
    question: "Quelle commande crée une nouvelle branche ET se positionne dessus ?",
    options: [
      { letter: "A", text: "git branch nouvelle-branche --switch" },
      { letter: "B", text: "git checkout -b nouvelle-branche" },
      { letter: "C", text: "git new branch -name nouvelle-branche" },
      { letter: "D", text: "git create --branch nouvelle-branche" }
    ],
    correct: "B",
    justification: "'git checkout -b nom' crée la branche ET s'y positionne en une seule commande. Équivalent moderne: 'git switch -c nom'.",
    traps: {
      A: "git branch crée la branche mais reste sur la branche actuelle.",
      C: "git new n'existe pas.",
      D: "git create n'existe pas."
    }
  },
  {
    id: 93,
    category: "Commandes Git",
    question: "Quelle est la différence entre 'git merge' et 'git rebase' ?",
    options: [
      { letter: "A", text: "merge crée un commit de fusion, rebase réécrit l'historique linéairement" },
      { letter: "B", text: "Ils font exactement la même chose, c'est une question de préférence" },
      { letter: "C", text: "rebase fusionne les branches avec un commit, merge réécrit l'historique" },
      { letter: "D", text: "merge est limité à 2 branches, rebase peut en gérer plusieurs" }
    ],
    correct: "A",
    justification: "merge conserve l'historique avec un commit de merge. rebase déplace les commits pour créer un historique linéaire sans commit de fusion.",
    traps: {
      B: "Ils ont des résultats différents sur l'historique.",
      C: "C'est l'inverse.",
      D: "merge peut fusionner plusieurs branches."
    }
  },
  {
    id: 94,
    category: "Commandes Git",
    question: "Que fait 'git push origin develop' ?",
    options: [
      { letter: "A", text: "Télécharge la branche develop depuis origin" },
      { letter: "B", text: "Envoie la branche develop locale vers le remote origin" },
      { letter: "C", text: "Supprime la branche develop sur origin" },
      { letter: "D", text: "Crée une nouvelle branche origin/develop" }
    ],
    correct: "B",
    justification: "'git push' envoie les commits locaux vers le remote. 'origin' est le nom du remote, 'develop' la branche à pousser.",
    traps: {
      A: "C'est 'git pull' ou 'git fetch' qui télécharge.",
      C: "La suppression serait: git push origin --delete develop.",
      D: "origin/develop est une référence de tracking, pas créée par push."
    }
  },
  {
    id: 95,
    category: "Commandes Git",
    question: "Que fait 'git stash' ?",
    options: [
      { letter: "A", text: "Supprime les modifications non committées" },
      { letter: "B", text: "Sauvegarde temporairement les modifications sans committer" },
      { letter: "C", text: "Crée un nouveau commit" },
      { letter: "D", text: "Fusionne les branches" }
    ],
    correct: "B",
    justification: "'git stash' met de côté les modifications locales non committées pour travailler sur autre chose, puis on peut les récupérer avec 'git stash pop'.",
    traps: {
      A: "Les modifications sont sauvegardées, pas supprimées.",
      C: "stash ne crée pas de commit visible dans l'historique.",
      D: "stash ne fusionne rien."
    }
  },
  {
    id: 96,
    category: "Commandes Git",
    question: "Comment annuler les modifications d'un fichier non encore stagé (add) ?",
    options: [
      { letter: "A", text: "git reset HEAD fichier" },
      { letter: "B", text: "git checkout -- fichier" },
      { letter: "C", text: "git revert fichier" },
      { letter: "D", text: "git undo fichier" }
    ],
    correct: "B",
    justification: "'git checkout -- fichier' restaure le fichier à son état du dernier commit. Équivalent moderne: 'git restore fichier'.",
    traps: {
      A: "reset HEAD est pour désindexer un fichier déjà stagé.",
      C: "revert annule un commit entier, pas un fichier.",
      D: "git undo n'existe pas."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - DOTNET (modérément utilisé) ==========
  {
    id: 97,
    category: "Commandes dotnet",
    question: "Que fait 'dotnet restore' ?",
    options: [
      { letter: "A", text: "Restaure le projet à son état initial" },
      { letter: "B", text: "Télécharge les packages NuGet définis dans .csproj" },
      { letter: "C", text: "Restaure une sauvegarde du projet" },
      { letter: "D", text: "Répare les fichiers corrompus" }
    ],
    correct: "B",
    justification: "'dotnet restore' lit le .csproj et télécharge toutes les dépendances NuGet nécessaires. Équivalent de 'npm install' pour .NET.",
    traps: {
      A: "restore concerne les dépendances, pas l'état du projet.",
      C: "Ce n'est pas un système de backup.",
      D: "restore ne répare pas les fichiers."
    }
  },
  {
    id: 98,
    category: "Commandes dotnet",
    question: "Quelle option de 'dotnet build' compile en mode Release ?",
    options: [
      { letter: "A", text: "--release" },
      { letter: "B", text: "--configuration Release" },
      { letter: "C", text: "-r Release" },
      { letter: "D", text: "--mode Release" }
    ],
    correct: "B",
    justification: "'dotnet build --configuration Release' ou '-c Release' compile en mode Release (optimisé) au lieu de Debug (par défaut).",
    traps: {
      A: "--release n'est pas une option directe de build.",
      C: "-r est pour le runtime identifier, pas la configuration.",
      D: "--mode n'existe pas."
    }
  },
  {
    id: 99,
    category: "Commandes dotnet",
    question: "Que fait 'dotnet run' ?",
    options: [
      { letter: "A", text: "Exécute l'application sans la compiler" },
      { letter: "B", text: "Compile puis exécute l'application en une seule commande" },
      { letter: "C", text: "Affiche la liste des projets disponibles" },
      { letter: "D", text: "Lance les tests" }
    ],
    correct: "B",
    justification: "'dotnet run' compile le projet si nécessaire puis l'exécute. C'est un raccourci pour build + exécution.",
    traps: {
      A: "run compile avant d'exécuter si besoin.",
      C: "Ce n'est pas une commande de listing.",
      D: "Pour les tests c'est 'dotnet test'."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - NPM/NODE (modérément utilisé) ==========
  {
    id: 100,
    category: "Commandes npm",
    question: "Quelle est la différence entre 'npm install' et 'npm ci' ?",
    options: [
      { letter: "A", text: "ci installe les devDependencies, alors que install les ignore par défaut" },
      { letter: "B", text: "ci utilise strictement package-lock.json (reproductible), install peut le modifier" },
      { letter: "C", text: "ci est beaucoup plus lent que install car il vérifie chaque paquet" },
      { letter: "D", text: "install est déprécié depuis Node 14, ci est le nouveau standard" }
    ],
    correct: "B",
    justification: "'npm ci' (Clean Install) utilise package-lock.json sans le modifier pour des builds reproductibles. 'npm install' peut mettre à jour le lock.",
    traps: {
      A: "Les deux installent toutes les dépendances.",
      C: "ci est souvent plus rapide car il supprime node_modules et fait une install propre.",
      D: "Les deux sont toujours utilisés selon le contexte."
    }
  },
  {
    id: 101,
    category: "Commandes npm",
    question: "Que fait 'npm run build' ?",
    options: [
      { letter: "A", text: "Compile le code Node.js natif" },
      { letter: "B", text: "Exécute le script 'build' défini dans package.json" },
      { letter: "C", text: "Crée un fichier package.json" },
      { letter: "D", text: "Met à jour les dépendances" }
    ],
    correct: "B",
    justification: "'npm run <script>' exécute le script correspondant défini dans 'scripts' du package.json. 'build' est un nom conventionnel.",
    traps: {
      A: "npm n'a pas de compilation native automatique.",
      C: "La création se fait avec 'npm init'.",
      D: "La mise à jour se fait avec 'npm update'."
    }
  },
  {
    id: 102,
    category: "Commandes npm",
    question: "Comment sauvegarder une dépendance en tant que devDependency ?",
    options: [
      { letter: "A", text: "npm install package --dev" },
      { letter: "B", text: "npm install package --save-dev" },
      { letter: "C", text: "npm install-dev package" },
      { letter: "D", text: "npm dev install package" }
    ],
    correct: "B",
    justification: "'npm install package --save-dev' ou '-D' ajoute le package dans devDependencies (outils de build, tests, etc.).",
    traps: {
      A: "--dev seul n'est pas la syntaxe correcte.",
      C: "install-dev n'existe pas.",
      D: "La syntaxe est npm install ... --save-dev."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - ANSIBLE (utilisé en atelier 6) ==========
  {
    id: 103,
    category: "Commandes Ansible",
    question: "Que fait 'ansible all -m ping' ?",
    options: [
      { letter: "A", text: "Envoie un paquet ICMP (réseau) à tous les serveurs listés" },
      { letter: "B", text: "Teste la connexion SSH et la disponibilité de l'interpréteur Python" },
      { letter: "C", text: "Affiche la liste détaillée de tous les hosts de l'inventory" },
      { letter: "D", text: "Vérifie la syntaxe des fichiers de configuration YAML" }
    ],
    correct: "B",
    justification: "Le module ping Ansible teste la connexion SSH et vérifie que Python est disponible sur les hosts. Ce n'est PAS un ping ICMP.",
    traps: {
      A: "Le ping Ansible n'est pas un ping réseau ICMP.",
      C: "Pour lister: ansible-inventory --list.",
      D: "Pour vérifier la syntaxe: ansible-lint."
    }
  },
  {
    id: 104,
    category: "Commandes Ansible",
    question: "Comment exécuter un playbook avec un inventory spécifique ?",
    options: [
      { letter: "A", text: "ansible-playbook playbook.yml inventory.ini" },
      { letter: "B", text: "ansible-playbook -i inventory.ini playbook.yml" },
      { letter: "C", text: "ansible playbook.yml --inventory=inventory.ini" },
      { letter: "D", text: "ansible-run -i inventory.ini playbook.yml" }
    ],
    correct: "B",
    justification: "'ansible-playbook -i <inventory> <playbook>' est la syntaxe correcte. -i spécifie le fichier d'inventory.",
    traps: {
      A: "L'option -i est requise pour l'inventory.",
      C: "ansible sans -playbook exécute des modules ad-hoc.",
      D: "ansible-run n'existe pas."
    }
  },
  {
    id: 105,
    category: "Commandes Ansible",
    question: "Quelle option permet de voir ce que fera un playbook sans l'exécuter (dry-run) ?",
    options: [
      { letter: "A", text: "--dry-run" },
      { letter: "B", text: "--check" },
      { letter: "C", text: "--preview" },
      { letter: "D", text: "--test" }
    ],
    correct: "B",
    justification: "'ansible-playbook --check' exécute le playbook en mode simulation sans appliquer les changements. Aussi appelé dry-run.",
    traps: {
      A: "--dry-run n'est pas l'option Ansible.",
      C: "--preview n'existe pas.",
      D: "--test n'est pas une option valide."
    }
  },
  {
    id: 106,
    category: "Commandes Ansible",
    question: "Comment exécuter une commande shell sur un groupe de hosts 'webservers' ?",
    options: [
      { letter: "A", text: "ansible webservers -m shell -a 'df -h'" },
      { letter: "B", text: "ansible -g webservers 'df -h'" },
      { letter: "C", text: "ansible-shell webservers 'df -h'" },
      { letter: "D", text: "ansible webservers --command 'df -h'" }
    ],
    correct: "A",
    justification: "'ansible <groupe> -m <module> -a \"<arguments>\"' est la syntaxe pour les commandes ad-hoc. -m shell permet les pipes et variables.",
    traps: {
      B: "-g n'est pas une option valide.",
      C: "ansible-shell n'existe pas.",
      D: "--command n'est pas la syntaxe correcte."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - SSH (utilisé en atelier 6) ==========
  {
    id: 107,
    category: "Commandes SSH",
    question: "Que génère 'ssh-keygen -t rsa -b 4096' ?",
    options: [
      { letter: "A", text: "Une clé symétrique AES" },
      { letter: "B", text: "Une paire de clés RSA (publique et privée) de 4096 bits" },
      { letter: "C", text: "Un certificat SSL" },
      { letter: "D", text: "Un mot de passe sécurisé" }
    ],
    correct: "B",
    justification: "ssh-keygen crée une paire de clés: id_rsa (privée) et id_rsa.pub (publique). -t rsa spécifie l'algorithme, -b 4096 la taille.",
    traps: {
      A: "RSA est asymétrique, pas symétrique.",
      C: "ssh-keygen génère des clés SSH, pas SSL.",
      D: "C'est une clé cryptographique, pas un mot de passe."
    }
  },
  {
    id: 108,
    category: "Commandes SSH",
    question: "Que fait 'ssh-copy-id user@host' ?",
    options: [
      { letter: "A", text: "Copie la clé privée vers le serveur" },
      { letter: "B", text: "Copie la clé publique dans ~/.ssh/authorized_keys du serveur" },
      { letter: "C", text: "Génère une nouvelle clé sur le serveur" },
      { letter: "D", text: "Supprime les anciennes clés du serveur" }
    ],
    correct: "B",
    justification: "ssh-copy-id ajoute votre clé publique au fichier authorized_keys du serveur, permettant la connexion sans mot de passe.",
    traps: {
      A: "JAMAIS copier la clé privée! C'est la publique qui est copiée.",
      C: "La clé est sur votre machine, pas générée sur le serveur.",
      D: "Les anciennes clés sont conservées."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - SYSTEMCTL/TOMCAT ==========
  {
    id: 109,
    category: "Commandes systemctl",
    question: "Quelle commande redémarre le service Tomcat ?",
    options: [
      { letter: "A", text: "systemctl tomcat restart" },
      { letter: "B", text: "sudo systemctl restart tomcat10" },
      { letter: "C", text: "tomcat --restart" },
      { letter: "D", text: "service restart tomcat10" }
    ],
    correct: "B",
    justification: "'sudo systemctl restart tomcat10' arrête puis redémarre le service. sudo est nécessaire pour les opérations de service.",
    traps: {
      A: "L'ordre est: systemctl <action> <service>.",
      C: "tomcat n'est pas une commande directe.",
      D: "La syntaxe service est: service tomcat10 restart."
    }
  },
  {
    id: 110,
    category: "Commandes systemctl",
    question: "Comment voir les logs en temps réel d'un service ?",
    options: [
      { letter: "A", text: "systemctl logs tomcat10" },
      { letter: "B", text: "journalctl -u tomcat10 -f" },
      { letter: "C", text: "tail -f /var/log/tomcat10" },
      { letter: "D", text: "systemctl --follow tomcat10" }
    ],
    correct: "B",
    justification: "'journalctl -u <service> -f' affiche les logs du service en temps réel. -u filtre par unit, -f suit (follow) les nouveaux logs.",
    traps: {
      A: "systemctl logs n'existe pas.",
      C: "Le chemin exact dépend de la config, journalctl est plus fiable.",
      D: "--follow n'est pas une option systemctl."
    }
  },

  // ========== MAÎTRISE DES COMMANDES - DOCKER (légèrement utilisé) ==========
  {
    id: 111,
    category: "Commandes Docker",
    question: "Que fait 'docker run hello-world' ?",
    options: [
      { letter: "A", text: "Affiche 'hello-world' dans le terminal" },
      { letter: "B", text: "Télécharge et exécute l'image hello-world pour tester Docker" },
      { letter: "C", text: "Crée un nouveau fichier hello-world" },
      { letter: "D", text: "Démarre le service Docker" }
    ],
    correct: "B",
    justification: "'docker run hello-world' télécharge l'image officielle de test et l'exécute pour vérifier que Docker fonctionne correctement.",
    traps: {
      A: "C'est plus qu'un simple echo.",
      C: "Aucun fichier n'est créé.",
      D: "Le service Docker doit déjà être démarré."
    }
  },
  {
    id: 112,
    category: "Commandes Docker",
    question: "Comment afficher tous les conteneurs (y compris arrêtés) ?",
    options: [
      { letter: "A", text: "docker ps" },
      { letter: "B", text: "docker ps -a" },
      { letter: "C", text: "docker list --all" },
      { letter: "D", text: "docker containers" }
    ],
    correct: "B",
    justification: "'docker ps -a' affiche TOUS les conteneurs. Sans -a, seuls les conteneurs en cours d'exécution sont affichés.",
    traps: {
      A: "docker ps sans option montre seulement les conteneurs actifs.",
      C: "docker list n'existe pas.",
      D: "La commande correcte est 'docker ps' pas 'docker containers'."
    }
  },

  // ========== COMMANDES JENKINS (Jenkinsfile) ==========
  {
    id: 113,
    category: "Commandes Jenkins",
    question: "Dans un Jenkinsfile, quelle est la différence entre 'sh' et 'bat' ?",
    options: [
      { letter: "A", text: "sh est pour shell Unix/Linux, bat est pour Windows cmd.exe" },
      { letter: "B", text: "bat est la version moderne et optimisée de la commande sh" },
      { letter: "C", text: "sh est significativement plus lent que bat sur toutes les plateformes" },
      { letter: "D", text: "Ils sont parfaitement interchangeables quel que soit l'OS" }
    ],
    correct: "A",
    justification: "'sh' exécute des commandes bash/shell sur Linux/Mac. 'bat' exécute des commandes cmd.exe sur Windows. Utiliser le bon selon l'agent.",
    traps: {
      B: "Les deux existent depuis longtemps.",
      C: "La performance dépend du système, pas de la commande.",
      D: "sh ne fonctionne pas sur Windows sans Cygwin/WSL."
    }
  },
  {
    id: 114,
    category: "Commandes Jenkins",
    question: "Comment changer de répertoire dans un Jenkinsfile ?",
    options: [
      { letter: "A", text: "sh 'cd /path && ...'" },
      { letter: "B", text: "dir('/path') { ... }" },
      { letter: "C", text: "cd '/path'" },
      { letter: "D", text: "chdir('/path')" }
    ],
    correct: "B",
    justification: "'dir(\"/chemin\") { ... }' est la fonction Jenkins pour changer de répertoire. Les commandes dans le bloc s'exécutent dans ce répertoire.",
    traps: {
      A: "cd dans sh fonctionne mais dir est plus propre et Jenkins-natif.",
      C: "cd n'est pas une fonction Jenkins.",
      D: "chdir n'existe pas en Jenkins DSL."
    }
  },

  // ========== COMMANDES GITLAB CI/CD ==========
  {
    id: 115,
    category: "Commandes GitLab CI",
    question: "Dans .gitlab-ci.yml, comment exécuter plusieurs commandes dans un script ?",
    options: [
      { letter: "A", text: "script: 'cmd1 && cmd2 && cmd3'" },
      { letter: "B", text: "script:\\n    - cmd1\\n    - cmd2\\n    - cmd3" },
      { letter: "C", text: "commands: [cmd1, cmd2, cmd3]" },
      { letter: "D", text: "run: cmd1; cmd2; cmd3" }
    ],
    correct: "B",
    justification: "Dans GitLab CI, 'script' est une liste YAML. Chaque commande est un élément de la liste, préfixé par un tiret.",
    traps: {
      A: "Une seule string avec && fonctionne mais la liste est plus lisible.",
      C: "La clé s'appelle 'script' pas 'commands'.",
      D: "'run' n'est pas une clé GitLab CI valide."
    }
  },
  {
    id: 116,
    category: "Commandes GitLab CI",
    question: "Comment accéder à une variable CI/CD définie dans GitLab ?",
    options: [
      { letter: "A", text: "${VARIABLE}" },
      { letter: "B", text: "$VARIABLE ou ${VARIABLE}" },
      { letter: "C", text: "%VARIABLE%" },
      { letter: "D", text: "{{VARIABLE}}" }
    ],
    correct: "B",
    justification: "Dans les scripts GitLab CI (exécutés en shell), les variables sont accessibles via $VARIABLE ou ${VARIABLE}.",
    traps: {
      A: "Les deux syntaxes fonctionnent.",
      C: "%VAR% est la syntaxe Windows cmd, pas shell.",
      D: "{{}} est la syntaxe Jinja2/Ansible, pas shell."
    }
  }
];

// Export pour utilisation dans d'autres fichiers
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { qcmQuestions };
}
