/**
 * Internationalization (i18n) Module
 * Supports: English (default), Italian, French, German
 */

const translations = {
    en: {
        // Navigation
        'nav.about': 'About',
        'nav.experience': 'Experience',
        'nav.projects': 'Projects',
        'nav.skills': 'Skills',
        'nav.tools': 'Tools',
        'nav.certifications': 'Certifications',
        'nav.education': 'Education',
        'nav.contact': 'Contact',
        'nav.resume': 'Resume',

        // Hero
        'hero.greeting.pre': 'const',
        'hero.greeting.var': 'greeting',
        'hero.name': '"Hi, I\'m <span class=\\"highlight\\">Francesco Ceruzzi</span>";',
        'hero.description': 'Cybersecurity Auditor with experience in penetration testing, static code analysis, and CI/CD pipeline security. I protect government applications and infrastructures with a passion for ethical hacking and innovation.',
        'hero.cta.contact': 'Get in Touch',
        'hero.cta.projects': 'View Projects',
        'hero.scroll': 'scroll',

        // Typed phrases
        'typed.0': 'Cybersecurity Auditor',
        'typed.1': 'Ethical Hacker (CEH)',
        'typed.2': 'Penetration Tester',
        'typed.3': 'Security Analyst',
        'typed.4': 'Python Developer',

        // About
        'about.title': 'About Me',
        'about.p1': 'I\'m a <span class="highlight">Cybersecurity Auditor</span> at <span class="syntax-string">Sogei S.p.A.</span>, where I protect government websites and applications through in-depth penetration testing, static code analysis, and implementation of security practices in CI/CD pipelines.',
        'about.p2': 'With a Master\'s degree in Computer Engineering and a <span class="highlight">CEH (Certified Ethical Hacker)</span> certification, I combine advanced technical skills with a methodical approach to cybersecurity. I also have experience in teaching and software development.',
        'about.location.label': 'location:',
        'about.location.value': '"Rome, Italy"',
        'about.email.label': 'email:',
        'about.email.value': '"francescoceruzzi@gmail.com"',
        'about.role.label': 'role:',
        'about.role.value': '"Cybersecurity Auditor"',
        'about.cert.label': 'certification:',
        'about.cert.value': '"CEH — Certified Ethical Hacker"',

        // Experience
        'exp.title': 'Experience',
        'exp.1.role': 'Cybersecurity Auditor',
        'exp.1.company': '@ Sogei S.p.A.',
        'exp.1.date': 'January 2022 — Present · Rome, Italy',
        'exp.1.d1': 'In-depth penetration testing of government websites following the OWASP Top 10 standard, using advanced tools to detect and identify vulnerabilities',
        'exp.1.d2': 'Static code and library analysis for applications written in various programming languages, using tools such as Checkmarx and Nexus IQ',
        'exp.1.d3': 'Python scripting for task automation, process optimization, and custom solution development',
        'exp.1.d4': 'Implementation of robust security measures in Azure Pipelines to ensure integrity and confidentiality of CI/CD processes',
        'exp.1.d5': 'Definition of secure development guidelines for Java, Angular, .NET, iOS, Android, PHP, and React',
        'exp.1.d6': 'Staff training, onboarding, and creation of video tutorials for Security Awareness',

        'exp.2.role': 'Teacher',
        'exp.2.company': '@ Istituto Omnicomprensivo Statale',
        'exp.2.date': 'December 2019 — December 2021 · Corleto Perticara, Italy',
        'exp.2.d1': 'Teaching educational Virtual Reality and 3D modeling',
        'exp.2.d2': 'Coding through robotics',
        'exp.2.d3': 'Training on the Office suite',

        'exp.3.role': 'Software Developer',
        'exp.3.company': '@ Graldev S.r.l.',
        'exp.3.date': 'September 2019 — December 2019 · Potenza, Italy',
        'exp.3.d1': 'Frontend and backend development of websites in Java, C#, HTML, JavaScript, and CSS',
        'exp.3.d2': 'Development and debugging of mobile applications in Swift and Android',
        'exp.3.d3': 'Database management with SQL Server and MySQL',

        // Projects
        'proj.title': 'Projects',
        'proj.1.title': 'XSS Lab',
        'proj.1.desc': 'An educational vulnerable lab for testing and understanding Cross-Site Scripting (XSS) vulnerabilities in Java applications. Implements 5 types of XSS attacks with both vulnerable and secure versions using Spring Boot and Thymeleaf.',
        'proj.2.title': 'SQL Injection Lab',
        'proj.2.desc': 'A comprehensive vulnerable lab for testing and understanding SQL Injection vulnerabilities in Java applications. Implements 7 types of SQL Injection attacks using Spring Boot and JDBC for educational purposes.',
        'proj.3.title': 'SciRoc Challenge 2021',
        'proj.3.desc': 'Winner project of the Smart City Robotics Challenge (SciRoc) for sign language interpretation. Development of a robotic system for real-time gesture recognition using Machine Learning and Computer Vision.',
        'proj.4.title': 'SAR Image Reconstruction',
        'proj.4.desc': 'Automated tool for studying Synthetic Aperture Radar (SAR) images, analyzing building ground footprints and their changes over time. Uses images from TerraSAR-X and Sentinel constellations with unsupervised detection algorithms.',
        'proj.5.title': 'Jet Ski Nitro',
        'proj.5.desc': 'A third-person racing game that puts the player at the helm of a jet ski in a tropical paradise. Built with C++ and OpenGL for an immersive gaming experience.',
        'proj.6.title': 'Pixel-wise Segmentation',
        'proj.6.desc': 'Master\'s thesis project on pixel-wise segmentation of workpiece images for automotive applications. Uses SegNet deep learning architecture for semantic segmentation, with custom tools for point cloud generation from segmented images.',
        'proj.7.title': 'Secure Code Academy',
        'proj.7.desc': 'E-learning platform on secure coding: micro-courses with interactive theory, quizzes with four question types and live tournaments joined via link, with a real-time leaderboard. Static site on GitHub Pages backed by a Cloudflare Worker API with D1 and Durable Objects.',

        // Skills
        'skills.title': 'Skills',
        'skills.security': 'Security',
        'skills.languages': 'Languages',
        'skills.other': 'Other',
        'skills.s1': 'Ethical Hacking',
        'skills.s2': 'Web Penetration Testing',
        'skills.s3': 'SAST / SCA',
        'skills.s4': 'WAPT',
        'skills.s5': 'Secure Coding Guidelines',
        'skills.s6': 'Security Awareness Training',
        'skills.l1': 'Python',
        'skills.l2': 'Java',
        'skills.l3': 'C# / .NET',
        'skills.l4': 'JavaScript / HTML / CSS',
        'skills.l5': 'C++ / OpenCV',
        'skills.l6': 'SQL / Matlab',
        'skills.o1': 'Machine Learning',
        'skills.o2': 'Software Development',
        'skills.o3': 'Project Management',
        'skills.o4': 'Italian — Native',
        'skills.o5': 'English — Fluent',
        'skills.o6': 'French — Basic',

        // Tools
        'tools.title': 'Tools',

        // Certifications
        'certs.title': 'Certifications',
        'certs.1.name': 'CEH — Certified Ethical Hacker',
        'certs.1.org': 'EC-Council',
        'certs.1.desc': 'International certification in Ethical Hacking and Penetration Testing. Validates skills in information security assessment, attack vectors identification, and countermeasures implementation.',
        'certs.1.date': 'June 2023',
        'certs.2.name': 'SciRoc Challenge — Winner',
        'certs.2.org': 'Sign Language Interpretation Task',
        'certs.2.desc': 'Smart City Robotics Challenge',
        'certs.2.date': 'September 2021',
        'certs.3.name': 'Spring Security',
        'certs.3.org': 'Spring',
        'certs.3.desc': 'Certification in Spring Security framework for securing Java applications.',
        'certs.3.date': 'January 2024',
        'certs.4.name': 'HCL AppScan DAST',
        'certs.4.org': 'HCL Software',
        'certs.4.desc': 'Certification in Dynamic Application Security Testing with HCL AppScan.',
        'certs.4.date': 'March 2024',
        'certs.5.name': 'Checkmarx SAST Certified Engineer Training',
        'certs.5.org': 'Checkmarx',
        'certs.5.desc': 'Certified Engineer Training in Static Application Security Testing with Checkmarx.',
        'certs.5.date': 'July 2024',

        // Education
        'edu.title': 'Education',
        'edu.1.degree': 'Master\'s Degree',
        'edu.1.field': 'Computer Engineering (M.Sc.)',
        'edu.1.school': 'University of Basilicata',
        'edu.1.thesis': 'Thesis: "Pixel wise segmentation of workpiece images for automotive application"',
        'edu.1.date': '2021',
        'edu.2.degree': 'Bachelor\'s Degree',
        'edu.2.field': 'Computer Science (B.Sc.)',
        'edu.2.school': 'University of Basilicata',
        'edu.2.thesis': 'Thesis: "Experiments in reconstructing the RADAR footprint of buildings using sequences of SAR images"',
        'edu.2.date': '2017',

        // Contact
        'contact.title': 'Contact',
        'contact.comment': '// Want to tell me more?',
        'contact.text': 'Don\'t hesitate to contact me!',
        'contact.btn': 'Say Hello',

        // Footer
        'footer.text': '// by Francesco Ceruzzi'
    },

    it: {
        // Navigation
        'nav.about': 'Chi sono',
        'nav.experience': 'Esperienza',
        'nav.projects': 'Progetti',
        'nav.skills': 'Competenze',
        'nav.tools': 'Strumenti',
        'nav.certifications': 'Certificazioni',
        'nav.education': 'Formazione',
        'nav.contact': 'Contatti',
        'nav.resume': 'CV',

        // Hero
        'hero.greeting.pre': 'const',
        'hero.greeting.var': 'greeting',
        'hero.name': '"Ciao, sono <span class=\\"highlight\\">Francesco Ceruzzi</span>";',
        'hero.description': 'Cybersecurity Auditor con esperienza in penetration testing, analisi statica del codice e sicurezza delle pipeline CI/CD. Proteggo applicazioni e infrastrutture governative con passione per l\'ethical hacking e l\'innovazione.',
        'hero.cta.contact': 'Contattami',
        'hero.cta.projects': 'Vedi i progetti',
        'hero.scroll': 'scroll',

        // Typed phrases
        'typed.0': 'Cybersecurity Auditor',
        'typed.1': 'Ethical Hacker (CEH)',
        'typed.2': 'Penetration Tester',
        'typed.3': 'Security Analyst',
        'typed.4': 'Python Developer',

        // About
        'about.title': 'Chi sono',
        'about.p1': 'Sono un <span class="highlight">Cybersecurity Auditor</span> presso <span class="syntax-string">Sogei S.p.A.</span>, dove mi occupo di proteggere siti web e applicazioni governative attraverso penetration testing approfonditi, analisi statica del codice e implementazione di pratiche di sicurezza nelle pipeline CI/CD.',
        'about.p2': 'Con una laurea magistrale in Ingegneria Informatica e la certificazione <span class="highlight">CEH (Certified Ethical Hacker)</span>, combino competenze tecniche avanzate con un approccio metodico alla sicurezza informatica. Ho esperienza anche nell\'insegnamento e nello sviluppo software.',
        'about.location.label': 'location:',
        'about.location.value': '"Roma, Italia"',
        'about.email.label': 'email:',
        'about.email.value': '"francescoceruzzi@gmail.com"',
        'about.role.label': 'role:',
        'about.role.value': '"Cybersecurity Auditor"',
        'about.cert.label': 'certification:',
        'about.cert.value': '"CEH — Certified Ethical Hacker"',

        // Experience
        'exp.title': 'Esperienza',
        'exp.1.role': 'Cybersecurity Auditor',
        'exp.1.company': '@ Sogei S.p.A.',
        'exp.1.date': 'Gennaio 2022 — Presente · Roma, Italia',
        'exp.1.d1': 'Penetration testing approfonditi di siti web governativi secondo lo standard OWASP Top 10, utilizzando strumenti avanzati per rilevare e identificare vulnerabilità',
        'exp.1.d2': 'Analisi statica del codice e delle librerie per applicazioni scritte in diversi linguaggi di programmazione, con strumenti come Checkmarx e Nexus IQ',
        'exp.1.d3': 'Scripting in Python per automazione di task, ottimizzazione di processi e sviluppo di soluzioni custom',
        'exp.1.d4': 'Implementazione di misure di sicurezza robuste nelle Azure Pipelines per garantire integrità e confidenzialità dei processi CI/CD',
        'exp.1.d5': 'Definizione di linee guida per lo sviluppo sicuro in Java, Angular, .NET, iOS, Android, PHP e React',
        'exp.1.d6': 'Formazione del personale, onboarding e creazione di video tutorial per la Security Awareness',

        'exp.2.role': 'Docente',
        'exp.2.company': '@ Istituto Omnicomprensivo Statale',
        'exp.2.date': 'Dicembre 2019 — Dicembre 2021 · Corleto Perticara, Italia',
        'exp.2.d1': 'Insegnamento di Realtà Virtuale educativa e modellazione 3D',
        'exp.2.d2': 'Coding attraverso la robotica',
        'exp.2.d3': 'Formazione sulla suite Office',

        'exp.3.role': 'Software Developer',
        'exp.3.company': '@ Graldev S.r.l.',
        'exp.3.date': 'Settembre 2019 — Dicembre 2019 · Potenza, Italia',
        'exp.3.d1': 'Sviluppo frontend e backend di siti web in Java, C#, HTML, JavaScript e CSS',
        'exp.3.d2': 'Sviluppo e debugging di applicazioni mobile in Swift e Android',
        'exp.3.d3': 'Gestione database con SQL Server e MySQL',

        // Projects
        'proj.title': 'Progetti',
        'proj.1.title': 'XSS Lab',
        'proj.1.desc': 'Laboratorio educativo vulnerabile per testare e comprendere le vulnerabilità Cross-Site Scripting (XSS) nelle applicazioni Java. Implementa 5 tipi di attacchi XSS con versioni vulnerabili e sicure usando Spring Boot e Thymeleaf.',
        'proj.2.title': 'SQL Injection Lab',
        'proj.2.desc': 'Laboratorio completo vulnerabile per testare e comprendere le vulnerabilità SQL Injection nelle applicazioni Java. Implementa 7 tipi di attacchi SQL Injection usando Spring Boot e JDBC a scopo educativo.',
        'proj.3.title': 'SciRoc Challenge 2021',
        'proj.3.desc': 'Progetto vincitore della Smart City Robotics Challenge (SciRoc) per l\'interpretazione del linguaggio dei segni. Sviluppo di un sistema robotico per il riconoscimento gestuale in tempo reale con Machine Learning e Computer Vision.',
        'proj.4.title': 'Ricostruzione Immagini SAR',
        'proj.4.desc': 'Tool automatizzato per lo studio di immagini Radar ad Apertura Sintetica (SAR), analisi dell\'impronta a terra di edifici e loro cambiamenti nel tempo. Utilizza immagini delle costellazioni TerraSAR-X e Sentinel con algoritmi di rilevamento unsupervised.',
        'proj.5.title': 'Jet Ski Nitro',
        'proj.5.desc': 'Gioco di corse in terza persona che mette il giocatore al timone di una moto d\'acqua in un paradiso tropicale. Realizzato con C++ e OpenGL per un\'esperienza di gioco immersiva.',
        'proj.6.title': 'Segmentazione Pixel-wise',
        'proj.6.desc': 'Progetto di tesi magistrale sulla segmentazione pixel-wise di immagini di componenti industriali per applicazioni automotive. Utilizza l\'architettura deep learning SegNet per la segmentazione semantica, con strumenti personalizzati per la generazione di nuvole di punti da immagini segmentate.',
        'proj.7.title': 'Secure Code Academy',
        'proj.7.desc': 'Piattaforma di e-learning sulla scrittura di codice sicuro: microcorsi con teoria interattiva, quiz con quattro tipi di domanda e tornei live a cui ci si unisce tramite link, con classifica in diretta. Sito statico su GitHub Pages con API su Cloudflare Worker, D1 e Durable Objects.',

        // Skills
        'skills.title': 'Competenze',
        'skills.security': 'Security',
        'skills.languages': 'Languages',
        'skills.other': 'Other',
        'skills.s1': 'Ethical Hacking',
        'skills.s2': 'Web Penetration Testing',
        'skills.s3': 'SAST / SCA',
        'skills.s4': 'WAPT',
        'skills.s5': 'Secure Coding Guidelines',
        'skills.s6': 'Security Awareness Training',
        'skills.l1': 'Python',
        'skills.l2': 'Java',
        'skills.l3': 'C# / .NET',
        'skills.l4': 'JavaScript / HTML / CSS',
        'skills.l5': 'C++ / OpenCV',
        'skills.l6': 'SQL / Matlab',
        'skills.o1': 'Machine Learning',
        'skills.o2': 'Sviluppo Software',
        'skills.o3': 'Project Management',
        'skills.o4': 'Italiano — Madrelingua',
        'skills.o5': 'Inglese — Fluente',
        'skills.o6': 'Francese — Base',

        // Tools
        'tools.title': 'Strumenti',

        // Certifications
        'certs.title': 'Certificazioni',
        'certs.1.name': 'CEH — Certified Ethical Hacker',
        'certs.1.org': 'EC-Council',
        'certs.1.desc': 'Certificazione internazionale in Ethical Hacking e Penetration Testing. Valida le competenze in valutazione della sicurezza informatica, identificazione dei vettori di attacco e implementazione delle contromisure.',
        'certs.1.date': 'Giugno 2023',
        'certs.2.name': 'SciRoc Challenge — Vincitore',
        'certs.2.org': 'Sign Language Interpretation Task',
        'certs.2.desc': 'Smart City Robotics Challenge',
        'certs.2.date': 'Settembre 2021',
        'certs.3.name': 'Spring Security',
        'certs.3.org': 'Spring',
        'certs.3.desc': 'Certificazione nel framework Spring Security per la protezione delle applicazioni Java.',
        'certs.3.date': 'Gennaio 2024',
        'certs.4.name': 'HCL AppScan DAST',
        'certs.4.org': 'HCL Software',
        'certs.4.desc': 'Certificazione in Dynamic Application Security Testing con HCL AppScan.',
        'certs.4.date': 'Marzo 2024',
        'certs.5.name': 'Checkmarx SAST Certified Engineer Training',
        'certs.5.org': 'Checkmarx',
        'certs.5.desc': 'Formazione certificata in Static Application Security Testing con Checkmarx.',
        'certs.5.date': 'Luglio 2024',

        // Education
        'edu.title': 'Formazione',
        'edu.1.degree': 'Laurea Magistrale',
        'edu.1.field': 'Ingegneria Informatica (M.Sc.)',
        'edu.1.school': 'Università degli Studi della Basilicata',
        'edu.1.thesis': 'Tesi: "Pixel wise segmentation of workpiece images for automotive application"',
        'edu.1.date': '2021',
        'edu.2.degree': 'Laurea Triennale',
        'edu.2.field': 'Informatica (B.Sc.)',
        'edu.2.school': 'Università degli Studi della Basilicata',
        'edu.2.thesis': 'Tesi: "Experiments in reconstructing the RADAR footprint of buildings using sequences of SAR images"',
        'edu.2.date': '2017',

        // Contact
        'contact.title': 'Contatti',
        'contact.comment': '// Vuoi dirmi di più?',
        'contact.text': 'Non esitare a contattarmi!',
        'contact.btn': 'Scrivimi',

        // Footer
        'footer.text': '// by Francesco Ceruzzi'
    },

    fr: {
        // Navigation
        'nav.about': 'À propos',
        'nav.experience': 'Expérience',
        'nav.projects': 'Projets',
        'nav.skills': 'Compétences',
        'nav.tools': 'Outils',
        'nav.certifications': 'Certifications',
        'nav.education': 'Formation',
        'nav.contact': 'Contact',
        'nav.resume': 'CV',

        // Hero
        'hero.greeting.pre': 'const',
        'hero.greeting.var': 'greeting',
        'hero.name': '"Bonjour, je suis <span class=\\"highlight\\">Francesco Ceruzzi</span>";',
        'hero.description': 'Auditeur en cybersécurité avec expérience en tests d\'intrusion, analyse statique du code et sécurité des pipelines CI/CD. Je protège les applications et infrastructures gouvernementales avec passion pour le hacking éthique et l\'innovation.',
        'hero.cta.contact': 'Me contacter',
        'hero.cta.projects': 'Voir les projets',
        'hero.scroll': 'scroll',

        // Typed phrases
        'typed.0': 'Cybersecurity Auditor',
        'typed.1': 'Ethical Hacker (CEH)',
        'typed.2': 'Penetration Tester',
        'typed.3': 'Security Analyst',
        'typed.4': 'Python Developer',

        // About
        'about.title': 'À propos',
        'about.p1': 'Je suis un <span class="highlight">Auditeur en Cybersécurité</span> chez <span class="syntax-string">Sogei S.p.A.</span>, où je protège les sites web et applications gouvernementaux à travers des tests d\'intrusion approfondis, l\'analyse statique du code et l\'implémentation de pratiques de sécurité dans les pipelines CI/CD.',
        'about.p2': 'Avec un Master en Ingénierie Informatique et la certification <span class="highlight">CEH (Certified Ethical Hacker)</span>, je combine des compétences techniques avancées avec une approche méthodique de la cybersécurité. J\'ai également de l\'expérience dans l\'enseignement et le développement logiciel.',
        'about.location.label': 'location:',
        'about.location.value': '"Rome, Italie"',
        'about.email.label': 'email:',
        'about.email.value': '"francescoceruzzi@gmail.com"',
        'about.role.label': 'role:',
        'about.role.value': '"Auditeur en Cybersécurité"',
        'about.cert.label': 'certification:',
        'about.cert.value': '"CEH — Certified Ethical Hacker"',

        // Experience
        'exp.title': 'Expérience',
        'exp.1.role': 'Auditeur en Cybersécurité',
        'exp.1.company': '@ Sogei S.p.A.',
        'exp.1.date': 'Janvier 2022 — Présent · Rome, Italie',
        'exp.1.d1': 'Tests d\'intrusion approfondis de sites web gouvernementaux selon le standard OWASP Top 10, en utilisant des outils avancés pour détecter et identifier les vulnérabilités',
        'exp.1.d2': 'Analyse statique du code et des bibliothèques pour des applications écrites dans différents langages de programmation, avec des outils comme Checkmarx et Nexus IQ',
        'exp.1.d3': 'Scripting en Python pour l\'automatisation des tâches, l\'optimisation des processus et le développement de solutions personnalisées',
        'exp.1.d4': 'Implémentation de mesures de sécurité robustes dans les Azure Pipelines pour garantir l\'intégrité et la confidentialité des processus CI/CD',
        'exp.1.d5': 'Définition de directives de développement sécurisé pour Java, Angular, .NET, iOS, Android, PHP et React',
        'exp.1.d6': 'Formation du personnel, onboarding et création de tutoriels vidéo pour la sensibilisation à la sécurité',

        'exp.2.role': 'Enseignant',
        'exp.2.company': '@ Istituto Omnicomprensivo Statale',
        'exp.2.date': 'Décembre 2019 — Décembre 2021 · Corleto Perticara, Italie',
        'exp.2.d1': 'Enseignement de la Réalité Virtuelle éducative et de la modélisation 3D',
        'exp.2.d2': 'Coding à travers la robotique',
        'exp.2.d3': 'Formation à la suite Office',

        'exp.3.role': 'Développeur Logiciel',
        'exp.3.company': '@ Graldev S.r.l.',
        'exp.3.date': 'Septembre 2019 — Décembre 2019 · Potenza, Italie',
        'exp.3.d1': 'Développement frontend et backend de sites web en Java, C#, HTML, JavaScript et CSS',
        'exp.3.d2': 'Développement et débogage d\'applications mobiles en Swift et Android',
        'exp.3.d3': 'Gestion de bases de données avec SQL Server et MySQL',

        // Projects
        'proj.title': 'Projets',
        'proj.1.title': 'XSS Lab',
        'proj.1.desc': 'Laboratoire éducatif vulnérable pour tester et comprendre les vulnérabilités Cross-Site Scripting (XSS) dans les applications Java. Implémente 5 types d\'attaques XSS avec des versions vulnérables et sécurisées utilisant Spring Boot et Thymeleaf.',
        'proj.2.title': 'SQL Injection Lab',
        'proj.2.desc': 'Laboratoire complet vulnérable pour tester et comprendre les vulnérabilités SQL Injection dans les applications Java. Implémente 7 types d\'attaques SQL Injection utilisant Spring Boot et JDBC à des fins éducatives.',
        'proj.3.title': 'SciRoc Challenge 2021',
        'proj.3.desc': 'Projet gagnant du Smart City Robotics Challenge (SciRoc) pour l\'interprétation du langage des signes. Développement d\'un système robotique pour la reconnaissance gestuelle en temps réel avec Machine Learning et Computer Vision.',
        'proj.4.title': 'Reconstruction d\'Images SAR',
        'proj.4.desc': 'Outil automatisé pour l\'étude d\'images Radar à Synthèse d\'Ouverture (SAR), analyse de l\'empreinte au sol des bâtiments et de leurs changements dans le temps. Utilise des images des constellations TerraSAR-X et Sentinel avec des algorithmes de détection non supervisés.',
        'proj.5.title': 'Jet Ski Nitro',
        'proj.5.desc': 'Jeu de course à la troisième personne qui met le joueur aux commandes d\'un jet ski dans un paradis tropical. Réalisé avec C++ et OpenGL pour une expérience de jeu immersive.',
        'proj.6.title': 'Segmentation Pixel par Pixel',
        'proj.6.desc': 'Projet de thèse de master sur la segmentation pixel par pixel d\'images de pièces usinées pour applications automobiles. Utilise l\'architecture deep learning SegNet pour la segmentation sémantique, avec des outils personnalisés pour la génération de nuages de points à partir d\'images segmentées.',
        'proj.7.title': 'Secure Code Academy',
        'proj.7.desc': 'Plateforme d\'e-learning sur l\'écriture de code sécurisé : micro-cours avec théorie interactive, quiz avec quatre types de questions et tournois en direct rejoints via un lien, avec classement en temps réel. Site statique sur GitHub Pages avec une API Cloudflare Worker, D1 et Durable Objects.',

        // Skills
        'skills.title': 'Compétences',
        'skills.security': 'Security',
        'skills.languages': 'Languages',
        'skills.other': 'Other',
        'skills.s1': 'Ethical Hacking',
        'skills.s2': 'Web Penetration Testing',
        'skills.s3': 'SAST / SCA',
        'skills.s4': 'WAPT',
        'skills.s5': 'Secure Coding Guidelines',
        'skills.s6': 'Security Awareness Training',
        'skills.l1': 'Python',
        'skills.l2': 'Java',
        'skills.l3': 'C# / .NET',
        'skills.l4': 'JavaScript / HTML / CSS',
        'skills.l5': 'C++ / OpenCV',
        'skills.l6': 'SQL / Matlab',
        'skills.o1': 'Machine Learning',
        'skills.o2': 'Développement Logiciel',
        'skills.o3': 'Gestion de Projet',
        'skills.o4': 'Italien — Langue maternelle',
        'skills.o5': 'Anglais — Courant',
        'skills.o6': 'Français — Base',

        // Tools
        'tools.title': 'Outils',

        // Certifications
        'certs.title': 'Certifications',
        'certs.1.name': 'CEH — Certified Ethical Hacker',
        'certs.1.org': 'EC-Council',
        'certs.1.desc': 'Certification internationale en Ethical Hacking et Tests d\'Intrusion. Valide les compétences en évaluation de la sécurité informatique, identification des vecteurs d\'attaque et implémentation des contre-mesures.',
        'certs.1.date': 'Juin 2023',
        'certs.2.name': 'SciRoc Challenge — Gagnant',
        'certs.2.org': 'Sign Language Interpretation Task',
        'certs.2.desc': 'Smart City Robotics Challenge',
        'certs.2.date': 'Septembre 2021',
        'certs.3.name': 'Spring Security',
        'certs.3.org': 'Spring',
        'certs.3.desc': 'Certification dans le framework Spring Security pour la sécurisation des applications Java.',
        'certs.3.date': 'Janvier 2024',
        'certs.4.name': 'HCL AppScan DAST',
        'certs.4.org': 'HCL Software',
        'certs.4.desc': 'Certification en Dynamic Application Security Testing avec HCL AppScan.',
        'certs.4.date': 'Mars 2024',
        'certs.5.name': 'Checkmarx SAST Certified Engineer Training',
        'certs.5.org': 'Checkmarx',
        'certs.5.desc': 'Formation certifiée en Static Application Security Testing avec Checkmarx.',
        'certs.5.date': 'Juillet 2024',

        // Education
        'edu.title': 'Formation',
        'edu.1.degree': 'Master',
        'edu.1.field': 'Ingénierie Informatique (M.Sc.)',
        'edu.1.school': 'Università degli Studi della Basilicata',
        'edu.1.thesis': 'Thèse: "Pixel wise segmentation of workpiece images for automotive application"',
        'edu.1.date': '2021',
        'edu.2.degree': 'Licence',
        'edu.2.field': 'Informatique (B.Sc.)',
        'edu.2.school': 'Università degli Studi della Basilicata',
        'edu.2.thesis': 'Thèse: "Experiments in reconstructing the RADAR footprint of buildings using sequences of SAR images"',
        'edu.2.date': '2017',

        // Contact
        'contact.title': 'Contact',
        'contact.comment': '// Vous voulez m\'en dire plus ?',
        'contact.text': 'N\'hésitez pas à me contacter !',
        'contact.btn': 'Écrire',

        // Footer
        'footer.text': '// by Francesco Ceruzzi'
    },

    de: {
        // Navigation
        'nav.about': 'Über mich',
        'nav.experience': 'Erfahrung',
        'nav.projects': 'Projekte',
        'nav.skills': 'Fähigkeiten',
        'nav.tools': 'Werkzeuge',
        'nav.certifications': 'Zertifizierungen',
        'nav.education': 'Ausbildung',
        'nav.contact': 'Kontakt',
        'nav.resume': 'Lebenslauf',

        // Hero
        'hero.greeting.pre': 'const',
        'hero.greeting.var': 'greeting',
        'hero.name': '"Hallo, ich bin <span class=\\"highlight\\">Francesco Ceruzzi</span>";',
        'hero.description': 'Cybersecurity Auditor mit Erfahrung in Penetrationstests, statischer Code-Analyse und CI/CD-Pipeline-Sicherheit. Ich schütze Regierungsanwendungen und -infrastrukturen mit Leidenschaft für Ethical Hacking und Innovation.',
        'hero.cta.contact': 'Kontakt aufnehmen',
        'hero.cta.projects': 'Projekte ansehen',
        'hero.scroll': 'scroll',

        // Typed phrases
        'typed.0': 'Cybersecurity Auditor',
        'typed.1': 'Ethical Hacker (CEH)',
        'typed.2': 'Penetration Tester',
        'typed.3': 'Security Analyst',
        'typed.4': 'Python Developer',

        // About
        'about.title': 'Über mich',
        'about.p1': 'Ich bin ein <span class="highlight">Cybersecurity Auditor</span> bei <span class="syntax-string">Sogei S.p.A.</span>, wo ich Regierungswebsites und -anwendungen durch eingehende Penetrationstests, statische Code-Analyse und Implementierung von Sicherheitspraktiken in CI/CD-Pipelines schütze.',
        'about.p2': 'Mit einem Master-Abschluss in Informatik und der <span class="highlight">CEH (Certified Ethical Hacker)</span>-Zertifizierung verbinde ich fortgeschrittene technische Fähigkeiten mit einem methodischen Ansatz zur Cybersicherheit. Ich habe auch Erfahrung im Unterrichten und in der Softwareentwicklung.',
        'about.location.label': 'location:',
        'about.location.value': '"Rom, Italien"',
        'about.email.label': 'email:',
        'about.email.value': '"francescoceruzzi@gmail.com"',
        'about.role.label': 'role:',
        'about.role.value': '"Cybersecurity Auditor"',
        'about.cert.label': 'certification:',
        'about.cert.value': '"CEH — Certified Ethical Hacker"',

        // Experience
        'exp.title': 'Erfahrung',
        'exp.1.role': 'Cybersecurity Auditor',
        'exp.1.company': '@ Sogei S.p.A.',
        'exp.1.date': 'Januar 2022 — Gegenwart · Rom, Italien',
        'exp.1.d1': 'Eingehende Penetrationstests von Regierungswebsites nach dem OWASP Top 10 Standard, unter Verwendung fortschrittlicher Tools zur Erkennung und Identifizierung von Schwachstellen',
        'exp.1.d2': 'Statische Code- und Bibliotheksanalyse für Anwendungen in verschiedenen Programmiersprachen, mit Tools wie Checkmarx und Nexus IQ',
        'exp.1.d3': 'Python-Scripting für Aufgabenautomatisierung, Prozessoptimierung und Entwicklung maßgeschneiderter Lösungen',
        'exp.1.d4': 'Implementierung robuster Sicherheitsmaßnahmen in Azure Pipelines zur Gewährleistung der Integrität und Vertraulichkeit von CI/CD-Prozessen',
        'exp.1.d5': 'Definition sicherer Entwicklungsrichtlinien für Java, Angular, .NET, iOS, Android, PHP und React',
        'exp.1.d6': 'Mitarbeiterschulung, Onboarding und Erstellung von Video-Tutorials für Security Awareness',

        'exp.2.role': 'Lehrer',
        'exp.2.company': '@ Istituto Omnicomprensivo Statale',
        'exp.2.date': 'Dezember 2019 — Dezember 2021 · Corleto Perticara, Italien',
        'exp.2.d1': 'Unterricht in pädagogischer Virtual Reality und 3D-Modellierung',
        'exp.2.d2': 'Coding durch Robotik',
        'exp.2.d3': 'Schulung zur Office-Suite',

        'exp.3.role': 'Softwareentwickler',
        'exp.3.company': '@ Graldev S.r.l.',
        'exp.3.date': 'September 2019 — Dezember 2019 · Potenza, Italien',
        'exp.3.d1': 'Frontend- und Backend-Entwicklung von Websites in Java, C#, HTML, JavaScript und CSS',
        'exp.3.d2': 'Entwicklung und Debugging von mobilen Anwendungen in Swift und Android',
        'exp.3.d3': 'Datenbankmanagement mit SQL Server und MySQL',

        // Projects
        'proj.title': 'Projekte',
        'proj.1.title': 'XSS Lab',
        'proj.1.desc': 'Pädagogisches verwundbares Labor zum Testen und Verstehen von Cross-Site Scripting (XSS)-Schwachstellen in Java-Anwendungen. Implementiert 5 Arten von XSS-Angriffen mit verwundbaren und sicheren Versionen unter Verwendung von Spring Boot und Thymeleaf.',
        'proj.2.title': 'SQL Injection Lab',
        'proj.2.desc': 'Umfassendes verwundbares Labor zum Testen und Verstehen von SQL-Injection-Schwachstellen in Java-Anwendungen. Implementiert 7 Arten von SQL-Injection-Angriffen unter Verwendung von Spring Boot und JDBC zu Bildungszwecken.',
        'proj.3.title': 'SciRoc Challenge 2021',
        'proj.3.desc': 'Gewinnerprojekt der Smart City Robotics Challenge (SciRoc) für Gebärdensprachinterpretation. Entwicklung eines Robotersystems zur Echtzeit-Gestenerkennung mit Machine Learning und Computer Vision.',
        'proj.4.title': 'SAR-Bildrekonstruktion',
        'proj.4.desc': 'Automatisiertes Tool zur Untersuchung von Radar mit Synthetischer Apertur (SAR)-Bildern, Analyse der Gebäude-Grundrisse und ihrer zeitlichen Veränderungen. Verwendet Bilder der TerraSAR-X und Sentinel-Konstellationen mit unüberwachten Erkennungsalgorithmen.',
        'proj.5.title': 'Jet Ski Nitro',
        'proj.5.desc': 'Ein Third-Person-Rennspiel, das den Spieler ans Steuer eines Jet-Skis in einem tropischen Paradies setzt. Entwickelt mit C++ und OpenGL für ein immersives Spielerlebnis.',
        'proj.6.title': 'Pixel-weise Segmentierung',
        'proj.6.desc': 'Masterarbeit über die pixelweise Segmentierung von Werkstückbildern für Automobilanwendungen. Verwendet die SegNet Deep-Learning-Architektur für semantische Segmentierung, mit benutzerdefinierten Tools zur Erzeugung von Punktwolken aus segmentierten Bildern.',
        'proj.7.title': 'Secure Code Academy',
        'proj.7.desc': 'E-Learning-Plattform für sicheres Programmieren: Mikrokurse mit interaktiver Theorie, Quizze mit vier Fragetypen und Live-Turniere, denen man per Link beitritt, mit Echtzeit-Rangliste. Statische Website auf GitHub Pages mit einer Cloudflare-Worker-API, D1 und Durable Objects.',

        // Skills
        'skills.title': 'Fähigkeiten',
        'skills.security': 'Security',
        'skills.languages': 'Languages',
        'skills.other': 'Other',
        'skills.s1': 'Ethical Hacking',
        'skills.s2': 'Web Penetration Testing',
        'skills.s3': 'SAST / SCA',
        'skills.s4': 'WAPT',
        'skills.s5': 'Secure Coding Guidelines',
        'skills.s6': 'Security Awareness Training',
        'skills.l1': 'Python',
        'skills.l2': 'Java',
        'skills.l3': 'C# / .NET',
        'skills.l4': 'JavaScript / HTML / CSS',
        'skills.l5': 'C++ / OpenCV',
        'skills.l6': 'SQL / Matlab',
        'skills.o1': 'Machine Learning',
        'skills.o2': 'Softwareentwicklung',
        'skills.o3': 'Projektmanagement',
        'skills.o4': 'Italienisch — Muttersprache',
        'skills.o5': 'Englisch — Fließend',
        'skills.o6': 'Französisch — Grundkenntnisse',

        // Tools
        'tools.title': 'Werkzeuge',

        // Certifications
        'certs.title': 'Zertifizierungen',
        'certs.1.name': 'CEH — Certified Ethical Hacker',
        'certs.1.org': 'EC-Council',
        'certs.1.desc': 'Internationale Zertifizierung in Ethical Hacking und Penetrationstests. Validiert Kompetenzen in der Bewertung der Informationssicherheit, Identifizierung von Angriffsvektoren und Implementierung von Gegenmaßnahmen.',
        'certs.1.date': 'Juni 2023',
        'certs.2.name': 'SciRoc Challenge — Gewinner',
        'certs.2.org': 'Sign Language Interpretation Task',
        'certs.2.desc': 'Smart City Robotics Challenge',
        'certs.2.date': 'September 2021',
        'certs.3.name': 'Spring Security',
        'certs.3.org': 'Spring',
        'certs.3.desc': 'Zertifizierung im Spring Security Framework zur Absicherung von Java-Anwendungen.',
        'certs.3.date': 'Januar 2024',
        'certs.4.name': 'HCL AppScan DAST',
        'certs.4.org': 'HCL Software',
        'certs.4.desc': 'Zertifizierung in Dynamic Application Security Testing mit HCL AppScan.',
        'certs.4.date': 'März 2024',
        'certs.5.name': 'Checkmarx SAST Certified Engineer Training',
        'certs.5.org': 'Checkmarx',
        'certs.5.desc': 'Zertifizierte Ingenieurschulung in Static Application Security Testing mit Checkmarx.',
        'certs.5.date': 'Juli 2024',

        // Education
        'edu.title': 'Ausbildung',
        'edu.1.degree': 'Master-Abschluss',
        'edu.1.field': 'Informatik (M.Sc.)',
        'edu.1.school': 'Università degli Studi della Basilicata',
        'edu.1.thesis': 'Thesis: "Pixel wise segmentation of workpiece images for automotive application"',
        'edu.1.date': '2021',
        'edu.2.degree': 'Bachelor-Abschluss',
        'edu.2.field': 'Informatik (B.Sc.)',
        'edu.2.school': 'Università degli Studi della Basilicata',
        'edu.2.thesis': 'Thesis: "Experiments in reconstructing the RADAR footprint of buildings using sequences of SAR images"',
        'edu.2.date': '2017',

        // Contact
        'contact.title': 'Kontakt',
        'contact.comment': '// Möchten Sie mir mehr erzählen?',
        'contact.text': 'Zögern Sie nicht, mich zu kontaktieren!',
        'contact.btn': 'Schreiben',

        // Footer
        'footer.text': '// by Francesco Ceruzzi'
    }
};

const SUPPORTED_LANGS = ['en', 'it', 'fr', 'de'];

function getValidLang(lang) {
    if (typeof lang !== 'string') return 'en';
    const sanitized = lang.replace(/[^a-z]/gi, '').toLowerCase().substring(0, 2);
    return SUPPORTED_LANGS.includes(sanitized) ? sanitized : 'en';
}

let currentLang = getValidLang(localStorage.getItem('preferredLang'));

/**
 * Get translation for a given key
 */
function t(key) {
    return (translations[currentLang] && translations[currentLang][key]) ||
           (translations['en'] && translations['en'][key]) ||
           key;
}

/**
 * Sanitize HTML to only allow safe span tags with class attribute
 */
function sanitizeTranslationHtml(html) {
    const temp = document.createElement('div');
    temp.innerHTML = html;

    function sanitizeNode(node) {
        const childNodes = Array.from(node.childNodes);
        for (const child of childNodes) {
            if (child.nodeType === Node.TEXT_NODE) {
                continue;
            }
            if (child.nodeType === Node.ELEMENT_NODE) {
                if (child.tagName !== 'SPAN') {
                    // Replace disallowed elements with their text content
                    const text = document.createTextNode(child.textContent);
                    node.replaceChild(text, child);
                    continue;
                }
                // Only allow 'class' attribute on span elements
                const allowedClass = child.getAttribute('class');
                // Remove all attributes
                while (child.attributes.length > 0) {
                    child.removeAttribute(child.attributes[0].name);
                }
                // Restore only class if it existed
                if (allowedClass) {
                    child.setAttribute('class', allowedClass);
                }
                sanitizeNode(child);
            } else {
                // Remove other node types (comments, etc.)
                node.removeChild(child);
            }
        }
    }

    sanitizeNode(temp);
    return temp.innerHTML;
}

/**
 * Apply all translations to the page
 */
function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const translation = t(key);
        if (el.hasAttribute('data-i18n-html')) {
            el.innerHTML = sanitizeTranslationHtml(translation);
        } else {
            el.textContent = translation;
        }
    });

    // Update html lang attribute
    const langMap = { en: 'en', it: 'it', fr: 'fr', de: 'de' };
    document.documentElement.lang = langMap[currentLang] || 'en';

    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === currentLang);
    });
}

/**
 * Switch language
 */
function switchLanguage(lang) {
    const validLang = getValidLang(lang);
    if (translations[validLang]) {
        currentLang = validLang;
        localStorage.setItem('preferredLang', validLang);
        applyTranslations();
    }
}

/**
 * Initialize i18n
 */
function initI18n() {
    // Bind language switcher buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            switchLanguage(btn.getAttribute('data-lang'));
        });
    });

    // Apply translations on load
    applyTranslations();
}
