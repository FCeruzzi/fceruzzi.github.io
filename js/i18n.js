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
