// ============================================
// CCNA Exam Prep - Données structurées
// Basé sur RT01→RT08 (Marouane SEBGUI)
// ============================================

// === CHAPITRES ===
const chapters = [
    {
        id: "RT01",
        title: "Concevoir un réseau",
        summary: "Architecture réseau hiérarchique à 3 couches : Accès, Distribution, Cœur.",
        keyPoints: [
            "Couche Accès : interface utilisateur, PoE, port security",
            "Couche Distribution : ACLs, redondance, couche 3",
            "Couche Cœur : très haut débit, interconnexion",
            "Paramètres clés : topologie, diamètre, évolutivité, fiabilité, sécurité"
        ],
        confusions: ["Topologie logique vs physique"],
        traps: ["Sous-dimensionner la couche cœur"]
    },
    {
        id: "RT02",
        title: "Concepts de commutation",
        summary: "Fonctionnement L2 : table MAC (CAM), ARP, trame Ethernet, CSMA/CD.",
        keyPoints: [
            "Table MAC (CAM) : correspondance MAC ↔ Port",
            "ARP : résolution IP → MAC via broadcast",
            "Trame 802.3 : MAC dest + MAC src + Type + Data + FCS",
            "CSMA/CD : écoute, détection collision, backoff"
        ],
        confusions: ["Domaine de collision vs domaine de broadcast"],
        traps: ["Croire qu'un switch bloque les broadcast (NON!)"]
    },
    {
        id: "RT03",
        title: "VLAN",
        summary: "Segmentation L2 logique via VLANs, trunking 802.1Q, VLAN natif.",
        keyPoints: [
            "VLAN = 1 domaine de broadcast logique",
            "Port Access = 1 VLAN, Port Trunk = plusieurs VLANs",
            "802.1Q ajoute 4 octets (tag) avec VLAN ID sur 12 bits",
            "VLAN natif = trafic non-taggé sur trunk"
        ],
        confusions: ["Access Port vs Trunk Port", "VLAN Natif vs VLAN Management"],
        traps: ["Supprimer VLAN sans réaffecter ports", "VLAN natif différent = fuite"]
    },
    {
        id: "RT04",
        title: "Routage Inter-VLAN",
        summary: "3 méthodes : routeur traditionnel, router-on-a-stick, switch L3 (SVI).",
        keyPoints: [
            "Router-on-a-stick : sous-interfaces sur 1 lien trunk",
            "Switch L3 : SVI (interface vlan X) + ip routing",
            "Port routé : no switchport + adresse IP directe",
            "SVI vs Sous-interface : switch L3 vs routeur"
        ],
        confusions: ["SVI vs Sous-interface", "Switch L3 vs Routeur"],
        traps: ["Oublier no shutdown sur SVI", "Ne pas activer ip routing"]
    },
    {
        id: "RT05",
        title: "Spanning Tree Protocol",
        summary: "Élimination des boucles L2 tout en conservant la redondance.",
        keyPoints: [
            "Root Bridge = plus petit Bridge ID (priorité + MAC)",
            "Port Racine = 1 par switch, chemin minimal vers root",
            "BPDU : messages STP envoyés toutes les 2s",
            "États : Blocking → Listening → Learning → Forwarding"
        ],
        confusions: ["Port Racine vs Port Désigné", "STP vs RSTP"],
        traps: ["PortFast sur lien inter-switch = boucle"]
    },
    {
        id: "RT06",
        title: "Link Aggregation (EtherChannel)",
        summary: "Agrégation de liens physiques en 1 lien logique pour débit + redondance.",
        keyPoints: [
            "Jusqu'à 8 liens physiques par EtherChannel",
            "LACP (IEEE 802.3ad) : Active/Passive",
            "PAgP (Cisco) : Desirable/Auto",
            "Prérequis : même speed, duplex, VLAN"
        ],
        confusions: ["LACP vs PAgP", "EtherChannel vs Trunk VLAN"],
        traps: ["Config mismatch = EtherChannel down"]
    },
    {
        id: "RT07",
        title: "FHRP",
        summary: "Redondance de passerelle : HSRP, VRRP, GLBP.",
        keyPoints: [
            "IP virtuelle = gateway des PCs",
            "HSRP (Cisco) : Active-Standby, MAC 0000.0C07.ACXX",
            "VRRP (IETF) : Master-Backup, MAC 00:00:5E:00:01:XX",
            "GLBP (Cisco) : Active-Active, load-balancing"
        ],
        confusions: ["HSRP vs VRRP", "Preemption activée vs désactivée"],
        traps: ["Groupe FHRP différent = pas de redondance"]
    },
    {
        id: "RT08",
        title: "Discovery Protocols",
        summary: "Découverte automatique de topologie : CDP (Cisco), LLDP (IEEE).",
        keyPoints: [
            "CDP : propriétaire Cisco, timer 60s, holdtime 180s",
            "LLDP : IEEE 802.1ab, timer 30s, holdtime 120s",
            "Commandes : show cdp/lldp neighbors [detail]",
            "LLDP-MED : extension pour VoIP, PoE"
        ],
        confusions: ["CDP vs LLDP"],
        traps: ["CDP/LLDP actifs = vulnérabilité sécurité"]
    }
];

// === QCM RT01 - Concevoir un réseau (20 questions) ===
const qcmRT01 = [
    { q: "Quelle couche du modèle hiérarchique gère l'interface avec l'utilisateur final ?", o: ["A) Couche Cœur", "B) Couche Distribution", "C) Couche Accès", "D) Couche Transport"], c: 2, exp: "La couche Accès est l'interface avec les terminaux utilisateurs.", trap: "Ne pas confondre avec la couche Transport OSI.", tags: ["hierarchie", "acces"], diff: 1, ref: "RT01, p.16" },
    { q: "Quelle couche implémente les ACLs et délimite les domaines de diffusion ?", o: ["A) Couche Accès", "B) Couche Distribution", "C) Couche Cœur", "D) Couche Physique"], c: 1, exp: "La couche Distribution applique les politiques de sécurité (ACLs) et sépare les zones.", tags: ["hierarchie", "distribution"], diff: 1, ref: "RT01, p.17" },
    { q: "Quel paramètre définit la distance maximale entre deux points du réseau ?", o: ["A) Évolutivité", "B) Diamètre", "C) Fiabilité", "D) Sécurité"], c: 1, exp: "Le diamètre est la distance maximale (en nombre de sauts ou km) du réseau.", tags: ["hierarchie"], diff: 1, ref: "RT01, p.7" },
    { q: "Quelle couche nécessite le très haut débit et l'interconnexion externe ?", o: ["A) Accès", "B) Distribution", "C) Cœur", "D) Toutes"], c: 2, exp: "La couche Cœur (Core) assure l'interconnexion à très haute vitesse.", tags: ["hierarchie", "coeur"], diff: 1, ref: "RT01, p.18" },
    { q: "Le PoE (Power over Ethernet) est typiquement déployé sur quelle couche ?", o: ["A) Cœur", "B) Distribution", "C) Accès", "D) Toutes les couches"], c: 2, exp: "Le PoE alimente les téléphones IP et APs, connectés à la couche Accès.", tags: ["hierarchie", "acces"], diff: 2, ref: "RT01, p.16" },
    { q: "Quel avantage principal offre l'architecture hiérarchique ?", o: ["A) Coût minimal", "B) Évolutivité et fiabilité", "C) Simplicité absolue", "D) Aucun routage"], c: 1, exp: "L'architecture hiérarchique permet l'évolutivité, la redondance et la QoS.", tags: ["hierarchie"], diff: 1, ref: "RT01, p.15" },
    { q: "La convergence des réseaux permet de réduire :", o: ["A) Le nombre d'utilisateurs", "B) Les coûts d'infrastructure", "C) La sécurité", "D) Le débit"], c: 1, exp: "La convergence (voix, données, vidéo) réduit les coûts d'infrastructure.", tags: ["hierarchie"], diff: 2, ref: "RT01, p.12" },
    { q: "Quel type de switch convient pour une configuration empilable ?", o: ["A) Switch modulaire", "B) Switch fixe stackable", "C) Hub", "D) Routeur"], c: 1, exp: "Les switchs stackables peuvent être empilés pour former une unité logique.", tags: ["hierarchie"], diff: 2, ref: "RT01, p.19" },
    { q: "La Trust Boundary pour la QoS est typiquement à quelle couche ?", o: ["A) Cœur", "B) Distribution", "C) Accès", "D) Externe"], c: 2, exp: "La classification/étiquetage QoS se fait à la couche Accès.", tags: ["hierarchie", "acces"], diff: 3, ref: "RT01, p.16" },
    { q: "Quel paramètre mesure la capacité à supporter plus d'utilisateurs/équipements ?", o: ["A) Fiabilité", "B) Sécurité", "C) Évolutivité", "D) Diamètre"], c: 2, exp: "L'évolutivité (scalability) = capacité à grandir.", tags: ["hierarchie"], diff: 1, ref: "RT01, p.8" },
    { q: "Dans une architecture hiérarchique, où la redondance est-elle critique ?", o: ["A) Uniquement Accès", "B) Distribution et Cœur", "C) Uniquement Cœur", "D) Nulle part"], c: 1, exp: "Distribution et Cœur nécessitent de la redondance pour la haute disponibilité.", tags: ["hierarchie"], diff: 2, ref: "RT01, p.17-18" },
    { q: "Quel équipement choisir pour une couche 3 au niveau Distribution ?", o: ["A) Hub", "B) Switch L2", "C) Switch L3 ou Routeur", "D) Répéteur"], c: 2, exp: "La couche Distribution peut nécessiter du routage (L3).", tags: ["hierarchie", "distribution"], diff: 2, ref: "RT01, p.17" },
    { q: "Quelle topologie logique correspond à un réseau en étoile centralisé ?", o: ["A) Bus", "B) Anneau", "C) Étoile", "D) Maillée"], c: 2, exp: "Étoile : point central interconnectant tous les nœuds.", tags: ["hierarchie"], diff: 1, ref: "RT01, p.5-6" },
    { q: "La disposition physique du réseau concerne :", o: ["A) Les adresses IP", "B) Le câblage et l'emplacement des équipements", "C) Les VLANs", "D) Les protocoles"], c: 1, exp: "Disposition physique = câbles, salles, baies, etc.", tags: ["hierarchie"], diff: 1, ref: "RT01, p.6" },
    { q: "Pour un réseau convergé, quel besoin augmente pour l'équipe IT ?", o: ["A) Moins de travail", "B) Montée en compétence", "C) Réduction d'effectifs", "D) Aucun changement"], c: 1, exp: "La convergence nécessite des compétences multi-domaines.", tags: ["hierarchie"], diff: 2, ref: "RT01, p.12" },
    { q: "Un switch modulaire permet :", o: ["A) Moins de ports", "B) D'ajouter des modules selon les besoins", "C) Une configuration fixe", "D) Aucune évolution"], c: 1, exp: "Modulaire = évolutif, on ajoute des cartes/modules.", tags: ["hierarchie"], diff: 2, ref: "RT01, p.19" },
    { q: "Quelle couche a la QoS et sécurité allégées (sauf accès externe) ?", o: ["A) Accès", "B) Distribution", "C) Cœur", "D) Toutes"], c: 2, exp: "Le Cœur privilégie la vitesse, la sécurité y est minimale.", tags: ["hierarchie", "coeur"], diff: 2, ref: "RT01, p.18" },
    { q: "Le Port Security est typiquement configuré sur quelle couche ?", o: ["A) Cœur", "B) Distribution", "C) Accès", "D) Internet"], c: 2, exp: "Port Security protège les ports utilisateurs (Accès).", tags: ["hierarchie", "acces"], diff: 2, ref: "RT01, p.16" },
    { q: "Quel est l'inconvénient d'une topologie en étoile ?", o: ["A) Pas de point central", "B) Point de défaillance unique (centre)", "C) Trop de câbles", "D) Pas de redondance possible"], c: 1, exp: "Si le switch central tombe, tout le réseau est impacté.", tags: ["hierarchie"], diff: 2, ref: "RT01" },
    { q: "La distance minimale entre source et destination est optimisée par :", o: ["A) L'architecture plate", "B) L'architecture hiérarchique", "C) Aucun design", "D) Le nombre de VLANs"], c: 1, exp: "L'architecture hiérarchique optimise les chemins (performance).", tags: ["hierarchie"], diff: 2, ref: "RT01, p.15" }
];

// === QCM RT02 - Commutation (20 questions) ===
const qcmRT02 = [
    { q: "Quelle table un switch utilise-t-il pour décider sur quel port envoyer une trame ?", o: ["A) Table ARP", "B) Table de routage", "C) Table MAC (CAM)", "D) Table DNS"], c: 2, exp: "Le switch utilise sa table MAC pour associer adresses MAC et ports.", tags: ["commutation", "cam"], diff: 1, ref: "RT02, p.12" },
    { q: "Combien de bits contient une adresse MAC ?", o: ["A) 32 bits", "B) 48 bits", "C) 64 bits", "D) 128 bits"], c: 1, exp: "Une adresse MAC fait 48 bits (6 octets).", tags: ["commutation", "mac"], diff: 1, ref: "RT02, p.11" },
    { q: "Le protocole ARP permet de résoudre :", o: ["A) MAC → IP", "B) IP → MAC", "C) IP → Nom", "D) Nom → IP"], c: 1, exp: "ARP (Address Resolution Protocol) : IP → MAC via broadcast.", tags: ["commutation", "arp"], diff: 1, ref: "RT02, p.16-17" },
    { q: "Quelle est l'adresse MAC de broadcast ?", o: ["A) 00:00:00:00:00:00", "B) FF:FF:FF:FF:FF:FF", "C) 01:00:5E:00:00:00", "D) 127.0.0.1"], c: 1, exp: "FF:FF:FF:FF:FF:FF = broadcast L2 (tous les 1).", tags: ["commutation", "mac"], diff: 1, ref: "RT02" },
    { q: "CSMA/CD signifie :", o: ["A) Carrier Sense Multiple Access / Collision Detection", "B) Central System MAC Address / Collision Domain", "C) Computer System Management / Control Data", "D) Cable Sensing Method Access / Circuit Design"], c: 0, exp: "Carrier Sense Multiple Access with Collision Detection.", tags: ["commutation", "csma-cd"], diff: 1, ref: "RT02, p.8" },
    { q: "Que fait un switch quand il ne connaît pas la MAC destination ?", o: ["A) Il jette la trame", "B) Il flood sur tous les ports sauf l'origine", "C) Il demande au routeur", "D) Il attend"], c: 1, exp: "Unknown unicast = flooding (envoi sur tous ports sauf source).", tags: ["commutation", "cam"], diff: 2, ref: "RT02, p.12" },
    { q: "Le champ FCS d'une trame Ethernet sert à :", o: ["A) Identifier le VLAN", "B) Détecter les erreurs (CRC)", "C) Indiquer la priorité", "D) Stocker l'IP"], c: 1, exp: "FCS (Frame Check Sequence) = CRC pour détecter les erreurs.", tags: ["commutation"], diff: 2, ref: "RT02, p.10" },
    { q: "Un switch apprend les adresses MAC via :", o: ["A) L'adresse destination", "B) L'adresse source des trames reçues", "C) Le protocole DNS", "D) Configuration manuelle uniquement"], c: 1, exp: "Le switch lit la MAC source pour remplir sa table CAM.", tags: ["commutation", "cam"], diff: 1, ref: "RT02, p.13" },
    { q: "Quelle commande affiche la table ARP sur un PC Windows ?", o: ["A) show arp", "B) arp -a", "C) ipconfig /arp", "D) netstat -r"], c: 1, exp: "arp -a affiche le cache ARP sur Windows/Linux.", tags: ["commutation", "arp"], diff: 1, ref: "RT02, p.21" },
    { q: "Un domaine de collision est segmenté par quel équipement ?", o: ["A) Hub", "B) Répéteur", "C) Switch", "D) Câble croisé"], c: 2, exp: "Le switch sépare les domaines de collision (1 port = 1 domaine).", tags: ["commutation"], diff: 2, ref: "RT02, p.9" },
    { q: "Quelle méthode de commutation vérifie le CRC avant de transmettre ?", o: ["A) Cut-Through", "B) Fragment-Free", "C) Store-and-Forward", "D) Fast-Forward"], c: 2, exp: "Store-and-Forward attend la trame complète et vérifie le CRC.", tags: ["commutation"], diff: 2, ref: "RT02, p.14" },
    { q: "Ethernet supporte quels types de communication ?", o: ["A) Unicast uniquement", "B) Unicast, Broadcast, Multicast", "C) Broadcast uniquement", "D) Multicast uniquement"], c: 1, exp: "Ethernet supporte les 3 types de diffusion.", tags: ["commutation"], diff: 1, ref: "RT02, p.5" },
    { q: "Half-duplex signifie :", o: ["A) Communication bidirectionnelle simultanée", "B) Communication bidirectionnelle non simultanée", "C) Communication unidirectionnelle", "D) Pas de communication"], c: 1, exp: "Half-duplex = on peut émettre OU recevoir, pas les deux en même temps.", tags: ["commutation"], diff: 1, ref: "RT02, p.6" },
    { q: "Que se passe-t-il en cas de collision avec CSMA/CD ?", o: ["A) Le switch s'éteint", "B) Signal de congestion + backoff aléatoire", "C) La trame est routée", "D) Rien"], c: 1, exp: "Collision → jam signal → attente aléatoire (backoff exponentiel).", tags: ["commutation", "csma-cd"], diff: 2, ref: "RT02, p.8" },
    { q: "Quelle partie de l'adresse MAC identifie le constructeur ?", o: ["A) Les 24 derniers bits (NIC)", "B) Les 24 premiers bits (OUI)", "C) Les 48 bits complets", "D) Le premier octet uniquement"], c: 1, exp: "OUI (Organizationally Unique Identifier) = 24 premiers bits.", tags: ["commutation", "mac"], diff: 2, ref: "RT02, p.11" },
    { q: "Est-ce qu'un switch bloque les trames broadcast ?", o: ["A) Oui, toujours", "B) Non, jamais", "C) Seulement avec VLANs", "D) Seulement en mode trunk"], c: 1, exp: "PIÈGE ! Un switch ne bloque PAS les broadcast, seul un routeur le fait.", tags: ["commutation"], diff: 3, ref: "RT02" },
    { q: "La trame Ethernet minimale est de :", o: ["A) 32 octets", "B) 46 octets", "C) 64 octets", "D) 128 octets"], c: 2, exp: "Trame min = 64 octets (14 header + 46 data + 4 FCS).", tags: ["commutation"], diff: 2, ref: "RT02, p.10" },
    { q: "Quel équipement opère à la couche 1 et répète tout le trafic ?", o: ["A) Switch", "B) Routeur", "C) Hub", "D) Bridge"], c: 2, exp: "Le hub (concentrateur) répète les bits sur tous les ports (L1).", tags: ["commutation"], diff: 1, ref: "RT02, p.4" },
    { q: "Une requête ARP est envoyée en :", o: ["A) Unicast", "B) Broadcast", "C) Multicast", "D) Anycast"], c: 1, exp: "ARP Request = broadcast (Who has IP X.X.X.X?).", tags: ["commutation", "arp"], diff: 1, ref: "RT02, p.17" },
    { q: "Full-duplex permet :", o: ["A) Communication dans un seul sens", "B) Communication simultanée dans les deux sens", "C) Détection de collision", "D) Aucune communication"], c: 1, exp: "Full-duplex = émission et réception simultanées.", tags: ["commutation"], diff: 1, ref: "RT02, p.6" }
];

// === QCM RT03 - VLAN (20 questions) ===
const qcmRT03 = [
    { q: "Un VLAN représente :", o: ["A) Un domaine de collision", "B) Un domaine de broadcast logique", "C) Une interface physique", "D) Un protocole de routage"], c: 1, exp: "VLAN = Virtual LAN = 1 domaine de broadcast séparé logiquement.", tags: ["vlan"], diff: 1, ref: "RT03, p.4" },
    { q: "Sur combien de bits est encodé l'ID VLAN dans 802.1Q ?", o: ["A) 8 bits", "B) 12 bits", "C) 16 bits", "D) 24 bits"], c: 1, exp: "VLAN ID sur 12 bits = 4094 VLANs possibles (0 et 4095 réservés).", tags: ["vlan", "802.1q"], diff: 2, ref: "RT03, p.6" },
    { q: "Un port Access appartient à :", o: ["A) Plusieurs VLANs", "B) Un seul VLAN", "C) Aucun VLAN", "D) Tous les VLANs"], c: 1, exp: "Port Access = 1 VLAN, trafic non-taggé.", tags: ["vlan", "access"], diff: 1, ref: "RT03, p.13" },
    { q: "Un port Trunk transporte :", o: ["A) Un seul VLAN", "B) Plusieurs VLANs avec tags 802.1Q", "C) Uniquement du trafic IP", "D) Aucun VLAN"], c: 1, exp: "Trunk = plusieurs VLANs, trames taggées (sauf natif).", tags: ["vlan", "trunk"], diff: 1, ref: "RT03, p.20" },
    { q: "Le VLAN natif sur un trunk est :", o: ["A) Toujours taggé", "B) Jamais taggé", "C) Supprimé", "D) Crypté"], c: 1, exp: "VLAN natif = trafic non-taggé sur trunk. VLAN 1 par défaut.", tags: ["vlan", "native-vlan"], diff: 2, ref: "RT03, p.22" },
    { q: "Dans quelle plage se trouvent les VLANs normaux ?", o: ["A) 1-1005", "B) 1006-4094", "C) 0-255", "D) 1-65535"], c: 0, exp: "Plage normale : 1-1005. Plage étendue : 1006-4094.", tags: ["vlan"], diff: 2, ref: "RT03, p.6" },
    { q: "Où sont stockés les VLANs de plage normale sur un switch Cisco ?", o: ["A) running-config", "B) startup-config", "C) vlan.dat (flash)", "D) NVRAM uniquement"], c: 2, exp: "Les VLANs normaux sont dans vlan.dat.", tags: ["vlan"], diff: 2, ref: "RT03, p.8" },
    { q: "Quelle commande affecte un port au VLAN 10 ?", o: ["A) vlan 10", "B) switchport access vlan 10", "C) ip address vlan 10", "D) trunk vlan 10"], c: 1, exp: "En mode interface : switchport access vlan 10.", tags: ["vlan", "access"], diff: 1, ref: "RT03, p.13" },
    { q: "802.1Q ajoute combien d'octets à la trame ?", o: ["A) 2 octets", "B) 4 octets", "C) 8 octets", "D) 12 octets"], c: 1, exp: "4 octets : TPID (2) + TCI (2 avec priorité + VLAN ID).", tags: ["vlan", "802.1q"], diff: 2, ref: "RT03, p.21" },
    { q: "DTP (Dynamic Trunking Protocol) est :", o: ["A) Un standard IEEE", "B) Propriétaire Cisco", "C) Obsolète", "D) Pour le routage"], c: 1, exp: "DTP = protocole Cisco pour négocier auto le mode trunk.", tags: ["vlan", "dtp"], diff: 2, ref: "RT03, p.27" },
    { q: "Que se passe-t-il si on supprime un VLAN avec des ports affectés ?", o: ["A) Les ports passent au VLAN 1", "B) Les ports deviennent inactifs (orphelins)", "C) Le switch redémarre", "D) Rien"], c: 1, exp: "PIÈGE ! Les ports restent sur un VLAN inexistant = plus de comm.", tags: ["vlan"], diff: 3, ref: "RT03, p.19" },
    { q: "Le VLAN voix est typiquement configuré avec :", o: ["A) switchport voice vlan X", "B) vlan voice X", "C) ip phone vlan X", "D) trunk voice X"], c: 0, exp: "switchport voice vlan X configure le VLAN voix sur un port.", tags: ["vlan"], diff: 2, ref: "RT03, p.29" },
    { q: "Quel VLAN est créé par défaut et ne peut pas être supprimé ?", o: ["A) VLAN 10", "B) VLAN 1", "C) VLAN 100", "D) VLAN 4094"], c: 1, exp: "VLAN 1 = VLAN par défaut, impossible à supprimer.", tags: ["vlan"], diff: 1, ref: "RT03, p.8" },
    { q: "La valeur hexadécimale du champ TPID 802.1Q est :", o: ["A) 0x8100", "B) 0x0806", "C) 0x0800", "D) 0xFFFF"], c: 0, exp: "0x8100 identifie une trame 802.1Q taggée.", tags: ["vlan", "802.1q"], diff: 3, ref: "RT03, p.21" },
    { q: "Pour configurer un port en mode trunk :", o: ["A) switchport mode trunk", "B) vlan mode trunk", "C) trunk enable", "D) interface trunk"], c: 0, exp: "switchport mode trunk force le port en trunk.", tags: ["vlan", "trunk"], diff: 1, ref: "RT03, p.23" },
    { q: "Quel risque si les VLAN natifs diffèrent des deux côtés d'un trunk ?", o: ["A) Meilleure performance", "B) Fuite de trafic entre VLANs", "C) Aucun risque", "D) Le trunk ne monte pas"], c: 1, exp: "VLAN natif mismatch = trafic d'un VLAN reçu dans l'autre.", tags: ["vlan", "native-vlan"], diff: 3, ref: "RT03, p.22" },
    { q: "show vlan brief affiche :", o: ["A) La table MAC", "B) Les VLANs et leurs ports", "C) La table de routage", "D) La config IP"], c: 1, exp: "show vlan brief = liste des VLANs et ports associés.", tags: ["vlan"], diff: 1, ref: "RT03, p.10" },
    { q: "Les VLANs 1002-1005 sont réservés pour :", o: ["A) Les utilisateurs", "B) Token Ring et FDDI", "C) Le management", "D) La voix"], c: 1, exp: "VLANs 1002-1005 = compatibilité Token Ring/FDDI (obsolète).", tags: ["vlan"], diff: 2, ref: "RT03, p.6" },
    { q: "Un port configuré en 'dynamic auto' :", o: ["A) Force le trunk", "B) Attend une négociation DTP", "C) Reste toujours access", "D) Est désactivé"], c: 1, exp: "Dynamic auto = devient trunk si l'autre côté est desirable/trunk.", tags: ["vlan", "dtp"], diff: 2, ref: "RT03, p.27" },
    { q: "Quelle commande supprime le fichier vlan.dat ?", o: ["A) no vlan all", "B) delete flash:vlan.dat", "C) erase vlan", "D) clear vlan"], c: 1, exp: "delete flash:vlan.dat ou delete vlan.dat.", tags: ["vlan"], diff: 2, ref: "RT03, p.19" }
];

// === QCM RT04 - Routage Inter-VLAN (20 questions) ===
const qcmRT04 = [
    { q: "Quel équipement est nécessaire pour router entre VLANs ?", o: ["A) Hub", "B) Switch L2", "C) Routeur ou Switch L3", "D) Répéteur"], c: 2, exp: "Le routage (L3) est requis pour communiquer entre VLANs.", tags: ["inter-vlan"], diff: 1, ref: "RT04, p.3" },
    { q: "Router-on-a-stick utilise :", o: ["A) Une interface physique par VLAN", "B) Des sous-interfaces sur un lien trunk", "C) Uniquement des SVI", "D) Aucun trunk"], c: 1, exp: "Router-on-a-stick = sous-interfaces sur 1 interface trunk.", tags: ["inter-vlan", "router-on-stick"], diff: 1, ref: "RT04, p.6" },
    { q: "Quelle commande crée une sous-interface pour le VLAN 10 ?", o: ["A) interface vlan 10", "B) interface Gi0/0.10", "C) vlan 10 interface", "D) subinterface 10"], c: 1, exp: "Sous-interface = interface Gx/x.Y (Y = numéro, souvent = VLAN).", tags: ["inter-vlan", "router-on-stick"], diff: 2, ref: "RT04, p.7" },
    { q: "Quelle commande associe une sous-interface au VLAN 10 ?", o: ["A) vlan 10", "B) switchport access vlan 10", "C) encapsulation dot1Q 10", "D) ip vlan 10"], c: 2, exp: "encapsulation dot1Q [vlan-id] sur la sous-interface.", tags: ["inter-vlan", "router-on-stick"], diff: 2, ref: "RT04, p.7" },
    { q: "Une SVI (Switch Virtual Interface) est :", o: ["A) Un port physique", "B) Une interface virtuelle pour un VLAN sur switch L3", "C) Un câble", "D) Un protocole"], c: 1, exp: "SVI = interface vlan X sur un switch L3.", tags: ["inter-vlan", "svi"], diff: 1, ref: "RT04, p.9-10" },
    { q: "Quelle commande active le routage sur un switch L3 Cisco ?", o: ["A) router enable", "B) ip routing", "C) routing on", "D) layer3 enable"], c: 1, exp: "ip routing active la fonction de routage.", tags: ["inter-vlan", "switch-l3"], diff: 1, ref: "RT04, p.12" },
    { q: "Un port routé sur un switch L3 est créé avec :", o: ["A) switchport", "B) no switchport", "C) routed port", "D) layer3"], c: 1, exp: "no switchport convertit un port L2 en port L3 (routed).", tags: ["inter-vlan", "switch-l3"], diff: 2, ref: "RT04, p.10" },
    { q: "Avantage du switch L3 sur router-on-a-stick :", o: ["A) Moins cher", "B) Routage à vitesse filaire (hardware)", "C) Plus simple", "D) Pas besoin de VLANs"], c: 1, exp: "Switch L3 = routage en hardware = très rapide.", tags: ["inter-vlan", "switch-l3"], diff: 2, ref: "RT04, p.11" },
    { q: "Inconvénient du router-on-a-stick :", o: ["A) Trop cher", "B) Goulot d'étranglement sur le lien trunk", "C) Pas de sous-interfaces", "D) Nécessite un switch L3"], c: 1, exp: "Tout le trafic inter-VLAN passe par 1 seul lien = bottleneck.", tags: ["inter-vlan", "router-on-stick"], diff: 2, ref: "RT04, p.8" },
    { q: "Quel type de port utilise-t-on pour connecter un routeur en router-on-a-stick ?", o: ["A) Access", "B) Trunk", "C) Routed", "D) Hybrid"], c: 1, exp: "Le port côté switch doit être trunk pour transporter les VLANs.", tags: ["inter-vlan", "router-on-stick"], diff: 1, ref: "RT04, p.8" },
    { q: "Pour créer une SVI pour le VLAN 20 :", o: ["A) interface Gi0/0.20", "B) interface vlan 20", "C) vlan interface 20", "D) svi 20"], c: 1, exp: "interface vlan 20 crée la SVI.", tags: ["inter-vlan", "svi"], diff: 1, ref: "RT04, p.12" },
    { q: "Après avoir créé une SVI, quelle commande est souvent oubliée ?", o: ["A) ip address", "B) no shutdown", "C) switchport", "D) vlan create"], c: 1, exp: "PIÈGE ! Il faut no shutdown pour activer la SVI.", tags: ["inter-vlan", "svi"], diff: 3, ref: "RT04, p.12" },
    { q: "Un switch L3 peut-il avoir des sous-interfaces ?", o: ["A) Oui", "B) Non", "C) Seulement en mode routeur", "D) Seulement avec licence"], c: 1, exp: "Les sous-interfaces sont pour les routeurs, pas les switch L3.", tags: ["inter-vlan", "switch-l3"], diff: 2, ref: "RT04, p.11" },
    { q: "Quelle SVI existe par défaut sur un switch Cisco ?", o: ["A) VLAN 10", "B) VLAN 1", "C) VLAN 100", "D) Aucune"], c: 1, exp: "La SVI VLAN 1 existe par défaut pour le management.", tags: ["inter-vlan", "svi"], diff: 1, ref: "RT04, p.10" },
    { q: "HPE Comware active le routage IP :", o: ["A) Avec ip routing", "B) Par défaut (enabled)", "C) Avec router enable", "D) Jamais"], c: 1, exp: "Sur HPE Comware, le routage IP est activé par défaut.", tags: ["inter-vlan"], diff: 2, ref: "RT04, p.13" },
    { q: "Routeur vs Switch L3 : lequel supporte les interfaces WAN (WIC) ?", o: ["A) Switch L3", "B) Routeur", "C) Les deux", "D) Aucun"], c: 1, exp: "Seuls les routeurs ont des cartes WIC pour WAN.", tags: ["inter-vlan"], diff: 2, ref: "RT04, p.11" },
    { q: "Les sous-interfaces partagent :", o: ["A) Rien", "B) La bande passante de l'interface physique", "C) Des adresses IP", "D) Le même VLAN"], c: 1, exp: "Toutes les sous-interfaces utilisent le même lien physique.", tags: ["inter-vlan", "router-on-stick"], diff: 2, ref: "RT04, p.8" },
    { q: "port link-mode route est la commande équivalente à no switchport sur :", o: ["A) Cisco", "B) HPE Comware", "C) HP ProCurve", "D) Juniper"], c: 1, exp: "HPE Comware : port link-mode route = routed port.", tags: ["inter-vlan"], diff: 3, ref: "RT04, p.13" },
    { q: "Quelle méthode inter-VLAN est la plus coûteuse ?", o: ["A) Router-on-a-stick", "B) Switch L3", "C) Routeur traditionnel (1 port par VLAN)", "D) Pas de différence"], c: 2, exp: "1 interface physique par VLAN = beaucoup de ports = coûteux.", tags: ["inter-vlan"], diff: 2, ref: "RT04, p.4" },
    { q: "show ip route sur un switch L3 affiche :", o: ["A) Les VLANs", "B) La table de routage", "C) Les ports", "D) Les MACs"], c: 1, exp: "show ip route affiche la table de routage.", tags: ["inter-vlan", "switch-l3"], diff: 1, ref: "RT04" }
];

// === QCM RT05 - STP (20 questions) ===
const qcmRT05 = [
    { q: "Quel problème STP résout-il ?", o: ["A) Lenteur du réseau", "B) Boucles de niveau 2", "C) Manque d'adresses IP", "D) Collisions"], c: 1, exp: "STP élimine les boucles L2 en bloquant des ports.", tags: ["stp"], diff: 1, ref: "RT05, p.14" },
    { q: "Le Root Bridge est le switch avec :", o: ["A) Le plus grand BID", "B) Le plus petit BID", "C) Le plus de ports", "D) La priorité la plus haute"], c: 1, exp: "Plus petit BID (priorité + MAC) = Root Bridge.", tags: ["stp", "root-bridge"], diff: 1, ref: "RT05, p.15-16" },
    { q: "Un port racine (Root Port) est présent sur :", o: ["A) Le Root Bridge uniquement", "B) Tous les switches sauf le Root Bridge", "C) Aucun switch", "D) Les hubs"], c: 1, exp: "1 Root Port par switch non-root = meilleur chemin vers root.", tags: ["stp"], diff: 2, ref: "RT05, p.25" },
    { q: "Les BPDU sont envoyés toutes les :", o: ["A) 1 seconde", "B) 2 secondes", "C) 10 secondes", "D) 60 secondes"], c: 1, exp: "Hello time par défaut = 2 secondes.", tags: ["stp", "bpdu"], diff: 2, ref: "RT05, p.19" },
    { q: "Quelle est la priorité STP par défaut ?", o: ["A) 0", "B) 4096", "C) 32768", "D) 65535"], c: 2, exp: "Priorité par défaut = 32768.", tags: ["stp"], diff: 1, ref: "RT05, p.17" },
    { q: "Un port en état Blocking :", o: ["A) Transmet les données", "B) N'écoute rien", "C) Écoute les BPDU mais ne transmet pas", "D) Est désactivé"], c: 2, exp: "Blocking = reçoit BPDU, prêt à prendre le relais.", tags: ["stp"], diff: 2, ref: "RT05, p.33" },
    { q: "Combien d'états traverse un port STP classique ?", o: ["A) 2", "B) 3", "C) 4", "D) 5"], c: 3, exp: "Blocking → Listening → Learning → Forwarding (+ Disabled).", tags: ["stp"], diff: 2, ref: "RT05, p.33" },
    { q: "Le coût STP d'un lien 1 Gbps est :", o: ["A) 2", "B) 4", "C) 19", "D) 100"], c: 1, exp: "Coût 1 Gbps = 4 (IEEE révisé).", tags: ["stp", "port-cost"], diff: 2, ref: "RT05, p.24" },
    { q: "Que cause une boucle L2 sans STP ?", o: ["A) Rien", "B) Broadcast storm, instabilité CAM", "C) Meilleur débit", "D) Sécurité accrue"], c: 1, exp: "Sans STP : tempête de broadcast, CAM instable, saturation.", tags: ["stp"], diff: 1, ref: "RT05, p.3" },
    { q: "PortFast fait passer un port directement en :", o: ["A) Blocking", "B) Listening", "C) Learning", "D) Forwarding"], c: 3, exp: "PortFast skip les états intermédiaires.", tags: ["stp", "portfast"], diff: 2, ref: "RT05, p.35" },
    { q: "Sur quel type de port PortFast doit-il être configuré ?", o: ["A) Inter-switch", "B) Vers les serveurs et PCs (accès)", "C) Trunk", "D) Root port"], c: 1, exp: "PortFast = ports d'accès uniquement (pas inter-switch!).", tags: ["stp", "portfast"], diff: 2, ref: "RT05, p.35" },
    { q: "RSTP (Rapid STP) est défini par :", o: ["A) 802.1D", "B) 802.1w", "C) 802.1Q", "D) 802.3"], c: 1, exp: "RSTP = IEEE 802.1w.", tags: ["stp", "rstp"], diff: 2, ref: "RT05, p.30" },
    { q: "RSTP remplace l'état Blocking par :", o: ["A) Disabled", "B) Discarding", "C) Alternate/Backup", "D) Listening"], c: 2, exp: "Alternate (vers root) et Backup (vers segment) remplacent Blocking.", tags: ["stp", "rstp"], diff: 3, ref: "RT05, p.34" },
    { q: "Quelle commande configure la priorité STP ?", o: ["A) spanning-tree priority", "B) spanning-tree vlan X priority Y", "C) stp priority", "D) root priority"], c: 1, exp: "spanning-tree vlan [id] priority [valeur].", tags: ["stp"], diff: 2, ref: "RT05, p.18" },
    { q: "Pour forcer un switch comme root primaire :", o: ["A) spanning-tree vlan X root primary", "B) root bridge enable", "C) stp root", "D) priority 0"], c: 0, exp: "root primary définit la priorité optimale pour être élu.", tags: ["stp", "root-bridge"], diff: 2, ref: "RT05, p.18" },
    { q: "L'adresse multicast des BPDU STP standard est :", o: ["A) FF:FF:FF:FF:FF:FF", "B) 01:80:C2:00:00:00", "C) 01:00:5E:00:00:01", "D) 00:00:00:00:00:00"], c: 1, exp: "01:80:C2:00:00:00 = BPDU STP.", tags: ["stp", "bpdu"], diff: 3, ref: "RT05, p.19" },
    { q: "Que risque-t-on avec PortFast sur un lien inter-switch ?", o: ["A) Rien", "B) Création de boucle", "C) Lenteur", "D) Sécurité améliorée"], c: 1, exp: "PIÈGE ! PortFast inter-switch = boucle instantanée.", tags: ["stp", "portfast"], diff: 3, ref: "RT05" },
    { q: "PVST+ signifie :", o: ["A) Per-VLAN Spanning Tree Plus", "B) Private VLAN STP", "C) Protocol VLAN STP", "D) Primary VLAN STP"], c: 0, exp: "PVST+ = 1 instance STP par VLAN (Cisco).", tags: ["stp"], diff: 2, ref: "RT05, p.30" },
    { q: "Le BID est composé de :", o: ["A) IP + MAC", "B) Priorité + MAC", "C) VLAN + Port", "D) Coût + MAC"], c: 1, exp: "Bridge ID = Priorité (+ Extended System ID) + MAC.", tags: ["stp"], diff: 2, ref: "RT05, p.16" },
    { q: "Temps de convergence STP classique :", o: ["A) 1-2 secondes", "B) 5-10 secondes", "C) 30-50 secondes", "D) 2-3 minutes"], c: 2, exp: "STP classique : ~50 secondes pour converger.", tags: ["stp"], diff: 2, ref: "RT05, p.33" }
];

// === QCM RT06 - EtherChannel (20 questions) ===
const qcmRT06 = [
    { q: "EtherChannel permet de :", o: ["A) Créer des VLANs", "B) Agréger plusieurs liens physiques en 1 logique", "C) Router entre VLANs", "D) Bloquer les boucles"], c: 1, exp: "EtherChannel = agrégation de liens pour débit + redondance.", tags: ["etherchannel"], diff: 1, ref: "RT06, p.4" },
    { q: "Combien de liens physiques maximum dans un EtherChannel ?", o: ["A) 2", "B) 4", "C) 8", "D) 16"], c: 2, exp: "Jusqu'à 8 liens physiques par Port-channel.", tags: ["etherchannel"], diff: 1, ref: "RT06, p.5" },
    { q: "LACP est :", o: ["A) Propriétaire Cisco", "B) Standard IEEE 802.3ad", "C) Obsolète", "D) Pour les VLANs"], c: 1, exp: "LACP = Link Aggregation Control Protocol (IEEE).", tags: ["etherchannel", "lacp"], diff: 1, ref: "RT06, p.7" },
    { q: "PAgP est :", o: ["A) Standard IEEE", "B) Propriétaire Cisco", "C) Pour le routage", "D) Obsolète"], c: 1, exp: "PAgP = Port Aggregation Protocol (Cisco).", tags: ["etherchannel", "pagp"], diff: 1, ref: "RT06, p.7" },
    { q: "Les modes LACP sont :", o: ["A) On / Off", "B) Active / Passive", "C) Desirable / Auto", "D) Enable / Disable"], c: 1, exp: "LACP : Active (initie) / Passive (attend).", tags: ["etherchannel", "lacp"], diff: 2, ref: "RT06, p.7" },
    { q: "Les modes PAgP sont :", o: ["A) Active / Passive", "B) Desirable / Auto", "C) On / Off", "D) Enable / Disable"], c: 1, exp: "PAgP : Desirable (initie) / Auto (attend).", tags: ["etherchannel", "pagp"], diff: 2, ref: "RT06, p.7" },
    { q: "Deux switches en mode LACP Passive :", o: ["A) Forment un EtherChannel", "B) Ne forment PAS d'EtherChannel", "C) Utilisent PAgP", "D) Erreur de config"], c: 1, exp: "Passive + Passive = aucun n'initie = pas de channel.", tags: ["etherchannel", "lacp"], diff: 2, ref: "RT06, p.8" },
    { q: "Le mode 'On' signifie :", o: ["A) Négociation LACP", "B) Négociation PAgP", "C) Pas de négociation (manuel)", "D) Désactivé"], c: 2, exp: "On = force l'EtherChannel SANS protocole de négociation.", tags: ["etherchannel"], diff: 2, ref: "RT06, p.7" },
    { q: "Quels paramètres doivent être identiques pour l'EtherChannel ?", o: ["A) IP uniquement", "B) Speed, duplex, VLAN, mode switchport", "C) Seulement le VLAN", "D) Rien de particulier"], c: 1, exp: "Tous les ports doivent avoir la même config L2.", tags: ["etherchannel"], diff: 2, ref: "RT06, p.6" },
    { q: "Quelle commande ajoute une interface à un EtherChannel LACP ?", o: ["A) channel-group 1 mode active", "B) etherchannel 1 enable", "C) lacp group 1", "D) aggregation 1"], c: 0, exp: "channel-group [id] mode active/passive.", tags: ["etherchannel", "lacp"], diff: 2, ref: "RT06, p.9" },
    { q: "Comment STP voit-il un EtherChannel ?", o: ["A) 8 liens séparés", "B) 1 seul lien logique", "C) Pas de STP", "D) Boucle détectée"], c: 1, exp: "STP voit Port-channel comme 1 seul lien.", tags: ["etherchannel", "stp"], diff: 2, ref: "RT06, p.17" },
    { q: "L'EtherChannel est aussi appelé :", o: ["A) VLAN", "B) LAG (Link Aggregation Group)", "C) STP", "D) Trunk"], c: 1, exp: "LAG, trunking, bundling, bonding, teaming = synonymes.", tags: ["etherchannel"], diff: 1, ref: "RT06, p.3" },
    { q: "Le load-balancing EtherChannel par défaut est basé sur :", o: ["A) Round-robin", "B) MAC source", "C) IP destination", "D) Aléatoire"], c: 1, exp: "Par défaut : src-mac (peut être changé).", tags: ["etherchannel"], diff: 2, ref: "RT06, p.18" },
    { q: "Quelle commande change l'algorithme de load-balancing ?", o: ["A) load-balance mode", "B) port-channel load-balance [method]", "C) etherchannel balance", "D) lag distribute"], c: 1, exp: "port-channel load-balance src-ip, dst-mac, etc.", tags: ["etherchannel"], diff: 2, ref: "RT06, p.18" },
    { q: "Un EtherChannel Layer 3 est possible sur :", o: ["A) Switch L2 uniquement", "B) Switch L3 ou Routeur", "C) Hub", "D) Impossible"], c: 1, exp: "L3 EtherChannel = pour liens routés.", tags: ["etherchannel"], diff: 2, ref: "RT06, p.18" },
    { q: "Si un lien d'un EtherChannel tombe :", o: ["A) Tout le channel tombe", "B) Le débit est réduit, mais ça continue", "C) Boucle créée", "D) Le switch redémarre"], c: 1, exp: "Redondance : perte d'un lien = débit réduit seulement.", tags: ["etherchannel"], diff: 2, ref: "RT06, p.4" },
    { q: "Risque du mode 'On' des deux côtés sans vérification :", o: ["A) Performance optimale", "B) Boucle possible si mismatch", "C) Sécurité accrue", "D) Aucun risque"], c: 1, exp: "Sans négociation, risque de mismatch = boucle.", tags: ["etherchannel"], diff: 3, ref: "RT06, p.12" },
    { q: "show etherchannel summary affiche :", o: ["A) La table MAC", "B) L'état des Port-channels", "C) Les VLANs", "D) La config IP"], c: 1, exp: "Résumé de tous les EtherChannels.", tags: ["etherchannel"], diff: 1, ref: "RT06, p.10" },
    { q: "Active + Active en LACP :", o: ["A) Ne fonctionne pas", "B) Forme un EtherChannel", "C) Utilise PAgP", "D) Erreur"], c: 1, exp: "Active + Active = les deux initient = channel OK.", tags: ["etherchannel", "lacp"], diff: 2, ref: "RT06, p.8" },
    { q: "Le port-channel est identifié par :", o: ["A) Po1, Po2...", "B) E1, E2...", "C) CH1, CH2...", "D) AG1, AG2..."], c: 0, exp: "Interface Port-channel 1 = Po1.", tags: ["etherchannel"], diff: 1, ref: "RT06, p.10" }
];

// === QCM RT07 - FHRP (20 questions) ===
const qcmRT07 = [
    { q: "FHRP signifie :", o: ["A) Fast Host Routing Protocol", "B) First Hop Redundancy Protocol", "C) Forwarding High Rate Protocol", "D) Failover Host Recovery Protocol"], c: 1, exp: "First Hop Redundancy Protocol = redondance de la gateway.", tags: ["hsrp", "vrrp", "glbp"], diff: 1, ref: "RT07, p.5" },
    { q: "HSRP est :", o: ["A) Standard IEEE", "B) Propriétaire Cisco", "C) Standard IETF", "D) Obsolète"], c: 1, exp: "HSRP = Hot Standby Router Protocol (Cisco).", tags: ["hsrp"], diff: 1, ref: "RT07, p.5" },
    { q: "VRRP est :", o: ["A) Propriétaire Cisco", "B) Standard IETF/IEEE", "C) Propriétaire Juniper", "D) Obsolète"], c: 1, exp: "VRRP = Virtual Router Redundancy Protocol (IETF RFC 5798).", tags: ["vrrp"], diff: 1, ref: "RT07, p.5" },
    { q: "En HSRP, quel routeur forwarde le trafic ?", o: ["A) Standby", "B) Active", "C) Les deux", "D) Aucun"], c: 1, exp: "Le routeur Active forward, le Standby attend.", tags: ["hsrp"], diff: 1, ref: "RT07, p.7" },
    { q: "La priorité HSRP par défaut est :", o: ["A) 0", "B) 50", "C) 100", "D) 255"], c: 2, exp: "Priorité par défaut = 100.", tags: ["hsrp"], diff: 2, ref: "RT07, p.6" },
    { q: "L'adresse MAC virtuelle HSRP commence par :", o: ["A) FF:FF:FF", "B) 00:00:5E", "C) 0000.0C07.AC", "D) 01:80:C2"], c: 2, exp: "HSRP MAC = 0000.0C07.ACXX (XX = groupe).", tags: ["hsrp"], diff: 2, ref: "RT07, p.10" },
    { q: "L'adresse MAC virtuelle VRRP commence par :", o: ["A) 0000.0C07.AC", "B) 00:00:5E:00:01", "C) FF:FF:FF:FF:FF", "D) 01:00:5E"], c: 1, exp: "VRRP MAC = 00:00:5E:00:01:XX.", tags: ["vrrp"], diff: 2, ref: "RT07, p.13" },
    { q: "Preemption permet :", o: ["A) De forcer un groupe", "B) Au routeur prioritaire de reprendre le rôle Active", "C) De désactiver HSRP", "D) D'accélérer le réseau"], c: 1, exp: "Preemption = le master reprend automatiquement sa place.", tags: ["hsrp", "vrrp", "preemption"], diff: 2, ref: "RT07, p.9" },
    { q: "Preemption est-il activé par défaut en HSRP ?", o: ["A) Oui", "B) Non", "C) Dépend du mode", "D) Toujours"], c: 1, exp: "En HSRP, preemption est DÉSACTIVÉ par défaut.", tags: ["hsrp", "preemption"], diff: 2, ref: "RT07, p.9" },
    { q: "Tracking permet de :", o: ["A) Suivre les paquets", "B) Décrémenter la priorité si une interface tombe", "C) Traquer les intrus", "D) Monitorer le CPU"], c: 1, exp: "Track = décrémente priorité si lien surveillé down.", tags: ["hsrp", "tracking"], diff: 2, ref: "RT07, p.12" },
    { q: "GLBP offre quel mode ?", o: ["A) Active-Standby", "B) Master-Backup", "C) Active-Active (load-balancing)", "D) Disabled"], c: 2, exp: "GLBP = les deux routeurs sont actifs (load-balancing).", tags: ["glbp"], diff: 2, ref: "RT07, p.14" },
    { q: "En GLBP, le routeur AVG est responsable de :", o: ["A) Router tous les paquets", "B) Répondre aux requêtes ARP avec différentes VMAC", "C) Bloquer le trafic", "D) Rien"], c: 1, exp: "AVG = Active Virtual Gateway, répond aux ARP.", tags: ["glbp"], diff: 3, ref: "RT07, p.14-15" },
    { q: "Quelle commande configure l'IP virtuelle HSRP ?", o: ["A) ip virtual X.X.X.X", "B) standby [group] ip X.X.X.X", "C) hsrp ip X.X.X.X", "D) gateway X.X.X.X"], c: 1, exp: "standby [group-id] ip [virtual-ip].", tags: ["hsrp"], diff: 2, ref: "RT07, p.6" },
    { q: "Quelle commande active preemption en HSRP ?", o: ["A) standby preempt", "B) hsrp preempt", "C) standby [group] preempt", "D) preemption enable"], c: 2, exp: "standby [group] preempt.", tags: ["hsrp", "preemption"], diff: 2, ref: "RT07, p.9" },
    { q: "Les paquets Hello HSRP sont envoyés toutes les :", o: ["A) 1 seconde", "B) 3 secondes", "C) 10 secondes", "D) 60 secondes"], c: 1, exp: "Hello time = 3s, Hold time = 10s.", tags: ["hsrp"], diff: 2, ref: "RT07, p.7" },
    { q: "Si les deux routeurs ont la même priorité HSRP :", o: ["A) Erreur", "B) Le routeur avec la plus haute IP gagne", "C) Aléatoire", "D) Aucun n'est Active"], c: 1, exp: "En cas d'égalité, la plus haute IP devient Active.", tags: ["hsrp"], diff: 3, ref: "RT07" },
    { q: "Nombre d'états possibles en HSRP :", o: ["A) 2", "B) 3", "C) 5", "D) 6"], c: 3, exp: "Initial, Learn, Listen, Speak, Standby, Active = 6 états.", tags: ["hsrp"], diff: 3, ref: "RT07, p.8" },
    { q: "show standby affiche :", o: ["A) La config VRRP", "B) L'état HSRP", "C) La table de routage", "D) Les VLANs"], c: 1, exp: "show standby = infos HSRP.", tags: ["hsrp"], diff: 1, ref: "RT07, p.10" },
    { q: "Quel problème si chaque routeur a un groupe HSRP différent ?", o: ["A) Meilleure redondance", "B) Pas de redondance (groupes indépendants)", "C) Load-balancing auto", "D) Aucun"], c: 1, exp: "PIÈGE ! Groupes différents = pas de failover.", tags: ["hsrp"], diff: 3, ref: "RT07" },
    { q: "GLBP est :", o: ["A) Standard IEEE", "B) Standard IETF", "C) Propriétaire Cisco", "D) Obsolète"], c: 2, exp: "GLBP = Gateway Load Balancing Protocol (Cisco).", tags: ["glbp"], diff: 1, ref: "RT07, p.5" }
];

// === QCM RT08 - Discovery (20 questions) ===
const qcmRT08 = [
    { q: "CDP signifie :", o: ["A) Cisco Discovery Protocol", "B) Central Data Protocol", "C) Common Device Platform", "D) Carrier Detect Protocol"], c: 0, exp: "CDP = Cisco Discovery Protocol.", tags: ["cdp"], diff: 1, ref: "RT08, p.4" },
    { q: "LLDP signifie :", o: ["A) Local Layer Discovery Protocol", "B) Link Layer Discovery Protocol", "C) Low Level Data Protocol", "D) Logical Link Distribution Protocol"], c: 1, exp: "LLDP = Link Layer Discovery Protocol (IEEE 802.1ab).", tags: ["lldp"], diff: 1, ref: "RT08, p.6" },
    { q: "CDP est :", o: ["A) Standard IEEE", "B) Propriétaire Cisco", "C) Standard IETF", "D) Open source"], c: 1, exp: "CDP = protocole Cisco propriétaire.", tags: ["cdp"], diff: 1, ref: "RT08, p.4" },
    { q: "LLDP est :", o: ["A) Propriétaire Cisco", "B) Standard IEEE 802.1ab", "C) Propriétaire Microsoft", "D) Obsolète"], c: 1, exp: "LLDP = standard IEEE.", tags: ["lldp"], diff: 1, ref: "RT08, p.6" },
    { q: "Les paquets CDP sont envoyés toutes les :", o: ["A) 30 secondes", "B) 60 secondes", "C) 120 secondes", "D) 180 secondes"], c: 1, exp: "CDP timer = 60s par défaut.", tags: ["cdp"], diff: 2, ref: "RT08, p.4" },
    { q: "Les paquets LLDP sont envoyés toutes les :", o: ["A) 30 secondes", "B) 60 secondes", "C) 90 secondes", "D) 120 secondes"], c: 0, exp: "LLDP timer = 30s par défaut.", tags: ["lldp"], diff: 2, ref: "RT08, p.6" },
    { q: "Le holdtime CDP par défaut est :", o: ["A) 60 secondes", "B) 120 secondes", "C) 180 secondes", "D) 300 secondes"], c: 2, exp: "Holdtime CDP = 180s (3 × 60s).", tags: ["cdp"], diff: 2, ref: "RT08, p.4" },
    { q: "Le holdtime LLDP par défaut est :", o: ["A) 60 secondes", "B) 90 secondes", "C) 120 secondes", "D) 180 secondes"], c: 2, exp: "Holdtime LLDP = 120s (4 × 30s).", tags: ["lldp"], diff: 2, ref: "RT08, p.6" },
    { q: "CDP/LLDP opèrent à quelle couche ?", o: ["A) Couche 1", "B) Couche 2", "C) Couche 3", "D) Couche 7"], c: 1, exp: "Protocoles de couche 2 (liaison).", tags: ["cdp", "lldp"], diff: 1, ref: "RT08, p.4" },
    { q: "Quelle commande affiche les voisins CDP ?", o: ["A) show cdp neighbors", "B) show cdp", "C) cdp show", "D) display cdp"], c: 0, exp: "show cdp neighbors [detail].", tags: ["cdp"], diff: 1, ref: "RT08, p.5" },
    { q: "Quelle commande affiche les voisins LLDP ?", o: ["A) show lldp neighbors", "B) show lldp", "C) lldp show", "D) display lldp"], c: 0, exp: "show lldp neighbors [detail].", tags: ["lldp"], diff: 1, ref: "RT08, p.7" },
    { q: "CDP est activé par défaut sur les équipements Cisco ?", o: ["A) Non", "B) Oui", "C) Seulement sur les routeurs", "D) Jamais"], c: 1, exp: "CDP est activé par défaut.", tags: ["cdp"], diff: 1, ref: "RT08, p.4" },
    { q: "LLDP est activé par défaut sur Cisco ?", o: ["A) Oui", "B) Non, il faut l'activer avec 'lldp run'", "C) Seulement sur IOS-XE", "D) Toujours"], c: 1, exp: "LLDP est désactivé par défaut sur Cisco.", tags: ["lldp"], diff: 2, ref: "RT08, p.6" },
    { q: "Quelle commande désactive CDP globalement ?", o: ["A) no cdp", "B) no cdp run", "C) cdp disable", "D) cdp off"], c: 1, exp: "no cdp run désactive CDP sur tout l'équipement.", tags: ["cdp"], diff: 2, ref: "RT08, p.4" },
    { q: "Quelle commande désactive CDP sur une interface ?", o: ["A) no cdp run", "B) no cdp enable", "C) cdp disable", "D) shutdown cdp"], c: 1, exp: "no cdp enable sur l'interface.", tags: ["cdp"], diff: 2, ref: "RT08, p.4" },
    { q: "Quelles informations CDP fournit-il ?", o: ["A) Seulement le nom", "B) Device ID, Platform, Port, IP", "C) Seulement l'IP", "D) Rien d'utile"], c: 1, exp: "CDP révèle beaucoup d'infos sur les voisins.", tags: ["cdp"], diff: 1, ref: "RT08, p.5" },
    { q: "Risque sécurité de laisser CDP/LLDP actif ?", o: ["A) Aucun", "B) Divulgation d'infos sur la topologie", "C) Meilleure sécurité", "D) Performances dégradées"], c: 1, exp: "CDP/LLDP = vulnérabilité, révèle la topologie.", tags: ["cdp", "lldp"], diff: 2, ref: "RT08, p.7" },
    { q: "LLDP-MED est une extension pour :", o: ["A) La sécurité", "B) VoIP, PoE, localisation", "C) Le routage", "D) Les VLANs"], c: 1, exp: "LLDP-MED = Media Endpoint Discovery (VoIP, PoE).", tags: ["lldp"], diff: 2, ref: "RT08, p.7" },
    { q: "Sur quels types d'interfaces LLDP fonctionne ?", o: ["A) Série uniquement", "B) Ethernet uniquement", "C) Toutes interfaces", "D) WiFi uniquement"], c: 1, exp: "LLDP ne fonctionne que sur Ethernet.", tags: ["lldp"], diff: 2, ref: "RT08, p.6" },
    { q: "Pourquoi désactiver CDP/LLDP vers l'extérieur ?", o: ["A) Pour économiser de la bande passante", "B) Pour éviter de révéler la topologie à des attaquants", "C) Pour améliorer les performances", "D) Pas de raison valable"], c: 1, exp: "Sécurité : ne pas exposer la topologie interne.", tags: ["cdp", "lldp"], diff: 2, ref: "RT08, p.7" }
];

// === EXERCICES PRATIQUES (16 labs) ===
const labs = [
    { id: 1, chapter: "RT01", title: "Identifier les couches hiérarchiques", scenario: "Un réseau d'entreprise comporte des switchs d'accès (24 ports chacun), des switchs de distribution avec ACLs, et deux routeurs cœur interconnectés. Identifiez chaque couche.", solution: "Accès: switchs 24 ports. Distribution: switchs avec ACLs. Cœur: routeurs interconnectés.", hints: ["Densité de ports = Accès", "ACLs = Distribution"] },
    { id: 2, chapter: "RT01", title: "Choisir le bon équipement", scenario: "Vous devez équiper une salle de 50 PCs + 10 téléphones IP. Quel type de switch recommandez-vous pour la couche Accès ?", solution: "Switch L2 avec PoE (pour téléphones IP) et au moins 60 ports ou stackable.", hints: ["PoE pour téléphones", "Prévoir évolutivité"] },
    { id: 3, chapter: "RT02", title: "Analyser une trame ARP", scenario: "PC1 (192.168.1.10) veut joindre PC2 (192.168.1.20). La table ARP est vide. Décrivez le processus.", solution: "1. PC1 envoie ARP Request broadcast 'Who has 192.168.1.20?'. 2. PC2 répond en unicast avec sa MAC. 3. PC1 met à jour son cache ARP.", hints: ["ARP Request = Broadcast", "ARP Reply = Unicast"] },
    { id: 4, chapter: "RT02", title: "Dépanner un problème de commutation", scenario: "Un PC ne peut pas communiquer avec un autre sur le même switch. La commande 'show mac address-table' ne montre pas l'adresse MAC du PC source. Quelle est la cause probable ?", solution: "Le PC n'a pas envoyé de trame. Vérifiez : câble, carte réseau, config IP.", hints: ["Le switch apprend via la source", "Pas de trame = pas d'apprentissage"] },
    { id: 5, chapter: "RT03", title: "Créer et affecter un VLAN", scenario: "Créez le VLAN 10 nommé 'SALES' et affectez le port Fa0/5.", solution: "Switch(config)# vlan 10\\nSwitch(config-vlan)# name SALES\\nSwitch(config)# interface fa0/5\\nSwitch(config-if)# switchport mode access\\nSwitch(config-if)# switchport access vlan 10", hints: ["vlan 10", "switchport access vlan 10"] },
    { id: 6, chapter: "RT03", title: "Configurer un trunk", scenario: "Configurez le port Gi0/1 en trunk avec le VLAN natif 99.", solution: "Switch(config)# interface gi0/1\\nSwitch(config-if)# switchport mode trunk\\nSwitch(config-if)# switchport trunk native vlan 99", hints: ["switchport mode trunk", "trunk native vlan"] },
    { id: 7, chapter: "RT04", title: "Router-on-a-stick config", scenario: "Configurez un routeur pour router entre VLAN 10 (10.0.10.0/24) et VLAN 20 (10.0.20.0/24) via l'interface Gi0/0.", solution: "Router(config)# interface gi0/0.10\\nRouter(config-subif)# encapsulation dot1Q 10\\nRouter(config-subif)# ip address 10.0.10.1 255.255.255.0\\nRouter(config)# interface gi0/0.20\\nRouter(config-subif)# encapsulation dot1Q 20\\nRouter(config-subif)# ip address 10.0.20.1 255.255.255.0", hints: ["Sous-interface .10 et .20", "encapsulation dot1Q"] },
    { id: 8, chapter: "RT04", title: "Configurer un Switch L3", scenario: "Activez le routage et créez les SVI pour VLAN 10 et 20 sur un switch L3.", solution: "DSW1(config)# ip routing\\nDSW1(config)# interface vlan 10\\nDSW1(config-if)# ip address 10.0.10.1 255.255.255.0\\nDSW1(config-if)# no shutdown\\nDSW1(config)# interface vlan 20\\nDSW1(config-if)# ip address 10.0.20.1 255.255.255.0\\nDSW1(config-if)# no shutdown", hints: ["ip routing", "interface vlan X", "no shutdown!"] },
    { id: 9, chapter: "RT05", title: "Diagnostiquer STP", scenario: "Un switch affiche un port en 'Blocking'. Est-ce normal ?", solution: "Oui, c'est normal si STP détecte un chemin alternatif vers le Root Bridge. Le port est bloqué pour éviter une boucle.", hints: ["Blocking = prévention de boucle", "show spanning-tree"] },
    { id: 10, chapter: "RT05", title: "Forcer le Root Bridge", scenario: "Forcez le switch SW1 comme Root Bridge pour le VLAN 1.", solution: "SW1(config)# spanning-tree vlan 1 root primary\\n# OU\\nSW1(config)# spanning-tree vlan 1 priority 4096", hints: ["root primary", "priorité basse = root"] },
    { id: 11, chapter: "RT06", title: "Créer un EtherChannel LACP", scenario: "Créez un EtherChannel entre deux switches avec les ports Fa0/1-4 en mode LACP Active.", solution: "SW1(config)# interface range fa0/1-4\\nSW1(config-if-range)# channel-group 1 mode active\\n# Répéter sur SW2", hints: ["interface range", "channel-group 1 mode active"] },
    { id: 12, chapter: "RT06", title: "Dépanner EtherChannel down", scenario: "L'EtherChannel ne monte pas. Les ports sont en mode Active des deux côtés. Quelle vérification faire ?", solution: "Vérifier que tous les ports ont la même config : speed, duplex, VLAN allowed, mode switchport. show etherchannel summary pour voir l'état.", hints: ["Mismatch = channel down", "show etherchannel summary"] },
    { id: 13, chapter: "RT07", title: "Configurer HSRP", scenario: "Configurez HSRP groupe 1 avec IP virtuelle 192.168.1.1 sur R1 (priorité 110) et R2 (priorité 100).", solution: "R1(config)# interface gi0/0\\nR1(config-if)# standby 1 ip 192.168.1.1\\nR1(config-if)# standby 1 priority 110\\nR1(config-if)# standby 1 preempt\\n\\nR2(config)# interface gi0/0\\nR2(config-if)# standby 1 ip 192.168.1.1\\nR2(config-if)# standby 1 preempt", hints: ["standby [group] ip", "standby [group] priority", "standby preempt"] },
    { id: 14, chapter: "RT07", title: "Activer le tracking HSRP", scenario: "Si l'interface Serial0/0 de R1 tombe, sa priorité HSRP doit baisser de 15.", solution: "R1(config)# interface gi0/0\\nR1(config-if)# standby 1 track Serial0/0 15", hints: ["standby track", "decrement value"] },
    { id: 15, chapter: "RT08", title: "Désactiver CDP sur une interface", scenario: "Désactivez CDP sur l'interface Gi0/1 connectée vers l'extérieur.", solution: "Switch(config)# interface gi0/1\\nSwitch(config-if)# no cdp enable", hints: ["no cdp enable sur l'interface", "Sécurité périmètre"] },
    { id: 16, chapter: "RT08", title: "Activer LLDP", scenario: "Activez LLDP globalement et vérifiez les voisins.", solution: "Switch(config)# lldp run\\nSwitch# show lldp neighbors", hints: ["lldp run", "show lldp neighbors"] }
];

// === GLOSSAIRE (50 termes) ===
const glossary = [
    { term: "VLAN", def: "Virtual LAN - segmentation L2 logique d'un switch" },
    { term: "Trunk", def: "Lien portant plusieurs VLANs avec tags 802.1Q" },
    { term: "SVI", def: "Switch Virtual Interface - interface virtuelle L3 pour un VLAN" },
    { term: "CAM", def: "Content Addressable Memory - table MAC du switch" },
    { term: "ARP", def: "Address Resolution Protocol - résolution IP → MAC" },
    { term: "BPDU", def: "Bridge Protocol Data Unit - message STP" },
    { term: "Root Bridge", def: "Switch élu racine dans STP (plus petit BID)" },
    { term: "EtherChannel", def: "Agrégation de liens physiques en un lien logique" },
    { term: "LACP", def: "Link Aggregation Control Protocol (IEEE 802.3ad)" },
    { term: "PAgP", def: "Port Aggregation Protocol (Cisco propriétaire)" },
    { term: "HSRP", def: "Hot Standby Router Protocol (Cisco)" },
    { term: "VRRP", def: "Virtual Router Redundancy Protocol (IETF)" },
    { term: "GLBP", def: "Gateway Load Balancing Protocol (Cisco)" },
    { term: "CDP", def: "Cisco Discovery Protocol" },
    { term: "LLDP", def: "Link Layer Discovery Protocol (IEEE 802.1ab)" },
    { term: "PortFast", def: "Transition STP directe en Forwarding" },
    { term: "RSTP", def: "Rapid Spanning Tree Protocol (802.1w)" },
    { term: "PVST+", def: "Per-VLAN Spanning Tree Plus (Cisco)" },
    { term: "DTP", def: "Dynamic Trunking Protocol (Cisco)" },
    { term: "802.1Q", def: "Standard de trunking VLAN avec tags 4 octets" },
    { term: "Native VLAN", def: "VLAN non-taggé sur un trunk" },
    { term: "Preemption", def: "Reprise automatique du rôle master/active" },
    { term: "Tracking", def: "Surveillance d'interface pour ajuster priorité FHRP" },
    { term: "BID", def: "Bridge Identifier (priorité + MAC)" },
    { term: "Port-channel", def: "Interface logique EtherChannel" },
    { term: "Router-on-stick", def: "Routage inter-VLAN via sous-interfaces" },
    { term: "Switch L3", def: "Switch capable de routage (SVI)" },
    { term: "Sous-interface", def: "Interface virtuelle sur routeur (Gi0/0.10)" },
    { term: "Broadcast storm", def: "Tempête de diffusion causée par boucle L2" },
    { term: "CSMA/CD", def: "Carrier Sense Multiple Access / Collision Detection" },
    { term: "Full-duplex", def: "Communication bidirectionnelle simultanée" },
    { term: "Half-duplex", def: "Communication bidirectionnelle non simultanée" },
    { term: "FCS", def: "Frame Check Sequence - CRC de la trame Ethernet" },
    { term: "OUI", def: "Organizationally Unique Identifier (24 premiers bits MAC)" },
    { term: "Access Port", def: "Port switch appartenant à un seul VLAN" },
    { term: "Trunk Port", def: "Port switch transportant plusieurs VLANs" },
    { term: "Flooding", def: "Envoi sur tous les ports (destination inconnue)" },
    { term: "Store-Forward", def: "Méthode commutation vérifiant CRC" },
    { term: "Cut-Through", def: "Méthode commutation à latence minimale" },
    { term: "Domaine collision", def: "Zone où les trames peuvent interférer" },
    { term: "Domaine broadcast", def: "Zone recevant les trames broadcast" },
    { term: "MAC Address", def: "Adresse physique 48 bits (6 octets)" },
    { term: "Backoff", def: "Attente aléatoire après collision CSMA/CD" },
    { term: "PoE", def: "Power over Ethernet - alimentation via câble réseau" },
    { term: "ACL", def: "Access Control List - filtrage de trafic" },
    { term: "QoS", def: "Quality of Service - priorisation du trafic" },
    { term: "AVG", def: "Active Virtual Gateway (GLBP)" },
    { term: "LAG", def: "Link Aggregation Group (synonyme EtherChannel)" },
    { term: "LLDP-MED", def: "Extension LLDP pour VoIP et PoE" },
    { term: "vlan.dat", def: "Fichier stockant les VLANs sur switch Cisco" }
];

// === FUSION DE TOUS LES QCM ===
const allQCM = [...qcmRT01, ...qcmRT02, ...qcmRT03, ...qcmRT04, ...qcmRT05, ...qcmRT06, ...qcmRT07, ...qcmRT08];

// Export pour utilisation
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { chapters, allQCM, labs, glossary };
}
