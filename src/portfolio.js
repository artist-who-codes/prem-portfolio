/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Premnaath Portfolio",
  description:
    "Alternant Data Analyst, avec un parcours solide en comptabilité, gestion et data, je transforme les données financières et opérationnelles en tableaux de bord clairs pour aider les entreprises à piloter leur activité.​Formé en BTS Comptabilité et Gestion puis en Licence Pro Comptabilité et Gestion, et actuellement en Bachelor Data Analyst, je relie le langage des chiffres (bilan, compte de résultat, trésorerie) aux outils modernes de la data (Python, SQL, Power BI, Excel avancé).",
  og: {
    title: "Premnaath Canagou Portfolio",
    type: "website",
    url: "http://premnaathcanagou.com/",
  },
};

//Home Page
const greeting = {
  title: "BALAKRICHENANE Premnaath Canagou",
  logo_name: "Premnaath Canagou",
  nickname: "Comptable & Data Analyst",
  subTitle:
    "Alternant Data Analyst, avec un parcours solide en comptabilité, gestion et data, je transforme les données financières et opérationnelles en tableaux de bord clairs pour aider les entreprises à piloter leur activité.​Formé en BTS Comptabilité et Gestion puis en Licence Pro Comptabilité et Gestion, et actuellement en Bachelor Data Analyst, je relie le langage des chiffres (bilan, compte de résultat, trésorerie) aux outils modernes de la data (Python, SQL, Power BI, Excel avancé).",
  resumeLink:
    "https://drive.google.com/file/d/1zTjsRPert6zbG80eqLZBiWM_0TD--loI/view?usp=drivesdk",
};

const socialMediaLinks = [
  {
    name: "LinkedIn",
    link:
      "https://www.linkedin.com/in/premnaath-canagou-balakrichenane-951b7a262/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@premjiamf?si=efM8wm_MaVAabhwG",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:prem.cana2002@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link:
      "https://www.instagram.com/premji_amf_3_6_1_9?igsh=NnFlbnVqNGtyM282&utm_source=qr",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
  {
    name: "Github",
    link: "https://github.com/premcana2002-prog",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
];

const skills = {
  data: [
    {
      title: "Comptabilité & Gestion",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Tenue et suivi comptable : enregistrement des opérations courantes, gestion des comptes clients/fournisseurs, suivi de plusieurs filiales et contrôle de la cohérence des écritures dans les logiciels comptables.",
        "⚡ Comptabilité clients / fournisseurs : gestion des factures, relances, lettrage des comptes, suivi des encaissements et décaissements pour assurer une vision fiable de la trésorerie.",
        "⚡ Rapprochements bancaires et contrôle des flux : vérification systématique des mouvements bancaires, identification des écarts et correction des anomalies pour fiabiliser les flux financiers.",
        "⚡ Analyse financière et comptable : analyse des flux financiers et des états comptables (charges, produits, marges) afin de fournir des éléments d’aide à la décision aux responsables et dirigeants.",
        "⚡ Clôtures et comptes annuels : participation aux inventaires, aux travaux de clôture mensuelle/annuelle et à la préparation des bilans, comptes de résultat et annexes.",
        "⚡ Fiscalité et déclarations : traitement de la TVA et des impôts courants, préparation des déclarations fiscales dans le respect des obligations légales.",
        "⚡ Gestion sociale et paie : participation à la gestion de la paie, aux formalités administratives liées aux salariés et à la veille réglementaire de base.",
        "⚡ Contrôle et fiabilisation des données : vérification, validation et mise en qualité des documents et données comptables, afin de garantir des informations fiables pour le reporting et l’analyse.",
      ],
      softwareSkills: [
        {
          skillName: "SAGE (COALA)",
          imageSrc: "SAGE.png",
        },
        {
          skillName: "COMPTA CIEL",
          imageSrc: "compta-ciel.png",
        },
        {
          skillName: "transfertBANQUE",
          imageSrc: "logo-transfertbanque.png",
        },
        {
          skillName: "Pennylane",
          imageSrc: "logo_pennylane.png",
        },
        {
          skillName: "Payfit",
          imageSrc: "PAYFIT_logo.png",
        },
        {
          skillName: "INGENEO",
          imageSrc: "INGENEO_logo.png",
        },
        {
          skillName: "EBP",
          imageSrc: "Logo-EBP.png",
        },
        {
          skillName: "My Silae",
          imageSrc: "MySilae_logo.png",
        },
        {
          skillName: "SAP",
          imageSrc: "sap.png",
        },
      ],
    },
    {
      title: "Data Analysis & Business Intelligence",
      fileName: "FullStackImg",
      skills: [
        "⚡ Nettoyage, structuration et analyse de données (Python, pandas, SQL, Power Query) pour fiabiliser les reportings décisionnels.",
        "⚡ Création de tableaux de bord interactifs sous Power BI et Excel avancé (VBA, TCD, DAX, KPI) pour le pilotage de l'activité.",
        "⚡ Modélisation de bases de données relationnelles et optimisation des flux de données.",
      ],
      softwareSkills: [
        {
          skillName: "python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Visual Studio Code",
          fontAwesomeClassname: "simple-icons:visualstudiocode",
          style: {
            color: "#0078D4",
          },
        },
        {
          skillName: "Jupyter",
          fontAwesomeClassname: "simple-icons:jupyter",
          style: {
            color: "#F37626",
          },
        },
        {
          skillName: "Knime",
          fontAwesomeClassname: "simple-icons:knime",
          style: {
            color: "#663399",
          },
        },
      ],
    },
    {
      title: "Automatisation & Outils Internes",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Développement de scripts Python et Excel/VBA pour automatiser les tâches répétitives et gagner du temps.",
        "⚡ Mise en place de flux ETL (extraction, transformation, chargement) via Power Query, SQL et Python.",
        "⚡ Web scraping multi-sources et intégration de données variées.",
      ],
      softwareSkills: [
        {
          skillName: "Excel",
          fontAwesomeClassname: "simple-icons:microsoftexcel",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "powerbi",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#FFCA28",
          },
        },
      ],
    },
    {
      title: "Pilotage & KPI Métier",
      fileName: "DesignImg",
      skills: [
        "⚡ Conception d'indicateurs pertinents pour le suivi de la performance financière et opérationnelle.",
        "⚡ Création de rapports décisionnels adaptés aux profils non techniques (managers, direction, équipes métier).",
        "⚡ Data quality : déduplication, enrichissement, fiabilisation des flux pour la confiance dans les chiffres.",
      ],
      softwareSkills: [
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "",
          fontAwesomeClassname: "",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};
const degrees = {
  degrees: [
    {
      title: "ENESIA School of Data and Artificial Intelligence - Paris 8",
      subtitle: "Bachelor Data Analyst",
      logo_path: "enesia.png",
      alt_name: "ENESIA",
      duration: "2025 - 2026",
      descriptions: [
        "⚡ Maîtrise des langages SQL, Python et C pour manipuler, analyser et automatiser des traitements de données.",
        "⚡ Nettoyage, correction et refonte de données via outils de programmation ou tableurs (Excel/Power Query) pour améliorer la qualité des datasets.",
        "⚡ Connaissance des modèles de services cloud (IaaS, PaaS, SaaS) et notions sur Azure / AWS.",
        "⚡ Compréhension des concepts de base d’architecture cloud et des enjeux de sécurité / conformité dans un environnement cloud.",
        "⚡ Notions sur les méthodes de migration vers le cloud et sur la réduction des risques (continuité, contrôle, fiabilisation des données).",
        "⚡ Alimentation et optimisation de tables (chargement de données nettoyées, structuration, déduplication, enrichissement).",
        "⚡ Modélisation relationnelle (clés primaires/étrangères) et fiabilisation des flux utilisés pour le reporting.",
        "⚡ Connaissance des techniques et outils de web scraping multi-sources pour collecter des données externes.",
        "⚡ Réalisation de visualisations et tableaux de bord avec Power BI (DAX, Power Query) et Excel avancé (TCD, VBA) pour faciliter la compréhension et la prise de décision.",
        "⚡ Conception et suivi de KPI pour le pilotage de l’activité (reporting décisionnel orienté métier).",
        "⚡ Compréhension des bases de l’IA et capacité à sélectionner des outils IA adaptés aux besoins de l’entreprise (ex. génération de rapports, automatisation de recherches).",
        "⚡ Notions de Machine Learning / Deep Learning et NLP (des projets concrets à montrer dans “Projects”).",
        "⚡ Analyse du besoin, vérification de faisabilité technique et proposition de solutions adaptées (approche orientée usage et contraintes métier).",
      ],
      website_link: "https://www.enesia.com/",
    },
    {
      title: "ENOES - l'Ecole de l'Expertise Comptable et de l'Audit - Paris 8",
      subtitle: "Licence professionnelle Comptabilité et Gestion",
      logo_path: "eones.png",
      alt_name: "ENOES",
      duration: "2024 - 2025",
      descriptions: [
        "⚡UE 1 - Analyse de l’organisation et de son environnement : économie, management d’activités, traitement numérique des données, communication financière, anglais des affaires, projet professionnel, travaux d’inventaire et analyse des états de synthèse.",
        "⚡UE 2 - Outils de contrôle de gestion : management des opérations, systèmes d’information décisionnels, tableaux de bord et reporting, processus budgétaire avancé, comptabilité de gestion approfondie, Excel avancé et programmation sur tableur, gestion de la masse salariale, contrôle de gestion dans le secteur public, utilisation de logiciels métiers.",
        "⚡UE 3 - Amélioration de la performance : contrôle budgétaire, audit financier et organisationnel, politique financière, outils de pilotage et introduction à la Business Intelligence.",
        "⚡UE 4 - Immersion professionnelle : projets autour de la transformation numérique, de l’amélioration de la performance, du renforcement du contrôle de gestion et de la rédaction d’un mémoire professionnel / projet tutoré.",
      ],
      website_link: "https://enoes.com/",
    },
    {
      title:
        "CNAM INTEC - Institut National des Techniques Économiques et Comptables - Paris 3",
      subtitle: "Licence (CCA) - Comptabilité, contrôle, audit",
      logo_path: "CNAM.png",
      alt_name: "CNAM INTEC",
      duration: "2023 - 2024",
      descriptions: [
        "⚡Licence CCA m’a permis d’approfondir les principaux piliers de la finance d’entreprise, du contrôle de gestion, de la comptabilité et du droit appliqué à l’entreprise. Elle s’est déroulée sur deux semestres (S1 et S2) avec un ensemble d’unités d’enseignement professionnalisantes et une période en entreprise pour mettre en pratique les notions vues en cours.",
        "⚡Finance d’entreprise (UE 435‑445 – 5 ECTS) : analyse financière, décisions d’investissement et de financement, compréhension des enjeux de rentabilité et de structure financière.",
        "⚡Contrôle de gestion (UE 433‑443 – 8 ECTS) : élaboration de budgets, calcul de coûts, analyse des écarts et mise en place d’outils de pilotage de la performance.",
        "⚡Comptabilité approfondie (UE 431‑441 – 8 ECTS) : opérations complexes, travaux de clôture, analyse des comptes annuels et normes comptables.",
        "⚡Droit fiscal approfondi (UE 436‑446 – 6 ECTS) : fiscalité des entreprises, TVA, impôts sur les sociétés, obligations déclaratives et optimisation dans le respect du cadre légal.",
        "⚡Droit du travail et droit social (UE 437‑447 – 4 ECTS) : relations employeur / salarié, contrat de travail, obligations sociales et règles applicables à la paie.",
        "⚡Droit des sociétés (UE 432‑442 – 3 ECTS) : formes juridiques, vie des sociétés, responsabilités des dirigeants et décisions collectives.",
        "⚡Anglais des affaires (UE 438‑448 – 6 ECTS) : vocabulaire professionnel, communication en contexte économique et financier, rédaction et compréhension de documents business.",
        "⚡Management (UE 434‑444 – 6 ECTS) : organisation, gestion des équipes, prise de décision et compréhension du fonctionnement des organisations.",
      ],
      website_link:
        "https://intec.cnam.fr/formations-a-la-comptabilite-au-controle-de-gestion-et-a-l-audit-821278.kjsp",
    },
    {
      title: "Lycée polyvalent Charles de Gaulle - Longperrier (77)",
      subtitle: "BTS : Brevet de technicien supérieur Comptabilité et Gestion",
      logo_path: "Ly.png",
      alt_name: "Lycée polyvalent Charles de Gaulle",
      duration: "2021 - 2023",
      descriptions: [
        "⚡ Bases solides en comptabilité, fiscalité, gestion, droit et outils informatiques de gestion.",
        "⚡ Utilisation quotidienne d’outils comptables et d’Excel, avec un début de logique d’automatisation des tâches.",
        "⚡ Maîtrise des opérations comptables : saisie, contrôle et production de l’information financière (comptes annuels, rapprochements bancaires, inventaires).",
        "⚡ Gestion des obligations fiscales et sociales : traitement de la TVA, gestion comptable de la paie, veille réglementaire et formalités URSSAF.",
        "⚡ Analyse et prévision de l’activité : calcul et contrôle des coûts, élaboration de tableaux de bord, gestion budgétaire et suivi de la trésorerie.",
        "⚡ Connaissances en droit comptable, du travail, de la sécurité sociale et fiscalité des entreprises.",
        "⚡ Contribution à la fiabilisation du système d’information comptable et participation à son amélioration.",
        "⚡ Stage professionnel de 10 semaines en entreprise pour appliquer les compétences en situation réelle.",
      ],
      website_link: "http://cdg-longperrier.fr/",
    },
    {
      title: "Lycée Français International de Pondichéry",
      subtitle:
        "Baccalauréat Technologique – STMG (Sciences et Technologies du Management et de la Gestion)",
      logo_path: "LFIP.png",
      alt_name: "Lycée Français International de Pondichéry",
      duration: "2020 - 2021",
      descriptions: [
        "⚡ Formation pluridisciplinaire en management, économie, droit et sciences de gestion, centrée sur la compréhension du fonctionnement des entreprises et des organisations.",
        "⚡ Initiation à la comptabilité, à l’analyse financière et au suivi des performances économiques (coûts, marges, indicateurs de gestion).",
        "⚡ Études de cas concrets, travaux de groupe et présentations orales développant l’esprit d’analyse, la rigueur et la capacité à argumenter.",
        "⚡ Utilisation d’outils bureautiques (Word, Excel, PowerPoint) pour la production de documents de gestion, tableaux de suivi et supports de présentation.",
        "⚡ Sensibilisation aux enjeux juridiques, fiscaux et managériaux des organisations, ainsi qu’aux bases de la prise de décision.",
        "⚡ Environnement international favorisant l’autonomie, l’adaptabilité, la communication interculturelle et la maîtrise du français académique dans un contexte multiculturel.",
      ],
      website_link: "https://lfpondichery.net/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Python pour la data science",
      subtitle: "Github - LinkedIn Learning",
      logo_path: "data-science.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/7223524e8e936c453a8d158346c6619319d0dc1ffadea63382c66c56860a3b6d?trk=share_certificate",
      alt_name: "datascience",
      color_code: "#4286f431",
    },
    {
      title: "Power BI Data Analyst",
      subtitle: "LinkedIn Learning",
      logo_path: "power-bi-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/15491a824fd3a321e56e512cfade24c630873d1ac86607724218f4d29e953099?trk=share_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BhwJej9C6QgGR%2B96Hv6kcAA%3D%3D",
      alt_name: "powerbi",
      color_code: "#f2c80e2c",
    },
    {
      title: "Python : L'analyse de données",
      subtitle: "Github - LinkedIn Learning",
      logo_path: "python-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/22b3a2cd4a5c973fd3293bef7f50e36c016c8d123efe836c9feb1d3df222c6c7?trk=share_certificate",
      alt_name: "python",
      color_code: "#0000002c",
    },

    {
      title: "Power BI avec ChatGPT",
      subtitle: "LinkedIn Learning",
      logo_path: "chatgpt-logo.png",
      certificate_link:
        "https://www.linkedin.com/learning/certificates/43dc3b3fa11011573cf4a34ca41cc8f0687ca0d32f56249eafde1377ace86e99?trk=share_certificate",
      alt_name: "chatgpt",
      color_code: "#0e4f1b65",
    },
  ],
};

// Experience Page
const experience = {
  title: "Expérience",
  subtitle: "Stage , Alternance et Freelance",
  description:
    "Grâce à mes expériences en cabinet comptable, en entreprise et en mission freelance, je combine aujourd’hui une solide culture financière avec des compétences en data pour construire des reportings adaptés aux besoins terrain.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Freelance",
      work: true,
      experiences: [
        {
          title: "Data Analyst Junior - Power BI (Freelance)",
          company: "ALFRIN DESIGN STUDIOS",
          company_url: "https://alfrin.in/",
          logo_path: "Alfrin.png",
          duration: "Août 2025 (1 mois)",
          location: "Pondichéry , Inde ",
          description:
            "Création de tableaux de bord Power BI pour le pilotage de l’activité (suivi de la performance, indicateurs clés, visualisations claires pour le management).Préparation et nettoyage des données (Power Query, Excel, éventuellement SQL) afin de fiabiliser les KPI et automatiser une partie du reporting.",
          color: "#000000",
        },
      ],
    },
    {
      title: "Alternance",
      experiences: [
        {
          title: "Comptable",
          company: "CHOPE MOI Pigalle",
          company_url: "https://chope-moi.fr/",
          logo_path: "CHOPE.png",
          duration: "Septembre 2024 - Juillet 2025",
          location: "Paris 18 , Île-de-France",
          description:
            "Suivi et analyse comptable de 7 filiales (saisie, lettrage, rapprochements bancaires). Extraction et traitement des données financières pour les rapports mensuels. Participation aux clôtures mensuelles et à la production des comptes annuels. Collaboration avec l’équipe dirigeante pour le suivi de la performance et la prise de décision. Utilisation d’outils comptables (PENNYLANE et PAYFIT).",
          color: "#000000",
        },
        {
          title: "Assistant Comptable",
          company: "CABINET BÉNÉDICT ET ASSOCIÉS",
          company_url:
            "https://annuaire.experts-comptables.org/expert-comptable/16098-cabinet-benedict-et-associes-paris-75008",
          logo_path: "Comp.png",
          duration: "Septembre 2023 - Juillet 2024",
          location: "Paris 8 , France",
          description:
            "Gestion d’un portefeuille de plus de 18 clients (saisie, révision, TVA, clôtures). Contrôle de cohérence des écritures comptables et des flux financiers. Participation aux bilans annuels et aux dossiers de révision. Fiabilisation des flux comptables et mise en place d’outils Excel automatisés (formules avancées, tableaux croisés dynamiques) Utilisation d’outils comptables (Sage Coala, MY PAYE, INGENEO, transfertBANQUE , Excel avancé).",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Stage",
      experiences: [
        {
          title: "Stagiaire Assistant Comptable",
          company: "TRANSPORT ELIEZ",
          company_url: "https://about.google/",
          logo_path: "eliez.png",
          duration: "2022",
          location: "Dammartin-en-Goële (77) , Île-de-France",
          description:
            "Stages de 6 semaines puis 4 semaines, participation à la saisie, au classement, aux rapprochements et à la préparation des documents comptables.​ Découverte du fonctionnement opérationnel d’une entreprise de transport et de l’importance de données fiables pour le suivi de l’activité.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

const OutilsLogiciels = {
  title: "",
  fileName: "",
  skills: [
    "⚡ Utilisation quotidienne de logiciels comptables pour la tenue, le contrôle et l’analyse des données financières.",
    "⚡ Création de reportings et tableaux de bord avec Excel, Power BI et outils de data visualisation.",
    "⚡ Développement et analyse de données avec Python dans VS Code, Jupyter et Google Colab.",
  ],

  softwareSkills: [
    { skillName: "Sage (Coala)", imageSrc: "SAGE.png" },
    { skillName: "TransfertBanque", imageSrc: "logo-transfertbanque.png" },
    { skillName: "Pennylane", imageSrc: "logo_pennylane.png" },
    { skillName: "Payfit", imageSrc: "PAYFIT_logo.png" },
    { skillName: "INGENEO", imageSrc: "INGENEO_Logo.png" },
    { skillName: "EBP", imageSrc: "Logo-EBP.png" },
    { skillName: "My Silae", imageSrc: "MySilae_Logo.png" },
    {
      skillName: "Excel avancé",
      fontAwesomeClassname: "simple-icons:microsoftexcel",
    },
    { skillName: "Power BI", fontAwesomeClassname: "simple-icons:powerbi" },
    {
      skillName: "VS Code",
      fontAwesomeClassname: "simple-icons:visualstudiocode",
    },
    { skillName: "Jupyter", fontAwesomeClassname: "simple-icons:jupyter" },
    {
      skillName: "Google Colab",
      fontAwesomeClassname: "simple-icons:googlecolab",
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url:
        "I am available on almost every social media. You can message me, I will reply within 24 hours.",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contactez-moi",
    profile_image_path: "prem.png",
    description:
      "Je suis joignable par email, LinkedIn, YouTube, Instagram et GitHub et je réponds rapidement. J’aide sur la comptabilité, le contrôle de gestion, l’analyse de données (Python, SQL, Power BI, Excel) et la création de tableaux de bord de performance.",
  },

  addressSection: {
    title: "Adresse",
    subtitle: "Sarcelles, Île-de-France, France",
    locality: "Sarcelles",
    country: "France",
    region: "Île-de-France",
    postalCode: "95200",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.fr/maps?q=Sarcelles",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

const iconSkillData = {};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
  OutilsLogiciels,
};
