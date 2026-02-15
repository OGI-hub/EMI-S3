
// ============================================
// LAN (RÉSEAUX LOCAUX) MODULE DATA (lasq rz locaux.pdf)
// ============================================

const lanData = {
    topics: [
        // ========== TOPOLOGIES ==========
        {
            id: "topologies",
            title: "Topologies Physiques et Logiques",
            icon: "🔷",
            sections: [
                {
                    title: "Les 3 Topologies de Base",
                    table: [
                        { topo: "Bus", desc: "Toutes les stations sur un même câble", avantages: "Câblage économique et simple", inconvenients: "Une coupure paralyse le réseau" },
                        { topo: "Étoile", desc: "Stations connectées à un point central (switch/hub)", avantages: "Panne isolée, maintenance facile", inconvenients: "Single point of failure (point central)" },
                        { topo: "Anneau", desc: "Stations connectées en boucle", avantages: "Performances stables, accès équitable", inconvenients: "Panne d'une station casse l'anneau" }
                    ]
                },
                {
                    title: "Différence Bus vs Anneau",
                    keyPoints: [
                        "BUS : Diffusion (broadcast) → signal dans les deux sens, toutes les stations reçoivent",
                        "ANNEAU : Circulation séquentielle → chaque station reçoit, régénère et transmet",
                        "BUS : Signal s'atténue, terminaisons nécessaires pour éviter échos",
                        "ANNEAU : Chaque station agit comme répéteur, signal régénéré",
                        "BUS : Méthode aléatoire (CSMA/CD) → collisions possibles",
                        "ANNEAU : Méthode déterministe (Jeton) → pas de collisions"
                    ],
                    traps: [
                        "Topologie PHYSIQUE ≠ Topologie LOGIQUE : Un réseau en étoile physique peut avoir un anneau logique"
                    ]
                }
            ]
        },

        // ========== SUPPORTS DE TRANSMISSION ==========
        {
            id: "supports",
            title: "Supports de Transmission",
            icon: "🔌",
            sections: [
                {
                    title: "Câble Coaxial (Historique)",
                    keyPoints: [
                        "Structure : Conducteur central + isolant + tresse métallique",
                        "Usage historique : Ethernet 10Base2 et 10Base5",
                        "Débit : 10-100 Mbps, jusqu'à 500m"
                    ]
                },
                {
                    title: "Paire Torsadée (Le plus courant)",
                    keyPoints: [
                        "Structure : 2 fils de cuivre torsadés (réduit les interférences)",
                        "Types : UTP (non blindé), FTP (écran global), S-FTP (blindage par paire)",
                        "Portée maximale : 100m"
                    ],
                    table: [
                        { cat: "Cat 5/5e", freq: "100 MHz", usage: "100Base-TX (100 Mbps) et 1000Base-T (1 Gbps)" },
                        { cat: "Cat 6", freq: "250 MHz", usage: "1 Gbps et plus" },
                        { cat: "Cat 7", freq: "600 MHz", usage: "10 Gbps" }
                    ],
                    traps: [
                        "Cat 5e suffit pour le Gigabit ! Cat 6/7 sont pour les environnements plus exigeants"
                    ]
                },
                {
                    title: "Fibre Optique (Hautes performances)",
                    keyPoints: [
                        "Transporte la LUMIÈRE (pas l'électricité)",
                        "Avantages : Très haut débit, longue distance, immunité électromagnétique",
                        "Multimode : Cœur large, plusieurs chemins → courtes distances (bâtiments)",
                        "Monomode : Cœur fin, un seul chemin → longues distances (métropolitain)"
                    ]
                },
                {
                    title: "Types de Câbles Pratiques",
                    keyPoints: [
                        "Câble DROIT : PC → Switch (paires 1-2 et 3-6)",
                        "Câble CROISÉ : PC ↔ PC ou Switch ↔ Switch",
                        "Câble CONSOLE (Rollover) : Pour configurer équipements via port console"
                    ],
                    traps: [
                        "La plupart des switches modernes ont l'auto-MDI/MDIX et détectent automatiquement le type de câble"
                    ]
                }
            ]
        },

        // ========== MÉTHODES MAC ==========
        {
            id: "mac",
            title: "Méthodes d'Accès au Médium (MAC)",
            icon: "🎯",
            sections: [
                {
                    title: "Problème : Conflit d'accès",
                    content: "Si deux stations émettent en même temps → collision → signaux mélangés → aucune transmission n'arrive."
                },
                {
                    title: "Allocation Statique",
                    keyPoints: [
                        "FDMA : Chaque station a une fréquence attribuée",
                        "TDMA : Chaque station a un créneau horaire répétitif",
                        "Inconvénient : Gaspillage si station n'a rien à envoyer"
                    ]
                },
                {
                    title: "Allocation Dynamique — Accès Aléatoire",
                    keyPoints: [
                        "ALOHA : Émettre immédiatement, attendre ACK, réessayer si échec",
                        "Slotted ALOHA : Émission uniquement au début d'une tranche → moins de collisions",
                        "CSMA : 'Écouter avant de parler' → écouter si canal libre",
                        "CSMA/CD (Ethernet) : Écouter + Détecter les collisions pendant l'émission",
                        "CSMA/CA (WiFi) : Éviter les collisions (accusé de réception)"
                    ],
                    traps: [
                        "CSMA/CD détecte les collisions PENDANT l'émission (Ethernet)",
                        "CSMA/CA évite les collisions AVANT l'émission (WiFi) car détection impossible en sans fil"
                    ]
                },
                {
                    title: "Allocation Dynamique — Accès Contrôlé",
                    keyPoints: [
                        "Token Ring (IEEE 802.5) : Jeton circulant, seule la station avec le jeton peut émettre",
                        "Avantage : Pas de collisions, déterministe",
                        "Inconvénient : Complexité de gestion du jeton"
                    ]
                }
            ]
        },

        // ========== ADRESSAGE MAC ==========
        {
            id: "adressage",
            title: "Adressage MAC",
            icon: "🏷️",
            sections: [
                {
                    title: "Format de l'Adresse MAC",
                    keyPoints: [
                        "Longueur : 48 bits (6 octets)",
                        "Notation : Hexadécimale avec : ou - (ex: 08:00:20:09:E3:D8)",
                        "Structure : OUI (24 bits constructeur) + Numéro de série (24 bits)"
                    ]
                },
                {
                    title: "Les 2 Bits Importants",
                    table: [
                        { bit: "I/G (1er bit)", val0: "Unicast (une seule station)", val1: "Multicast/Broadcast (groupe)" },
                        { bit: "U/L (2ème bit)", val0: "Universelle (usine, OUI)", val1: "Locale (administrateur)" }
                    ],
                    keyPoints: [
                        "Astuce : Premier octet PAIR (08, 0A, 0C) → Unicast",
                        "Adresse Broadcast : FF:FF:FF:FF:FF:FF → toutes les stations"
                    ],
                    traps: [
                        "L'adresse MAC opère au niveau de la couche 2 (Liaison de données)",
                        "Ne pas confondre avec l'adresse IP (couche 3)"
                    ]
                }
            ]
        },

        // ========== SOUS-COUCHE LLC ==========
        {
            id: "llc",
            title: "Sous-Couche LLC (Logical Link Control)",
            icon: "🔗",
            sections: [
                {
                    title: "Rôle de la LLC",
                    keyPoints: [
                        "Couche Liaison = MAC (spécifique) + LLC (commune)",
                        "MAC : Gère l'accès au support partagé (qui parle, quand ?)",
                        "LLC : Gère la communication logique de bout en bout"
                    ]
                },
                {
                    title: "Les 3 Types de Services LLC",
                    table: [
                        { type: "LLC Type 1", connexion: "Sans", acquittement: "Sans", usage: "Le plus courant (TCP/IP gère la fiabilité)" },
                        { type: "LLC Type 2", connexion: "Avec", acquittement: "Avec", usage: "Livraison garantie (plus de surcharge)" },
                        { type: "LLC Type 3", connexion: "Sans", acquittement: "Avec", usage: "Compromis (environnements industriels)" }
                    ],
                    traps: [
                        "LLC Type 1 est le plus utilisé car TCP assure déjà la fiabilité au niveau supérieur"
                    ]
                }
            ]
        },

        // ========== ETHERNET 802.3 ==========
        {
            id: "ethernet",
            title: "Ethernet (IEEE 802.3)",
            icon: "📶",
            sections: [
                {
                    title: "Principes de Base",
                    keyPoints: [
                        "Méthode d'accès : CSMA/CD (Écouter + Détecter collisions)",
                        "Probabiliste : Pas de garantie de temps d'accès",
                        "Décentralisé : Pas de contrôleur central",
                        "Simple et économique"
                    ],
                    traps: [
                        "Non déterministe → peu adapté au temps réel strict"
                    ]
                },
                {
                    title: "Format de la Trame Ethernet",
                    keyPoints: [
                        "Préambule : 7 octets de synchronisation (10101010...)",
                        "SFD : 1 octet marquant le début de la trame (10101011)",
                        "Adresse Destination : 6 octets",
                        "Adresse Source : 6 octets",
                        "Type/Longueur : 2 octets",
                        "Données : 46-1500 octets (padding si < 46)",
                        "FCS (CRC) : 4 octets de contrôle d'erreur"
                    ],
                    traps: [
                        "Taille minimale de 64 octets (pour détecter les collisions)",
                        "MTU Ethernet = 1500 octets (données max)"
                    ]
                },
                {
                    title: "Normes Ethernet",
                    table: [
                        { norme: "10Base5", debit: "10 Mbps", support: "Coaxial épais", distance: "500m" },
                        { norme: "10Base2", debit: "10 Mbps", support: "Coaxial fin", distance: "185m" },
                        { norme: "10Base-T", debit: "10 Mbps", support: "Paire torsadée", distance: "100m" },
                        { norme: "100Base-TX", debit: "100 Mbps", support: "Cat 5", distance: "100m" },
                        { norme: "1000Base-T", debit: "1 Gbps", support: "Cat 5e/6", distance: "100m" }
                    ]
                },
                {
                    title: "Concepts Clés",
                    keyPoints: [
                        "IFG (Inter-Frame Gap) : 96 bits de silence entre trames",
                        "Slot Time : Temps de propagation aller-retour + détection",
                        "Collision tardive : Collision après les 64 premiers octets (problème réseau)"
                    ]
                }
            ]
        },

        // ========== ÉQUIPEMENTS ==========
        {
            id: "equipements",
            title: "Équipements d'Interconnexion",
            icon: "🖥️",
            sections: [
                {
                    title: "Comparatif des Équipements",
                    table: [
                        { equip: "Répéteur/Hub", couche: "1 (Physique)", unite: "Bit", fonction: "Régénère le signal", domaines: "Étend collision + broadcast" },
                        { equip: "Pont/Switch", couche: "2 (Liaison)", unite: "Trame", fonction: "Commute via adresse MAC", domaines: "Segmente collision, étend broadcast" },
                        { equip: "Routeur", couche: "3 (Réseau)", unite: "Paquet", fonction: "Route via adresse IP", domaines: "Segmente collision + broadcast" },
                        { equip: "Passerelle", couche: "3-7", unite: "Variable", fonction: "Convertit entre protocoles", domaines: "Dépend de la conversion" }
                    ]
                },
                {
                    title: "Le Switch (Commutateur)",
                    keyPoints: [
                        "Apprend les adresses MAC → construit table CAM",
                        "Forwarding : Envoie trame uniquement vers le bon port",
                        "Filtering : Ne forward pas si destination = source",
                        "Flooding : Envoie sur tous les ports si adresse inconnue",
                        "Modes : Store-and-Forward (vérifie CRC) vs Cut-Through (plus rapide)"
                    ]
                },
                {
                    title: "Le Routeur",
                    keyPoints: [
                        "Segmente les domaines de BROADCAST (caractéristique principale)",
                        "Filtre par adresse IP, port TCP/UDP → sécurité",
                        "Interconnecte réseaux hétérogènes (Ethernet, WiFi, série)",
                        "Latence plus élevée que le switch"
                    ],
                    traps: [
                        "Switch when you can, route when you must → switching = performance, routing = segmentation"
                    ]
                }
            ]
        },

        // ========== VLANs et STP ==========
        {
            id: "vlan",
            title: "VLANs et Spanning Tree Protocol",
            icon: "🌳",
            sections: [
                {
                    title: "VLANs (Réseaux Locaux Virtuels)",
                    keyPoints: [
                        "But : Segmenter logiquement un réseau physique",
                        "VLAN Niveau 1 : Par PORT physique du switch",
                        "VLAN Niveau 2 : Par adresse MAC",
                        "VLAN Niveau 3 : Par adresse IP ou protocole",
                        "802.1Q : Standard pour le tagging VLAN (4 octets ajoutés à la trame)"
                    ],
                    traps: [
                        "Les VLANs ne peuvent pas communiquer entre eux sans ROUTEUR (inter-VLAN routing)"
                    ]
                },
                {
                    title: "STP (Spanning Tree Protocol)",
                    keyPoints: [
                        "But : Éliminer les boucles de niveau 2 dans un réseau redondant",
                        "Mécanisme : Désactive des ports pour créer un arbre sans cycle",
                        "BPDU : Messages échangés entre switches pour STP"
                    ]
                },
                {
                    title: "Fonctionnement STP",
                    keyPoints: [
                        "Étape 1 : Élire le Root Bridge (plus faible Bridge ID = Priorité + MAC)",
                        "Étape 2 : Choisir Root Port sur chaque switch (meilleur chemin vers racine)",
                        "Étape 3 : Choisir Designated Port sur chaque segment",
                        "Ports non racine/non désignés → BLOQUÉS"
                    ]
                },
                {
                    title: "États des Ports STP",
                    table: [
                        { etat: "Blocking", action: "Reçoit BPDU uniquement", duree: "20 sec" },
                        { etat: "Listening", action: "Échange de BPDU", duree: "15 sec" },
                        { etat: "Learning", action: "Apprend adresses MAC", duree: "15 sec" },
                        { etat: "Forwarding", action: "Fonctionnement normal", duree: "-" }
                    ],
                    traps: [
                        "Convergence STP = 30-50 secondes ! RSTP (Rapid STP) améliore cela"
                    ]
                }
            ]
        }
    ]
};

// ============================================
// WIRELESS NETWORKS MODULE DATA (Lasq Wireless.pdf)
// ============================================

const wirelessData = {
    topics: [
        // ========== PARTIE 1: INTRODUCTION ==========
        {
            id: "intro",
            title: "Introduction aux Réseaux Sans Fil",
            icon: "📡",
            sections: [
                {
                    title: "Définition",
                    content: "Un réseau sans fil (Wireless Network) est un système permettant à au moins deux terminaux de communiquer sans liaison filaire, en substituant les câbles par des ondes radio, infrarouges ou des faisceaux laser.",
                    keyPoints: [
                        "Architecture en cellules : une antenne ne couvre qu'une portion limitée du territoire",
                        "Handover : mécanisme permettant de changer de cellule sans perdre la communication"
                    ]
                },
                {
                    title: "Caractéristiques des Ondes Radio",
                    content: "Les ondes radio sont des ondes électromagnétiques qui se propagent entre une antenne émettrice et une antenne réceptrice.",
                    keyPoints: [
                        "Fréquence : mesure en Hz/kHz/MHz/GHz — plus elle est basse, moins le débit est important",
                        "Fréquence haute = plus de distorsions et difficultés à traverser les obstacles",
                        "Puissance : exprimée en mW ou dBm",
                        "SNR (Signal-to-Noise Ratio) : rapport signal/bruit — un SNR élevé = meilleure qualité"
                    ]
                },
                {
                    title: "Compromis Puissance/Portée/Batterie",
                    content: "Une puissance d'émission élevée augmente la couverture (portée), mais réduit la durée de vie des batteries.",
                    tradeoffs: [
                        { plus: "Puissance élevée", minus: "Batterie épuisée rapidement" },
                        { plus: "Fréquence basse", minus: "Débit limité" },
                        { plus: "Fréquence haute", minus: "Portée réduite, plus d'atténuation" }
                    ]
                },
                {
                    title: "Atténuation par les Matériaux",
                    content: "Les obstacles atténuent différemment le signal selon leur nature.",
                    table: [
                        { level: "Faible", materials: "Bois, plastique, verre non teinté" },
                        { level: "Moyenne", materials: "Verre teinté, eau, êtres humains, murs non armés" },
                        { level: "Forte", materials: "Carrelage, béton armé" },
                        { level: "Très forte", materials: "Métal (bloque presque totalement)" }
                    ]
                },
                {
                    title: "Problèmes Spécifiques",
                    keyPoints: [
                        "Sécurité : tout équipement dans la zone peut intercepter le trafic",
                        "Solutions : authentification, chiffrement (WEP, WPA, WPA2), masquage SSID, filtrage MAC/IP",
                        "Consommation électrique : cruciale pour les nœuds sur batterie",
                        "Allocation des fréquences : régulée par l'ANRT au Maroc"
                    ],
                    traps: [
                        "Le chiffrement est OBLIGATOIRE car le medium est aérien et interceptable",
                        "WEP est obsolète et facilement cassable — préférer WPA2"
                    ]
                }
            ]
        },

        // ========== PARTIE 2: WSN ==========
        {
            id: "wsn",
            title: "WSN — Réseaux de Capteurs Sans Fil",
            icon: "🌡️",
            sections: [
                {
                    title: "Définition",
                    content: "Les WSN (Wireless Sensor Networks) sont composés de nombreux capteurs distribués pour surveiller une zone et transmettre des données à une station de base (Sink) de manière automatique et distribuée."
                },
                {
                    title: "Architecture d'un Nœud Capteur",
                    keyPoints: [
                        "Unité de captage : capteur physique + convertisseur Analogique-Numérique (ADC)",
                        "Unité de traitement : processeur + stockage",
                        "Unité de transmission : émetteur/récepteur radio",
                        "Unité d'énergie : batterie (parfois + générateur)"
                    ]
                },
                {
                    title: "Contraintes Énergétiques",
                    content: "Le défi majeur est la consommation d'énergie. L'unité radio consomme énormément, surtout en émission (TX) et réception (RX).",
                    keyPoints: [
                        "Agrégation de données : combine les données pour économiser énergie et bande passante",
                        "Prioritisation : données classées selon leur urgence (ex: battements cardiaques critiques vs température normale)"
                    ],
                    traps: [
                        "L'unité radio consomme PLUS que l'unité de traitement",
                        "L'agrégation économise l'énergie mais peut nuire au délai et à la fiabilité"
                    ]
                },
                {
                    title: "Applications des WSN",
                    keyPoints: [
                        "Surveillance environnementale (forêts, océans)",
                        "Monitoring médical (capteurs corporels)",
                        "Domotique et bâtiments intelligents",
                        "Agriculture de précision",
                        "Surveillance industrielle"
                    ]
                }
            ]
        },

        // ========== PARTIE 3: WPAN ==========
        {
            id: "wpan",
            title: "WPAN — Réseaux Personnels Sans Fil",
            icon: "📱",
            sections: [
                {
                    title: "Définition",
                    content: "Un WPAN est un réseau sans fil de faible portée (quelques dizaines de mètres). Il permet de connecter des appareils personnels (ordinateur, téléphone, imprimante, clavier) sans infrastructure fixe."
                },
                {
                    title: "RFID (Radio Frequency Identification)",
                    content: "Technologie utilisée pour le suivi des marchandises en logistique. Composée de tags (étiquettes) et de lecteurs.",
                    keyPoints: [
                        "Tags Passifs : excités par l'onde radio du lecteur (induction), courte distance",
                        "Tags Actifs : ont leur propre source d'énergie (pile), plus grande autonomie",
                        "RFID 40x plus rapide que le code-barres et sans visibilité directe nécessaire"
                    ],
                    table: [
                        { freq: "BF (125 KHz)", portee: "Quelques mètres", usage: "Anti-intrusion, animaux" },
                        { freq: "HF (13,56 MHz)", portee: "< 2 m", usage: "Cartes d'abonnement, porte-monnaie" },
                        { freq: "UHF (860-930 MHz)", portee: "10-20 m", usage: "Commerce, logistique" },
                        { freq: "Hyper RF (2,45-5,8 GHz)", portee: "Dizaines de mètres", usage: "Haute fréquence" }
                    ]
                },
                {
                    title: "Bluetooth (IEEE 802.15.1)",
                    content: "Technologie principale des WPAN, classée en trois puissances d'émission.",
                    table: [
                        { classe: "Classe I", puissance: "100 mW", portee: "100 m" },
                        { classe: "Classe II", puissance: "2,5 mW", portee: "15-20 m" },
                        { classe: "Classe III", puissance: "1 mW", portee: "10 m" }
                    ],
                    keyPoints: [
                        "v1.x : 2,4 GHz, 1 Mbps",
                        "v2.x : 3 Mbps",
                        "v3.x (UWB) : 3,1-10,6 GHz, > 400 Mbps pour vidéo/audio"
                    ],
                    traps: [
                        "Distinguer Classe I (100m) des Classes II/III (10-20m)",
                        "Bluetooth = IEEE 802.15.1 (ne pas confondre avec 802.11)"
                    ]
                },
                {
                    title: "ZigBee (IEEE 802.15.4)",
                    content: "Technologie à très bas prix et très faible consommation (jusqu'à 2 ans sur piles). Dédiée au contrôle et à la domotique.",
                    keyPoints: [
                        "Standard (2,4 GHz) : 250 Kbps, 100 m, jusqu'à 255 appareils",
                        "Version 802.15.4a : 75 m, jusqu'à 65 000 appareils",
                        "Usage : transport de COMMANDES, pas de gros volumes de données"
                    ],
                    traps: [
                        "ZigBee n'est PAS pour le transfert de données massives (vidéo, etc.)",
                        "Peut supporter 65 000 périphériques via routeurs XBee"
                    ]
                },
                {
                    title: "WUSB (Wireless USB)",
                    content: "Basé sur l'UWB (Ultra Wide Band), vise à remplacer les câbles USB.",
                    keyPoints: [
                        "Débit : 480 Mbps",
                        "Portée : 10 mètres"
                    ]
                }
            ]
        },

        // ========== PARTIE 4: WLAN ==========
        {
            id: "wlan",
            title: "WLAN — WiFi (IEEE 802.11)",
            icon: "📶",
            sections: [
                {
                    title: "Définition",
                    content: "Un WLAN permet de relier divers terminaux sur un rayon de quelques dizaines de mètres (intérieur) à plusieurs centaines de mètres (extérieur).",
                    keyPoints: [
                        "Point d'Accès (AP) : élément central avec antennes + interface Ethernet → relie sans fil au filaire",
                        "Cellule : zone de couverture radio formée par un AP",
                        "Usages : privé/entreprise, public (hot-spots), domestique"
                    ]
                },
                {
                    title: "Normes WiFi (IEEE 802.11)",
                    table: [
                        { norme: "802.11b", freq: "2,4 GHz", debit: "11 Mbps", portee: "10-100 m" },
                        { norme: "802.11a", freq: "5 GHz", debit: "54 Mbps", portee: "10-100 m" },
                        { norme: "802.11g", freq: "2,4 GHz", debit: "54 Mbps", portee: "10-100 m" },
                        { norme: "802.11n", freq: "2,4 / 5 GHz", debit: "540 Mbps", portee: "10-100 m" }
                    ],
                    keyPoints: [
                        "MIMO : utilisé par 802.11n, exploite plusieurs antennes pour augmenter le débit"
                    ]
                },
                {
                    title: "Modes de Fonctionnement",
                    keyPoints: [
                        "Ad-hoc (IBSS) : interconnexion DIRECTE entre équipements, SANS infrastructure",
                        "Infrastructure (BSS) : tout passe par le Point d'Accès central",
                        "Infrastructure Étendu (ESS) : plusieurs APs reliés par un système de distribution (DS)"
                    ],
                    traps: [
                        "En mode Infrastructure, les PC ne communiquent PAS directement — tout passe par l'AP",
                        "IBSS = Independent BSS = Ad-hoc",
                        "ESS = Extended Service Set = plusieurs cellules interconnectées"
                    ]
                },
                {
                    title: "Configuration des Canaux",
                    keyPoints: [
                        "2,4 GHz (802.11b/g) : 13 canaux, mais ils se RECOUVRENT partiellement",
                        "Canaux recommandés pour éviter interférences : 1, 6 et 11",
                        "5 GHz (802.11a) : 8 canaux espacés, PAS de risque d'interférence entre eux"
                    ],
                    traps: [
                        "En 2,4 GHz, utiliser UNIQUEMENT les canaux 1, 6, 11 pour éviter les interférences",
                        "Interférences causées par : autres WiFi, Bluetooth, fours micro-ondes"
                    ]
                },
                {
                    title: "Topologies de Cellules",
                    keyPoints: [
                        "Disjointes : pas de mobilité entre cellules",
                        "Partiellement recouvertes : mobilité continue possible",
                        "Totalement recouvertes : haute densité d'utilisateurs"
                    ]
                },
                {
                    title: "Sécurité WLAN",
                    keyPoints: [
                        "Modifier le SSID par défaut",
                        "Utiliser WPA/WPA2 (plus robuste que WEP)",
                        "Mettre en place des ACL par adresse MAC",
                        "Audit de site avec Netstumbler pour détecter les réseaux"
                    ],
                    traps: [
                        "WEP est OBSOLÈTE et facilement cassable",
                        "Le débit diminue avec la distance (ex: 11 Mbps à 50m → 1 Mbps à 150m)"
                    ]
                }
            ]
        }
    ]
};

// ============================================
// FLASHCARDS FOR SPACED REPETITION
// ============================================

const wirelessFlashcards = [
    // === INTRO ===
    { id: "fc-intro-1", topic: "intro", front: "Qu'est-ce qu'un réseau sans fil (Wireless Network) ?", back: "Un système permettant à au moins deux terminaux de communiquer sans liaison filaire, via ondes radio, infrarouges ou laser." },
    { id: "fc-intro-2", topic: "intro", front: "Qu'est-ce que le Handover ?", back: "Mécanisme permettant de changer de cellule sans perdre la communication en cours." },
    { id: "fc-intro-3", topic: "intro", front: "Quel est l'impact d'une fréquence HAUTE sur la propagation ?", back: "Plus de distorsions, plus de difficultés à traverser les obstacles, portée RÉDUITE." },
    { id: "fc-intro-4", topic: "intro", front: "Quel est l'impact d'une fréquence BASSE sur le débit ?", back: "Moins de débit (débit LIMITÉ)." },
    { id: "fc-intro-5", topic: "intro", front: "Qu'est-ce que le SNR ?", back: "Signal-to-Noise Ratio : rapport entre la puissance du signal et celle du bruit. SNR élevé = meilleure qualité." },
    { id: "fc-intro-6", topic: "intro", front: "Quel matériau bloque presque totalement le signal radio ?", back: "Le MÉTAL (atténuation très forte)." },
    { id: "fc-intro-7", topic: "intro", front: "Compromis puissance d'émission élevée ?", back: "✅ Plus de portée / ⚠️ Batterie épuisée rapidement." },
    { id: "fc-intro-8", topic: "intro", front: "Pourquoi le chiffrement est-il obligatoire en sans fil ?", back: "Le medium est AÉRIEN et interceptable par tout équipement dans la zone." },

    // === WSN ===
    { id: "fc-wsn-1", topic: "wsn", front: "Qu'est-ce qu'un WSN ?", back: "Wireless Sensor Network : réseau de capteurs distribués transmettant des données à une station de base (Sink)." },
    { id: "fc-wsn-2", topic: "wsn", front: "Quels sont les 4 composants d'un nœud capteur ?", back: "1) Unité de captage (ADC)\n2) Unité de traitement (processeur)\n3) Unité de transmission (radio)\n4) Unité d'énergie (batterie)" },
    { id: "fc-wsn-3", topic: "wsn", front: "Quelle unité consomme le PLUS d'énergie dans un WSN ?", back: "L'unité RADIO (émission TX et réception RX)." },
    { id: "fc-wsn-4", topic: "wsn", front: "Qu'est-ce que l'agrégation de données ?", back: "Combiner les données pour économiser l'énergie et la bande passante (mais peut nuire au délai)." },
    { id: "fc-wsn-5", topic: "wsn", front: "Donner 4 applications des WSN.", back: "1) Surveillance environnementale\n2) Monitoring médical\n3) Domotique\n4) Agriculture de précision" },


    // === WPAN ===
    { id: "fc-wpan-1", topic: "wpan", front: "Qu'est-ce qu'un WPAN ?", back: "Wireless Personal Area Network : réseau de faible portée (dizaines de mètres) pour appareils personnels, SANS infrastructure." },
    { id: "fc-wpan-2", topic: "wpan", front: "Différence entre tag RFID passif et actif ?", back: "Passif : excité par l'onde du lecteur (induction)\nActif : possède sa propre pile" },
    { id: "fc-wpan-3", topic: "wpan", front: "RFID vs Code-barres : lequel est plus rapide ?", back: "RFID est 40x plus rapide et ne nécessite PAS de visibilité directe." },
    { id: "fc-wpan-4", topic: "wpan", front: "Quelle fréquence RFID pour la logistique (10-20m) ?", back: "UHF (860-930 MHz)" },
    { id: "fc-wpan-5", topic: "wpan", front: "Bluetooth : quelle classe pour 100m de portée ?", back: "Classe I (100 mW)" },
    { id: "fc-wpan-6", topic: "wpan", front: "Bluetooth correspond à quelle norme IEEE ?", back: "IEEE 802.15.1" },
    { id: "fc-wpan-7", topic: "wpan", front: "ZigBee correspond à quelle norme IEEE ?", back: "IEEE 802.15.4" },
    { id: "fc-wpan-8", topic: "wpan", front: "Usage principal du ZigBee ?", back: "Transport de COMMANDES (domotique), PAS de gros volumes de données." },
    { id: "fc-wpan-9", topic: "wpan", front: "Autonomie typique d'un appareil ZigBee ?", back: "Jusqu'à 2 ANS sur piles." },
    { id: "fc-wpan-10", topic: "wpan", front: "Combien de périphériques max en ZigBee 802.15.4a ?", back: "Plus de 65 000 périphériques." },

    // === WLAN ===
    { id: "fc-wlan-1", topic: "wlan", front: "Qu'est-ce qu'un Point d'Accès (AP) ?", back: "Élément central avec antennes + interface Ethernet, relie le réseau sans fil au réseau filaire." },
    { id: "fc-wlan-2", topic: "wlan", front: "Mode Ad-hoc (IBSS) vs Mode Infrastructure (BSS) ?", back: "Ad-hoc : connexion DIRECTE entre équipements, SANS AP\nInfrastructure : tout passe par l'AP central" },
    { id: "fc-wlan-3", topic: "wlan", front: "Qu'est-ce que l'ESS ?", back: "Extended Service Set : plusieurs APs reliés par un système de distribution (DS), mobilité transparente." },
    { id: "fc-wlan-4", topic: "wlan", front: "Norme 802.11a : fréquence et débit ?", back: "5 GHz, 54 Mbps" },
    { id: "fc-wlan-5", topic: "wlan", front: "Norme 802.11b : fréquence et débit ?", back: "2,4 GHz, 11 Mbps" },
    { id: "fc-wlan-6", topic: "wlan", front: "Norme 802.11n : particularité ?", back: "Utilise MIMO (plusieurs antennes), jusqu'à 540 Mbps, fonctionne en 2,4 ET 5 GHz." },
    { id: "fc-wlan-7", topic: "wlan", front: "Quels canaux utiliser en 2,4 GHz pour éviter les interférences ?", back: "Canaux 1, 6 et 11 (ils ne se recouvrent pas)" },
    { id: "fc-wlan-8", topic: "wlan", front: "Pourquoi le 5 GHz est avantageux pour les canaux ?", back: "Les 8 canaux sont ESPACÉS : pas de risque d'interférence entre eux." },
    { id: "fc-wlan-9", topic: "wlan", front: "WEP vs WPA2 ?", back: "WEP est OBSOLÈTE et facilement cassable. Toujours préférer WPA2." },
    { id: "fc-wlan-10", topic: "wlan", front: "Que cause un éloignement du Point d'Accès ?", back: "Le débit DIMINUE (ex: 11 Mbps à 50m → 1 Mbps à 150m)." }
];

// ============================================
// QCM DIFFICILES AVEC PIÈGES (WIRELESS)
// ============================================

const wirelessQcmHard = [
    // === INTRO ===
    {
        id: "qcm-intro-1",
        topic: "intro",
        q: "Quel est l'impact d'une fréquence HAUTE sur un signal sans fil ?",
        o: ["A) Plus de portée et moins de débit", "B) Plus de distorsions et portée RÉDUITE", "C) Meilleure traversée des obstacles", "D) Aucun impact"],
        c: 1,
        exp: "Les fréquences hautes subissent plus d'atténuation et traversent moins bien les obstacles, réduisant la portée.",
        trap: "On pense souvent que 'haute' = 'meilleur'. C'est faux pour la portée !",
        concept: "Compromis fréquence/portée."
    },
    {
        id: "qcm-intro-2",
        topic: "intro",
        q: "Quel matériau atténue le MOINS le signal radio ?",
        o: ["A) Métal", "B) Béton armé", "C) Bois", "D) Carrelage"],
        c: 2,
        exp: "Le bois a une atténuation FAIBLE. Le métal bloque presque totalement le signal.",
        trap: "Le piège est de confondre l'ordre d'atténuation. Bois < Verre < Béton < Métal.",
        concept: "Atténuation des matériaux."
    },
    {
        id: "qcm-intro-3",
        topic: "intro",
        q: "Pourquoi le chiffrement est-il OBLIGATOIRE en réseau sans fil ?",
        o: ["A) Pour augmenter le débit", "B) Pour réduire les interférences", "C) Car le medium est aérien et interceptable par tous", "D) C'est facultatif en réalité"],
        c: 2,
        exp: "Tout équipement dans la zone de couverture peut capturer le trafic. Le chiffrement (WPA2) protège les données.",
        trap: "Certains pensent que le masquage SSID suffit. C'est FAUX !",
        concept: "Sécurité sans fil obligatoire."
    },
    {
        id: "qcm-intro-4",
        topic: "intro",
        q: "Qu'est-ce que le SNR en réseaux sans fil ?",
        o: ["A) Le débit maximal du canal", "B) Le rapport Signal / Bruit", "C) Le nombre de stations connectées", "D) La fréquence du signal"],
        c: 1,
        exp: "SNR = Signal-to-Noise Ratio. Un SNR élevé signifie un signal clair par rapport au bruit ambiant.",
        trap: "Ne pas confondre SNR avec SSID ou RSSI.",
        concept: "Qualité du signal."
    },

    // === WSN ===
    {
        id: "qcm-wsn-1",
        topic: "wsn",
        q: "Dans un nœud capteur WSN, quelle unité consomme le PLUS d'énergie ?",
        o: ["A) L'unité de captage", "B) L'unité de traitement (processeur)", "C) L'unité RADIO (transmission)", "D) L'unité de stockage"],
        c: 2,
        exp: "L'émission/réception radio (TX/RX) est la plus gourmande en énergie, pas le processeur !",
        trap: "On pense souvent que le processeur consomme le plus. C'est FAUX.",
        concept: "Contraintes énergétiques WSN."
    },
    {
        id: "qcm-wsn-2",
        topic: "wsn",
        q: "Qu'est-ce que la 'station de base' (Sink) dans un WSN ?",
        o: ["A) Un capteur plus puissant", "B) Le point central de collecte des données", "C) Le routeur Internet", "D) Le serveur d'authentification"],
        c: 1,
        exp: "Le Sink est le nœud central qui reçoit toutes les données des capteurs pour les traiter ou les transmettre.",
        trap: "Le Sink n'est pas un simple capteur, c'est le point de collecte central.",
        concept: "Architecture WSN."
    },
    {
        id: "qcm-wsn-3",
        topic: "wsn",
        q: "Quel est l'inconvénient de l'agrégation de données dans un WSN ?",
        o: ["A) Augmente la consommation d'énergie", "B) Peut nuire au délai et à la fiabilité", "C) Réduit la bande passante", "D) Impossible à implémenter"],
        c: 1,
        exp: "L'agrégation économise l'énergie MAIS peut introduire des délais et réduire la précision/fiabilité des données.",
        trap: "L'agrégation a des avantages ET des inconvénients.",
        concept: "Agrégation de données."
    },

    // === WPAN ===
    {
        id: "qcm-wpan-1",
        topic: "wpan",
        q: "Quelle est la différence entre un tag RFID passif et actif ?",
        o: ["A) Le passif est plus rapide", "B) L'actif possède sa propre source d'énergie (pile)", "C) Le passif a une plus grande portée", "D) Aucune différence"],
        c: 1,
        exp: "Le tag ACTIF a une pile interne, permettant plus de portée et des dialogues complexes. Le passif est alimenté par induction.",
        trap: "On pense parfois que 'passif' = moins cher = moins performant. C'est plus nuancé.",
        concept: "Types de tags RFID."
    },
    {
        id: "qcm-wpan-2",
        topic: "wpan",
        q: "Bluetooth correspond à quelle norme IEEE ?",
        o: ["A) 802.11", "B) 802.15.1", "C) 802.15.4", "D) 802.3"],
        c: 1,
        exp: "Bluetooth = IEEE 802.15.1. ZigBee = 802.15.4. WiFi = 802.11.",
        trap: "PIÈGE CLASSIQUE : confondre 802.15.1 (Bluetooth) et 802.15.4 (ZigBee).",
        concept: "Normes WPAN."
    },
    {
        id: "qcm-wpan-3",
        topic: "wpan",
        q: "Quelle classe Bluetooth offre une portée de 100 mètres ?",
        o: ["A) Classe I", "B) Classe II", "C) Classe III", "D) Classe IV"],
        c: 0,
        exp: "Classe I = 100 mW = 100 m. Classe II = 15-20 m. Classe III = 10 m.",
        trap: "L'ordre est inversé : Classe I est la PLUS puissante, pas la plus faible.",
        concept: "Classes Bluetooth."
    },
    {
        id: "qcm-wpan-4",
        topic: "wpan",
        q: "Quel est l'usage PRINCIPAL du ZigBee ?",
        o: ["A) Streaming vidéo HD", "B) Transport de COMMANDES (domotique)", "C) Transfert de fichiers volumineux", "D) Remplacement du WiFi"],
        c: 1,
        exp: "ZigBee est conçu pour des commandes légères (allumer/éteindre), PAS pour du gros trafic de données.",
        trap: "ZigBee ≠ alternative au WiFi pour le transfert de données.",
        concept: "Usage ZigBee."
    },
    {
        id: "qcm-wpan-5",
        topic: "wpan",
        q: "Combien de périphériques peut supporter ZigBee en version étendue (802.15.4a) ?",
        o: ["A) 10", "B) 255", "C) Plus de 65 000", "D) Illimité"],
        c: 2,
        exp: "La version 802.15.4a peut adresser plus de 65 000 périphériques via des routeurs XBee.",
        trap: "255 est la limite du standard de base, pas de la version étendue.",
        concept: "Capacité ZigBee."
    },

    // === WLAN ===
    {
        id: "qcm-wlan-1",
        topic: "wlan",
        q: "En mode Infrastructure (BSS), les PC peuvent-ils communiquer DIRECTEMENT entre eux ?",
        o: ["A) Oui, toujours", "B) Non, tout passe par le Point d'Accès", "C) Seulement avec WPA2", "D) Seulement en 5 GHz"],
        c: 1,
        exp: "En mode Infrastructure, TOUTES les communications passent par l'AP central. Le mode Ad-hoc permet le direct.",
        trap: "PIÈGE CLASSIQUE : confondre mode Infrastructure et mode Ad-hoc.",
        concept: "Modes WiFi."
    },
    {
        id: "qcm-wlan-2",
        topic: "wlan",
        q: "Quels sont les 3 canaux recommandés en 2,4 GHz pour éviter les interférences ?",
        o: ["A) 1, 2 et 3", "B) 1, 6 et 11", "C) 10, 11 et 12", "D) Tous les canaux sont équivalents"],
        c: 1,
        exp: "Les canaux 1, 6 et 11 ne se recouvrent PAS en 2,4 GHz, évitant les interférences mutuelles.",
        trap: "Les canaux adjacents (ex: 1, 2, 3) SE RECOUVRENT et créent des interférences !",
        concept: "Canaux WiFi 2,4 GHz."
    },
    {
        id: "qcm-wlan-3",
        topic: "wlan",
        q: "Quelle norme WiFi utilise UNIQUEMENT la bande 5 GHz ?",
        o: ["A) 802.11b", "B) 802.11g", "C) 802.11a", "D) 802.11n"],
        c: 2,
        exp: "802.11a = 5 GHz (54 Mbps). 802.11b/g = 2,4 GHz. 802.11n = les deux.",
        trap: "802.11n fonctionne sur les DEUX bandes, pas uniquement 5 GHz.",
        concept: "Normes WiFi."
    },
    {
        id: "qcm-wlan-4",
        topic: "wlan",
        q: "Que signifie IBSS en WiFi ?",
        o: ["A) Infrastructure Basic Service Set", "B) Independent BSS (mode Ad-hoc)", "C) Internet-Based Security System", "D) Integrated Bandwidth Sharing Service"],
        c: 1,
        exp: "IBSS = Independent Basic Service Set = mode Ad-hoc (sans point d'accès central).",
        trap: "Ne pas confondre IBSS (ad-hoc) avec BSS (infrastructure) ou ESS (étendu).",
        concept: "Terminologie WLAN."
    },
    {
        id: "qcm-wlan-5",
        topic: "wlan",
        q: "Qu'est-ce que la technologie MIMO ?",
        o: ["A) Un protocole de sécurité", "B) Plusieurs antennes pour augmenter le débit", "C) Un mode de fonctionnement ad-hoc", "D) Un type de chiffrement"],
        c: 1,
        exp: "MIMO = Multiple Input Multiple Output. Utilisé par 802.11n pour exploiter plusieurs antennes simultanément.",
        trap: "MIMO n'est pas un protocole de sécurité.",
        concept: "MIMO."
    },
    {
        id: "qcm-wlan-6",
        topic: "wlan",
        q: "WEP est-il encore recommandé pour sécuriser un réseau WiFi ?",
        o: ["A) Oui, c'est le standard", "B) Non, il est OBSOLÈTE et facilement cassable", "C) Seulement pour les petits réseaux", "D) Oui, avec une clé longue"],
        c: 1,
        exp: "WEP est cassé depuis longtemps. Il faut utiliser WPA2 ou WPA3.",
        trap: "Même une clé WEP longue ne protège pas : le protocole lui-même est vulnérable.",
        concept: "Sécurité WiFi."
    },
    {
        id: "qcm-wlan-7",
        topic: "wlan",
        q: "Que se passe-t-il quand on s'éloigne du Point d'Accès ?",
        o: ["A) Le signal reste constant", "B) Le débit AUGMENTE", "C) Le débit DIMINUE automatiquement", "D) La connexion coupe instantanément"],
        c: 2,
        exp: "Le débit s'adapte automatiquement (rate adaptation). Ex: 11 Mbps à 50m → 1 Mbps à 150m.",
        trap: "La connexion ne coupe pas brutalement, elle se dégrade progressivement.",
        concept: "Portée vs Débit."
    },

    // === SÉCURITÉ (transversal) ===
    {
        id: "qcm-sec-1",
        topic: "securite",
        q: "Quelle solution de sécurité WiFi est la PLUS recommandée ?",
        o: ["A) Masquage du SSID seul", "B) Filtrage MAC seul", "C) WPA2 avec AES", "D) Aucune sécurité (réseau ouvert)"],
        c: 2,
        exp: "WPA2/WPA3 avec chiffrement AES est la solution robuste. Le masquage SSID et le filtrage MAC sont faciles à contourner.",
        trap: "Le masquage SSID donne une FAUSSE impression de sécurité.",
        concept: "Sécurité WiFi best practices."
    }
];

// ============================================
// EXAMEN BLANC — Format style ancien examen
// ============================================

const wirelessExamBlanc = [
    // Questions basées sur l'image "ancien exam.jpeg"
    {
        id: 1,
        topic: "intro",
        prompt: "Un réseau sans fil (en anglais Wireless Network) est :",
        type: "definition",
        corrige: "Un système permettant à au moins deux terminaux de communiquer sans liaison filaire, en substituant les câbles par des ondes radio, infrarouges ou des faisceaux laser."
    },
    {
        id: 2,
        topic: "intro",
        prompt: "Le changement de cellule sans perte de communication s'appelle :",
        type: "definition",
        corrige: "Le Handover (ou Handoff). C'est le mécanisme permettant à un utilisateur de passer d'une cellule à une autre sans interrompre sa communication."
    },
    {
        id: 3,
        topic: "intro",
        prompt: "Le spectre électromagnétique est :",
        type: "definition",
        corrige: "L'ensemble des fréquences des ondes électromagnétiques, allant des très basses fréquences (radio) aux très hautes fréquences (rayons gamma). En sans fil, on utilise principalement les bandes radio (kHz à GHz)."
    },
    {
        id: 4,
        topic: "intro",
        prompt: "Puissance d'émission ............... couverture ..........., mais durée de vie des batteries :",
        type: "fill",
        corrige: "Puissance d'émission ÉLEVÉE → couverture GRANDE (portée augmentée), mais durée de vie des batteries RÉDUITE."
    },
    {
        id: 5,
        topic: "intro",
        prompt: "Problèmes spécifiques au WN : (4)",
        type: "list",
        corrige: "1) Sécurité (medium aérien interceptable)\n2) Consommation électrique (batterie limitée)\n3) Allocation des fréquences (régulation ANRT)\n4) Interférences et atténuation (obstacles, multi-path)"
    },
    {
        id: 6,
        topic: "intro",
        prompt: "Plus la fréquence est basse, moins le débit de données transmises est :",
        type: "fill",
        corrige: "IMPORTANT (ou ÉLEVÉ). Les basses fréquences offrent moins de bande passante, donc moins de débit."
    },
    {
        id: 7,
        topic: "intro",
        prompt: "Plus la fréquence est haute, plus les distorsions ........",
        type: "fill",
        corrige: "Plus la fréquence est haute, plus les distorsions AUGMENTENT et plus les difficultés à traverser les milieux sont IMPORTANTES."
    },
    {
        id: 8,
        topic: "securite",
        prompt: "Solutions aux problèmes de sécurité : (4)",
        type: "list",
        corrige: "1) Authentification (vérifier l'identité)\n2) Chiffrement (WPA2/WPA3 avec AES)\n3) Masquage du SSID (cacher le nom du réseau)\n4) Filtrage par adresse MAC ou IP (ACL)"
    },
    {
        id: 9,
        topic: "wsn",
        prompt: "Donner 4 applications des WSN :",
        type: "list",
        corrige: "1) Surveillance environnementale (forêts, océans, volcans)\n2) Monitoring médical (capteurs corporels, battements cardiaques)\n3) Domotique et bâtiments intelligents\n4) Agriculture de précision (humidité, température sol)"
    },
    {
        id: 10,
        topic: "wsn",
        prompt: "Dessiner synectdoque d'un capteur :",
        type: "schema",
        corrige: "Architecture d'un nœud capteur :\n┌─────────────────────────────────────┐\n│         NŒUD CAPTEUR               │\n├─────────────┬───────────────────────┤\n│ CAPTAGE     │ TRAITEMENT            │\n│ (Sensor +   │ (Processeur +         │\n│  ADC)       │  Stockage)            │\n├─────────────┼───────────────────────┤\n│ TRANSMISSION│ ÉNERGIE               │\n│ (Radio TX/RX│ (Batterie +           │\n│  Antenne)   │  Générateur optionnel)│\n└─────────────┴───────────────────────┘"
    },
    {
        id: 11,
        topic: "wsn",
        prompt: "C'est quoi WSN ?",
        type: "definition",
        corrige: "WSN = Wireless Sensor Network (Réseau de Capteurs Sans Fil). Réseau composé de nombreux capteurs distribués pour surveiller une zone et transmettre des données à une station de base (Sink) de manière automatique."
    },
    {
        id: 12,
        topic: "wpan",
        prompt: "WPAN est un :",
        type: "definition",
        corrige: "WPAN = Wireless Personal Area Network. Réseau sans fil de faible portée (quelques dizaines de mètres) permettant de connecter des appareils personnels (PC, téléphone, imprimante) SANS infrastructure fixe."
    },
    {
        id: 13,
        topic: "wpan",
        prompt: "4 Technologies de WPAN :",
        type: "list",
        corrige: "1) RFID (Radio Frequency Identification)\n2) Bluetooth (IEEE 802.15.1)\n3) ZigBee (IEEE 802.15.4)\n4) UWB / WUSB (Ultra Wide Band / Wireless USB)"
    },
    {
        id: 15,
        topic: "wpan",
        prompt: "C'est quoi RFID ?",
        type: "definition",
        corrige: "RFID = Radio Frequency Identification. Technologie de suivi des marchandises en logistique, composée de tags (étiquettes passives ou actives) et de lecteurs. 40x plus rapide que le code-barres, sans visibilité directe nécessaire."
    },
    {
        id: 16,
        topic: "intro",
        prompt: "802.3 :",
        type: "norm",
        corrige: "802.3 = ETHERNET (réseau local filaire LAN). Ce n'est PAS une norme sans fil, mais elle est souvent demandée pour vérifier la compréhension des familles IEEE 802.x."
    },
    {
        id: 17,
        topic: "wlan",
        prompt: "802.11 :",
        type: "norm",
        corrige: "802.11 = WiFi (WLAN - Wireless Local Area Network)\n- 802.11b : 2,4 GHz, 11 Mbps\n- 802.11a : 5 GHz, 54 Mbps\n- 802.11g : 2,4 GHz, 54 Mbps\n- 802.11n : 2,4/5 GHz, 540 Mbps (MIMO)"
    },
    {
        id: 18,
        topic: "wpan",
        prompt: "802.15 :",
        type: "norm",
        corrige: "802.15 = WPAN (Wireless Personal Area Network)\n- 802.15.1 = Bluetooth\n- 802.15.4 = ZigBee"
    },
    {
        id: 19,
        topic: "intro",
        prompt: "802.16 :",
        type: "norm",
        corrige: "802.16 = WiMAX (Wireless Metropolitan Area Network). Technologie de réseau métropolitain sans fil, non couverte en détail dans ce cours."
    },
    {
        id: 20,
        topic: "wlan",
        prompt: "WLAN est un :",
        type: "definition",
        corrige: "WLAN = Wireless Local Area Network (WiFi). Permet de relier divers terminaux sur un rayon de quelques dizaines de mètres (intérieur) à plusieurs centaines de mètres (extérieur)."
    },
    {
        id: 21,
        topic: "wlan",
        prompt: "Le nombre de canaux disponibles dans : 802.11a et 802.11g :",
        type: "fill",
        corrige: "802.11a (5 GHz) : 8 canaux espacés (pas d'interférence)\n802.11g (2,4 GHz) : 13 canaux, mais seulement 3 non chevauchants (1, 6, 11)"
    },
    {
        id: 22,
        topic: "wlan",
        prompt: "Le mode adhoc :",
        type: "definition",
        corrige: "Mode Ad-hoc (IBSS = Independent Basic Service Set) : Interconnexion DIRECTE entre les équipements SANS point d'accès central. Les stations communiquent peer-to-peer."
    },
    {
        id: 23,
        topic: "wlan",
        prompt: "Le mode infrastructure :",
        type: "definition",
        corrige: "Mode Infrastructure (BSS = Basic Service Set) : Toutes les communications passent par un Point d'Accès (AP) central. Les équipements ne communiquent PAS directement entre eux."
    },
    {
        id: 24,
        topic: "wlan",
        prompt: "Schématisez les stations BSS, IBSS, ESS, DS, AP :",
        type: "schema",
        corrige: "BSS (Infrastructure) :\n    [PC1] ←→ [AP] ←→ [PC2]\n           (tout passe par l'AP)\n\nIBSS (Ad-hoc) :\n    [PC1] ←→ [PC2] ←→ [PC3]\n         (connexion directe)\n\nESS (Extended) :\n    [AP1]──DS──[AP2]\n     ↓          ↓\n   [PC1]      [PC2]\n   (DS = Distribution System, relie les APs)"
    },
    {
        id: 25,
        topic: "wlan",
        prompt: "Disposer de plusieurs points d'accès en même endroit ! si non, pourquoi, si oui, comment ?",
        type: "analysis",
        corrige: "OUI, c'est possible et utile pour la haute densité d'utilisateurs.\nCOMMENT : Utiliser des canaux NON chevauchants (1, 6, 11 en 2,4 GHz) pour éviter les interférences. Les cellules peuvent être partiellement recouvertes pour assurer la mobilité (handover)."
    },
    {
        id: 26,
        topic: "wlan",
        prompt: "Dessinez les topologies : disjointes, adjacentes et recouvertes avec avantage et inconvénient :",
        type: "schema",
        corrige: "DISJOINTES : [●]    [●]    [●]\n  → Avantage : Pas d'interférences\n  → Inconvénient : Zones mortes, pas de mobilité\n\nADJACENTES (partiellement recouvertes) : [●][●][●]\n  → Avantage : Mobilité continue (handover)\n  → Inconvénient : Configuration des canaux nécessaire\n\nTOTALEMENT RECOUVERTES : [●●●]\n  → Avantage : Haute densité d'utilisateurs\n  → Inconvénient : Interférences si canaux mal configurés"
    }
];

// ============================================
// LAN MODULE — FLASHCARDS
// ============================================

const lanFlashcards = [
    // === TOPOLOGIES ===
    { id: "lan-fc-1", topic: "topologies", front: "Quels sont les 3 types de topologies physiques de base ?", back: "1) Bus (un seul câble)\\n2) Étoile (point central)\\n3) Anneau (boucle)" },
    { id: "lan-fc-2", topic: "topologies", front: "Différence entre topologie physique et logique ?", back: "Physique = comment les câbles sont branchés\\nLogique = comment les données circulent\\nUn réseau en étoile physique peut avoir un anneau logique." },
    { id: "lan-fc-3", topic: "topologies", front: "Inconvénient principal de la topologie Bus ?", back: "Une coupure du câble paralyse TOUT le réseau." },
    { id: "lan-fc-4", topic: "topologies", front: "Qu'est-ce que le 'Single Point of Failure' en Étoile ?", back: "Le point central (switch/hub) : s'il tombe en panne, tout le réseau est inaccessible." },

    // === SUPPORTS ===
    { id: "lan-fc-5", topic: "supports", front: "Portée maximale d'un câble paire torsadée ?", back: "100 mètres maximum." },
    { id: "lan-fc-6", topic: "supports", front: "Quelle catégorie de câble pour le Gigabit (1 Gbps) ?", back: "Cat 5e minimum (100 MHz). Cat 6 recommandé." },
    { id: "lan-fc-7", topic: "supports", front: "Différence fibre Monomode vs Multimode ?", back: "Multimode : cœur large, plusieurs chemins → courtes distances\\nMonomode : cœur fin, un seul chemin → longues distances" },
    { id: "lan-fc-8", topic: "supports", front: "Quand utiliser un câble croisé ?", back: "Pour connecter deux équipements de MÊME type : PC ↔ PC ou Switch ↔ Switch." },
    { id: "lan-fc-9", topic: "supports", front: "Différence UTP, FTP, S-FTP ?", back: "UTP : Non blindé\\nFTP : Écran global\\nS-FTP : Écran global + blindage par paire" },

    // === MAC ===
    { id: "lan-fc-10", topic: "mac", front: "Que signifie CSMA/CD ?", back: "Carrier Sense Multiple Access / Collision Detection\\nÉcouter avant d'émettre + Détecter les collisions PENDANT l'émission." },
    { id: "lan-fc-11", topic: "mac", front: "Différence ALOHA vs Slotted ALOHA ?", back: "ALOHA : Émettre immédiatement\\nSlotted ALOHA : Émettre au début d'une tranche temporelle → moins de collisions" },
    { id: "lan-fc-12", topic: "mac", front: "Différence CSMA/CD vs CSMA/CA ?", back: "CD (Ethernet) : Détecte les collisions pendant l'émission\\nCA (WiFi) : Évite les collisions avant l'émission (ACK)" },
    { id: "lan-fc-13", topic: "mac", front: "Avantage du Token Ring vs CSMA/CD ?", back: "Token Ring : Pas de collisions, déterministe (temps d'accès garanti)." },

    // === ADRESSAGE ===
    { id: "lan-fc-14", topic: "adressage", front: "Taille d'une adresse MAC ?", back: "48 bits (6 octets)." },
    { id: "lan-fc-15", topic: "adressage", front: "Structure d'une adresse MAC ?", back: "OUI (24 bits constructeur) + Numéro de série (24 bits)." },
    { id: "lan-fc-16", topic: "adressage", front: "Adresse MAC Broadcast ?", back: "FF:FF:FF:FF:FF:FF → Toutes les stations du réseau local." },
    { id: "lan-fc-17", topic: "adressage", front: "Que signifie le bit I/G dans l'adresse MAC ?", back: "Individual/Group :\\n0 = Unicast (une seule station)\\n1 = Multicast/Broadcast (groupe)" },
    { id: "lan-fc-18", topic: "adressage", front: "Comment reconnaître une adresse Unicast ?", back: "Le premier octet est PAIR (08, 0A, 0C, etc.)." },

    // === LLC ===
    { id: "lan-fc-19", topic: "llc", front: "Quelles sont les 2 sous-couches de la couche Liaison ?", back: "MAC (spécifique, accès au support) + LLC (commune, lien logique)." },
    { id: "lan-fc-20", topic: "llc", front: "Quel type LLC est le plus utilisé ?", back: "LLC Type 1 (sans connexion, sans acquittement) car TCP gère la fiabilité." },
    { id: "lan-fc-21", topic: "llc", front: "Différence LLC Type 2 vs Type 3 ?", back: "Type 2 : Avec connexion + Avec acquittement\\nType 3 : Sans connexion + Avec acquittement" },

    // === ETHERNET ===
    { id: "lan-fc-22", topic: "ethernet", front: "Quelle méthode d'accès utilise Ethernet ?", back: "CSMA/CD (Carrier Sense Multiple Access / Collision Detection)." },
    { id: "lan-fc-23", topic: "ethernet", front: "Taille minimale d'une trame Ethernet ?", back: "64 octets (pour permettre la détection des collisions)." },
    { id: "lan-fc-24", topic: "ethernet", front: "Qu'est-ce que le MTU Ethernet ?", back: "Maximum Transmission Unit = 1500 octets (taille max des données)." },
    { id: "lan-fc-25", topic: "ethernet", front: "À quoi sert le champ FCS de la trame ?", back: "Frame Check Sequence : CRC de 4 octets pour détecter les erreurs." },
    { id: "lan-fc-26", topic: "ethernet", front: "Qu'est-ce que l'IFG (Inter-Frame Gap) ?", back: "96 bits de silence entre deux trames pour la synchronisation." },

    // === ÉQUIPEMENTS ===
    { id: "lan-fc-27", topic: "equipements", front: "À quelle couche OSI fonctionne un Switch ?", back: "Couche 2 (Liaison de données). Il utilise les adresses MAC." },
    { id: "lan-fc-28", topic: "equipements", front: "Différence Hub vs Switch ?", back: "Hub : Répète sur tous les ports (couche 1)\\nSwitch : Commute vers le bon port uniquement (couche 2)" },
    { id: "lan-fc-29", topic: "equipements", front: "Que fait un Routeur avec les broadcasts ?", back: "Il les BLOQUE. C'est sa caractéristique principale." },
    { id: "lan-fc-30", topic: "equipements", front: "Modes de commutation d'un Switch ?", back: "Store-and-Forward : Vérifie CRC avant de forward\\nCut-Through : Forward dès réception de l'adresse destination" },

    // === VLANs/STP ===
    { id: "lan-fc-31", topic: "vlan", front: "But principal des VLANs ?", back: "Segmenter LOGIQUEMENT un réseau physique." },
    { id: "lan-fc-32", topic: "vlan", front: "Comment les VLANs communiquent entre eux ?", back: "Par un ROUTEUR (inter-VLAN routing). Pas possible directement." },
    { id: "lan-fc-33", topic: "vlan", front: "Rôle de STP (Spanning Tree Protocol) ?", back: "Éliminer les boucles de niveau 2 en désactivant des ports." },
    { id: "lan-fc-34", topic: "vlan", front: "Comment s'élit le Root Bridge en STP ?", back: "Switch avec le plus faible Bridge ID (Priorité 2 octets + MAC 6 octets)." },
    { id: "lan-fc-35", topic: "vlan", front: "Temps de convergence STP ?", back: "30-50 secondes. RSTP (Rapid STP) est beaucoup plus rapide." }
];

// ============================================
// LAN MODULE — QCM DIFFICILES
// ============================================

const lanQcmHard = [
    {
        id: "lan-qcm-1",
        topic: "topologies",
        q: "Un réseau en étoile physique peut-il avoir un anneau logique ?",
        o: ["A) Non, c'est impossible", "B) Oui, la topologie logique est indépendante de la physique", "C) Seulement avec des routeurs", "D) Seulement en Wi-Fi"],
        c: 1,
        exp: "La topologie logique (comment les données circulent) peut être différente de la topologie physique (comment les câbles sont branchés).",
        trap: "On confond souvent topologie physique et logique.",
        concept: "Topologie physique ≠ Topologie logique."
    },
    {
        id: "lan-qcm-2",
        topic: "supports",
        q: "Quelle catégorie de câble suffit pour du Gigabit Ethernet (1000Base-T) ?",
        o: ["A) Cat 3", "B) Cat 5", "C) Cat 5e", "D) Cat 7 obligatoire"],
        c: 2,
        exp: "Cat 5e (100 MHz) est suffisant pour le Gigabit. Cat 6/7 sont pour les environnements plus exigeants ou le 10 Gbps.",
        trap: "On pense souvent qu'il faut Cat 6 ou plus pour le Gigabit.",
        concept: "Cat 5e = Gigabit suffisant."
    },
    {
        id: "lan-qcm-3",
        topic: "supports",
        q: "Quelle est la distance maximale d'un segment paire torsadée ?",
        o: ["A) 50 mètres", "B) 100 mètres", "C) 185 mètres", "D) 500 mètres"],
        c: 1,
        exp: "100m est la limite standard pour Ethernet sur paire torsadée.",
        trap: "185m et 500m correspondent aux câbles coaxiaux (10Base2 et 10Base5).",
        concept: "Paire torsadée = 100m max."
    },
    {
        id: "lan-qcm-4",
        topic: "mac",
        q: "CSMA/CD détecte les collisions :",
        o: ["A) Avant d'émettre", "B) Pendant l'émission", "C) Après l'émission complète", "D) Jamais, il les évite"],
        c: 1,
        exp: "CD = Collision Detection. La station émet ET écoute en même temps pour détecter les collisions PENDANT l'émission.",
        trap: "CSMA/CA (WiFi) évite les collisions AVANT. CSMA/CD les détecte PENDANT.",
        concept: "CD = Detection pendant, CA = Avoidance avant."
    },
    {
        id: "lan-qcm-5",
        topic: "mac",
        q: "Pourquoi CSMA/CA est utilisé en WiFi au lieu de CSMA/CD ?",
        o: ["A) C'est plus rapide", "B) La détection de collision est impossible en sans fil", "C) C'est moins cher", "D) Le WiFi n'a pas de collisions"],
        c: 1,
        exp: "En sans fil, une station ne peut pas émettre et écouter simultanément sur la même fréquence. La détection de collision est donc impossible.",
        trap: "Le WiFi a bien des collisions, mais il ne peut pas les détecter pendant l'émission.",
        concept: "Sans fil = CA obligatoire."
    },
    {
        id: "lan-qcm-6",
        topic: "adressage",
        q: "Quelle est l'adresse MAC de broadcast ?",
        o: ["A) 00:00:00:00:00:00", "B) FF:FF:FF:FF:FF:FF", "C) 01:00:5E:00:00:00", "D) 255.255.255.255"],
        c: 1,
        exp: "FF:FF:FF:FF:FF:FF est l'adresse de diffusion au niveau MAC (tous les bits à 1).",
        trap: "255.255.255.255 est l'adresse IP de broadcast, pas MAC.",
        concept: "Broadcast MAC = FF:FF:FF:FF:FF:FF."
    },
    {
        id: "lan-qcm-7",
        topic: "adressage",
        q: "Comment savoir si une adresse MAC est Unicast ?",
        o: ["A) Elle commence par FF", "B) Le premier octet est pair", "C) Elle contient des lettres", "D) Elle fait 48 bits"],
        c: 1,
        exp: "Le bit I/G (premier bit) détermine Unicast (0) ou Multicast (1). Si le premier octet est pair, le bit I/G est 0.",
        trap: "Toutes les adresses MAC font 48 bits, ce n'est pas un critère distinctif.",
        concept: "Premier octet pair = Unicast."
    },
    {
        id: "lan-qcm-8",
        topic: "llc",
        q: "Quel type de service LLC est le plus utilisé dans les LAN modernes ?",
        o: ["A) LLC Type 1", "B) LLC Type 2", "C) LLC Type 3", "D) LLC Type 4"],
        c: 0,
        exp: "LLC Type 1 (sans connexion, sans acquittement) car TCP/IP gère déjà la fiabilité au niveau supérieur.",
        trap: "Type 2 et 3 ajoutent de la fiabilité mais créent de la surcharge inutile si TCP est utilisé.",
        concept: "LLC Type 1 = le plus courant."
    },
    {
        id: "lan-qcm-9",
        topic: "ethernet",
        q: "Pourquoi la taille minimale d'une trame Ethernet est-elle de 64 octets ?",
        o: ["A) Pour transporter plus de données", "B) Pour permettre la détection des collisions", "C) C'est une convention arbitraire", "D) Pour la compatibilité avec les routeurs"],
        c: 1,
        exp: "La trame doit être assez longue pour que la collision soit détectée avant la fin de l'émission (temps de propagation aller-retour).",
        trap: "Ce n'est pas arbitraire, c'est lié au slot time et à la détection de collisions.",
        concept: "64 octets min = détection de collision."
    },
    {
        id: "lan-qcm-10",
        topic: "ethernet",
        q: "Que signifie MTU = 1500 octets en Ethernet ?",
        o: ["A) Taille minimale de la trame", "B) Taille maximale des données dans une trame", "C) Nombre maximal de stations", "D) Débit en Mbps"],
        c: 1,
        exp: "MTU (Maximum Transmission Unit) = taille maximale du champ données, pas de la trame entière.",
        trap: "La taille totale de la trame inclut aussi les en-têtes et le FCS.",
        concept: "MTU = données max, pas trame max."
    },
    {
        id: "lan-qcm-11",
        topic: "equipements",
        q: "Quelle est la caractéristique PRINCIPALE d'un routeur ?",
        o: ["A) Il est plus rapide qu'un switch", "B) Il segmente les domaines de broadcast", "C) Il utilise les adresses MAC", "D) Il régénère le signal"],
        c: 1,
        exp: "Le routeur BLOQUE les broadcasts. C'est ce qui permet de segmenter le réseau et d'améliorer la scalabilité.",
        trap: "Le routeur est généralement PLUS LENT qu'un switch (traitement couche 3).",
        concept: "Routeur = segmente broadcast."
    },
    {
        id: "lan-qcm-12",
        topic: "equipements",
        q: "Que fait un switch quand il ne connaît pas l'adresse MAC de destination ?",
        o: ["A) Il jette la trame", "B) Il flooding (envoie sur tous les ports)", "C) Il demande au routeur", "D) Il attend la réponse ARP"],
        c: 1,
        exp: "Le switch effectue un flooding : il envoie la trame sur tous les ports sauf celui de réception pour 'trouver' la destination.",
        trap: "Le switch ne demande rien au routeur, il opère au niveau 2.",
        concept: "Flooding = adresse inconnue."
    },
    {
        id: "lan-qcm-13",
        topic: "equipements",
        q: "Un Hub (répéteur) segmente-t-il les domaines de collision ?",
        o: ["A) Oui", "B) Non", "C) Seulement avec des VLANs", "D) Seulement les broadcasts"],
        c: 1,
        exp: "Le Hub opère au niveau 1 (physique). Il répète le signal sur tous les ports, ÉTENDANT le domaine de collision.",
        trap: "C'est le SWITCH qui segmente les domaines de collision, pas le Hub.",
        concept: "Hub = étend collision."
    },
    {
        id: "lan-qcm-14",
        topic: "vlan",
        q: "Les VLANs peuvent-ils communiquer entre eux sans équipement supplémentaire ?",
        o: ["A) Oui, automatiquement", "B) Non, il faut un routeur", "C) Seulement sur le même switch", "D) Seulement avec 802.1Q"],
        c: 1,
        exp: "Les VLANs sont des réseaux SÉPARÉS au niveau 2. Pour communiquer, il faut un routeur (inter-VLAN routing).",
        trap: "802.1Q permet le tagging, pas la communication inter-VLAN directe.",
        concept: "Inter-VLAN = routeur obligatoire."
    },
    {
        id: "lan-qcm-15",
        topic: "vlan",
        q: "Qu'est-ce qu'un VLAN de niveau 1 ?",
        o: ["A) Par adresse MAC", "B) Par port physique du switch", "C) Par adresse IP", "D) Par protocole"],
        c: 1,
        exp: "VLAN niveau 1 = basé sur le PORT physique. Niveau 2 = MAC. Niveau 3 = IP/protocole.",
        trap: "Les niveaux de VLAN ne correspondent pas aux couches OSI.",
        concept: "VLAN niveau 1 = par port."
    },
    {
        id: "lan-qcm-16",
        topic: "vlan",
        q: "Quel est le but principal de STP ?",
        o: ["A) Accélérer le réseau", "B) Éliminer les boucles de niveau 2", "C) Créer des VLANs", "D) Filtrer les broadcasts"],
        c: 1,
        exp: "STP désactive des ports pour créer un arbre sans cycle et éviter les boucles de niveau 2.",
        trap: "STP peut en fait RALENTIR le réseau pendant la convergence (30-50 sec).",
        concept: "STP = anti-boucles."
    },
    {
        id: "lan-qcm-17",
        topic: "vlan",
        q: "Comment s'élit le Root Bridge en STP ?",
        o: ["A) Aléatoirement", "B) Le plus ancien switch", "C) Le plus faible Bridge ID", "D) Le switch avec le plus de ports"],
        c: 2,
        exp: "Bridge ID = Priorité (2 octets) + Adresse MAC (6 octets). Le plus FAIBLE gagne.",
        trap: "En cas d'égalité des priorités, c'est la MAC la plus faible qui l'emporte.",
        concept: "Root Bridge = plus faible Bridge ID."
    },
    {
        id: "lan-qcm-18",
        topic: "vlan",
        q: "Combien de temps dure la convergence STP standard ?",
        o: ["A) 1-2 secondes", "B) 5-10 secondes", "C) 30-50 secondes", "D) 5 minutes"],
        c: 2,
        exp: "STP passe par Blocking (20s) + Listening (15s) + Learning (15s) = ~50 secondes au total.",
        trap: "RSTP (Rapid STP) réduit considérablement ce temps.",
        concept: "STP = 30-50 sec convergence."
    },
    {
        id: "lan-qcm-19",
        topic: "ethernet",
        q: "Quel champ de la trame Ethernet permet de détecter les erreurs ?",
        o: ["A) Préambule", "B) SFD", "C) Type/Longueur", "D) FCS (CRC)"],
        c: 3,
        exp: "FCS (Frame Check Sequence) contient un CRC de 4 octets calculé sur toute la trame.",
        trap: "Le préambule et SFD sont pour la synchronisation, pas la détection d'erreurs.",
        concept: "FCS = détection d'erreurs."
    },
    {
        id: "lan-qcm-20",
        topic: "supports",
        q: "Quelle fibre optique est adaptée aux LONGUES distances (métropolitaines) ?",
        o: ["A) Multimode", "B) Monomode", "C) Coaxiale", "D) Cat 6"],
        c: 1,
        exp: "Monomode : cœur très fin, un seul chemin lumineux → très longues distances. Multimode = courtes distances.",
        trap: "Multimode est pour les bâtiments/campus, monomode pour les liaisons longue distance.",
        concept: "Monomode = longue distance."
    }
];

// ============================================
// LAN MODULE — EXAMEN BLANC
// ============================================

const lanExamBlanc = [
    { id: 1, topic: "topologies", prompt: "Quelles sont les 3 topologies physiques de base ?", type: "list", corrige: "1) Bus : Toutes les stations sur un même câble\\n2) Étoile : Stations connectées à un point central (switch/hub)\\n3) Anneau : Stations connectées en boucle" },
    { id: 2, topic: "topologies", prompt: "Différence entre topologie physique et topologie logique :", type: "definition", corrige: "Topologie PHYSIQUE = comment les câbles sont branchés physiquement\\nTopologie LOGIQUE = comment les données circulent\\nExemple : Un réseau en étoile physique peut avoir un anneau logique (Token Ring sur hub)" },
    { id: 3, topic: "supports", prompt: "Donner 3 catégories de câbles paire torsadée et leur usage :", type: "list", corrige: "1) Cat 5e (100 MHz) → 100 Mbps et 1 Gbps (Gigabit)\\n2) Cat 6 (250 MHz) → 1 Gbps et plus\\n3) Cat 7 (600 MHz) → 10 Gbps" },
    { id: 4, topic: "supports", prompt: "Différence entre fibre Monomode et Multimode :", type: "comparison", corrige: "MULTIMODE : Cœur large, lumière emprunte plusieurs chemins → courtes distances (bâtiments, campus)\\nMONOMODE : Cœur très fin, un seul chemin → longues distances (réseaux métropolitains)" },
    { id: 5, topic: "supports", prompt: "Quand utilise-t-on un câble croisé ?", type: "definition", corrige: "Pour connecter deux équipements de MÊME type :\\n- PC ↔ PC\\n- Switch ↔ Switch\\nNote : La plupart des équipements modernes ont l'auto-MDI/MDIX qui détecte automatiquement." },
    { id: 6, topic: "mac", prompt: "Que signifie CSMA/CD ?", type: "definition", corrige: "Carrier Sense Multiple Access / Collision Detection\\n- Carrier Sense : Écouter si le canal est libre avant d'émettre\\n- Multiple Access : Plusieurs stations partagent le même médium\\n- Collision Detection : Détecter les collisions PENDANT l'émission" },
    { id: 7, topic: "mac", prompt: "Différence CSMA/CD et CSMA/CA :", type: "comparison", corrige: "CSMA/CD (Ethernet) : Détecte les collisions PENDANT l'émission\\nCSMA/CA (WiFi) : Évite les collisions AVANT l'émission (accusé de réception)\\nCSMA/CA est nécessaire en sans fil car on ne peut pas émettre et écouter simultanément sur la même fréquence." },
    { id: 8, topic: "adressage", prompt: "Structure d'une adresse MAC :", type: "definition", corrige: "Longueur : 48 bits (6 octets)\\nNotation : Hexadécimale avec : ou - (ex: 08:00:20:09:E3:D8)\\nStructure : OUI (24 bits constructeur) + Numéro de série (24 bits)" },
    { id: 9, topic: "adressage", prompt: "Que signifient les bits I/G et U/L d'une adresse MAC ?", type: "definition", corrige: "Bit I/G (1er bit) :\\n- 0 = Unicast (une seule station)\\n- 1 = Multicast/Broadcast (groupe)\\nBit U/L (2ème bit) :\\n- 0 = Universelle (usine, OUI attribué)\\n- 1 = Locale (définie par l'administrateur)" },
    { id: 10, topic: "adressage", prompt: "Adresse MAC de Broadcast :", type: "definition", corrige: "FF:FF:FF:FF:FF:FF\\nPermet de s'adresser à TOUTES les stations du réseau local." },
    { id: 11, topic: "llc", prompt: "La couche Liaison est divisée en 2 sous-couches, lesquelles ?", type: "list", corrige: "1) MAC (Medium Access Control) : Spécifique à chaque technologie, gère l'accès au support partagé\\n2) LLC (Logical Link Control) : Commune à toutes les technologies, gère la communication logique de bout en bout" },
    { id: 12, topic: "llc", prompt: "Les 3 types de services LLC :", type: "list", corrige: "LLC Type 1 : Sans connexion, sans acquittement → Le plus utilisé (TCP gère la fiabilité)\\nLLC Type 2 : Avec connexion, avec acquittement → Livraison garantie\\nLLC Type 3 : Sans connexion, avec acquittement → Compromis" },
    { id: 13, topic: "ethernet", prompt: "Format de la trame Ethernet :", type: "schema", corrige: "| Préambule | SFD | DA | SA | Type/Len | DATA | FCS |\\n| 7 oct     | 1   | 6  | 6  | 2        | 46-1500 | 4  |\\nPréambule : Synchronisation\\nSFD : Début de trame\\nDA : Adresse destination\\nSA : Adresse source\\nFCS : CRC de contrôle d'erreur" },
    { id: 14, topic: "ethernet", prompt: "Taille minimale et MTU d'une trame Ethernet :", type: "fill", corrige: "Taille minimale : 64 octets (pour permettre la détection de collisions)\\nMTU (Maximum Transmission Unit) : 1500 octets (taille max du champ données)" },
    { id: 15, topic: "equipements", prompt: "Compléter le tableau des équipements :", type: "table", corrige: "Hub : Couche 1, régénère signal, étend collision + broadcast\\nSwitch : Couche 2, commute via MAC, segmente collision, étend broadcast\\nRouteur : Couche 3, route via IP, segmente collision + broadcast" },
    { id: 16, topic: "equipements", prompt: "Que fait un Switch quand l'adresse MAC de destination est inconnue ?", type: "definition", corrige: "FLOODING : Il envoie la trame sur TOUS les ports (sauf celui de réception) pour trouver la destination." },
    { id: 17, topic: "equipements", prompt: "Caractéristique principale du Routeur :", type: "definition", corrige: "Il SEGMENTE les domaines de BROADCAST.\\nLes trames de broadcast ne traversent pas un routeur, ce qui limite la propagation et améliore la scalabilité du réseau." },
    { id: 18, topic: "vlan", prompt: "Les 3 niveaux de VLANs :", type: "list", corrige: "VLAN Niveau 1 : Par PORT physique du switch\\nVLAN Niveau 2 : Par adresse MAC\\nVLAN Niveau 3 : Par adresse IP ou protocole" },
    { id: 19, topic: "vlan", prompt: "Étapes du fonctionnement de STP :", type: "list", corrige: "1) Élire le Root Bridge (plus faible Bridge ID = Priorité + MAC)\\n2) Choisir le Root Port sur chaque switch (meilleur chemin vers racine)\\n3) Choisir le Designated Port sur chaque segment\\n4) Bloquer les ports restants pour éliminer les boucles" },
    { id: 20, topic: "vlan", prompt: "États des ports STP dans l'ordre :", type: "list", corrige: "1) Blocking (20 sec) → Reçoit BPDU uniquement\\n2) Listening (15 sec) → Échange de BPDU\\n3) Learning (15 sec) → Apprend adresses MAC\\n4) Forwarding → Fonctionnement normal\\nTemps de convergence total : ~50 secondes" }
];

// ============================================
// EXAMENS PRÉDITS — COMBINÉS (Sans Fil + LAN)
// ============================================

const lanExamPredit1 = [
    // PARTIE A — SANS FIL
    { id: 1, topic: "intro", prompt: "Un réseau sans fil (Wireless Network) est :", type: "definition", corrige: "Un réseau utilisant les ondes radio comme support de transmission, permettant la mobilité des utilisateurs." },
    { id: 2, topic: "intro", prompt: "Le changement de cellule sans perte de communication s'appelle :", type: "fill", corrige: "Handover (ou Handoff)" },
    { id: 3, topic: "intro", prompt: "Puissance d'émission ↑, couverture ↑, mais durée de vie des batteries :", type: "fill", corrige: "↓ (diminue) — Plus on émet fort, plus on draine la batterie vite." },
    { id: 4, topic: "wsn", prompt: "Donner 4 applications des WSN :", type: "list", corrige: "1) Surveillance environnementale\\n2) Monitoring médical\\n3) Domotique\\n4) Agriculture de précision" },
    { id: 5, topic: "wsn", prompt: "C'est quoi WSN ?", type: "definition", corrige: "Wireless Sensor Network : réseau de capteurs sans fil transmettant des données vers une station de base (Sink)." },
    { id: 6, topic: "wsn", prompt: "Les 4 composants d'un nœud capteur :", type: "list", corrige: "1) Unité de captage (ADC)\\n2) Traitement (processeur)\\n3) Transmission (radio)\\n4) Énergie (batterie)" },
    { id: 7, topic: "wsn", prompt: "Quelle unité consomme le PLUS d'énergie dans un WSN ?", type: "fill", corrige: "L'unité RADIO (émission TX et réception RX)" },
    { id: 8, topic: "wpan", prompt: "WPAN est un :", type: "definition", corrige: "Wireless Personal Area Network : réseau de faible portée (dizaines de mètres) pour appareils personnels." },
    { id: 9, topic: "wpan", prompt: "4 Technologies de WPAN :", type: "list", corrige: "1) RFID\\n2) Bluetooth\\n3) ZigBee\\n4) UWB" },
    { id: 10, topic: "wpan", prompt: "Différence entre tag RFID passif et actif :", type: "comparison", corrige: "Passif : alimenté par induction (pas de pile)\\nActif : possède sa propre pile (plus de portée)" },
    { id: 11, topic: "wpan", prompt: "802.15.1 correspond à :", type: "fill", corrige: "Bluetooth" },
    { id: 12, topic: "wpan", prompt: "802.15.4 correspond à :", type: "fill", corrige: "ZigBee" },
    { id: 13, topic: "wlan", prompt: "Nombre de canaux en 802.11a et 802.11g :", type: "comparison", corrige: "802.11a (5 GHz) : 8 canaux\\n802.11g (2,4 GHz) : 13 canaux (3 non-chevauchants : 1, 6, 11)" },
    // PARTIE B — LAN
    { id: 14, topic: "topologies", prompt: "Dessinez les 3 topologies physiques avec avantages/inconvénients :", type: "schema", corrige: "BUS : Câble unique (économique mais fragile)\\nÉTOILE : Point central (isolé mais SPOF)\\nANNEAU : Boucle (équitable mais fragile)" },
    { id: 15, topic: "topologies", prompt: "Différence topologie physique et logique :", type: "comparison", corrige: "Physique = branchement des câbles\\nLogique = circulation des données\\nUn réseau en étoile physique peut avoir un anneau logique." },
    { id: 16, topic: "supports", prompt: "Distance maximale d'un câble paire torsadée :", type: "fill", corrige: "100 mètres" },
    { id: 17, topic: "supports", prompt: "Catégorie de câble pour Gigabit (1000Base-T) :", type: "fill", corrige: "Cat 5e minimum (100 MHz)" },
    { id: 18, topic: "supports", prompt: "Différence fibre Monomode et Multimode :", type: "comparison", corrige: "Multimode : courtes distances (bâtiments)\\nMonomode : longues distances (métropolitain)" },
    { id: 19, topic: "mac", prompt: "Que signifie CSMA/CD ?", type: "definition", corrige: "Carrier Sense Multiple Access / Collision Detection\\n- Écouter avant d'émettre\\n- Détecter les collisions PENDANT l'émission" },
    { id: 20, topic: "mac", prompt: "Différence CSMA/CD et CSMA/CA :", type: "comparison", corrige: "CD (Ethernet) : Détecte collisions PENDANT\\nCA (WiFi) : Évite collisions AVANT\\nCA nécessaire car détection impossible en sans fil." },
    { id: 21, topic: "adressage", prompt: "Structure d'une adresse MAC :", type: "definition", corrige: "48 bits = OUI (24 bits constructeur) + Numéro de série (24 bits)" },
    { id: 22, topic: "adressage", prompt: "Adresse MAC de Broadcast :", type: "fill", corrige: "FF:FF:FF:FF:FF:FF" },
    { id: 23, topic: "equipements", prompt: "Tableau des équipements d'interconnexion :", type: "table", corrige: "Hub : Couche 1, étend collision\\nSwitch : Couche 2, segmente collision\\nRouteur : Couche 3, segmente broadcast" },
    { id: 24, topic: "equipements", prompt: "Que fait un Switch si adresse MAC inconnue ?", type: "definition", corrige: "FLOODING : envoie sur tous les ports (sauf réception)" },
    { id: 25, topic: "vlan", prompt: "Les 3 niveaux de VLANs :", type: "list", corrige: "Niveau 1 : Par port\\nNiveau 2 : Par MAC\\nNiveau 3 : Par IP/protocole" },
    { id: 26, topic: "vlan", prompt: "Étapes de fonctionnement de STP :", type: "list", corrige: "1) Élire Root Bridge\\n2) Choisir Root Ports\\n3) Choisir Designated Ports\\n4) Bloquer les autres" }
];

const lanExamPredit2 = [
    // PARTIE A — SANS FIL
    { id: 1, topic: "intro", prompt: "L'atténuation du signal augmente avec :", type: "fill", corrige: "La DISTANCE et la FRÉQUENCE" },
    { id: 2, topic: "wsn", prompt: "Qu'est-ce que l'agrégation de données dans un WSN ?", type: "definition", corrige: "Combiner les données des capteurs pour économiser énergie et bande passante." },
    { id: 3, topic: "wsn", prompt: "Schématiser l'architecture d'un nœud capteur :", type: "schema", corrige: "┌─────────┬───────────┐\\n│ CAPTAGE │ TRAITEMENT│\\n├─────────┼───────────┤\\n│ RADIO   │ ÉNERGIE   │\\n└─────────┴───────────┘" },
    { id: 4, topic: "wsn", prompt: "C'est quoi le 'Sink' dans un WSN ?", type: "definition", corrige: "Station de base qui collecte toutes les données des capteurs." },
    { id: 5, topic: "wpan", prompt: "RFID vs Code-barres : 2 avantages du RFID :", type: "list", corrige: "1) 40x plus rapide\\n2) Pas besoin de visibilité directe" },
    { id: 6, topic: "wpan", prompt: "Fréquence RFID pour la logistique (10-20m) :", type: "fill", corrige: "UHF (860-930 MHz)" },
    { id: 7, topic: "wpan", prompt: "Bluetooth classe I offre une portée de :", type: "fill", corrige: "100 mètres (100 mW)" },
    { id: 8, topic: "wpan", prompt: "Usage principal du ZigBee :", type: "definition", corrige: "Transport de COMMANDES (domotique), pas de gros volumes de données." },
    { id: 9, topic: "wlan", prompt: "WLAN est un :", type: "definition", corrige: "Wireless Local Area Network : réseau sans fil couvrant un bâtiment/campus." },
    { id: 10, topic: "wlan", prompt: "Mode Ad-hoc (IBSS) signifie :", type: "definition", corrige: "Interconnexion DIRECTE entre équipements sans point d'accès." },
    { id: 11, topic: "wlan", prompt: "Mode Infrastructure (BSS) signifie :", type: "definition", corrige: "Toutes les communications passent par un Point d'Accès (AP)." },
    { id: 12, topic: "wlan", prompt: "Schématiser BSS, IBSS, ESS :", type: "schema", corrige: "BSS: [STA]──[AP]──[STA] (1 cellule avec AP)\\nIBSS: [STA]──[STA] (sans AP)\\nESS: [AP]═══[DS]═══[AP] (plusieurs AP)" },
    { id: 13, topic: "securite", prompt: "3 solutions de sécurité WiFi :", type: "list", corrige: "1) Masquage du SSID\\n2) Filtrage par adresse MAC\\n3) Chiffrement WPA2/WPA3" },
    // PARTIE B — LAN
    { id: 14, topic: "supports", prompt: "Quand utilise-t-on un câble croisé ?", type: "definition", corrige: "Pour connecter 2 équipements de MÊME type (PC↔PC, Switch↔Switch)" },
    { id: 15, topic: "supports", prompt: "Quand utilise-t-on un câble console (rollover) ?", type: "definition", corrige: "Pour configurer un équipement via son port console." },
    { id: 16, topic: "supports", prompt: "3 types de câbles paire torsadée :", type: "list", corrige: "UTP (non blindé)\\nFTP (écran global)\\nS-FTP (blindé par paire)" },
    { id: 17, topic: "adressage", prompt: "Taille d'une adresse MAC :", type: "fill", corrige: "48 bits (6 octets)" },
    { id: 18, topic: "adressage", prompt: "Que signifie le bit I/G dans l'adresse MAC ?", type: "definition", corrige: "Individual/Group : 0=Unicast, 1=Multicast/Broadcast" },
    { id: 19, topic: "adressage", prompt: "Comment reconnaître une adresse Unicast ?", type: "fill", corrige: "Premier octet PAIR (ex: 08, 0A, 0C)" },
    { id: 20, topic: "llc", prompt: "Les 3 types de services LLC :", type: "list", corrige: "Type 1: Sans connexion/sans ACK (le + courant)\\nType 2: Avec connexion/ACK\\nType 3: Sans connexion/avec ACK" },
    { id: 21, topic: "ethernet", prompt: "Format de la trame Ethernet :", type: "schema", corrige: "| Préambule | SFD | DA | SA | Type | DATA | FCS |\\n| 7 oct     | 1   | 6  | 6  | 2    | 46-1500 | 4  |" },
    { id: 22, topic: "ethernet", prompt: "Taille minimale d'une trame Ethernet et pourquoi :", type: "fill", corrige: "64 octets — pour permettre la détection des collisions (slot time)" },
    { id: 23, topic: "ethernet", prompt: "MTU Ethernet :", type: "fill", corrige: "1500 octets (taille max du champ données)" },
    { id: 24, topic: "equipements", prompt: "Que fait un Routeur avec les broadcasts ?", type: "definition", corrige: "Il les BLOQUE (segmente les domaines de broadcast)" },
    { id: 25, topic: "vlan", prompt: "Comment les VLANs communiquent entre eux ?", type: "definition", corrige: "Par un ROUTEUR (inter-VLAN routing) — pas possible directement" },
    { id: 26, topic: "vlan", prompt: "États des ports STP dans l'ordre :", type: "list", corrige: "Blocking (20s) → Listening (15s) → Learning (15s) → Forwarding" }
];

// QCM Complémentaire (50 questions : 30 Base + 20 Avancées Routing/Subnetting)
const qcmNew = [
    {
        q: "1. Le protocole IP est-il fiable et connecté ?",
        o: ["A) Oui, fiable et connecté", "B) Non, non fiable et non connecté", "C) Fiable mais non connecté", "D) Non fiable mais connecté"],
        c: 1,
        exp: "Bonne réponse ! IP est un protocole 'best effort'. Il fait de son mieux pour acheminer les paquets mais ne garantit rien (paquets perdus, désordonnés). C'est TCP (couche supérieure) qui s'occupe de la fiabilité et de l'ordre.",
        trap: "On confond souvent avec TCP qui est fiable. 'Non connecté' veut dire qu'il n'y a pas de circuit établi avant l'envoi.",
        concept: "IP (Couche 3) = Routage. TCP (Couche 4) = Fiabilité."
    },
    {
        q: "2. Le protocole ARP sert à faire le lien entre quelles adresses ?",
        o: ["A) MAC vers IP", "B) IP vers MAC", "C) IP vers Port", "D) Nom de domaine vers IP"],
        c: 1,
        exp: "Exact ! ARP (Address Resolution Protocol) permet de trouver l'adresse physique (MAC) d'une machine quand on connaît seulement son adresse IP.",
        trap: "L'inverse (MAC vers IP) s'appelle RARP (Reverse ARP).",
        concept: "Fonctionnement : 'Qui a l'IP 192.168.1.5 ?' (Broadcast) -> 'C'est moi, voici ma MAC !' (Unicast)"
    },
    {
        q: "3. Quelle adresse utilise un client DHCP lorsqu'il n'a pas encore d'IP ?",
        o: ["A) 127.0.0.1", "B) 255.255.255.255", "C) 0.0.0.0", "D) Son adresse MAC"],
        c: 2,
        exp: "C'est bien 0.0.0.0 ! Comme le client ne sait pas encore qui il est sur le réseau IP, il utilise cette adresse 'neutre' comme source pour envoyer sa demande.",
        trap: "127.0.0.1 est la boucle locale (localhost). 255.255.255.255 est l'adresse de destination (broadcast) pour que tous les serveurs DHCP entendent la demande.",
        concept: "Processus DORA : Discover (0.0.0.0) -> Offer -> Request -> Ack"
    },
    {
        q: "4. Où se produit la fragmentation d'un paquet IPv4 ?",
        o: ["A) Uniquement à la source", "B) Dans les routeurs en cours de route", "C) Uniquement à destination", "D) Jamais"],
        c: 1,
        exp: "Correct ! En IPv4, si un paquet est trop gros pour passer (MTU), les routeurs intermédiaires peuvent le découper en morceaux. Le réassemblage se fait à l'arrivée.",
        trap: "En IPv6, c'est différent : seuls les émetteurs fragmentent, les routeurs jettent le paquet s'il est trop gros !",
        concept: "MTU (Maximum Transmission Unit) = taille max d'un paquet sur un lien."
    },
    {
        q: "5. RIP et OSPF sont des protocoles de quelle catégorie ?",
        o: ["A) IGP (Interior Gateway Protocol)", "B) EGP (Exterior Gateway Protocol)", "C) TCP", "D) Application"],
        c: 0,
        exp: "Tout à fait ! Ce sont des protocoles de routage INTERNE, utilisés à l'intérieur d'une même organisation (système autonome).",
        trap: "BGP est le principal protocole EGP, utilisé pour le routage entre différents opérateurs sur Internet.",
        concept: "RIP = Vecteur de distance (compte les sauts). OSPF = État de lien (carte complète du réseau, plus rapide)."
    },
    {
        q: "6. À quoi sert principalement le NAT ?",
        o: ["A) Crypter les données", "B) Traduire IP privée <-> IP publique", "C) Donner des IP aux PC", "D) Bloquer les virus"],
        c: 1,
        exp: "Oui ! Le NAT (Network Address Translation) permet à tout un réseau domestique (IP privées) d'accéder à Internet avec une seule IP publique.",
        trap: "Ne pas confondre avec DHCP qui distribue les IP locales.",
        concept: "Sans NAT, nous aurions épuisé les adresses IPv4 il y a bien longtemps !"
    },
    {
        q: "7. Une machine avec 1 carte réseau et 5 adresses IP (alias) possède combien de caches ARP ?",
        o: ["A) 1 seul, lié à la carte", "B) 5, un par IP", "C) Aucun", "D) Une infinité"],
        c: 1,
        exp: "Bien vu ! Chaque adresse IP logique gère sa propre correspondance avec les MACs des voisins. Donc 5 IP = 5 tables ARP distinctes.",
        trap: "On pense souvent 'une carte = un cache', mais ARP est un protocole de couche 3 (IP), donc lié à l'IP !",
        concept: "Chaque IP virtuelle agit comme une 'machine' indépendante sur le réseau logique."
    },
    {
        q: "8. Côté code, que retourne exactement la fonction accept() ?",
        o: ["A) Un code de succès (0 ou 1)", "B) Le socket d'écoute original", "C) Un NOUVEAU socket dédié au client", "D) L'adresse IP du client"],
        c: 2,
        exp: "C'est le point clé des serveurs TCP ! accept() crée un socket TOUT NEUF juste pour discuter avec ce client précis. Le socket principal, lui, retourne écouter les autres appels.",
        trap: "Si accept() retournait le même socket, le serveur ne pourrait plus accepter personne d'autre pendant la conversation !",
        concept: "Serveur concurrent : Socket écoute -> accept() -> Nouveau socket -> fork() -> Le fils gère le nouveau socket."
    },
    {
        q: "9. Pourquoi utilise-t-on htons() sur le numéro de port ?",
        o: ["A) Pour le crypter", "B) Pour le mettre au format 'Réseau' (Big Endian)", "C) Pour le mettre au format 'PC' (Little Endian)", "D) Pour vérifier qu'il est libre"],
        c: 1,
        exp: "Exactement. Les processeurs (Intel/AMD) stockent les nombres à l'envers (Little Endian), mais Internet parle à l'endroit (Big Endian). htons() remet tout dans le bon ordre pour le réseau.",
        trap: "Oublier htons() = le port 80 (0x0050) devient 20480 (0x5000) de l'autre côté !",
        concept: "htons = Host TO Network Short. ntohs fait l'inverse à la réception."
    },
    {
        q: "10. Le champ sin_family (AF_INET) doit-il être converti avec htons() ?",
        o: ["A) Oui, toujours", "B) Non, jamais", "C) Seulement sur Linux", "D) Seulement si > 255"],
        c: 1,
        exp: "Non ! Ce champ ne part JAMAIS sur le réseau. Il sert juste au noyau (kernel) local pour savoir qu'on fait de l'IPv4. Donc on le laisse tel quel (Host Byte Order).",
        trap: "Seuls l'IP et le Port voyagent dans l'en-tête IP/TCP, donc seuls eux doivent être convertis.",
        concept: "La structure sockaddr_in a une partie 'locale' (family) et des parties 'publiques' (port, addr)."
    },
    { q: "11. inet_addr() retourne quel format ?", o: ["A) Une string", "B) Un entier Network Byte Order", "C) Un entier Host Byte Order", "D) Un tableau"], c: 1, exp: "Elle fait tout le travail : conversion string vers entier ET mise en ordre réseau !", trap: "Pas besoin de htonl() après !", concept: "Pratique pour hardcoder des IP." },
    { q: "12. Différence SOCK_STREAM vs SOCK_DGRAM ?", o: ["A) TCP vs UDP", "B) UDP vs TCP", "C) IPv4 vs IPv6", "D) Client vs Serveur"], c: 0, exp: "SOCK_STREAM = Flux continu (TCP). SOCK_DGRAM = Datagrammes (UDP).", trap: "", concept: "Stream = pas de limite de message, comme un tuyau." },
    { q: "13. Classe B : plage du premier octet ?", o: ["A) 1-126", "B) 128-191", "C) 192-223", "D) 224-239"], c: 1, exp: "128 à 191. (Binaire commence par 10...)", trap: "127 est réservé (loopback).", concept: "Classe A (0...), B (10...), C (110...)." },
    { q: "14. Masque /26 (..11000000) : combien d'hôtes ?", o: ["A) 64", "B) 62", "C) 60", "D) 128"], c: 1, exp: "6 bits pour hôtes (32-26). 2^6 = 64. On retire adresse réseau et broadcast. Donc 62.", trap: "Ne pas oublier le -2 !", concept: "Formule : 2^bits_hotes - 2." },
    { q: "15. Adresse 192.168.1.255/24 ?", o: ["A) Machine", "B) Broadcast du réseau", "C) Réseau", "D) Multicast"], c: 1, exp: "Dernière adresse de la plage = Broadcast.", trap: "Impossible de l'attribuer à une machine.", concept: "Sert à parler à tout le monde sur ce sous-réseau." },
    { q: "16. Switch vs Hub sur le broadcast ?", o: ["A) Les deux bloquent", "B) Les deux laissent passer", "C) Le switch bloque", "D) Le hub bloque"], c: 1, exp: "PIÈGE ! Un switch ne bloque PAS les broadcast (sinon ARP ne marcherait pas). Seul un routeur les bloque.", trap: "Switch sépare les collisions, pas les broadcast !", concept: "Domaine de broadcast = limité par les routeurs." },
    { q: "17. STP (Spanning Tree) état 'Blocking' ?", o: ["A) En panne", "B) Ne transmet pas, mais écoute les BPDU", "C) Apprend les MAC", "D) Transmet tout"], c: 1, exp: "Il se met en retrait pour éviter une boucle, mais écoute au cas où le chemin principal tomberait.", trap: "Ce n'est pas une panne, c'est une sécurité active.", concept: "Redondance sans boucle." },
    { q: "18. Root Bridge STP idéal ?", o: ["A) Le plus vieux", "B) Le plus central/puissant (priorité basse)", "C) Celui avec la plus grosse MAC", "D) N'importe lequel"], c: 1, exp: "On configure une priorité basse sur le switch 'coeur' pour qu'il soit élu chef.", trap: "Par défaut, c'est la plus petite MAC qui gagne (donc souvent le plus vieux switch !), ce qu'on veut éviter.", concept: "Root Bridge = Centre de l'arbre STP." },
    { q: "19. CSMA/CD : Que fait l'algorithme de Backoff ?", o: ["A) Il retransmet tout de suite", "B) Il attend un temps aléatoire", "C) Il abandonne", "D) Il change de fréquence"], c: 1, exp: "Pour éviter une nouvelle collision, chaque station tire un délai au hasard avant de réessayer.", trap: "Si tout le monde attendait le même temps fixe, ça recracherait !", concept: "Le délai moyen double à chaque échec (exponentiel)." },
    { q: "20. Taille min trame Ethernet ?", o: ["A) 64 octets", "B) 1500 octets", "C) 46 octets", "D) 32 octets"], c: 0, exp: "64 octets (Header + Data + FCS). Si les données sont trop courtes, on bourre avec du 'padding'.", trap: "C'est pour être sûr que la collision soit détectée par l'émetteur.", concept: "Slot time." },
    { q: "21. LLC Type 1 c'est quoi ?", o: ["A) Connexion sécurisée", "B) Datagramme sans acquittement (Best effort)", "C) Avec accusé de réception", "D) Obsolète"], c: 1, exp: "C'est le mode 'fire and forget', utilisé par IP. Simple et rapide.", trap: "La fiabilité est déléguée aux couches sup (TCP).", concept: "Le plus répandu." },
    { q: "22. Adressage : 172.16.x.x est ?", o: ["A) Publique", "B) Privée (RFC 1918)", "C) Réservée", "D) Multicast"], c: 1, exp: "Plage privée de classe B. Non routable sur Internet.", trap: "", concept: "Comme 192.168.x.x et 10.x.x.x." },
    { q: "23. Dans un réseau /28, adresse de broadcast du 1er sous-réseau (.0) ?", o: ["A) .14", "B) .15", "C) .16", "D) .255"], c: 1, exp: "/28 = 16 adresses. De .0 à .15. La dernière (.15) est le broadcast.", trap: "", concept: "Pas de bit à 0." },
    { q: "24. Max tentatives Ethernet avant erreur ?", o: ["A) 10", "B) 16", "C) 15", "D) Infini"], c: 1, exp: "Après 16 échecs consécutifs, la carte réseau jette l'éponge.", trap: "10 est la limite pour augmenter la plage de backoff, mais 16 est la limite d'abandon.", concept: "Réseau saturé ou câble débranché." },
    { q: "25. gethostbyname() fait quoi ?", o: ["A) IP -> Nom", "B) Nom -> IP (DNS)", "C) Ping", "D) Rien"], c: 1, exp: "Résolution DNS : traduit www.google.com en IP.", trap: "gethostbyADDR fait l'inverse.", concept: "DNS essentiel." },
    { q: "26. Serveur TCP avec fork() : que fait le fils ?", o: ["A) Il écoute les nouveaux clients", "B) Il traite le client connecté et ferme le socket d'écoute", "C) Il ne fait rien", "D) Il tue le père"], c: 1, exp: "Le fils est une main d'oeuvre dédiée : 'Je m'occupe de toi, client'. Il n'a plus besoin d'écouter la porte (listen), donc il ferme ce socket.", trap: "Le père, lui, ferme le socket client et retourne écouter.", concept: "Gestion propre des descripteurs." },
    { q: "27. Commande 'netstat -rn' affiche ?", o: ["A) Les connexions actives", "B) La table de routage", "C) Les adresses MAC", "D) Le cache DNS"], c: 1, exp: "C'est la Table de Routage (Route/Numeric).", trap: "", concept: "Essentiel pour débugger 'No route to host'." },
    { q: "28. Un Ping utilise quel protocole ?", o: ["A) TCP", "B) UDP", "C) ICMP", "D) HTTP"], c: 2, exp: "ICMP (Internet Control Message Protocol). Pas de port, juste des types (Echo Request/Reply).", trap: "Ce n'est ni TCP ni UDP !", concept: "Outil de diagnostic couche 3." },
    { q: "29. 127.0.0.1 est ?", o: ["A) Une adresse broadcast", "B) Une adresse de bouclage (localhost)", "C) Une adresse invalide", "D) L'adresse du routeur"], c: 1, exp: "Le 'Loopback'. Ça ne sort jamais de la machine.", trap: "", concept: "Pour tester son propre serveur client/serveur." },
    { q: "30. Différence Hub / Switch ?", o: ["A) Prix", "B) Hub partage la bande passante, Switch la dédie", "C) Hub est plus intelligent", "D) Aucune"], c: 1, exp: "Le Hub est un 'perroquet' bête (couche 1) qui répète tout à tout le monde (collisions !). Le Switch (couche 2) parle directement au destinataire.", trap: "", concept: "Plus personne n'utilise de Hubs aujourd'hui." },

    // --- NOUVELLES QUESTIONS (Cours & TD) ---
    { q: "31. Dans ce cours (honey_pot.txt), quelle est la formule pour le nombre de sous-réseaux utilisables ?", o: ["A) 2^n", "B) 2^n - 2", "C) 2^n - 1", "D) n^2"], c: 1, exp: "Dans ce cours spécifique (voir solutions honey_pot), la règle des 'sous-réseaux interdits' (tout à 0 et tout à 1) s'applique encore.", trap: "Les standards modernes autorisent 2^n (ip subnet-zero), mais conformez-vous aux supports de TP fournis !", concept: "RFC 950 (Ancien) vs RFC 1878 (Moderne)." },
    { q: "32. Quelle est la plage d'adresses privées de Classe B ?", o: ["A) 172.16.0.0 à 172.31.255.255", "B) 172.0.0.0 à 172.255.255.255", "C) 192.168.0.0 à 192.168.255.255", "D) 10.0.0.0 à 10.255.255.255"], c: 0, exp: "Attention, ce n'est pas toute la classe 172 ! Seulement de 16 à 31 au niveau du 2ème octet.", trap: "Beaucoup pensent que tout 172.x est privé.", concept: "RFC 1918." },
    { q: "33. À quoi correspond l'adresse 169.254.x.x ?", o: ["A) Une erreur DHCP (APIPA)", "B) Une adresse publique", "C) Un virus", "D) Le DNS Google"], c: 0, exp: "C'est l'adressage automatique (APIPA) quand Windows/Linux ne trouve PAS de serveur DHCP. Il s'auto-attribue une IP dans cette plage.", trap: "", concept: "Permet aux PC de se parler en local sans routeur ni DHCP." },
    { q: "34. Quelle est la priorité de routage standard ?", o: ["A) Route par défaut > Route Réseau > Route Hôte", "B) Route Hôte > Route Réseau > Route par défaut", "C) Aléatoire", "D) FIFO"], c: 1, exp: "Le routeur choisit toujours la correspondance la plus précise (Longest Prefix Match). Une route vers une machine spécifique (/32) gagne toujours.", trap: "", concept: "Le 'Default Gateway' est le dernier recours." },
    { q: "35. Que se passe-t-il quand le TTL d'un paquet IP arrive à 0 ?", o: ["A) Le paquet est délivré", "B) Le routeur le détruit et envoie un ICMP Time Exceeded", "C) Il est renvoyé à l'expéditeur", "D) Il est mis en cache"], c: 1, exp: "Le Time To Live sert à tuer les paquets qui tournent en rond (boucles). À 0, le routeur tue le paquet et prévient l'émetteur.", trap: "", concept: "C'est comme ça que fonctionne la commande 'traceroute' !" },
    { q: "36. Quelle est la plage de la Classe D (Multicast) ?", o: ["A) 192-223", "B) 224-239", "C) 240-255", "D) 1-126"], c: 1, exp: "224.0.0.0 à 239.255.255.255. Utilisé pour la TV sur IP, OSPF, RIPv2...", trap: "Classe E (240+) est expérimentale.", concept: "4 premiers bits : 1110." },
    { q: "37. Dans une table de routage (netstat -rn), que signifie '0.0.0.0' en Gateway ?", o: ["A) Le routeur est en panne", "B) Connexion directe (On-link)", "C) Route par défaut", "D) Interdit"], c: 1, exp: "Si la Gateway est 0.0.0.0 (ou *), cela signifie 'C'est sur mon propre câble, je n'ai pas besoin d'envoyer à un routeur, je délivre directement'.", trap: "Ne pas confondre avec la DESTINATION 0.0.0.0 qui est la route par défaut.", concept: "Remise directe." },
    { q: "38. Combien d'hôtes valides dans un sous-réseau /30 ?", o: ["A) 4", "B) 2", "C) 1", "D) 6"], c: 1, exp: "32 - 30 = 2 bits d'hôtes. 2^2 - 2 = 2 hôtes. (Adresse Réseau + Adresse Broadcast + 2 Hôtes).", trap: "Utilisé pour les liaisons point-à-point entre deux routeurs.", concept: "Sert à économiser les IP." },
    { q: "39. Quel champ de l'en-tête IP permet la fragmentation ?", o: ["A) TTL", "B) Checksum", "C) Fragment Offset & Flags (MF/DF)", "D) TOS"], c: 2, exp: "Le Flag MF (More Fragments) dit 'il y a une suite', et l'Offset dit 'je suis la pièce numéro X du puzzle'.", trap: "", concept: "MTU (1500 octets Ethernet) oblige parfois à découper." },
    { q: "40. Adresse de broadcast pour 192.168.10.0/25 ?", o: ["A) 192.168.10.255", "B) 192.168.10.127", "C) 192.168.10.128", "D) 192.168.10.0"], c: 1, exp: "/25 coupe le réseau en deux (0-127 et 128-255). Pour le premier bloc, le dernier est 127.", trap: "255 est le broadcast du DEUXIÈME sous-réseau !", concept: "Toujours calculer la taille du bloc (ici 128)." },
    { q: "41. Qu'est-ce que l'ARP Gratuit (Gratuitous ARP) ?", o: ["A) Un ARP qui ne coûte rien", "B) Une annonce spontanée de son IP/MAC sans requête", "C) Une erreur protocolaire", "D) Un don d'IP"], c: 1, exp: "Une machine envoie sa propre IP/MAC à tout le monde au démarrage pour 1) Vérifier les conflits IP, 2) Mettre à jour les caches des voisins.", trap: "", concept: "Utilisé aussi par les clusters de haute disponibilité." },
    { q: "42. Quelle classe d'adresse IP commence par les bits 110... ?", o: ["A) Classe A", "B) Classe B", "C) Classe C", "D) Classe D"], c: 2, exp: "Classe C ! (192 à 223). 192 en binaire = 11000000.", trap: "Classe A=0, B=10, C=110, D=1110, E=1111.", concept: "Mécanisme des classes (Classful)." },
    { q: "43. Une adresse IP se terminant par .255 est-elle TOUJOURS un broadcast ?", o: ["A) Oui, toujours", "B) Non, cela dépend du masque", "C) Jamais", "D) Uniquement en Classe C"], c: 1, exp: "Attention ! Dans un réseau /16 (ex: 10.0.0.0/16), l'adresse 10.0.0.255 est une adresse d'HÔTE parfaitement valide (le broadcast est 10.0.255.255).", trap: "C'est vrai uniquement si le masque est /24 (255.255.255.0).", concept: "Ne jamais juger une IP sans son masque." },
    { q: "44. Quel est le rôle de la commande 'tracert' ou 'traceroute' ?", o: ["A) Tester la vitesse", "B) Afficher la liste des routeurs traversés", "C) Trouver l'adresse MAC", "D) Télécharger un fichier"], c: 1, exp: "Elle envoie des paquets avec TTL=1, puis TTL=2, etc. pour forcer chaque routeur sur le chemin à se signaler (erreur Time Exceeded).", trap: "", concept: "Diagnostic de routage." },
    { q: "45. Lequel est un protocole de couche Application ?", o: ["A) IP", "B) TCP", "C) DNS", "D) Ethernet"], c: 2, exp: "DNS (Domain Name System) est une application qui utilise le réseau (sur UDP/53).", trap: "", concept: "Modèle OSI : App > Transport > Réseau > Liaison > Physique." },
    { q: "46. Pour relier deux Switchs entre eux, quel câble utiliser ?", o: ["A) Droit", "B) Croisé", "C) Console", "D) Coaxial"], c: 1, exp: "Traditionnellement, équipements de même couche = câble CROISÉ. (Même si les switchs modernes font de l'Auto-MDIX).", trap: "Droit = Équipements différents (PC-Switch).", concept: "MDI vs MDI-X." },
    { q: "47. Un routeur connecte :", o: ["A) Des réseaux différents", "B) Des machines du même réseau", "C) Des câbles coupés", "D) Des applications"], c: 0, exp: "Le routeur est une passerelle entre des réseaux logiques (IP) différents.", trap: "Le switch connecte des machines du MÊME réseau.", concept: "Interconnexion." },
    { q: "48. Quelle commande affiche le cache ARP sous Windows/Linux ?", o: ["A) arp -a", "B) ping -a", "C) ipconfig /all", "D) netstat -r"], c: 0, exp: "arp -a permet de voir les correspondances IP <-> MAC apprises récemment.", trap: "", concept: "Utile pour vérifier si on parle à la bonne machine." },
    { q: "49. Adresse de bouclage IPv6 ?", o: ["A) 127.0.0.1", "B) ::1", "C) FE80::1", "D) 0:0:0:0:0:0:0:0"], c: 1, exp: "::1 est l'équivalent IPv6 de 127.0.0.1.", trap: "", concept: "IPv6 simplifie l'écriture avec les ::" },
    { q: "50. Port par défaut pour HTTP ?", o: ["A) 21", "B) 80", "C) 443", "D) 25"], c: 1, exp: "80 pour le Web non sécurisé. 443 pour HTTPS.", trap: "21=FTP, 25=SMTP.", concept: "Well-known ports." }
];

// Quiz Saidi (100 Questions Intouchées - Contenu Original)
const quizSaidi = [
    // --- PARTIE LAN (1-50) ---
    { q: "1. Quelle est la portée typique d'un réseau local (LAN) ?", o: ["A) Quelques mètres (Bluetooth)", "B) Quelques kilomètres au sein d'une même organisation", "C) Une ville entière", "D) Une distance illimitée via Internet"], c: 1 },
    { q: "2. Quelle caractéristique distingue un LAN d'un WAN ?", o: ["A) La transmission en bande de base (sans modulation)", "B) Une gestion autonome (réseau privé)", "C) Un support partagé entre les stations", "D) Toutes les réponses ci-dessus"], c: 3 },
    { q: "3. Quelle sous-couche de la couche Liaison de données est commune à toutes les technologies LAN ?", o: ["A) MAC (Medium Access Control)", "B) LLC (Logical Link Control - IEEE 802.2)", "C) IP (Internet Protocol)", "D) Physique"], c: 1 },
    { q: "4. Quel est le rôle principal de la sous-couche MAC ?", o: ["A) Gérer le contrôle de flux de bout en bout", "B) Gérer l'accès au support partagé et résoudre les conflits", "C) Assurer le routage des paquets", "D) Crypter les données"], c: 1 },
    { q: "5. Quelle norme IEEE correspond au Wi-Fi ?", o: ["A) 802.3", "B) 802.5", "C) 802.11", "D) 802.16"], c: 2 },
    { q: "6. Dans quelle topologie physique la panne d'un point central paralyse-t-elle tout le réseau ?", o: ["A) Bus", "B) Anneau", "C) Étoile", "D) Maillée"], c: 2 },
    { q: "7. Quel est l'avantage principal d'une topologie en bus ?", o: ["A) Facilité de maintenance", "B) Câblage économique et simple", "C) Performance stable sous forte charge", "D) Immunité aux pannes de câbles"], c: 1 },
    { q: "8. Quelle catégorie de câble est conçue pour supporter le 10 Gbps ?", o: ["A) Catégorie 5", "B) Catégorie 5e", "C) Catégorie 7", "D) Catégorie 3"], c: 2 },
    { q: "9. Quelle est la distance maximale théorique d'un segment en paire torsadée (UTP) ?", o: ["A) 10 mètres", "B) 100 mètres", "C) 500 mètres", "D) 2 kilomètres"], c: 1 },
    { q: "10. Quelle fibre optique est la plus adaptée aux très longues distances (réseaux métropolitains) ?", o: ["A) Multimode", "B) Monomode", "C) Coaxiale", "D) STP"], c: 1 },
    { q: "11. Quel type de câble utilise-t-on pour connecter un PC directement à un autre PC ?", o: ["A) Câble droit (Straight-through)", "B) Câble croisé (Crossover)", "C) Câble console (Rollover)", "D) Câble fibre optique"], c: 1 },
    { q: "12. Dans une topologie en bus, à quoi servent les terminaisons aux extrémités ?", o: ["A) À amplifier le signal", "B) À absorber le signal pour éviter les échos (réflexions)", "C) À connecter de nouvelles stations", "D) À alimenter le câble en électricité"], c: 1 },
    { q: "13. Qu'est-ce qu'une 'collision' dans un réseau ?", o: ["A) Une panne logicielle du serveur", "B) Deux signaux qui se mélangent et interfèrent sur un support partagé", "C) Un câble coupé physiquement", "D) Une erreur de mot de passe"], c: 1 },
    { q: "14. Quelle méthode d'accès est dite 'déterministe' ?", o: ["A) CSMA/CD", "B) ALOHA", "C) Passage de jeton (Token Passing)", "D) CSMA/CA"], c: 2 },
    { q: "15. Comment fonctionne le 'Roll-Call Polling' ?", o: ["A) Les stations se passent un jeton", "B) Un maître interroge chaque esclave un par un", "C) Les stations émettent dès qu'elles ont des données", "D) Les collisions sont gérées par un algorithme de backoff"], c: 1 },
    { q: "16. Dans un réseau Token Ring, que fait une station qui reçoit une trame qui ne lui est pas destinée ?", o: ["A) Elle la détruit", "B) Elle la régénère et la transmet à son voisin", "C) Elle la stocke sur son disque dur", "D) Elle la renvoie à l'émetteur immédiatement"], c: 1 },
    { q: "17. Le protocole CSMA/CD signifie :", o: ["A) Control System Medium Access / Collision Discovery", "B) Carrier Sense Multiple Access / Collision Detection", "C) Computer Sense Main Access / Control Data", "D) Cable Signal Multi Access / Collision Delay"], c: 1 },
    { q: "18. Quel est l'inconvénient majeur de l'accès aléatoire (CSMA/CD) ?", o: ["A) Très complexe à installer", "B) Nécessite un serveur central puissant", "C) Aucune garantie de temps d'accès (non déterministe)", "D) Impossible d'utiliser la fibre optique"], c: 2 },
    { q: "19. Quelle est la longueur d'une adresse MAC ?", o: ["A) 32 bits", "B) 48 bits", "C) 64 bits", "D) 128 bits"], c: 1 },
    { q: "20. Que représentent les 24 premiers bits d'une adresse MAC ?", o: ["A) Le numéro de série de la carte", "B) L'adresse IP du réseau", "C) L'identifiant du constructeur (OUI)", "D) Le protocole utilisé"], c: 2 },
    { q: "21. Quelle est l'adresse MAC de Broadcast (diffusion à tous) ?", o: ["A) 00:00:00:00:00:00", "B) 01:00:5E:00:00:00", "C) FF:FF:FF:FF:FF:FF", "D) 127.0.0.1"], c: 2 },
    { q: "22. Si le premier octet d'une adresse MAC est '08', de quel type d'adresse s'agit-il ?", o: ["A) Unicast Universelle", "B) Multicast", "C) Broadcast", "D) Locale"], c: 0 },
    { q: "23. À quelle couche du modèle OSI l'adresse MAC appartient-elle ?", o: ["A) Couche 1 (Physique)", "B) Couche 2 (Liaison de données)", "C) Couche 3 (Réseau)", "D) Couche 4 (Transport)"], c: 1 },
    { q: "24. Quel service LLC est le plus utilisé dans les réseaux IP modernes ?", o: ["A) Type 1 (Sans connexion, sans acquittement)", "B) Type 2 (Avec connexion, avec acquittement)", "C) Type 3 (Sans connexion, avec acquittement)", "D) Aucun de ces services"], c: 0 },
    { q: "25. Quelle primitive LLC est utilisée pour indiquer la réception de données ?", o: ["A) L_DATA.request", "B) L_DATA.indication", "C) L_CONNECT", "D) L_RESET"], c: 1 },
    { q: "26. Quelle est la taille minimale d'une trame Ethernet (de l'adresse dest. au FCS) ?", o: ["A) 46 octets", "B) 64 octets", "C) 512 octets", "D) 1518 octets"], c: 1 },
    { q: "27. Pourquoi une taille minimale de trame est-elle nécessaire ?", o: ["A) Pour économiser de la bande passante", "B) Pour garantir que l'émetteur détecte une collision avant d'avoir fini d'émettre", "C) Pour permettre le cryptage", "D) Pour satisfaire le protocole IP"], c: 1 },
    { q: "28. Qu'est-ce que le 'Jam Signal' (signal de brouillage) ?", o: ["A) Un signal pour demander plus de débit", "B) Un signal de 32 bits envoyé après une collision pour alerter toutes les stations", "C) Une musique d'attente", "D) Un signal de fin de transmission"], c: 1 },
    { q: "29. Quel algorithme est utilisé pour calculer le temps d'attente après une collision ?", o: ["A) Algorithme de Dijkstra", "B) Backoff Exponentiel Binaire (BEB)", "C) Spanning Tree", "D) Round Robin"], c: 1 },
    { q: "30. Après combien de tentatives infructueuses une station Ethernet abandonne-t-elle l'envoi ?", o: ["A) 1", "B) 8", "C) 16", "D) Illimité"], c: 2 },
    { q: "31. En Fast Ethernet (100 Mbps), si le débit augmente par 10, que devient la portée maximale du réseau pour maintenir le CSMA/CD ?", o: ["A) Elle est multipliée par 10", "B) Elle reste la même", "C) Elle est divisée par 10", "D) Elle tombe à 1 mètre"], c: 2 },
    { q: "32. Le champ FCS dans une trame Ethernet sert à :", o: ["A) Identifier la source", "B) Détecter les erreurs de transmission via un CRC", "C) Définir la priorité de la trame", "D) Synchroniser les horloges"], c: 1 },
    { q: "33. À quelle couche opère un Hub (Concentrateur) ?", o: ["A) Physique (L1)", "B) Liaison (L2)", "C) Réseau (L3)", "D) Application (L7)"], c: 0 },
    { q: "34. Quelle est la différence majeure entre un Hub et un Switch ?", o: ["A) Le Hub est plus rapide", "B) Le Switch offre une bande passante dédiée par port et segmente les collisions", "C) Le Hub utilise des adresses IP", "D) Il n'y a aucune différence"], c: 1 },
    { q: "35. Qu'est-ce qu'un 'domaine de collision' ?", o: ["A) L'ensemble des machines qui reçoivent un broadcast", "B) Une zone du réseau où les trames peuvent interférer entre elles", "C) Un logiciel de piratage", "D) La table MAC d'un switch"], c: 1 },
    { q: "36. Quel équipement permet de segmenter les domaines de broadcast ?", o: ["A) Hub", "B) Switch (Commutateur)", "C) Routeur", "D) Répéteur"], c: 2 },
    { q: "37. Comment un switch apprend-il les adresses MAC ?", o: ["A) On doit les saisir manuellement", "B) En lisant l'adresse source des trames reçues sur chaque port", "C) Via un serveur DNS", "D) En interrogeant le routeur"], c: 1 },
    { q: "38. La méthode de commutation 'Cut-Through' consiste à :", o: ["A) Attendre la fin de la trame avant de transmettre", "B) Commuter dès que l'adresse de destination est lue", "C) Vérifier les erreurs avant l'envoi", "D) Couper les câbles inutiles"], c: 1 },
    { q: "39. Quel est l'inconvénient du 'Store-and-Forward' ?", o: ["A) Transmet des trames erronées", "B) Augmente la latence proportionnellement à la taille de la trame", "C) Est incompatible avec la fibre", "D) Ne fonctionne qu'avec des Hubs"], c: 1 },
    { q: "40. Quel problème le protocole Spanning Tree résout-il ?", o: ["A) Le manque d'adresses IP", "B) Les boucles de niveau 2 dans les réseaux redondants", "C) Les pannes de courant", "D) La lenteur d'Internet"], c: 1 },
    { q: "41. Qu'est-ce qu'une 'tempête de broadcast' ?", o: ["A) Un orage qui perturbe le Wi-Fi", "B) Une trame diffusée indéfiniment à cause d'une boucle, saturant le réseau", "C) Une mise à jour Windows", "D) Trop d'emails envoyés en même temps"], c: 1 },
    { q: "42. Comment est élu le 'Root Bridge' (Pont Racine) ?", o: ["A) C'est le switch le plus cher", "B) C'est celui qui a le plus faible Bridge ID (Priorité + MAC)", "C) C'est celui qui est connecté au routeur", "D) C'est fait au hasard à chaque démarrage"], c: 1 },
    { q: "43. Dans quel état un port STP se trouve-t-il pour briser une boucle ?", o: ["A) Transmission (Forwarding)", "B) Écoute (Listening)", "C) Bloqué (Blocking)", "D) Apprentissage (Learning)"], c: 2 },
    { q: "44. Quel est le nom des messages échangés par les switches pour le STP ?", o: ["A) IP Packet", "B) BPDU (Bridge Protocol Data Unit)", "C) Hello World", "D) ARP Request"], c: 1 },
    { q: "45. Le routeur base ses décisions d'acheminement sur :", o: ["A) L'adresse MAC", "B) L'adresse logique de couche 3 (ex: IP)", "C) Le numéro de port physique", "D) Le nom de l'utilisateur"], c: 1 },
    { q: "46. Quel est l'adage concernant le choix entre switching et routing ?", o: ["A) 'Route when you can, switch when you must'", "B) 'Switch when you can, route when you must'", "C) 'Always route everything'", "D) 'Hub when you can'"], c: 1 },
    { q: "47. Une 'Passerelle' (Gateway) de niveau 7 sert à :", o: ["A) Amplifier le signal Wi-Fi", "B) Convertir des protocoles d'applications différents (ex: SMTP vers X.400)", "C) Connecter deux câbles Ethernet", "D) Bloquer les virus"], c: 1 },
    { q: "48. Quel équipement offre la plus grande 'intelligence' réseau ?", o: ["A) Hub", "B) Pont", "C) Routeur", "D) Répéteur"], c: 2 },
    { q: "49. Dans une architecture Client-Serveur, quel est l'inconvénient majeur du serveur ?", o: ["A) Il est trop lent", "B) C'est un point de défaillance unique (Single point of failure)", "C) Il ne peut pas stocker de fichiers", "D) Il nécessite du Wi-Fi obligatoirement"], c: 1 },
    { q: "50. Qu'est-ce que le 'précâblage structuré' ?", o: ["A) Installer des câbles au fur et à mesure des besoins", "B) Une installation normalisée visant la souplesse et l'évolution à long terme", "C) Utiliser uniquement de la fibre optique", "D) Supprimer tous les switchs"], c: 1 },

    // --- PARTIE WIRELESS (1-50) ---
    { q: "1. Comment appelle-t-on la zone de couverture limitée d'une antenne ?", o: ["A) Un canal", "B) Une cellule", "C) Un spectre", "D) Un handover"], c: 1 },
    { q: "2. Quel mécanisme permet de changer de cellule sans couper la communication ?", o: ["A) Le SSID", "B) L'atténuation", "C) Le Handover", "D) Le SNR"], c: 2 },
    { q: "3. Quelle est l'unité de mesure de la fréquence d'un signal ?", o: ["A) Le Watt (W)", "B) Le Hertz (Hz)", "C) Le Décibel (dB)", "D) Le Bit par seconde (bps)"], c: 1 },
    { q: "4. Quel est l'impact d'une fréquence élevée sur la propagation du signal ?", o: ["A) Elle augmente la portée", "B) Elle traverse mieux les obstacles", "C) Elle entraîne plus de distorsions et de difficultés à traverser les milieux", "D) Elle ne change rien par rapport aux basses fréquences"], c: 2 },
    { q: "5. Quel compromis est lié à une puissance d'émission élevée ?", o: ["A) Plus de portée, mais réduit l'autonomie de la batterie", "B) Moins de bruit, mais plus d'interférences", "C) Meilleur débit, mais fréquence plus basse", "D) Sécurité accrue, mais coût plus élevé"], c: 0 },
    { q: "6. Qu'est-ce que le SNR (Signal-to-Noise Ratio) ?", o: ["A) Le débit maximal d'un canal", "B) Le rapport entre la puissance du signal reçu et celle du bruit", "C) La différence entre la fréquence haute et basse", "D) Le type d'antenne utilisé"], c: 1 },
    { q: "7. Lequel de ces matériaux bloque presque totalement le signal radio ?", o: ["A) Le bois", "B) Le verre", "C) Le métal", "D) Le plastique"], c: 2 },
    { q: "8. Pourquoi le chiffrement est-il considéré comme obligatoire en sans fil ?", o: ["A) Pour augmenter le débit", "B) Parce que le medium est aérien et interceptable par tout équipement dans la zone", "C) Pour économiser la batterie", "D) Pour réduire le nombre d'utilisateurs"], c: 1 },
    { q: "9. Au Maroc, quel organisme régule l'allocation des fréquences ?", o: ["A) L'IEEE", "B) La WiFi Alliance", "C) L'ANRT", "D) Le ministère de la santé"], c: 2 },
    { q: "10. Laquelle de ces méthodes n'est pas une solution de sécurité mentionnée ?", o: ["A) Le masquage du SSID", "B) Le filtrage par adresse MAC", "C) Le chiffrement WPA2", "D) L'augmentation de la fréquence"], c: 3 },
    { q: "11. Quelle est l'unité centrale de destination des données dans un WSN ?", o: ["A) Le routeur mesh", "B) La station de base ou 'Sink'", "C) Le tag RFID", "D) L'antenne MIMO"], c: 1 },
    { q: "12. Quel composant d'un nœud capteur transforme un signal physique en donnée numérique ?", o: ["A) Le processeur", "B) L'unité de transmission", "C) Le convertisseur Analogique-Numérique (ADC)", "D) L'unité d'énergie"], c: 2 },
    { q: "13. Quelle activité consomme le plus d'énergie dans un réseau de capteurs ?", o: ["A) Le traitement de données", "B) La mise en veille", "C) L'unité radio (émission/réception)", "D) L'unité de captage"], c: 2 },
    { q: "14. Qu'est-ce que 'l'agrégation de données' dans un WSN ?", o: ["A) Séparer les messages pour plus de clarté", "B) Combiner les données pour économiser l'énergie et la bande passante", "C) Augmenter la puissance d'émission", "D) Crypter chaque bit séparément"], c: 1 },
    { q: "15. Quelle est la portée typique d'un WPAN ?", o: ["A) Quelques millimètres", "B) Quelques dizaines de mètres", "C) Plusieurs kilomètres", "D) Une ville entière"], c: 1 },
    { q: "21. Quelle est la différence entre un tag RFID passif et actif ?", o: ["A) Le passif est plus rapide", "B) L'actif possède sa propre source d'énergie (pile)", "C) Le passif fonctionne à 100 mètres", "D) Il n'y a aucune différence"], c: 1 },
    { q: "22. Quelle fréquence RFID est idéale pour la logistique avec une portée de 10-20m ?", o: ["A) BF (125 KHz)", "B) HF (13,56 MHz)", "C) UHF (860-930 MHz)", "D) Hyper RF (5,8 GHz)"], c: 2 },
    { q: "23. Quelle classe Bluetooth offre une portée de 100 mètres ?", o: ["A) Classe I", "B) Classe II", "C) Classe III", "D) Classe IV"], c: 0 },
    { q: "24. Quel standard IEEE correspond au Bluetooth ?", o: ["A) 802.11", "B) 802.15.1", "C) 802.15.4", "D) 802.3"], c: 1 },
    { q: "25. À quoi est principalement dédié le ZigBee ?", o: ["A) Au transfert de vidéos HD", "B) Au contrôle et à la domotique (transport de commandes)", "C) À remplacer la fibre optique", "D) Uniquement à la téléphonie mobile"], c: 1 },
    { q: "26. Combien de périphériques peut supporter la version étendue du ZigBee (802.15.4a) ?", o: ["A) 10", "B) 255", "C) Plus de 65 000", "D) Illimité"], c: 2 },
    { q: "27. Quelle technologie vise à remplacer les câbles USB avec un débit de 480 Mbps ?", o: ["A) Bluetooth v1.x", "B) ZigBee", "C) WUSB (basé sur l'UWB)", "D) RFID HF"], c: 2 },
    { q: "28. Quel est l'élément central reliant le réseau WiFi au réseau filaire ?", o: ["A) Le terminal", "B) Le Point d'Accès (AP)", "C) Le répartiteur", "D) L'étiquette active"], c: 1 },
    { q: "29. Quel mode WiFi permet une interconnexion directe sans infrastructure fixe ?", o: ["A) Mode Infrastructure (BSS)", "B) Mode Ad-hoc (IBSS)", "C) Mode Infrastructure Étendu (ESS)", "D) Mode MIMO"], c: 1 },
    { q: "30. Que signifie 'ESS' dans un réseau WiFi ?", o: ["A) Une seule cellule isolée", "B) Plusieurs points d'accès reliés par un système de distribution", "C) Un réseau sans aucune sécurité", "D) Une marque de routeur"], c: 1 },
    { q: "31. Quelle norme WiFi fonctionne à 54 Mbps sur la fréquence 5 GHz ?", o: ["A) 802.11b", "B) 802.11g", "C) 802.11a", "D) 802.11n"], c: 2 },
    { q: "32. Quelle est la fréquence commune aux normes 802.11b et 802.11g ?", o: ["A) 2,4 GHz", "B) 5 GHz", "C) 900 MHz", "D) 10 GHz"], c: 0 },
    { q: "33. Quel est le débit théorique maximal de la norme 802.11n selon le tableau ?", o: ["A) 11 Mbps", "B) 54 Mbps", "C) 540 Mbps", "D) 1 Gbps"], c: 2 },
    { q: "34. La technologie MIMO permet de :", o: ["A) Réduire la puissance d'émission", "B) Utiliser plusieurs antennes pour augmenter le débit", "C) Changer le SSID automatiquement", "D) Bloquer les micro-ondes"], c: 1 },
    { q: "35. En 2,4 GHz, quels sont les trois canaux recommandés pour éviter les interférences ?", o: ["A) 1, 2 et 3", "B) 1, 6 et 11", "C) 10, 11 et 12", "D) Tous les canaux sont identiques"], c: 1 },
    { q: "36. Pourquoi les canaux en 5 GHz (802.11a) sont-ils avantageux ?", o: ["A) Ils ont une plus grande portée", "B) Ils ne présentent pas de risque d'interférence entre eux (espacés)", "C) Ils consomment moins de batterie", "D) Ils fonctionnent à travers le métal"], c: 1 },
    { q: "37. Lequel de ces appareils peut causer des interférences avec le WiFi 2,4 GHz ?", o: ["A) Un four micro-ondes", "B) Un appareil Bluetooth", "C) Un autre réseau WiFi", "D) Toutes les réponses ci-dessus"], c: 3 },
    { q: "38. Quel logiciel est cité pour réaliser un audit de site et détecter les réseaux ?", o: ["A) Photoshop", "B) Netstumbler", "C) Excel", "D) Word"], c: 1 },
    { q: "39. Que se passe-t-il pour le débit WiFi à mesure que l'on s'éloigne de l'AP ?", o: ["A) Il reste constant", "B) Il augmente pour compenser la distance", "C) Il diminue automatiquement (ex: de 11 Mbps à 1 Mbps)", "D) Le signal se coupe instantanément à 10 mètres"], c: 2 },
    { q: "40. Pour une mobilité continue dans un bâtiment, comment doivent être les cellules ?", o: ["A) Disjointes", "B) Partiellement recouvertes", "C) Éloignées de 1 km", "D) Inexistantes"], c: 1 },
    { q: "41. Un 'Cross-Layer Design' est une approche où :", o: ["A) On supprime les couches OSI", "B) Les couches interagissent entre elles (ex: routage informé par la couche physique)", "C) On n'utilise que la couche 1", "D) On change de câble"], c: 1 },
    { q: "42. La RFID est-elle plus lente ou plus rapide que le code-barres ?", o: ["A) Plus lente car sans fil", "B) Environ 40 fois plus rapide et sans besoin de visibilité directe", "C) Identique en termes de vitesse", "D) Le code-barres est 40 fois plus rapide"], c: 1 },
    { q: "43. Quelle est l'autonomie typique d'un appareil ZigBee sur piles ?", o: ["A) 2 heures", "B) 2 jours", "C) Jusqu'à 2 ans", "D) 20 ans"], c: 2 },
    { q: "44. Le WPA est-il plus ou moins robuste que le WEP ?", o: ["A) Moins robuste", "B) Plus robuste", "C) Identique", "D) Le WPA n'existe pas"], c: 1 },
    { q: "45. Comment s'appelle l'unité de traitement dans un nœud capteur ?", o: ["A) Le Sink", "B) Le Processeur", "C) L'antenne", "D) La batterie"], c: 1 },
    { q: "46. La bande passante d'un canal WiFi est :", o: ["A) Réservée à un seul utilisateur", "B) Divisée par le nombre d'utilisateurs connectés simultanément", "C) Illimitée", "D) Fixée à 1 Hz"], c: 1 },
    { q: "47. Une antenne WiFi en intérieur a une portée de :", o: ["A) Quelques millimètres", "B) Quelques dizaines de mètres", "C) 10 kilomètres", "D) 1000 kilomètres"], c: 1 },
    { q: "48. Quel est le principal défi de conception pour les réseaux de capteurs (WSN) ?", o: ["A) La couleur des nœuds", "B) La consommation d'énergie", "C) La taille des câbles", "D) Le nombre de boutons"], c: 1 },
    { q: "49. Le mode 'Infrastructure' utilise-t-il une communication directe entre PC ?", o: ["A) Oui, toujours", "B) Non, tout passe par le Point d'Accès (AP)", "C) Uniquement le week-end", "D) Seulement si l'AP tombe en panne"], c: 1 },
    { q: "50. Qu'exprime le décibel-milliwatt (dBm) ?", o: ["A) La vitesse du son", "B) La puissance du signal", "C) La température de l'antenne", "D) La fréquence"], c: 1 }
];

const quizSaidiExplanations = [
    // --- PARTIE LAN (1-50) ---
    { exp: "Un LAN couvre une zone limitée (bâtiment/campus) et reste sous la même administration.", trap: "Les distances d'une ville ou d'Internet correspondent à un WAN.", concept: "Portée LAN." },
    { exp: "Un LAN est généralement privé, en bande de base et sur support partagé : toutes les réponses sont vraies.", trap: "Le piège est de choisir une seule proposition alors qu'elles sont toutes correctes.", concept: "Caractéristiques LAN." },
    { exp: "La sous-couche LLC (IEEE 802.2) est commune à toutes les technologies LAN ; la MAC varie selon la techno.", trap: "MAC et Physique ne sont pas communes entre Ethernet, Wi-Fi, etc.", concept: "LLC." },
    { exp: "La MAC gère l'accès au médium et la résolution des collisions.", trap: "Le routage et le chiffrement relèvent d'autres couches.", concept: "Accès au média." },
    { exp: "Le Wi-Fi correspond à la norme IEEE 802.11.", trap: "802.3 = Ethernet, 802.5 = Token Ring, 802.16 = WiMAX.", concept: "Famille 802." },
    { exp: "En étoile, le point central est critique : s'il tombe, tout le réseau s'arrête.", trap: "Bus et anneau ont d'autres pannes, pas ce point unique.", concept: "Topologie étoile." },
    { exp: "La topologie en bus est simple et économique en câblage.", trap: "Elle est moins stable sous charge et difficile à maintenir.", concept: "Bus." },
    { exp: "La catégorie 7 est conçue pour supporter 10 Gbps sur cuivre.", trap: "Cat 5/5e ne garantissent pas ce débit.", concept: "Catégories UTP." },
    { exp: "La paire torsadée UTP est limitée à 100 m par segment.", trap: "Les longues distances sont pour la fibre ou certains coaxiaux.", concept: "Limite 100 m." },
    { exp: "La fibre monomode est faite pour les longues distances.", trap: "La multimode est surtout pour des distances courtes.", concept: "Fibre optique." },
    { exp: "Pour relier deux PC directement, on utilise un câble croisé (MDI/MDI).", trap: "Le câble droit sert pour PC ↔ switch.", concept: "Câblage." },
    { exp: "Les terminaisons absorbent le signal pour éviter les réflexions.", trap: "Elles n'amplifient pas le signal.", concept: "Bus et terminaisons." },
    { exp: "Une collision est la superposition de signaux sur un support partagé.", trap: "Ce n'est pas une panne logicielle.", concept: "Collision." },
    { exp: "Le passage de jeton est un accès déterministe (pas de collisions).", trap: "CSMA/CD et ALOHA sont aléatoires.", concept: "Accès déterministe." },
    { exp: "Le roll-call polling interroge les stations une par une via un maître.", trap: "Ce n'est pas un jeton qui circule.", concept: "Polling." },
    { exp: "En Token Ring, la station régénère la trame et la retransmet au voisin.", trap: "La détruire casserait la logique de l'anneau.", concept: "Anneau." },
    { exp: "CSMA/CD signifie Carrier Sense Multiple Access / Collision Detection.", trap: "Les autres expansions sont fausses.", concept: "Ethernet." },
    { exp: "Inconvénient majeur : pas de garantie de temps d'accès (non déterministe).", trap: "Ce n'est ni une complexité d'installation ni un besoin de serveur central.", concept: "Temps d'accès." },
    { exp: "Une adresse MAC fait 48 bits.", trap: "32/64/128 bits correspondent à d'autres protocoles.", concept: "MAC 48 bits." },
    { exp: "Les 24 premiers bits identifient le constructeur (OUI).", trap: "Le numéro de série complet est dans les 24 derniers bits.", concept: "OUI." },
    { exp: "L'adresse MAC de broadcast est FF:FF:FF:FF:FF:FF.", trap: "01:00:5E... est une adresse multicast.", concept: "Diffusion MAC." },
    { exp: "08h donne I/G=0 et U/L=0 : unicast universelle.", trap: "Multicast/broadcast ont le bit I/G à 1.", concept: "Bits de l'octet MAC." },
    { exp: "L'adresse MAC appartient à la couche 2 (liaison).", trap: "IP est en couche 3.", concept: "L2." },
    { exp: "Le service LLC Type 1 est sans connexion ni acquittement, utilisé par IP.", trap: "Type 2/3 ajoutent de la fiabilité.", concept: "LLC Type 1." },
    { exp: "L_DATA.indication signale la réception de données.", trap: "L_DATA.request sert à envoyer.", concept: "Primitives LLC." },
    { exp: "La trame Ethernet minimale est de 64 octets (dest → FCS).", trap: "46 octets est la charge utile minimale.", concept: "Padding." },
    { exp: "La taille minimale garantit la détection de collision avant fin d'émission.", trap: "Ce n'est pas pour économiser de la bande passante.", concept: "Slot time." },
    { exp: "Le jam signal est un signal de 32 bits envoyé après collision.", trap: "Ce n'est pas un signal de fin de transmission.", concept: "Collision." },
    { exp: "Le backoff exponentiel binaire (BEB) calcule le délai d'attente.", trap: "Dijkstra concerne le routage.", concept: "BEB." },
    { exp: "Après 16 tentatives infructueuses, la station abandonne l'envoi.", trap: "8 ou 1 sont trop faibles.", concept: "Limite 16." },
    { exp: "En Fast Ethernet, le diamètre max doit être divisé par 10 pour CSMA/CD.", trap: "Il ne peut pas rester identique.", concept: "Timing Ethernet." },
    { exp: "Le FCS sert à détecter les erreurs via un CRC.", trap: "Ce n'est pas un champ d'identification.", concept: "CRC." },
    { exp: "Un hub opère en couche 1 (physique).", trap: "Le switch opère en couche 2.", concept: "Hub L1." },
    { exp: "Le switch segmente les collisions et offre une bande passante dédiée par port.", trap: "Le hub répète tout partout.", concept: "Switch vs Hub." },
    { exp: "Un domaine de collision est une zone où les trames peuvent interférer.", trap: "Le domaine de broadcast est différent.", concept: "Collision domain." },
    { exp: "Le routeur segmente les domaines de broadcast.", trap: "Switch et hub ne filtrent pas les broadcasts.", concept: "Broadcast domain." },
    { exp: "Le switch apprend via l'adresse MAC source des trames reçues.", trap: "Il ne demande pas au DNS.", concept: "Table MAC." },
    { exp: "Le cut-through transmet dès lecture de l'adresse de destination.", trap: "Store-and-forward attend la trame complète.", concept: "Commutation." },
    { exp: "Le store-and-forward augmente la latence proportionnellement à la trame.", trap: "Il filtre les erreurs mais est plus lent.", concept: "Latence." },
    { exp: "Le STP évite les boucles de niveau 2 dans les réseaux redondants.", trap: "Ce n'est pas un protocole IP.", concept: "Boucles L2." },
    { exp: "Une tempête de broadcast est une boucle qui inonde et sature le réseau.", trap: "Ce n'est pas un phénomène météo.", concept: "Broadcast storm." },
    { exp: "Le Root Bridge est celui avec le Bridge ID le plus faible (priorité + MAC).", trap: "Le plus cher ou le plus connecté ne gagne pas forcément.", concept: "Élection STP." },
    { exp: "Un port Blocking casse la boucle en n'acheminant pas les trames.", trap: "Forwarding laisserait passer la boucle.", concept: "États STP." },
    { exp: "Les switches STP échangent des BPDU.", trap: "ARP/IP ne sont pas utilisés par STP.", concept: "BPDU." },
    { exp: "Le routeur base ses décisions sur l'adresse logique de couche 3 (IP).", trap: "L'adresse MAC sert aux switches.", concept: "Routage." },
    { exp: "L'adage est : Switch when you can, route when you must.", trap: "L'inverse est un piège classique.", concept: "Choix L2/L3." },
    { exp: "Une passerelle de niveau 7 traduit entre protocoles applicatifs.", trap: "Un répéteur ne fait pas de traduction.", concept: "Gateway applicative." },
    { exp: "Le routeur est l'équipement le plus intelligent (routage, filtrage).", trap: "Hub et pont sont plus simples.", concept: "Routeur." },
    { exp: "Le serveur est un point unique de défaillance (single point of failure).", trap: "Ce n'est pas lié au Wi-Fi.", concept: "Client-serveur." },
    { exp: "Le précâblage structuré est une installation normalisée et évolutive.", trap: "Ce n'est pas du câblage improvisé.", concept: "Câblage structuré." },

    // --- PARTIE WIRELESS (1-50) ---
    { exp: "La zone de couverture d'une antenne est une cellule.", trap: "Un canal est une bande de fréquence, pas une zone.", concept: "Cellule." },
    { exp: "Le handover permet le changement de cellule sans coupure.", trap: "Le SSID n'est pas le mécanisme de mobilité.", concept: "Handover." },
    { exp: "La fréquence se mesure en Hertz (Hz).", trap: "Le dB mesure un rapport de puissance, le bps un débit.", concept: "Hz." },
    { exp: "Une fréquence élevée est plus atténuée et traverse moins bien les obstacles.", trap: "Elle n'augmente pas la portée.", concept: "Propagation." },
    { exp: "Plus de puissance = plus de portée mais moins d'autonomie.", trap: "Ce n'est pas forcément un meilleur débit.", concept: "Puissance/énergie." },
    { exp: "Le SNR est le rapport signal/bruit.", trap: "Ce n'est pas un débit maximal.", concept: "Qualité du signal." },
    { exp: "Le métal bloque presque totalement les ondes radio.", trap: "Bois et verre atténuent moins.", concept: "Atténuation." },
    { exp: "Le chiffrement est indispensable car le médium est aérien et facilement interceptable.", trap: "Ce n'est pas pour augmenter le débit.", concept: "Sécurité Wi-Fi." },
    { exp: "Au Maroc, l'ANRT régule l'allocation des fréquences.", trap: "IEEE et Wi-Fi Alliance ne sont pas des régulateurs nationaux.", concept: "Régulation." },
    { exp: "Augmenter la fréquence n'est pas une mesure de sécurité.", trap: "Masquage SSID, filtrage MAC et WPA2 sont des mesures (plus ou moins efficaces).", concept: "Sécurité sans fil." },
    { exp: "Dans un WSN, la station de base (sink) collecte les données.", trap: "Le sink n'est pas un simple capteur.", concept: "WSN." },
    { exp: "L'ADC convertit un signal analogique en donnée numérique.", trap: "Le processeur traite mais ne convertit pas.", concept: "ADC." },
    { exp: "L'unité radio (émission/réception) consomme le plus d'énergie.", trap: "Le traitement est moins gourmand.", concept: "Énergie WSN." },
    { exp: "L'agrégation combine les données pour économiser énergie et bande passante.", trap: "Ce n'est pas un chiffrement.", concept: "Agrégation." },
    { exp: "Un WPAN a une portée de quelques dizaines de mètres.", trap: "Plusieurs kilomètres correspond à un WLAN/WMAN.", concept: "WPAN." },
    { exp: "Un tag RFID actif a sa propre source d'énergie.", trap: "Le passif est alimenté par le champ radio.", concept: "RFID." },
    { exp: "La fréquence UHF (860-930 MHz) donne une portée de 10-20 m, adaptée à la logistique.", trap: "BF/HF ont des portées plus courtes.", concept: "RFID UHF." },
    { exp: "La classe Bluetooth I offre environ 100 m de portée.", trap: "Classes II/III sont plus courtes.", concept: "Classes Bluetooth." },
    { exp: "Bluetooth correspond à IEEE 802.15.1.", trap: "802.11 est pour le Wi-Fi.", concept: "PAN." },
    { exp: "ZigBee est dédié au contrôle/domotique (faible débit et consommation).", trap: "Pas pour la vidéo HD.", concept: "ZigBee." },
    { exp: "La version étendue de ZigBee supporte plus de 65 000 périphériques.", trap: "255 est trop faible.", concept: "Adressage ZigBee." },
    { exp: "WUSB (UWB) vise 480 Mbps pour remplacer l'USB filaire.", trap: "Bluetooth/ZigBee sont trop lents.", concept: "UWB." },
    { exp: "Le point d'accès (AP) relie le Wi-Fi au réseau filaire.", trap: "Un terminal n'est pas l'élément central.", concept: "AP." },
    { exp: "Le mode Ad-hoc (IBSS) permet une interconnexion directe sans infrastructure.", trap: "Le mode Infrastructure passe par l'AP.", concept: "Modes Wi-Fi." },
    { exp: "ESS = plusieurs APs reliés par un système de distribution.", trap: "BSS = une seule cellule.", concept: "ESS." },
    { exp: "La norme 802.11a offre 54 Mbps en 5 GHz.", trap: "802.11b/g sont en 2,4 GHz.", concept: "Normes Wi-Fi." },
    { exp: "802.11b et 802.11g utilisent la bande 2,4 GHz.", trap: "5 GHz correspond à 802.11a.", concept: "Bandes Wi-Fi." },
    { exp: "Selon le tableau, 802.11n atteint 540 Mbps théoriques.", trap: "11 Mbps correspond à 802.11b.", concept: "Débits Wi-Fi." },
    { exp: "MIMO utilise plusieurs antennes pour augmenter le débit et la fiabilité.", trap: "Ce n'est pas un mécanisme anti-interférences.", concept: "MIMO." },
    { exp: "En 2,4 GHz, les canaux 1, 6 et 11 ne se chevauchent pas.", trap: "Les canaux adjacents se chevauchent.", concept: "Canaux." },
    { exp: "La bande 5 GHz offre plus de canaux séparés, donc moins d'interférences.", trap: "La portée n'est pas meilleure qu'en 2,4 GHz.", concept: "5 GHz." },
    { exp: "Micro-ondes, Bluetooth et autres Wi-Fi perturbent le 2,4 GHz : toutes les réponses.", trap: "Choisir un seul appareil est incomplet.", concept: "Interférences." },
    { exp: "Netstumbler sert à l'audit de site et à la détection de réseaux.", trap: "Photoshop/Excel ne sont pas des outils réseau.", concept: "Site survey." },
    { exp: "Le débit Wi-Fi diminue avec la distance (adaptation de modulation).", trap: "Il n'augmente pas avec la distance.", concept: "Rate adaptation." },
    { exp: "Pour une mobilité continue, les cellules doivent se recouvrir partiellement.", trap: "Des cellules disjointes créent des zones mortes.", concept: "Handover." },
    { exp: "Le cross-layer design fait interagir les couches (ex: routage informé par la PHY).", trap: "Ce n'est pas supprimer les couches OSI.", concept: "Cross-layer." },
    { exp: "La RFID est bien plus rapide que le code-barres et ne nécessite pas de visibilité directe.", trap: "Le code-barres exige une ligne de vue.", concept: "RFID vs code-barres." },
    { exp: "ZigBee peut fonctionner jusqu'à 2 ans sur piles.", trap: "2 heures ou 2 jours est trop faible.", concept: "Basse consommation." },
    { exp: "Le WPA est plus robuste que le WEP.", trap: "Le WEP est facilement cassable.", concept: "Sécurité Wi-Fi." },
    { exp: "L'unité de traitement d'un nœud capteur est le processeur.", trap: "Le sink n'est pas l'unité interne du nœud.", concept: "WSN." },
    { exp: "La bande passante Wi-Fi est partagée entre les utilisateurs connectés.", trap: "Elle n'est pas dédiée à chaque utilisateur.", concept: "Partage du médium." },
    { exp: "En intérieur, la portée est de quelques dizaines de mètres.", trap: "10 km correspond à des liaisons extérieures spécialisées.", concept: "Portée Wi-Fi." },
    { exp: "Le défi principal des WSN est la consommation d'énergie.", trap: "Ni la couleur ni le nombre de boutons n'ont d'impact.", concept: "Énergie." },
    { exp: "En mode Infrastructure, la communication passe par l'AP (pas de direct PC-PC).", trap: "Le mode Ad-hoc permet le direct.", concept: "Infrastructure." },
    { exp: "Le dBm exprime une puissance relative à 1 mW.", trap: "Ce n'est ni une fréquence ni une température.", concept: "dBm." }
];

const quizSaidiFull = quizSaidi.map((q, idx) => ({ ...q, ...quizSaidiExplanations[idx] }));

// QCM Avancé (30 Questions : Select, Macros, Options, etc.)
const qcmAdvanced = [
    // --- Partie demandée : Select, Macros, Options ---
    {
        q: "1. À quoi sert principalement la fonction select() ?",
        o: ["A) À se connecter à plusieurs serveurs", "B) À surveiller plusieurs descripteurs (sockets/fichiers) simultanément sans bloquer", "C) À sélectionner la meilleure carte réseau", "D) À choisir une adresse IP aléatoire"],
        c: 1,
        exp: "select() permet le 'multiplexage synchrone'. Elle met le programme en pause jusqu'à ce qu'un des descripteurs surveillés (readfds, writefds) devienne actif (donnée reçue, prêt à écrire, etc.).",
        trap: "Ne pas confondre avec le multi-threading.",
        concept: "Évite d'avoir un processus bloqué sur un seul recv() alors qu'il pourrait faire autre chose."
    },
    {
        q: "2. Que fait la macro FD_ZERO(&set) ?",
        o: ["A) Met le descripteur 0 dans le set", "B) Vide/Initialise l'ensemble de descripteurs (set)", "C) Ferme tous les fichiers", "D) Met à zéro la mémoire du PC"],
        c: 1,
        exp: "Elle nettoie le 'set' (ensemble) pour qu'il soit vide avant d'ajouter des descripteurs dedans.",
        trap: "C'est la première étape OBLIGATOIRE avant d'utiliser un fd_set.",
        concept: "Initialisation indispensable."
    },
    {
        q: "3. Comment ajouter un socket 'sock' à un ensemble 'readfds' ?",
        o: ["A) readfds += sock", "B) FD_ADD(sock, &readfds)", "C) FD_SET(sock, &readfds)", "D) sock.add(readfds)"],
        c: 2,
        exp: "FD_SET(fd, &set) est la macro standard pour ajouter un descripteur à surveiller.",
        trap: "FD_ADD n'existe pas.",
        concept: "Gestion des ensembles de bits (bitmask)."
    },
    {
        q: "4. Après le retour de select(), comment savoir si 'sock' a reçu des données ?",
        o: ["A) if (sock == 1)", "B) if (FD_ISSET(sock, &readfds))", "C) if (readfds[sock] == true)", "D) select() retourne le numéro du socket"],
        c: 1,
        exp: "FD_ISSET vérifie si le bit correspondant au socket est resté allumé dans le set, ce qui signifie qu'il est 'prêt'.",
        trap: "select() retourne le NOMBRE total de descripteurs actifs, pas LE descripteur lui-même.",
        concept: "Vérification post-select."
    },
    {
        q: "5. À quoi set l'option de socket SO_REUSEADDR avec setsockopt ?",
        o: ["A) À utiliser deux fois la même IP", "B) À permettre de relancer le serveur immédiatement (éviter 'Address already in use')", "C) À cloner le socket", "D) À recycler les paquets perdus"],
        c: 1,
        exp: "Après un crash ou un arrêt, le port reste parfois en état TIME_WAIT. SO_REUSEADDR force le noyau à autoriser le 'bind' immédiat sur ce port.",
        trap: "Sans ça, il faut attendre ~2 minutes avant de relancer le serveur.",
        concept: "Pratique pour le développement et la haute dispo."
    },
    {
        q: "6. Quelle est la différence majeure entre close() et shutdown() ?",
        o: ["A) Aucune", "B) close() libère le descripteur, shutdown() permet de fermer un seul sens (lecture ou écriture)", "C) shutdown() éteint le PC", "D) close() est pour UDP, shutdown() pour TCP"],
        c: 1,
        exp: "shutdown(sock, SHUT_WR) dit 'j'ai fini d'écrire, mais je peux encore lire'. close() ferme tout et détruit le handle.",
        trap: "close() décrémente aussi le compteur de références (si fork).",
        concept: "Demi-fermeture (Half-close) utile pour signaler la fin de données sans couper la réception."
    },
    {
        q: "7. Que font ntohl() et ntohs() ?",
        o: ["A) Convertissent du format Réseau (Big Endian) vers Hôte", "B) L'inverse (Hôte vers Réseau)", "C) Cryptage des données", "D) Compression"],
        c: 0,
        exp: "Network TO Host Long/Short. Utilisé quand on REÇOIT des données (ex: un port ou une IP venant d'un paquet).",
        trap: "Pour envoyer, on utilise htons/htonl.",
        concept: "Endianness (Boutisme)."
    },
    {
        q: "8. Quel est le type de variable 'socklen_t' ?",
        o: ["A) Un pointeur", "B) Un entier non-signé (au moins 32 bits)", "C) Une structure", "D) Un tableau de char"],
        c: 1,
        exp: "C'est un type entier opaque utilisé pour stocker la taille des structures d'adresse (sizeof(struct sockaddr_in)).",
        trap: "Obligatoire dans accept() et recvfrom(), sinon warning à la compilation !",
        concept: "Portabilité POSIX."
    },
    {
        q: "9. Où trouve-t-on le code d'erreur après un échec socket (-1) ?",
        o: ["A) Dans la valeur de retour", "B) Dans la variable globale 'errno'", "C) On ne peut pas savoir", "D) Dans le fichier log"],
        c: 1,
        exp: "La plupart des appels système Unix mettent le code d'erreur dans 'errno'. perror() l'utilise pour afficher un message lisible.",
        trap: "La valeur de retour est juste -1, pas le code précis.",
        concept: "Gestion d'erreur standard C/Unix."
    },
    {
        q: "10. La structure 'timeval' dans select() sert à :",
        o: ["A) Donner l'heure", "B) Définir un Timeout (temps max d'attente)", "C) Mesurer le ping", "D) Synchroniser les horloges"],
        c: 1,
        exp: "Si aucun évènement n'arrive avant la fin du temps défini dans timeval, select() rend la main (retourne 0).",
        trap: "Si NULL est passé, select bloque indéfiniment.",
        concept: "Évite le blocage infini."
    },

    // --- 20 Questions Concepts Divers & Avancés ---
    { q: "11. Si on fait connect() sur un socket UDP (SOCK_DGRAM), que se passe-t-il ?", o: ["A) Erreur, impossible sur UDP", "B) Ça établit une connexion TCP", "C) Ça filtre : on ne pourra envoyer/recevoir QUE vers/de cette adresse", "D) Le socket explose"], c: 2, exp: "Sur UDP, connect() ne fait pas de handshake. Il enregistre juste l'adresse par défaut pour qu'on puisse utiliser send()/recv() au lieu de sendto()/recvfrom().", trap: "Pas de 'connexion' réelle, juste un filtre noyau.", concept: "Connexion UDP logique." },
    { q: "12. Que signifie l'adresse IP 0.0.0.0 (INADDR_ANY) dans un bind() ?", o: ["A) Écouter sur toutes les interfaces réseau locales", "B) Écouter sur aucune interface", "C) Écouter seulement sur le WiFi", "D) Erreur"], c: 0, exp: "Cela dit au noyau : 'Accepte les connexions venant de n'importe quelle carte réseau de cette machine (Eth, Wifi, Loopback...)'.", trap: "Utiliser une IP précise restreint l'écoute à cette seule IP.", concept: "Wildcard address." },
    { q: "13. Quelle est la différence entre AF_INET et PF_INET ?", o: ["A) Aucune en pratique", "B) AF=Address Family, PF=Protocol Family", "C) AF pour TCP, PF pour UDP", "D) PF est obsolète"], c: 1, exp: "Historiquement : AF pour les adresses, PF pour les protocoles. En pratique, ils ont la même valeur sur 99% des systèmes (Linux/BSD).", trap: "Utilisez AF_INET pour être sûr.", concept: "Subtilité historique." },
    { q: "14. Si recv() retourne 0, cela signifie :", o: ["A) Qu'il n'y a rien à lire pour l'instant", "B) Que la connexion a été fermée proprement par l'autre côté (FIN)", "C) Une erreur grave", "D) Que le buffer est plein"], c: 1, exp: "C'est LE signe que le client a fait un close(). Si c'était juste 'pas de données', ça bloquerait (ou -1 EWOULDBLOCK si non-bloquant).", trap: "0 n'est pas une erreur, c'est une fin de fichier (EOF).", concept: "Détection de déconnexion." },
    { q: "15. Le paramètre 'backlog' dans listen(sock, backlog) définit :", o: ["A) Le nombre max de clients connectés", "B) La taille de la file d'attente des connexions EN ATTENTE d'accept()", "C) Le délai avant timeout", "D) La mémoire tampon"], c: 1, exp: "C'est la taille de la salle d'attente. Si elle est pleine, les nouveaux arrivants reçoivent 'Connection Refused' SANS que le serveur le sache.", trap: "Ce n'est PAS le nombre max de threads ou de clients simultanés traités !", concept: "File d'attente TCP." },
    { q: "16. Pourquoi utilise-t-on memset() ou bzero() sur struct sockaddr_in ?", o: ["A) Pour des raisons de sécurité", "B) Pour mettre le padding (sin_zero) à 0", "C) C'est facultatif", "D) Pour effacer l'IP précédente"], c: 1, exp: "La structure doit avoir une taille fixe. Les champs inutilisés (sin_zero) DOIVENT être à 0 pour être compatibles avec la structure sockaddr générique.", trap: "", concept: "Initialisation propre." },
    { q: "17. gethostbyname() renvoie un pointeur vers :", o: ["A) Un char*", "B) Une struct hostent (statique)", "C) Un int", "D) Une struct sockaddr"], c: 1, exp: "Attention ! Elle renvoie souvent un pointeur vers une zone mémoire STATIQUE interne. Les appels successifs écrasent le résultat précédent !", trap: "Non thread-safe par défaut.", concept: "Zone statique partagée." },
    { q: "18. Que se passe-t-il si un processus fils (fork) ferme le socket d'écoute (celui du père) ?", o: ["A) Le serveur s'arrête", "B) Rien, le père a toujours sa copie", "C) Erreur mémoire", "D) Le fils crash"], c: 1, exp: "fork() copie les descripteurs. Le fils ferme SA copie car il n'en a pas besoin. Le compteur de référence du socket diminue de 1 mais reste > 0 tant que le père l'a.", trap: "Chacun doit fermer ce qu'il n'utilise pas.", concept: "Gestion des ressources multi-processus." },
    { q: "19. Dans un fork(), que retourne la fonction au processus PÈRE ?", o: ["A) 0", "B) Le PID du fils", "C) -1", "D) 1"], c: 1, exp: "Le père reçoit le PID du fils (pour pouvoir le gérer/wait). Le fils reçoit 0 (pour savoir qu'il est le fils).", trap: "", concept: "Dichotomie parent/enfant." },
    { q: "20. Le signal SIGCHLD est utile pour :", o: ["A) Tuer le serveur", "B) Savoir qu'un fils est mort et éviter les zombies (wait)", "C) Redémarrer le réseau", "D) Rien"], c: 1, exp: "Quand un fils termine, il devient 'zombie' jusqu'à ce que le père lise son code de retour. SIGCHLD prévient le père qu'il faut faire le ménage.", trap: "Ignorer SIGCHLD remplit la table des processus de zombies.", concept: "Processus Zombie." },
    { q: "21. gethostname() sert à :", o: ["A) Obtenir l'IP d'un site", "B) Obtenir le nom (string) de la machine locale", "C) Obtenir le nom de l'utilisateur", "D) Obtenir le nom du routeur"], c: 1, exp: "Retourne le nom d'hôte (ex: 'mon-pc-linux'). On l'utilise ensuite avec gethostbyname pour avoir son IP.", trap: "", concept: "Identification locale." },
    { q: "22. L'adresse 127.0.0.1 est définie comme :", o: ["A) Une adresse routable", "B) Loopback (Boucle locale)", "C) Broadcast", "D) Multicast"], c: 1, exp: "Les paquets envoyés ici ne quittent JAMAIS la carte réseau. Ils redescendent directement dans la couche IP vers les processus locaux.", trap: "", concept: "Test local." },
    { q: "23. Si j'écris (write) sur un socket fermé par l'autre bout (RST), que se passe-t-il ?", o: ["A) write retourne -1 (EPIPE) et signal SIGPIPE", "B) Rien", "C) Le programme plante silencieusement", "D) write retourne 0"], c: 0, exp: "C'est violent : le noyau envoie le signal SIGPIPE qui TUE le processus par défaut si on ne l'intercepte pas !", trap: "Toujours gérer SIGPIPE dans un serveur !", concept: "Broken pipe." },
    { q: "24. htons(0) dans un bind() signifie :", o: ["A) Port 0", "B) Port aléatoire libre (alloué par le système)", "C) Erreur", "D) Port réservé root"], c: 1, exp: "C'est la demande d'allocation dynamique (ephemeral port). Le système choisit un port libre > 1024.", trap: "Le port 0 n'existe pas vraiment en tant que tel.", concept: "Allocation dynamique." },
    { q: "25. La fonction perror() affiche :", o: ["A) Juste 'Erreur'", "B) Le message associé à la valeur courante de errno", "C) Le contenu du buffer", "D) L'IP"], c: 1, exp: "Elle affiche votre message personnalisé suivi de la description textuelle de l'erreur système (ex: 'Bind failed: Address already in use').", trap: "", concept: "Debug indispensable." },
    { q: "26. Quelle famille de protocole pour les sockets UNIX (fichiers locaux) ?", o: ["A) AF_INET", "B) AF_UNIX", "C) AF_IPX", "D) AF_NETLINK"], c: 1, exp: "AF_UNIX permet la communication performante entre processus sur LA MÊME machine via un fichier socket.", trap: "", concept: "Hors réseau." },
    { q: "27. Un serveur Iteratif (sans fork/thread) :", o: ["A) Peut gérer 1000 clients en même temps", "B) Ne gère qu'un client à la fois (les autres attendent)", "C) Est plus rapide", "D) Est impossible"], c: 1, exp: "Il traite une requête complète avant de faire accept() pour la suivante. Les autres poireautent dans la file 'backlog'.", trap: "", concept: "Modèle simple vs Concurrent." },
    { q: "28. La commande 'netstat -tap' sous Linux permet de :", o: ["A) Voir les connexions TCP et les PID des programmes", "B) Voir les fichiers", "C) Voir l'historique web", "D) Tester la carte son"], c: 1, exp: "t=TCP, a=All, p=Program/PID. Très utile pour voir qui écoute sur quel port.", trap: "", concept: "Diagnostic serveur." },
    { q: "29. Les 'Raw Sockets' (SOCK_RAW) permettent de :", o: ["A) Manger du poisson cru", "B) Manipuler manuellement les en-têtes IP (créer ses propres paquets)", "C) Aller plus vite", "D) Utiliser TCP sans IP"], c: 1, exp: "Réservé au root. Permet de forger des paquets (Ping, Nmap, attaques spoofing...).", trap: "", concept: "Bas niveau." },
    { q: "30. Le Flag MSG_PEEK dans recv() permet de :", o: ["A) Lire les données sans les enlever du tampon", "B) Lire et effacer", "C) Lire seulement 1 octet", "D) Bloquer"], c: 0, exp: "Permet de 'jeter un coup d'oeil' aux données qui arrivent pour voir ce que c'est, avant de les lire vraiment plus tard.", trap: "", concept: "Prévisualisation." }
];

// ============================================
// CCNA 2 SRWE v7 QCM - 50 Questions Faciles
// ============================================

const qcmSRWE = [
    // === VLAN / Trunk / Inter-VLAN (Q1-10) ===
    { q: "1. Quel VLAN est le VLAN par défaut sur un switch Cisco ?", o: ["A) 0", "B) 1", "C) 99", "D) 100"], c: 1, exp: "Le VLAN 1 est le VLAN natif par défaut sur tous les switches Cisco. Par défaut, tous les ports appartiennent au VLAN 1.", trap: "Le VLAN 0 n'existe pas en standard Cisco.", concept: "VLAN par défaut." },
    { q: "2. Quel type de port relie typiquement deux commutateurs pour transporter plusieurs VLAN ?", o: ["A) Access", "B) Trunk", "C) Routed port", "D) Loopback"], c: 1, exp: "Un port Trunk transporte le trafic de plusieurs VLANs avec des tags 802.1Q. Les ports Access n'appartiennent qu'à un seul VLAN.", trap: "Un port Access ne peut transporter qu'un seul VLAN.", concept: "Trunk 802.1Q." },
    { q: "3. Sur un trunk 802.1Q, où va le trafic non tagué ?", o: ["A) VLAN de gestion", "B) VLAN natif", "C) VLAN 1 toujours", "D) VLAN 0"], c: 1, exp: "Le trafic non tagué est envoyé au VLAN natif. Par défaut c'est le VLAN 1, mais on peut le changer.", trap: "Le VLAN natif n'est pas forcément le VLAN 1 si on l'a modifié.", concept: "Native VLAN." },
    { q: "4. Pour permettre le routage inter-VLAN sur un switch L3, il faut activer :", o: ["A) spanning-tree portfast", "B) ip routing", "C) vtp mode server", "D) dhcp snooping"], c: 1, exp: "La commande 'ip routing' active le routage IP sur un switch multicouche (Layer 3 switch).", trap: "Sans 'ip routing', le switch ne route pas entre les VLANs.", concept: "Switch Layer 3." },
    { q: "5. Une interface SVI sert principalement à :", o: ["A) relier 2 routeurs", "B) donner une IP de management / passerelle VLAN", "C) créer un trunk", "D) activer NAT"], c: 1, exp: "SVI = Switched Virtual Interface. Elle donne une adresse IP au VLAN pour le management ou comme passerelle.", trap: "Une SVI n'est pas un port physique.", concept: "Interface VLAN." },
    { q: "6. Sur un 'router-on-a-stick', qu'utilise-t-on pour séparer les VLANs ?", o: ["A) Des ACL", "B) Des sous-interfaces", "C) Des routes statiques uniquement", "D) Un EtherChannel"], c: 1, exp: "Chaque sous-interface (ex: G0/0.10, G0/0.20) est associée à un VLAN avec encapsulation dot1q.", trap: "Les ACL filtrent le trafic mais ne séparent pas les VLANs.", concept: "Router-on-a-stick." },
    { q: "7. Quelle commande met un port en mode access ?", o: ["A) switchport mode access", "B) switchport trunk encapsulation dot1q", "C) ip address …", "D) no shutdown"], c: 0, exp: "La commande 'switchport mode access' configure le port pour un seul VLAN.", trap: "'no shutdown' active le port mais ne change pas son mode.", concept: "Configuration Access." },
    { q: "8. Quelle commande assigne un port access au VLAN 20 ?", o: ["A) vlan 20", "B) switchport access vlan 20", "C) interface vlan 20", "D) encapsulation dot1q 20"], c: 1, exp: "'switchport access vlan 20' assigne le port au VLAN 20. 'vlan 20' crée le VLAN, 'interface vlan 20' crée la SVI.", trap: "'vlan 20' en mode global crée le VLAN mais n'assigne pas le port.", concept: "Assignation de port." },
    { q: "9. Si deux switches doivent partager automatiquement les infos VLAN via VTP, ils doivent avoir le même :", o: ["A) hostname", "B) domain VTP", "C) banner", "D) motd"], c: 1, exp: "Les switches VTP doivent appartenir au même domaine VTP pour synchroniser leurs VLANs.", trap: "Le hostname n'a aucun impact sur VTP.", concept: "VTP Domain." },
    { q: "10. Quels modes VTP permettent de créer/modifier/supprimer des VLAN sur le switch local ? (B et C)", o: ["A) Client", "B) Serveur", "C) Transparent", "D) Off"], c: 1, exp: "Serveur (Bonne réponse dans le contexte QCM) permet toutes les opérations VLAN. Transparent aussi localement mais ne propage pas.", trap: "Client ne peut pas modifier les VLANs, il reçoit seulement.", concept: "Modes VTP." },

    // === Table MAC / Commutation (Q11-14) ===
    { q: "11. Un switch remplit sa table MAC à partir de :", o: ["A) l'IP source", "B) la MAC source", "C) la MAC destination", "D) le VLAN natif seulement"], c: 1, exp: "Le switch apprend les adresses MAC sources des trames reçues et les associe au port d'entrée.", trap: "La MAC destination sert à décider où envoyer, pas à apprendre.", concept: "Apprentissage MAC." },
    { q: "12. Si la table MAC est vide et un PC envoie une trame unicast inconnue, le switch :", o: ["A) la supprime", "B) l'envoie en broadcast dans le VLAN", "C) l'envoie seulement au trunk", "D) l'envoie au routeur"], c: 1, exp: "C'est le 'flooding' : la trame est envoyée sur tous les ports du VLAN sauf celui d'origine.", trap: "Le switch ne supprime pas les trames à destination inconnue.", concept: "Flooding (Unknown Unicast)." },
    { q: "13. À quoi sert principalement 'show interfaces' sur un switch ?", o: ["A) Voir les routes", "B) Voir l'état/statistiques des interfaces", "C) Voir les VLAN", "D) Voir l'OSPF"], c: 1, exp: "'show interfaces' affiche l'état (up/down), les statistiques, les erreurs sur chaque interface.", trap: "'show vlan brief' sert à voir les VLANs.", concept: "Commande show interfaces." },
    { q: "14. Une 'tempête de broadcast' arrive surtout quand :", o: ["A) il n'y a pas de trunk", "B) il y a une boucle L2 sans STP", "C) il y a trop de VLAN", "D) il y a OSPF"], c: 1, exp: "Sans STP, les boucles de niveau 2 génèrent des tempêtes de broadcast infinies.", trap: "Le nombre de VLANs n'est pas la cause.", concept: "Broadcast Storm." },

    // === STP (Spanning Tree) (Q15-18) ===
    { q: "15. STP sert à :", o: ["A) accélérer le routage", "B) éviter les boucles de couche 2", "C) chiffrer le Wi-Fi", "D) attribuer des IP"], c: 1, exp: "STP (Spanning Tree Protocol) bloque certains ports pour éliminer les boucles dans un réseau redondant.", trap: "STP n'a rien à voir avec le routage (couche 3).", concept: "Prévention des boucles." },
    { q: "16. Le 'root bridge' STP est choisi selon :", o: ["A) plus grand MAC", "B) plus petit Bridge ID (priorité + MAC)", "C) plus grand débit", "D) plus petit VLAN"], c: 1, exp: "Le switch avec le plus petit Bridge ID (priority + MAC address) devient racine.", trap: "C'est le PLUS PETIT, pas le plus grand Bridge ID.", concept: "Élection Root Bridge." },
    { q: "17. Quel état STP bloque le trafic utilisateur ?", o: ["A) Forwarding", "B) Learning", "C) Blocking", "D) Listening"], c: 2, exp: "En état Blocking, le port ne transmet ni ne reçoit de trafic utilisateur (seulement les BPDU).", trap: "Learning apprend les MAC mais ne transmet pas encore.", concept: "États STP." },
    { q: "18. PortFast est recommandé sur :", o: ["A) liaisons entre switches", "B) ports reliés à des hôtes", "C) trunks uniquement", "D) interfaces série"], c: 1, exp: "PortFast fait passer directement le port en Forwarding, idéal pour les PC/imprimantes.", trap: "Activer PortFast sur un port vers un switch peut causer des boucles !", concept: "PortFast." },

    // === EtherChannel (Q19-21) ===
    { q: "19. EtherChannel sert à :", o: ["A) doubler les VLAN", "B) agréger plusieurs liens physiques", "C) remplacer STP", "D) faire du NAT"], c: 1, exp: "EtherChannel combine plusieurs ports physiques en un lien logique plus rapide et redondant.", trap: "EtherChannel ne remplace pas STP, ils coexistent.", concept: "Agrégation de liens." },
    { q: "20. Si EtherChannel est mal configuré entre deux switches, risque principal :", o: ["A) perte d'adresses IP", "B) STP peut bloquer / liens incohérents", "C) Wi-Fi instable", "D) DNS cassé"], c: 1, exp: "Une mauvaise configuration peut créer des boucles que STP bloquera, ou des liens incohérents.", trap: "DNS et WiFi n'ont aucun lien avec EtherChannel.", concept: "Dépannage EtherChannel." },
    { q: "21. LACP est un protocole EtherChannel standard :", o: ["A) Vrai", "B) Faux"], c: 0, exp: "LACP (Link Aggregation Control Protocol) est le standard IEEE 802.3ad. PAgP est propriétaire Cisco.", trap: "PAgP n'est PAS le standard, c'est Cisco uniquement.", concept: "LACP vs PAgP." },

    // === Routage (statique / par défaut) (Q22-26) ===
    { q: "22. Une route par défaut IPv4 utilise le réseau :", o: ["A) 255.255.255.255", "B) 0.0.0.0/0", "C) 127.0.0.0/8", "D) 169.254.0.0/16"], c: 1, exp: "0.0.0.0/0 correspond à 'toutes les destinations'. C'est la route de dernier recours.", trap: "127.0.0.0/8 est le loopback, 169.254.0.0/16 est APIPA.", concept: "Route par défaut." },
    { q: "23. Une route statique 'floating' est :", o: ["A) une route avec AD plus petite", "B) une route avec AD plus grande (secours)", "C) une route OSPF", "D) une route VLAN"], c: 1, exp: "Une floating static route a une AD plus élevée, elle n'est utilisée que si la route principale tombe.", trap: "OSPF est dynamique, pas statique.", concept: "Floating Static Route." },
    { q: "24. Pour spécifier le 'next-hop' en IPv4 dans une route statique, on écrit :", o: ["A) l'adresse MAC", "B) l'adresse IP du routeur suivant", "C) le VLAN natif", "D) le SSID"], c: 1, exp: "Le next-hop est l'adresse IP du routeur voisin vers lequel on envoie les paquets.", trap: "On ne spécifie jamais d'adresse MAC dans une route statique.", concept: "Next-hop IP." },
    { q: "25. En IPv6, une route par défaut s'écrit avec :", o: ["A) ::/0", "B) 0.0.0.0/0", "C) fe80::/10", "D) ff00::/8"], c: 0, exp: "::/0 est l'équivalent IPv6 de 0.0.0.0/0 en IPv4.", trap: "0.0.0.0/0 est IPv4 seulement, fe80 est link-local.", concept: "Route par défaut IPv6." },
    { q: "26. En IPv6, on peut mettre comme next-hop :", o: ["A) une adresse link-local (fe80::…)", "B) seulement une globale", "C) seulement une MAC", "D) un VLAN"], c: 0, exp: "Les adresses link-local sont souvent utilisées comme next-hop en IPv6 (avec l'interface de sortie).", trap: "Les adresses globales marchent aussi, mais link-local est courant.", concept: "Next-hop IPv6." },

    // === OSPF (bases) (Q27-29) ===
    { q: "27. OSPF est un protocole :", o: ["A) de couche 1", "B) de routage dynamique", "C) de VLAN", "D) de Wi-Fi"], c: 1, exp: "OSPF (Open Shortest Path First) est un protocole de routage dynamique à état de liens.", trap: "OSPF est couche 3 (réseau), pas couche 1.", concept: "Protocoles de routage." },
    { q: "28. OSPF choisit un chemin selon :", o: ["A) la distance administrative", "B) le coût (cost)", "C) l'adresse MAC", "D) le SSID"], c: 1, exp: "OSPF utilise le cost (basé sur la bande passante) pour calculer le meilleur chemin.", trap: "La distance administrative sert à choisir entre différents protocoles.", concept: "Métrique OSPF." },
    { q: "29. Quel est l'objectif de la distance administrative (AD) ?", o: ["A) mesurer la bande passante", "B) choisir la source de route la plus fiable", "C) taguer un VLAN", "D) chiffrer"], c: 1, exp: "L'AD détermine quel protocole de routage est préféré quand plusieurs donnent une route vers la même destination.", trap: "L'AD n'a rien à voir avec les VLANs.", concept: "Administrative Distance." },

    // === DHCP (Q30-32) ===
    { q: "30. DHCP sert à fournir automatiquement :", o: ["A) des MAC", "B) des IP + masque + passerelle, etc.", "C) des VLAN", "D) des routes statiques"], c: 1, exp: "DHCP attribue IP, masque, passerelle par défaut, serveur DNS automatiquement aux clients.", trap: "L'adresse MAC est fixée dans le matériel, pas donnée par DHCP.", concept: "Configuration automatique IP." },
    { q: "31. Quelle commande sur une interface de routeur aide un sous-réseau à contacter un serveur DHCP distant ?", o: ["A) ip helper-address", "B) ip route", "C) no shutdown", "D) switchport trunk allowed"], c: 0, exp: "'ip helper-address' relaye les requêtes DHCP broadcast vers un serveur DHCP sur un autre réseau.", trap: "'ip route' crée une route statique, pas un relais DHCP.", concept: "DHCP Relay." },
    { q: "32. Le serveur DNS donné par DHCP sert à :", o: ["A) traduire noms ↔ IP", "B) chiffrer le trafic", "C) choisir le root bridge", "D) créer des VLAN"], c: 0, exp: "Le DNS résout les noms de domaine (ex: google.com) en adresses IP.", trap: "DNS n'a rien à voir avec STP ou les VLANs.", concept: "Résolution DNS." },

    // === Première passerelle / Redondance (Q33-34) ===
    { q: "33. La 'passerelle par défaut' d'un PC est :", o: ["A) le switch", "B) l'IP du routeur (ou SVI L3) du réseau local", "C) le DNS", "D) le serveur DHCP"], c: 1, exp: "La passerelle par défaut est l'adresse IP du routeur qui permet de sortir du réseau local.", trap: "Le switch (L2 pur) n'a pas d'IP pour router.", concept: "Default Gateway." },
    { q: "34. Dans un protocole de passerelle virtuelle (ex: HSRP), les hôtes envoient les trames vers :", o: ["A) MAC du routeur standby", "B) MAC virtuelle", "C) MAC du switch", "D) MAC broadcast"], c: 1, exp: "HSRP utilise une adresse MAC virtuelle partagée par les routeurs actif et standby.", trap: "Le routeur standby ne reçoit le trafic que si l'actif tombe.", concept: "FHRP et MAC virtuelle." },

    // === WLAN (bases) (Q35-38) ===
    { q: "35. Un contrôleur WLAN (WLC) sert surtout à :", o: ["A) gérer centralement plusieurs AP", "B) remplacer le routeur", "C) créer des VLAN", "D) faire du NAT"], c: 0, exp: "Le WLC centralise la gestion, configuration et sécurité de tous les points d'accès.", trap: "Le WLC ne remplace pas le routeur, il gère les AP.", concept: "Wireless LAN Controller." },
    { q: "36. Le SSID est :", o: ["A) l'adresse MAC", "B) le nom du réseau Wi-Fi", "C) le mot de passe", "D) le canal"], c: 1, exp: "SSID = Service Set Identifier, c'est le nom visible du réseau sans fil.", trap: "Le SSID n'est pas le mot de passe (PSK).", concept: "SSID." },
    { q: "37. WPA2/WPA3 servent à :", o: ["A) la segmentation VLAN", "B) la sécurité/chiffrement Wi-Fi", "C) le routage OSPF", "D) STP"], c: 1, exp: "WPA2 et WPA3 fournissent l'authentification et le chiffrement pour sécuriser le WiFi.", trap: "WEP est obsolète, WPA2/3 sont les standards actuels.", concept: "Sécurité WiFi." },
    { q: "38. La bande 5 GHz est généralement :", o: ["A) plus sujette aux interférences", "B) moins de canaux, plus lente", "C) plus rapide, portée un peu moindre", "D) uniquement pour Bluetooth"], c: 2, exp: "5 GHz offre plus de débit et moins d'interférences mais une portée légèrement réduite par rapport à 2.4 GHz.", trap: "2.4 GHz a plus d'interférences (micro-ondes, Bluetooth).", concept: "Bandes WiFi." },

    // === Commandes 'show' utiles (Q39-43) ===
    { q: "39. Quelle commande affiche la table MAC sur un switch ?", o: ["A) show ip route", "B) show mac address-table", "C) show vlan brief", "D) show cdp neighbors"], c: 1, exp: "'show mac address-table' affiche les associations MAC ↔ Port ↔ VLAN.", trap: "'show ip route' est pour le routeur, pas le switch L2.", concept: "Table MAC." },
    { q: "40. Quelle commande affiche les VLAN et les ports associés ?", o: ["A) show vlan brief", "B) show spanning-tree", "C) show ip interface brief", "D) show etherchannel summary"], c: 0, exp: "'show vlan brief' liste tous les VLANs avec leurs ports membres.", trap: "'show spanning-tree' montre l'état STP, pas l'appartenance aux VLANs.", concept: "Visualisation VLAN." },
    { q: "41. Pour vérifier l'état d'un trunk sur un switch :", o: ["A) show interfaces trunk", "B) show ip route", "C) show arp", "D) show dhcp binding"], c: 0, exp: "'show interfaces trunk' montre les ports trunk, le mode, et les VLANs autorisés.", trap: "'show arp' concerne la table ARP, pas les trunks.", concept: "Vérification Trunk." },
    { q: "42. Pour voir quel switch est root STP :", o: ["A) show spanning-tree", "B) show running-config", "C) show vtp status", "D) show version"], c: 0, exp: "'show spanning-tree' affiche le root bridge, les ports root/designated/blocked.", trap: "'show vtp status' concerne VTP, pas STP.", concept: "Diagnostic STP." },
    { q: "43. Pour vérifier EtherChannel :", o: ["A) show ip protocols", "B) show etherchannel summary", "C) show vlan", "D) show ipv6 neighbors"], c: 1, exp: "'show etherchannel summary' liste les port-channels et l'état de chaque membre.", trap: "'show ip protocols' concerne OSPF/EIGRP, pas EtherChannel.", concept: "Diagnostic EtherChannel." },

    // === IPv6 (rappels simples) (Q44-46) ===
    { q: "44. fe80::/10 correspond à :", o: ["A) multicast", "B) link-local", "C) loopback", "D) globale routable"], c: 1, exp: "Les adresses fe80:: sont link-local, utilisées pour la communication sur le même segment.", trap: "Les adresses globales commencent typiquement par 2000::/3.", concept: "Adresses link-local." },
    { q: "45. ff00::/8 correspond à :", o: ["A) multicast", "B) link-local", "C) anycast", "D) privée"], c: 0, exp: "Toutes les adresses commençant par ff sont des adresses multicast en IPv6.", trap: "fe80 est link-local, pas multicast.", concept: "Multicast IPv6." },
    { q: "46. L'adresse loopback IPv6 est :", o: ["A) ::", "B) ::1", "C) 127.0.0.1", "D) fe80::1"], c: 1, exp: "::1 est l'adresse loopback IPv6, équivalent de 127.0.0.1 en IPv4.", trap: ":: représente une adresse non spécifiée (équivalent 0.0.0.0).", concept: "Loopback IPv6." },

    // === Sécurité L2 (ultra-basique) (Q47-48) ===
    { q: "47. Une bonne pratique sur ports access inutilisés :", o: ["A) les laisser en trunk", "B) les désactiver (shutdown)", "C) activer ip routing", "D) mettre VLAN natif 1"], c: 1, exp: "Désactiver (shutdown) les ports inutilisés empêche les connexions non autorisées.", trap: "Laisser un port en trunk sans l'utiliser est un risque de sécurité.", concept: "Durcissement du switch." },
    { q: "48. Pourquoi séparer les utilisateurs en VLAN ?", o: ["A) augmenter la taille des broadcasts", "B) segmentation + réduction du broadcast + sécurité", "C) supprimer STP", "D) remplacer le routeur"], c: 1, exp: "Les VLANs segmentent le réseau, réduisent le domaine de broadcast et améliorent la sécurité.", trap: "Les VLANs n'augmentent PAS les broadcasts, ils les réduisent.", concept: "Avantages des VLANs." },

    // === Dépannage 'facile' (Q49-50) ===
    { q: "49. Si deux VLAN ne communiquent pas via router-on-a-stick, un problème fréquent est :", o: ["A) encapsulation dot1q absente/mauvaise", "B) hostname incorrect", "C) manque de RAM", "D) trop de DNS"], c: 0, exp: "L'encapsulation dot1q sur les sous-interfaces doit correspondre aux VLANs du trunk.", trap: "Le hostname n'affecte pas le routage inter-VLAN.", concept: "Dépannage Inter-VLAN." },
    { q: "50. Si un PC n'a pas d'IP via DHCP, première vérification simple :", o: ["A) STP root", "B) câble/port up + bon VLAN + DHCP activé", "C) EtherChannel", "D) OSPF area"], c: 1, exp: "Vérifier d'abord la connectivité physique, l'appartenance au bon VLAN, et que le serveur DHCP répond.", trap: "OSPF et EtherChannel n'ont rien à voir avec DHCP client.", concept: "Dépannage DHCP." }
];

// ============================================
// EXAM FINAL 1 - QCM (exam-final1.pdf)
// ============================================

const qcmExamFinal1 = [
    // Couche Transport et Ports
    { q: "1. Quel type de renseignement l'en-tête de la couche 4 contient-il pour contribuer au transfert des données ?", o: ["A) Le numéro de port du service", "B) L'adresse logique de l'hôte", "C) L'adresse physique du périphérique", "D) L'identifiant de la connexion virtuelle"], c: 0, exp: "L'en-tête de couche 4 (Transport) contient les numéros de port source et destination pour identifier les services.", trap: "L'adresse IP est en couche 3, l'adresse MAC en couche 2.", concept: "4.1.5 Adressage de ports" },
    { q: "2. Quelle plage de numéros de port est réservée aux services couramment utilisés par les applications serveur ?", o: ["A) De 0 à 255", "B) De 0 à 1 023", "C) De 1 024 à 49 151", "D) De 49 152 à 65 535"], c: 1, exp: "Les ports 0-1023 sont les 'well-known ports' réservés aux services standards (HTTP:80, FTP:21, SSH:22...).", trap: "49152-65535 sont les ports dynamiques/éphémères.", concept: "4.1.5 Adressage de ports" },
    { q: "3. Laquelle des couches OSI offre des services de communication fiables et orientés connexion ?", o: ["A) La couche application", "B) La couche présentation", "C) La couche session", "D) La couche transport"], c: 3, exp: "La couche Transport (couche 4) avec TCP offre des services fiables et orientés connexion.", trap: "La couche réseau (3) n'est pas fiable, elle fait du best-effort.", concept: "4.1.4 TCP et UDP" },
    { q: "4. Quel numéro d'interface de connexion correspond à une requête de page Web (port destination) ?", o: ["A) 00-08-a3-b6-ce-46", "B) 198.133.219.25:80", "C) http://www.cisco.com", "D) 198.133.219.0/24"], c: 1, exp: "Une requête Web utilise le port 80 (HTTP). Le format IP:Port identifie le socket de destination.", trap: "L'adresse MAC et l'URL ne sont pas des numéros de port.", concept: "4.1.5 Adressage de ports" },

    // Topologie et réseaux
    { q: "5. Quelle topologie logique définit un réseau où tous les hôtes partagent le même support de transmission ?", o: ["A) Un réseau en étoile", "B) Un réseau en anneau", "C) Un réseau point à point", "D) Un réseau à accès multiple"], c: 3, exp: "Un réseau à accès multiple (comme Ethernet) permet à plusieurs hôtes de partager le même support.", trap: "Point à point ne connecte que 2 périphériques.", concept: "7.2.6 Topologie d'accès multiple" },
    { q: "6. Quel ensemble contient UNIQUEMENT des périphériques intermédiaires ?", o: ["A) Routeur, Switch, Point d'accès", "B) PC, Serveur, Imprimante", "C) Hub, Routeur, PC", "D) Serveur, Switch, Hub"], c: 0, exp: "Les périphériques intermédiaires relient les hôtes : routeurs, switches, hubs, points d'accès.", trap: "PC, serveurs et imprimantes sont des périphériques finaux.", concept: "2.1.5 Périphériques intermédiaires" },

    // Routage et adressage
    { q: "7. Un routeur reçoit un paquet destiné à l'adresse 192.168.1.4. La route est 'directement connectée'. Comment traite-t-il le paquet ?", o: ["A) Il abandonne le paquet", "B) Il transfère via l'interface connectée", "C) Il transfère à l'hôte de destination", "D) Il transfère au tronçon suivant"], c: 2, exp: "Si le réseau est directement connecté, le routeur peut envoyer directement à l'hôte de destination.", trap: "Le next-hop n'est utilisé que pour les réseaux non directement connectés.", concept: "5.3.7 Transfert de paquet" },
    { q: "8. Lors d'une communication entre deux réseaux, l'hôte A utilise quelle adresse MAC de destination pour envoyer à l'hôte B ?", o: ["A) MAC de l'hôte B", "B) MAC de la passerelle (routeur)", "C) MAC broadcast", "D) MAC du switch"], c: 1, exp: "Pour communiquer hors du réseau local, l'hôte envoie à la MAC du routeur (passerelle) qui forwarde.", trap: "La MAC destination n'est jamais celle de l'hôte distant sur un autre réseau.", concept: "7.4.1 Cheminement des données" },
    { q: "9. Un problème de routage survient sur votre interréseau. Quel périphérique doit être vérifié ?", o: ["A) Un point d'accès", "B) Un hôte", "C) Un concentrateur (hub)", "D) Un routeur"], c: 3, exp: "Le routeur est responsable du routage entre les réseaux. C'est lui qu'il faut vérifier en premier.", trap: "Un hub ou switch ne fait pas de routage (couche 2).", concept: "5.3.4 Route : chemin vers un réseau" },

    // Configuration IOS
    { q: "10. Quelle invite représente le mode approprié pour exécuter 'copy running-config startup-config' ?", o: ["A) Switch-6J>", "B) Switch-6J#", "C) Switch-6J(config)#", "D) Switch-6J(config-if)#"], c: 1, exp: "Cette commande s'exécute en mode d'exécution privilégié (prompt #).", trap: "Le mode (config)# est pour la configuration, pas pour sauvegarder.", concept: "11.3.2 Test de l'affectation des interfaces" },
    { q: "11. Quel type de mot de passe offre le niveau de sécurité maximal pour le mode privilégié ?", o: ["A) Un mot de passe de console", "B) Un mot de passe actif (enable password)", "C) Un mot de passe secret actif (enable secret)", "D) Un mot de passe vty"], c: 2, exp: "Le 'enable secret' est automatiquement chiffré en MD5, contrairement à 'enable password'.", trap: "enable password n'est PAS chiffré par défaut.", concept: "11.2.2 Mots de passe et bannières" },
    { q: "12. Quel type de mot de passe est automatiquement chiffré à sa création ?", o: ["A) Les mots de passe vty", "B) Les mots de passe console", "C) Les mots de passe actifs", "D) Les mots de passe secrets actifs"], c: 3, exp: "Seul le 'secret' (enable secret, username secret) est automatiquement chiffré en MD5.", trap: "Les autres nécessitent 'service password-encryption' pour être chiffrés.", concept: "11.2.2 Mots de passe et bannières" },
    { q: "13. Où le fichier de configuration initiale (startup-config) est-il stocké ?", o: ["A) En mémoire Flash", "B) En mémoire NVRAM", "C) En mémoire RAM", "D) En mémoire ROM"], c: 1, exp: "La NVRAM (Non-Volatile RAM) conserve la configuration de démarrage même après extinction.", trap: "La RAM contient la running-config, la Flash contient l'IOS.", concept: "11.1.2 Fichiers de configuration" },
    { q: "14. Quand l'interface série d'un routeur doit-elle être configurée avec 'clock rate' ?", o: ["A) Si l'interface fonctionne en DTE", "B) Si les compteurs ont été effacés", "C) Si l'équipement DTE est arrêté", "D) Si l'interface fonctionne en DCE"], c: 3, exp: "Le DCE (Data Circuit-terminating Equipment) fournit l'horloge, donc doit avoir 'clock rate' configuré.", trap: "Le DTE reçoit l'horloge du DCE, il ne la configure pas.", concept: "11.2.4 Configuration des interfaces" },
    { q: "15. 'line vty 0 3' configure combien de lignes Telnet ?", o: ["A) 3 lignes", "B) 4 lignes", "C) 0 lignes", "D) 1 ligne"], c: 1, exp: "Les lignes sont numérotées de 0 à 3, donc 4 lignes au total (0, 1, 2, 3).", trap: "C'est 0 à 3 inclus, pas 1 à 3.", concept: "11.2.2 Configuration VTY" },

    // Adresses IP et sous-réseaux
    { q: "16. Lesquelles sont des plages d'adresses IP privées ? (Choisissez la bonne combinaison)", o: ["A) 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16", "B) 127.0.0.0/8, 10.0.0.0/8, 169.254.0.0/16", "C) 200.100.50.0/24, 150.150.0.0/16", "D) 172.32.0.0/16, 192.169.0.0/16"], c: 0, exp: "RFC1918 définit : 10.0.0.0/8, 172.16.0.0/12 (172.16-31.x.x), 192.168.0.0/16.", trap: "127.x.x.x est loopback, 169.254.x.x est APIPA.", concept: "6.2.5 Adresses publiques et privées" },
    { q: "17. Quel masque de sous-réseau permet d'héberger 510 hôtes sur 172.30.0.0 ?", o: ["A) 255.255.248.0", "B) 255.255.252.0", "C) 255.255.254.0", "D) 255.255.255.0"], c: 2, exp: "/23 (255.255.254.0) donne 2^9 - 2 = 510 hôtes. /24 ne donne que 254 hôtes.", trap: "N'oubliez pas de soustraire 2 (réseau + broadcast).", concept: "6.5.1 Création de sous-réseaux" },
    { q: "18. Quel masque identifie toutes les adresses de 172.16.128.0 à 172.16.159.255 ?", o: ["A) 255.255.255.224", "B) 255.255.0.0", "C) 255.255.192.0", "D) 255.255.224.0"], c: 3, exp: "La plage 128-159 = 32 valeurs = /11 dans le 3ème octet, donc 255.255.224.0 (/19).", trap: "Calculez : 160-128=32, log2(32)=5 bits hôte dans le 3ème octet.", concept: "6.5.1 Création de sous-réseaux" },

    // Support et câblage
    { q: "19. Quels types de support NE sont PAS affectés par les perturbations électromagnétiques ?", o: ["A) 10Base-T et 100Base-TX", "B) 100Base-FX et 1000Base-LX", "C) 10Base-2 et 10Base-5", "D) Tous les câbles cuivre"], c: 1, exp: "FX et LX sont des standards fibre optique. La fibre est immunisée contre les EMI.", trap: "10Base-T/2/5 et 100Base-TX utilisent du cuivre (sensible aux EMI).", concept: "8.3.6 Supports en fibre optique" },

    // CSMA/CD
    { q: "20. Quelles sont les caractéristiques de CSMA/CD ? (Meilleure réponse)", o: ["A) Attribution de priorité de transmission", "B) Utilisation d'un jeton électronique", "C) Écoute du support + reprise après délai aléatoire", "D) Garantie de non-collision"], c: 2, exp: "CSMA/CD : écoute avant transmission, détection de collision, attente d'un délai aléatoire (backoff).", trap: "Le jeton est utilisé par Token Ring, pas CSMA/CD.", concept: "9.4.2 CSMA/CD : processus" },

    // NAT et services
    { q: "21. De quelle fonction un routeur a-t-il besoin pour autoriser l'accès Internet à un réseau privé ?", o: ["A) La traduction d'adresses (NAT)", "B) Le service DHCP", "C) Le protocole FTP", "D) Un serveur Web"], c: 0, exp: "NAT traduit les adresses IP privées en adresses publiques pour l'accès Internet.", trap: "DHCP attribue des IP mais ne permet pas l'accès Internet seul.", concept: "6.2.5 Adresses publiques et privées" },

    // Switching
    { q: "22. Si l'ordinateur A envoie une trame à l'ordinateur D via un switch, qui reçoit la trame ?", o: ["A) L'ordinateur D uniquement", "B) Les ordinateurs A et D uniquement", "C) Tous les ordinateurs du VLAN", "D) Tous les ordinateurs"], c: 0, exp: "Un switch apprend les adresses MAC et envoie la trame uniquement vers le port de destination.", trap: "Un hub enverrait à tous. Un switch est plus intelligent.", concept: "9.6.3 Commutateurs : réacheminement sélectif" },

    // Test réseau
    { q: "23. Quelle commande ping tester pour vérifier que l'interface du routeur (passerelle) fonctionne ?", o: ["A) ping 127.0.0.1", "B) ping de l'IP de la passerelle", "C) ping du DNS", "D) ping d'un site web"], c: 1, exp: "Pinger l'IP de la passerelle (interface du routeur) confirme la connectivité locale.", trap: "127.0.0.1 teste uniquement la pile TCP/IP locale.", concept: "11.3.4 Test de la passerelle" },
    { q: "24. Quelle méthode permet de vérifier qu'une carte réseau fonctionne correctement ?", o: ["A) Télécharger un outil du fabricant", "B) Utiliser ping 127.0.0.1", "C) Utiliser traceroute", "D) Utiliser FTP"], c: 1, exp: "ping 127.0.0.1 (loopback) teste la pile TCP/IP et la carte réseau de la machine locale.", trap: "Traceroute teste le chemin vers une destination, pas la carte locale.", concept: "11.3.3 Test de l'interface locale" },

    // Protocoles email
    { q: "25. Quel est l'ordre correct des composants pour l'envoi d'email ?", o: ["A) MUA → SMTP → MTA → SMTP → MTA → MDA → POP → MUA", "B) MUA → POP → MTA → SMTP → MTA → MDA → SMTP → MUA", "C) MDA → SMTP → MTA → MUA", "D) MUA → MDA → POP → MTA"], c: 0, exp: "Envoi : MUA utilise SMTP vers MTA, qui transfère via SMTP vers MTA destinataire, puis MDA, puis POP vers MUA.", trap: "POP est utilisé pour RECEVOIR, pas pour envoyer.", concept: "3.3.3 Services de messagerie SMTP/POP" },

    // Domaines
    { q: "26. Combien de sous-réseaux faut-il pour une topologie avec 3 réseaux LAN interconnectés ?", o: ["A) 1", "B) 3", "C) 4", "D) 5"], c: 1, exp: "Chaque LAN nécessite un sous-réseau. 3 LAN = 3 sous-réseaux minimum.", trap: "N'oubliez pas les liens WAN si mentionnés dans le schéma.", concept: "10.3.2 Combien de réseaux ?" },
    { q: "27. Pour créer la configuration initiale d'un routeur, de quoi un technicien a-t-il besoin ?", o: ["A) Un client FTP", "B) Un client Telnet", "C) Un programme d'émulation de terminal", "D) Un navigateur Web"], c: 2, exp: "La configuration initiale se fait via le port console avec un émulateur de terminal (PuTTY, TeraTerm).", trap: "Telnet nécessite une IP déjà configurée sur le routeur.", concept: "10.5.2 Connexion de gestion" },
    { q: "28. Que peut-on déduire d'une topologie avec un switch et plusieurs PC ?", o: ["A) Plusieurs domaines de broadcast", "B) Un seul domaine de broadcast", "C) Pas de domaine de collision", "D) Pas besoin de VLAN"], c: 1, exp: "Un switch sans VLAN = un seul domaine de broadcast. Mais il sépare les domaines de collision par port.", trap: "Chaque port du switch est un domaine de collision séparé.", concept: "10.1.1 Périphériques de réseau local" },
    { q: "29. Quelle commande résout un problème d'interface FastEthernet administrativement désactivée ?", o: ["A) ip address sur FastEthernet 0/0", "B) no shutdown sur l'interface", "C) clock rate sur Serial", "D) description sur l'interface"], c: 1, exp: "'no shutdown' active une interface qui est administrativement down.", trap: "clock rate ne s'applique qu'aux interfaces série DCE.", concept: "11.3.2 Test de l'affectation des interfaces" },
    { q: "30. Quelles caractérisent TCP ? (Meilleure réponse)", o: ["A) Non orienté connexion, rapide", "B) Orienté connexion, fenêtrage, séquençage", "C) Utilise les broadcasts", "D) Ne garantit pas la livraison"], c: 1, exp: "TCP est orienté connexion, utilise le fenêtrage (windowing) et le séquençage pour la fiabilité.", trap: "UDP est non orienté connexion et ne garantit pas la livraison.", concept: "4.1.4 TCP et UDP" }
];

