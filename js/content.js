/*
  ============================================================
  CONTENU DU PORTFOLIO — C'EST LE SEUL FICHIER À MODIFIER
  ============================================================
  Le design (HTML/CSS) est terminé. Pour mettre à jour le site,
  modifie uniquement les valeurs ci-dessous. Pas besoin de
  toucher au HTML, au CSS ou au reste du JS.

  Conseils :
  - Laisse les guillemets " " autour de chaque texte.
  - Une virgule sépare chaque élément d'une liste { }, { }.
  - Ne supprime pas les accolades { } ni les crochets [ ].
*/

// Catégories utilisées pour ranger les réalisations professionnelles.
// L'ordre ici définit l'ordre d'affichage sur le site.
const PROJECT_CATEGORIES = [
  { key: "1ere-annee", label: "1ère année" },
  { key: "2eme-annee", label: "2ème année" },
  { key: "stage-1ere-annee", label: "Stage — 1ère année" },
  { key: "stage-2eme-annee", label: "Stage — 2ème année" }
];

const CONTENT = {

  // ----------------------------------------------------------
  // 1. PROFIL — remplace par tes infos (celles de ton CV)
  // ----------------------------------------------------------
  profile: {
    firstName: "Idriss",
    lastName: "Badad",
    role: "Étudiant BTS SIO — option SLAM",
    email: "idriss.badad@campus-la-chataigneraie.org",
    phone: "07 68 06 11 76",
    // Laisse vide "" si tu n'as pas de lien, sinon mets l'URL complète
    linkedin: "https://www.linkedin.com/feed/",
    github: "https://github.com/idrissbadad-ai",
    // Chemin vers ta photo. Dépose le fichier dans le dossier assets/
    // puis remplace ce chemin, ex: "assets/photo.jpg"
    photo: "assets/Photo_CV.png",
    aboutText: "En pleine formation BTS SIO, je combine rigueur académique et projets personnels en programmation. Je recherche un stage pour relever des défis concrets et apporter un regard neuf à votre stack technique. Motivé, autonome et prêt à coder !"
  },

  // ----------------------------------------------------------
  // 2. FORMATIONS — de la plus récente à la plus ancienne
  // ----------------------------------------------------------
  formations: [
    {
      periode: "2026 – 2027",
      etablissement: "Lycée la Chataigneraie",
      lieu: "76240 Le Mesnil-Esnard",
      diplome: "2ème année BTS SIO (Services Informatiques aux Organisations)",
      detail: "Spécialité SLAM (Solutions Logicielles et Applications Métiers)"
    },
    {
      diplome: "Stage de 1ère année — Application de gestion de tablettes",
      etablissement: "Hôtel du Département de la Seine-Maritime",
      lieu: "Quai Jean Moulin, 76100 Rouen",
      periode: "Mai 2026 - Juin 2026",
      detail: "Réalisation d'une application de gestion de tablette."
    },
    {
      periode: "2025 – 2026",
      etablissement: "Lycée la Chataigneraie",
      lieu: "76240 Le Mesnil-Esnard",
      diplome: "1ère année BTS SIO (Services Informatiques aux Organisations)",
      detail: "Spécialité SLAM (Solutions Logicielles et Applications Métiers)"
    },
    {
      periode: "2022 – 2025",
      etablissement: "Lycée Gallée",
      lieu: "76520 Franqueville-Saint-Pierre",
      diplome: "Baccalauréat général, spécialités Littérature Anglaise et Histoire Géopolitique",
      detail: "Mention Assez Bien"
    }
  ],

  // ----------------------------------------------------------
  // 3. EXPÉRIENCES PROFESSIONNELLES — de la plus récente à la plus ancienne
  // ----------------------------------------------------------
  experiences: [
    {
      poste: "Employé polyvalent",
      entreprise: "Kebab Royal Kebab",
      periode: "Juillet 2024 – Août 2024",
      description: "Gestion du stress et du travail en équipe."
    },
    {
      poste: "Vendeur polyvalent",
      entreprise: "Boutique de prêt-à-porter",
      periode: "Novembre 2023 – Janvier 2024", // renseigne les dates exactes
      description: "Autonomie et sens des responsabilités." // renseigne les missions réalisées
    }
  ],

  // ----------------------------------------------------------
  // 4. COMPÉTENCES TECHNIQUES — organisées par catégorie
  // ----------------------------------------------------------
skillCategories: [
  {
    category: "Développement web",
    items: ["HTML", "CSS", "PHP", "Symfony"]
  },
  {
    category: "Langages de programmation",
    items: ["C#", "Python", "Java", "PowerShell", "MS-DOS / Batch"]
  },
  {
    category: "Bases de données",
    items: ["MySQL","SQL Server","SQL (requêtes, manipulation de données)","NoSQL","MongoDB"]
  },
  {
    category: "Systèmes, virtualisation et infrastructure",
    items: ["Installation, configuration et sécurisation de systèmes","VMware","VirtualBox","Gestion d'un parc informatique (inventaire, déploiement)"]
  },
  {
    category: "Certifications",
    items: [
      { name: "RGPD", link: "realisation-detail.html?id=certifications-rgpd" },
      { name: "PIX", link: "realisation-detail.html?id=certifications-pix" }
    ]
  },
  {
    category: "Outils et conception",
    items: ["Rider (IDE)","Balsamiq"]
  }
],
  // ----------------------------------------------------------
  // 5. VIE ASSOCIATIVE
  // ----------------------------------------------------------
  vieAssociative: {
    organisation: "AFEV — Association de la Fondation Étudiante pour la Ville (Rouen)",
    role: "Tuteur bénévole",
    periode: "Octobre 2025 - Juillet 2026",
    missions: [
      "Accompagnement individuel de jeunes afin de lutter contre l'isolement social.",
      "Mise en place d'activités visant à renforcer la confiance en soi et l'autonomie.",
      "Contribution à la réduction des inégalités sociales et éducatives."
    ]
  },

  // ----------------------------------------------------------
  // 6. PROJETS — un objet { } par projet, ajoute-en autant que besoin
  // ----------------------------------------------------------
  projects: [
    {
      title: "Développement de mon portfolio",
      categorie: "1ere-annee", // valeurs possibles : "1ere-annee", "2eme-annee", "stage-1ere-annee", "stage-2eme-annee"
      context: "Projet Professionnelle",
      competences: ["Développer la présence en ligne de l'organisation : Participer à l'évolution d'un site web exploitant les données de l'organisation.", "Travailler en mode projet : Evaluer les indicateurs de suivi d'un projet et analyser les écarts", "Mettre à disposiition des utilisateurs un système informatique : Déployer un service", "Organiser son développement professionnel : Mettre en oeuvre des outils et stratégies de veille informationnelle"],
      description: "J'ai développé un site web à l'aide de l'I.A afin d'y acceuilir mon portfolio.",
      gallery: [
        {
          image: "assets/1ere/Projets/Site_wix.png",
          caption: "Étape 1 : 1ère version de mon site sur WIX qui m'a servie de squellette pour mon 'vrai' site. "
        },
        {
          image: "assets/1ere/Projets/Dev_portfolio_projet.png",
          caption: "Étape 2 : Séparation claire entre le contenu (un seul fichier content.js centralisant toutes mes données) et le design (HTML/CSS), permettant de mettre à jour le site en modifiant uniquement mes informations, sans toucher au code."
        },
        {
          image: "assets/1ere/Projets/Feuille_style.png",
          caption: "Étape 3 : Mise en place d'une feuille sombre inspirée des éditeurs de code, pour refléter mon profil de développeur."
        },
        {
          image: "assets/1ere/Projets/Git.png",
          caption: "Étape 4 : Publication de mon site sur Github afin de le partager au grand public."
        }
      ]
    },
    {
      title: "Développement de mon site Cybernews",
      categorie: "1ere-annee",
      context: "Projet Professionnelle",
      competences: ["Développer la présence en ligne de l'organisation : Participer à l'évolution d'un site web exploitant les données de l'organisation.", "Travailler en mode projet : Evaluer les indicateurs de suivi d'un projet et analyser les écarts", "Mettre à disposiition des utilisateurs un système informatique : Déployer un service", "Organiser son développement professionnel : Mettre en oeuvre des outils et stratégies de veille informationnelle"],
      description: "J'ai développement un site qui regroupe plusieurs actualités autour du cyber en Europe.",
      link: "",
      image: "assets/1ere/Projets/Dev_cybernews.png",
      gallery: [
        { image: "assets/1ere/Projets/BDD_Cybernews.png", caption: "Etape 1 : Réalisation de la base de donnée qui va garder les données sur PhpMyAdmin ." },
        { image: "assets/1ere/Projets/Code_gestion_news.png", caption: "Etape 2 : Code qui permet de classer chaque news dans une catégorie spécifique." },
        { image: "assets/1ere/Projets/Code_menu.png", caption: "Etape 3 : Création du menu dans un fichier include afin de le réutiliser dans toute les pages du site." },
        { image: "assets/1ere/Projets/Résultat_cybernews.png", caption: "Etape 4 : Résultat finale." }


      ]
    },
    {
      title: "Gestion et administration des utilisateurs",
      categorie: "1ere-annee",
      context: "Projet de BTS — Compétences ....",
      competences: [""],
      description: "J'ai réalisé un tp sur la création et la gestion des utilisateurs sur Windows de différente manière.",
      link: "",
      image: "assets/Admin.jpeg",
      gallery: [
        { image: "assets/1ere/Projets/Creation_user.png", caption: "Invite de commande : Création d'un utilisateur via l'invite de commande windows." },
        { image: "assets/1ere/Projets/Gestion_user.png", caption: "Invite de commande : Création d'un groupe afin d'y insérer les utilisateurs qui y correspondent." },
        { image: "assets/1ere/Projets/Gestion_user2.png", caption: "Invite de commande : Insertion des utiliseteurs dans le groupe dédier." },
        { image: "assets/1ere/Projets/", caption: "Interface Windows : Création d'un utilisateur via l'interface Windows." },
        { image: "assets/1ere/Projets/", caption: "Interface Windows : Création d'un groupe afin d'y insérer les utilisateurs qui y correspondent." },
        { image: "assets/1ere/Projets/", caption: "Interface Windows : Insertion des utiliseteurs dans le groupe dédier." },
      ]
    },
    {
      title: "Installation et paramétrage d'outils de développement (IDE, VS Code, GitHub...)",
      categorie: "1ere-annee",
      context: "Projet de BTS — Compétences ....",
      competences: [""],
      description: "Décris en 2-3 phrases le besoin, ta solution, et ton rôle exact dans le projet.",
      link: "",
      image: "assets/1ere/Images-venir.png",
      gallery: [
        { image: "", caption: "Décris ce que montre cette capture." },
        { image: "", caption: "Décris ce que montre cette capture." }
      ]
    },
    {
      title: "Certifications RGPD",
      categorie: "1ere-annee",
      context: "Projet Professionnelle",
      competences: [""],
      description: "J'ai réalisé les activtés RGPD ce qui m'a permis d'obtenir les certifications agréé par le RGPD.",
      link: "",
      image: "assets/Certifications/Certif_RGPD.jpg",
      galleryStyle: "compact",   
      gallery: [
        { image: "assets/Certifications/Certificat_1.jpg", caption: "Certification module 1" },
        { image: "assets/Certifications/Certificat_1,5.jpg", caption: "Certification module 2" },
        { image: "assets/Certifications/Certificat_2.jpg", caption: "Certification module 3" },
        { image: "assets/Certifications/Certificat_3.jpg", caption: "Certification module 4" },
        { image: "assets/Certifications/Certificat_4.jpg", caption: "Certification module 5" }
      ]
    },
    {
      title: "Certifications PIX",
      categorie: "1ere-annee",
      context: "Projet Professionnelle",
      competences: [""],
      description: "J'ai passé les epreuves PIX",
      link: "",
      image: "assets/PIX.png",
      galleryStyle: "compact",   
      gallery: [
        { image: "assets/Images-venir.png", caption: "Certification BTS" }, 
        { image: "assets/Certifications/Certif2_PIX.png", caption: "Certification Collège" },
        { image: "assets/Certifications/Certif1_PIX.png", caption: "Certification Lycée" },
      ]
    },
    {
      title: "Veille Technologique",
      categorie: "1ere-annee",
      context: "Projet de BTS — Compétences ....",
      competences: [""],
      description: "Décris en 2-3 phrases le besoin, ta solution, et ton rôle exact dans le projet.",
      link: "",
      image: "assets/1ere/Images-venir.png",
      gallery: [
        { image: "", caption: "Décris ce que montre cette capture." },
        { image: "", caption: "Décris ce que montre cette capture." }
      ]
    },
    {
      title: "A venir...",
      categorie: "2eme-annee",
      context: "Projet de BTS — Compétences ....",
      competences: [""],
      description: "Décris en 2-3 phrases le besoin, ta solution, et ton rôle exact dans le projet.",
      link: "",
      image: "assets/1ere/Images-venir.png",
      gallery: [
        { image: "", caption: "Décris ce que montre cette capture." },
        { image: "", caption: "Décris ce que montre cette capture." }
      ]
    },
    {
      title: "A faire",
      categorie: "stage-1ere-annee",
      context: "Projet de BTS — Compétences ....",
      competences: [""],
      description: "Décris en 2-3 phrases le besoin, ta solution, et ton rôle exact dans le projet.",
      link: "",
      image: "assets/1ere/Images-venir.png",
      gallery: [
        { image: "", caption: "Décris ce que montre cette capture." },
        { image: "", caption: "Décris ce que montre cette capture." }
      ]
    },
    {
      title: "A venir...",
      categorie: "stage-2eme-annee",
      context: "Projet de BTS — Compétences ....",
      competences: [""],
      description: "Décris en 2-3 phrases le besoin, ta solution, et ton rôle exact dans le projet.",
      link: "",
      image: "assets/1ere/Images-venir.png",
      gallery: [
        { image: "", caption: "Décris ce que montre cette capture." },
        { image: "", caption: "Décris ce que montre cette capture." }
      ]
    }
  ],

  // ----------------------------------------------------------
  // 7. VEILLE TECHNOLOGIQUE — ajoute une entrée à chaque article/sujet suivi
  // Trie du plus récent au plus ancien
  // ----------------------------------------------------------
  // ----------------------------------------------------------
  // VEILLE — présentation du sujet, avant la liste des news
  // ----------------------------------------------------------
  veilleIntro: {
    presentation: "Le NoSQL (\"Not Only SQL\") regroupe des bases de données qui s'éloignent du modèle relationnel classique (tables, jointures) au profit de structures plus flexibles : documents JSON (MongoDB), clé-valeur (Redis), colonnes (Cassandra) ou graphes (Neo4j). Ces bases sont nées pour répondre aux besoins de scalabilité et de flexibilité des applications web modernes à fort volume de données.",

    pourquoi: "J'ai choisi de suivre ce sujet car je maîtrise déjà les bases de données relationnelles (MySQL, SQL Server) dans ma formation, et je voulais comprendre un paradigme différent, de plus en plus utilisé dans les architectures web actuelles (API REST, applications temps réel). C'est aussi une compétence recherchée en entreprise, où SQL et NoSQL sont souvent utilisés en complément l'un de l'autre.",

    // Les 2 bornages qui délimitent le sujet de ta veille
    bornages: [
      {
        title: "Évolutions et innovations des bases NoSQL",
        description: "Suivre les évolutions, nouvelles fonctionnalités et innovations des technologies NoSQL."
      },
      {
        title: "Sécurité, performances et usages du NoSQL",
        description: "Suivre les enjeux de sécurité, de performances et les nouveaux usages des bases de données NoSQL."
      }
    ],

    // Outils utilisés pour effectuer ta veille
    outils: [
      {
        name: "Flux RSS / Feedly",
        description: "Agrégation d'articles techniques publiés sur des blogs spécialisés en base de données.",
        url: ""
      },
      {
        name: "Google Alertes",
        description: "Alertes automatiques par email sur les mots-clés \"NoSQL\", \"MongoDB\", \"Redis\".",
        url: ""
      },
      {
        name: "Newsletters techniques",
        description: "Ex : Developpez.com, JournalDuNet, pour les actualités françaises du secteur.",
        url: ""
      },
      {
        name: "TalkWalker",
        description: "Surveillance des actualités et des tendances liées aux technologies et aux bases de données sur le Web.",
        url: ""
      },
      {
        name: "MailBrew",
        description: "Centralisation et réception par e-mail des actualités et informations issues de différentes sources technologiques.",
        url: ""
      },
      {
        name: "FlipBoard",
        description: "Sélection et consultation d’articles d’actualité technologique provenant de différentes sources spécialisées.",
        url: ""
      },
      {
        name: "Inoreader",
        description: "Agrégation et suivi des flux RSS provenant de blogs et sites spécialisés dans les technologies et les bases de données.",
        url: ""
      },
      {
        name: "A venir...",
        description: "",
        url: ""
      }
    ],

      // Comment tu as concrètement mis en pratique ce que tu as appris en veille
    miseEnOeuvre: {
      intro: "Voici comment j'ai concrètement appliqué mes recherches sur le NoSQL dans un projet.",
      points: [
        {
          title: "A FAIRE OU CHANGER : Test avec MongoDB",
          description: "Installation d'une base MongoDB en local, création d'une collection de test pour comparer la structuration des données avec une base relationnelle classique."
        }
      ]
    }
  },

    veille: [
    //Mars
    {
      date: "2026-03-26",
      title: "MongoDB continue de développer son utilisation dans l'IA",
      source: "InfoQ",
      url: "https://www.infoq.com/presentations/MongoDB-evolution/?topicPageSponsorship=8f193681-1bdc-4ec4-a99d-7c560124ba35&_gl=1*c2djmr*_up*MQ..*_ga*MzI4NTk4MjMwLjE3ODgxMTYxNzI.*_ga_VMVPD4D2JY*czE3ODgxMTYxNzEkbzEkZzAkdDE3ODgxMTYxNzEkajYwJGwwJGgw",
      tags: ["Evolutions et Innovations"],
      summary: "Une présentation publiée le 26 mars 2026 sur InfoQ revient sur l'évolution de MongoDB et sur la manière dont la base s'est développée depuis sa création. Les intervenants expliquent notamment comment son modèle de documents et son approche open source ont participé à son adoption. C'est une actualité assez simple pour comprendre pourquoi MongoDB est devenu l'une des bases NoSQL les plus connues"
    },

    {
      date: "2026-03-31",
      title: "MongoDB face à PostgreSQL : deux approches différentes",
      source: "UpCloud",
      url: "https://www.techradar.com/pro/security/mongodb-instances-are-being-hit-in-data-extortion-attacks-so-make-sure-youre-protected?utm_source=chatgpt.com",
      tags: ["Securité et Performance"],
      summary: "Cet article compare MongoDB et PostgreSQL. Il explique que MongoDB est particulièrement intéressant lorsque les données évoluent rapidement et doivent être distribuées facilement, tandis que PostgreSQL reste très adapté aux données relationnelles et aux transactions. L'article montre surtout qu'il ne faut pas chercher à savoir quelle technologie est « meilleure », mais choisir celle qui correspond au besoin."   
    },

    //Avril
    {
      date: "2026-04-20",
      title: "Redis s'intéresse au machine learning",
      source: "Redis",
      url: "https://www.infoq.com/presentations/MongoDB-evolution/?topicPageSponsorship=8f193681-1bdc-4ec4-a99d-7c560124ba35&_gl=1*c2djmr*_up*MQ..*_ga*MzI4NTk4MjMwLjE3ODgxMTYxNzI.*_ga_VMVPD4D2JY*czE3ODgxMTYxNzEkbzEkZzAkdDE3ODgxMTYxNzEkajYwJGwwJGgw",
      tags: ["Evolutions et Innovations"],
      summary: "Redis a présenté Redis Feature Form, une solution destinée à faciliter la gestion des données utilisées par les modèles de machine learning. L'objectif est de permettre aux équipes de mieux préparer et fournir les données nécessaires à leurs modèles."
    },
    {
      date: "2026-04-27",
      title: "Redis améliore la surveillance de ses applications",
      source: "Redis",
      url: "https://redis.io/blog/introducing-redis-feature-form/?utm_source=chatgpt.com",
      tags: ["Securité et Performance"],
      summary: "Redis a présenté une intégration avec OpenTelemetry pour permettre aux développeurs de mieux observer les applications utilisant Redis. L'objectif est de suivre plus facilement les performances et de détecter les problèmes."
    },

    //Mai
    {
      date: "2026-05-07",
      title: "MongoDB adapte sa plateforme à l'IA",
      source: "MongoDB",
      url: "https://www.mongodb.com/company/newsroom/press-releases/mongodb-makes-enterprise-ai-production-ready?utm_source=chatgpt.com",
      tags: ["Evolutions et Innovations"],
      summary: "MongoDB a annoncé de nouvelles fonctionnalités destinées à faciliter le développement d'applications utilisant l'intelligence artificielle. L'entreprise cherche notamment à réunir les données, la recherche et les fonctionnalités nécessaires aux agents IA dans une même plateforme."
    },
    {
      date: "2026-05-05",
      title: "Redis Iris permet aux IA d'utiliser les données d'une entreprise",
      source: "Redis",
      url: "https://redis.io/blog/security-advisory-cve202623479-cve202625243-cve-2026-25588-cve202625589-cve-2026-23631/?utm_source=chatgpt.com",
      tags: ["Securité et Performance"],
      summary: "Redis a annoncé la correction de plusieurs vulnérabilités de sécurité affectant certaines versions de Redis. Certaines de ces failles pouvaient, dans certaines conditions, permettre à un utilisateur authentifié de provoquer des problèmes importants sur le serveur. Redis a donc publié des correctifs et recommande aux utilisateurs de mettre leurs versions à jour."
    },

    //Juin
    {
      date: "2026-06-30",
      title: "MongoDB améliore l'accès aux données pour les entreprises",
      source: "MongoDB",
      url: "https://investors.mongodb.com/news-releases/news-release-details/mongodb-delivers-accurate-ai-retrieval-wherever-enterprise-data?utm_source=chatgpt.com",
      tags: ["Securité et Performance"],
      summary: "MongoDB a annoncé de nouvelles possibilités pour permettre aux entreprises d'utiliser leurs données avec des applications d'IA, y compris dans des environnements privés ou sur leurs propres infrastructures. L'objectif est notamment de permettre aux entreprises de conserver davantage de contrôle sur leurs données tout en utilisant des fonctionnalités modernes de recherche."
    },
    {
      date: "2026-06-30",
      title: "Couchbase développe une infrastructure NoSQL pour les agents IA",
      source: "Block&Files",
      url: "https://www.blocksandfiles.com/ai-ml/2026/06/30/couchbase-wants-to-serve-and-remember-data-for-ai-agents/5264312?utm_source=chatgpt.com",
      tags: ["Evolutions et Innovations"],
      summary: "Chris Mellor a publié un article présentant l'AI Data Plane de Couchbase, une nouvelle infrastructure destinée aux applications utilisant des agents d'intelligence artificielle. Elle permet notamment aux agents de conserver des informations et d'accéder à des données actualisées. Cette évolution montre que les bases NoSQL cherchent à s'adapter aux nouveaux usages de l'IA, au-delà du simple stockage de données."
    },

    //Juillet
    {
      date: "2026-07-06",
      title: "Netflix améliore les performances de Cassandra",
      source: "InfoQ",
      url: "https://www.infoq.com/news/2026/07/netflix-cassandra-partition/?topicPageSponsorship=faa31804-387f-4e1f-92e3-e2153107645e&_gl=1*dckt20*_up*MQ..*_ga*MjAyNjU2MDM4NC4xNzg4MTE4MDEw*_ga_VMVPD4D2JY*czE3ODgxMTgwMDkkbzEkZzAkdDE3ODgxMTgwMDkkajYwJGwwJGgw",
      tags: ["Securité et Performance"],
      summary: "InfoQ a présenté une évolution de l'infrastructure de Netflix utilisant Cassandra. Netflix cherchait notamment à réduire le temps nécessaire pour récupérer certaines données. L'article montre comment une grande entreprise peut adapter une base NoSQL pour répondre à des besoins de performance très importants.",
    },
    {
      date: "2026-07-01",
      title: "MongoDB rend la recherche vectorielle plus accessible",
      source: "MongoDB",
      url: "https://www.mongodb.com/company/blog/product-release-announcements/mongodb-search-vector-search-now-run-anywhere?utm_source=chatgpt.com",
      tags: ["Evolutions et Innovations"],
      summary: "MongoDB a annoncé que ses fonctionnalités de recherche textuelle et vectorielle étaient désormais disponibles dans davantage de déploiements. Cela permet aux développeurs d'utiliser MongoDB pour rechercher des informations de manière classique ou en fonction de leur sens. L'évolution est particulièrement intéressante pour les applications modernes utilisant l'IA."
    },

    //Août
    {
      date: "2026-08-16",
      title: "AWS ajoute la recherche vectorielle à DynamoDB",
      source: "InfoQ",
      url: "https://www.infoq.com/news/2026/08/aws-dynamodb-vector-search/?topicPageSponsorship=8f193681-1bdc-4ec4-a99d-7c560124ba35&_gl=1*3jdcdu*_up*MQ..*_ga*MTMxOTU3MDEwLjE3ODgxMTgyNTI.*_ga_VMVPD4D2JY*czE3ODgxMTgyNTEkbzEkZzAkdDE3ODgxMTgyNTEkajYwJGwwJGgw",
      tags: ["Evolutions et Innovations"],
      summary: "InfoQ a annoncé qu'AWS ajoutait une fonctionnalité de recherche vectorielle directement à DynamoDB. Cette évolution permet aux développeurs d'utiliser DynamoDB pour certains besoins liés à la recherche sémantique et à l'IA. C'est un bon exemple de l'évolution des bases NoSQL vers les nouveaux usages liés à l'intelligence artificielle.",
    },
    {
      date: "2026-08-24",
      title: "AWS renforce la sécurité de ses bases de données face aux nouveaux risques liés à l'IA",
      source: "TechTarget",
      url: "https://www.techtarget.com/data-technologies/feature/AWS-emphasizing-database-security-as-AI-powers-new-threats?utm_source=chatgpt.com",
      tags: ["Securité et Performance"],
      summary: "Cet article consacré à l'évolution de la sécurité des bases de données AWS avec l'arrivée des agents d'IA. L'article explique que des services comme DynamoDB, DocumentDB et ElastiCache doivent désormais prendre en compte de nouveaux risques, car les agents IA peuvent accéder automatiquement à des données et effectuer des actions. AWS cherche donc à renforcer la sécurité directement dans ses services plutôt que de la considérer comme une étape ajoutée après coup."
    }
  ],

  // ----------------------------------------------------------
  // 8. RECTORAT — informations et documents officiels attendus
  // par ton établissement / académie pour la validation du
  // portfolio numérique (E4). Vérifie avec ton professeur la
  // liste exacte demandée et adapte les champs ci-dessous.
  // ----------------------------------------------------------
  rectorat: {
    introText: " Cette page présente mes réalisations professionnelles réalisées au fil de l'année de BTS, et les compétences que j'ai pu développer grâce à elles.",
      documents: [
      {
        title: "Tableau de synthèse des réalisations professionnelles",
        description: "Vous trouverez mes réalisations professionnelles ci-dessous :",
        preview: "assets/1ere/IBA_tableau_synthese_realisations_professionnelles_page.jpg",
        file: "assets/1ere/IBA_tableau_synthese_realisations_professionnelles_page.pdf"
      },
      {
      title: "Attestation de stage - 1ère année",
      description: "Vous trouverez mon attestation de stage de 1ère année ci-dessous :",
      preview: "assets/1ere/IBA_Attestation_Stage.png", 
      group: "attestations-stage",
      file: "assets/1ere/IBA_Attestation_Stage.pdf"     
      },
      {
      title: "Attestation de stage - 2ème année",
      description: "Vous trouverez mon attestation de stage de 2ème année ci-dessous :",
      preview: "assets/Images-venir.png", 
      group: "attestations-stage",
      file: "assets/Images-venir.pdf"     
      },

      // ... tes documents existants (Convention de stage, Attestation...) restent en dessous
    ]
  }
};
