// portfolio_header.js
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de navegación y secciones
    const navButtons = document.querySelectorAll('.nav-btn');
    const projectSections = document.querySelectorAll('[data-project]');
    //const langToggle = document.getElementById('langToggle');
    
    // Debug logs
    console.log('Botones encontrados:', navButtons.length);
    console.log('Secciones encontradas:', projectSections.length);
    console.log('Secciones:', Array.from(projectSections).map(s => s.id));
    
    function resetAllToggles() {
        const toggleSections = document.querySelectorAll('.detalles');
        const toggleButtons = document.querySelectorAll('.toggle');
        
        toggleSections.forEach(section => {
            section.style.display = 'none';
        });
        
        toggleButtons.forEach(button => {
            button.textContent = 'Ver más detalles';
        });
    }

    // Función para mostrar una sección específica
    function showProject(targetId) {

        resetAllToggles();

        console.log('Mostrando proyecto:', targetId);
        
        // Ocultar todas las secciones
        projectSections.forEach(section => {
            section.hidden = true;
            console.log('Ocultando:', section.id);
        });
        
        // Buscar la sección tanto por getElementById como en la lista de projectSections
        let targetSection = document.getElementById(targetId);
        
        if (!targetSection) {
            // Si no se encuentra por ID, buscar en las secciones del proyecto
            targetSection = Array.from(projectSections).find(section => section.id === targetId);
        }
        
        if (targetSection) {
            targetSection.hidden = false;
            console.log('Mostrando:', targetSection.id);
        } else {
            console.log('No se encontró la sección:', targetId);
            console.log('Secciones disponibles:', Array.from(projectSections).map(s => s.id));
        }
        
        // Actualizar estados activos de los botones
        navButtons.forEach(btn => {
            btn.removeAttribute('aria-current');
            btn.classList.remove('active');
        });
        
        // Marcar el botón activo
        const activeButton = document.querySelector(`[data-target="${targetId}"]`);
        if (activeButton) {
            activeButton.setAttribute('aria-current', 'page');
            activeButton.classList.add('active');
        }
    }
    
    // Agregar event listeners a los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            console.log('Clic en botón, target:', target);
            showProject(target);
        });
    });
    
    // Mostrar el primer proyecto por defecto
    showProject('proyecto1');
    
    // Función para toggle de detalles del proyecto 1
    window.toggleDetalles = function() {
        const toggleButtons = document.querySelectorAll('.detalles');
        //const detalles = document.getElementById('detallesProyecto');
        const button = event.target;
        
        toggleButtons.forEach(p => {
            if (p.style.display === 'none' || p.style.display === '') {
                p.style.display = 'block';
                button.textContent = 'Ver menos';
            } else {
                p.style.display = 'none';
                button.textContent = 'Ver más detalles';
            }
        })
    };
    
    // Actualizar el año en el footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    



    const langSelector = document.querySelector('.language-selector');
    const langMenu = document.querySelector('.language-menu');
    const currentLangText = document.querySelector('.current-lang span');

    // Muestra/oculta el menú al hacer clic
    langSelector.addEventListener('click', (event) => {
        event.stopPropagation(); // Evita que el clic se propague al documento
        langSelector.classList.toggle('open');
    });

    // Cambia el texto del botón al seleccionar un idioma
    langMenu.addEventListener('click', (event) => {
        const selectedLang = event.target.closest('li');
        if (selectedLang) {
            const langCode = selectedLang.dataset.lang;
            const langText = selectedLang.querySelector('span').textContent;
            
            // Actualiza el texto del botón principal
            currentLangText.textContent = langCode.toUpperCase();
            
            // Puedes agregar aquí la lógica para cambiar el contenido de tu página
            cambiarIdioma(langCode);

            // Por ejemplo: cambiar un atributo "lang" en el <html>
            document.documentElement.lang = langCode;
            
            // Cierra el menú
            langSelector.classList.remove('open');
        }
    });

    // Cierra el menú si se hace clic fuera de él
    document.addEventListener('click', () => {
        if (langSelector.classList.contains('open')) {
            langSelector.classList.remove('open');
        }
    });
});












const translations = {
    en: {
        welcome: "Welcome",
        welcomeMsg: "Explore a selection of projects and interactive examples designed to drive data-driven decision-making and showcase innovative solutions in analytics, visualization, and automation.",
        proyecto1: {
            project__title: "Strategic Performance Monitor: Projections, Sales, and Stock",
            summary_header: '<i class="fas fa-thumbtack"></i> Project summary',
            resumen: "This dashboard visualizes the alignment between projected demand, sales, and supply. It supports strategic decision-making in commercial planning, purchasing, and logistics by identifying gaps and improvement opportunities.",
            objetivo: "Visualize demand fulfillment in relation to sales and supply, enabling the identification of gaps and opportunities for improvement in commercial planning.",
            indicadores: [
                "Demand: Expected sales projection.",
                "Sales: Actual recorded sales.",
                "Supply: Inventory available to meet demand.",
                "Total Orders: Number of processed orders."
                ],
            tecnologias: "Google Looker Studio for visualization, data sources connected from spreadsheets and Firebase Database.",
            resultados: [
                "Reduced risk of stockouts by anticipating critical needs.",
                "Optimized operational efficiency through better coordination.",
                "Enabled data-driven strategic planning.",
                "Result: Faster processes, less waste, and a stronger supply chain."
            ],
            verMas: "See more details"
        },
        proyecto2: {
            titulo: "InsightBot: Analytical Chatbot with Open-Source LLMs",
            resumen: "Business analytics chatbot that democratizes access to data insights through conversational AI, eliminating the need for technical knowledge.",
            propuesta: "Allows non-technical users to obtain complex business insights through natural language queries, reducing analysis time from hours to seconds.",
            innovacion: [
                "Open-Source LLMs: Local implementation of Hugging Face models (flan-t5-small) without external API dependencies.",
                "RAG Architecture: Augmented retrieval system combining structured data with conversational capabilities.",
                "Bilingual Interface: Native support for Spanish/English with automatic language detection."
            ],
            capacidades: [
                "Analysis of 100+ products across 5 business categories.",
                "Processing of 24 months of historical data (2022–2023).",
                "Real-time insights on sales, margins, and trends.",
                "Intuitive visualization of critical KPI metrics."
            ],
            stack: "Frontend: Streamlit · Backend: Python 3.9+ · AI/ML: Hugging Face Transformers, LangChain · Data: Pandas, NumPy · Deployment: Docker-ready",
            casos: [
                "Retail Analytics: Inventory, sales, and trend analysis.",
                "AI Prototyping: Testing LLMs in real-world scenarios.",
                "Education: Teaching tool for data analysis.",
                "Enterprise: On-premise solution for sensitive data."
            ],
            resultados: "A comprehensive solution that transforms complex data into intelligent conversations, bridging traditional business intelligence and modern conversational AI.",
            iniciar: "Start application"
        },
        proyecto3: {
            titulo: "An Intelligent RPA Workflow",
            resumen: "This project is a robotic process automation (RPA) workflow with 'Human-in-the-Loop', developed in n8n. It aims to optimize data validation processes that are typically slow and error-prone.",
            flujo: [
                "Data Extraction: The robot connects to an API to retrieve recent task data.",
                "Human Validation: Sends an interactive email to a project manager, who can approve or reject data with one click.",
                "Automatic Update: Based on the manager's decision, the robot updates a Google Sheets spreadsheet to maintain accurate records."
            ],
            problema: "In business, information moves fast. But what happens when automation needs a human touch? Manual validation becomes a bottleneck. This solution eliminates that problem.",
            robot: "A workflow in n8n that not only automates but collaborates. This project exemplifies 'Human-in-the-Loop' automation, a valuable industry trend.",
            tareas: [
                "Extract fresh data from an external API.",
                "Send smart alerts via email with approval/rejection buttons.",
                "Update the database automatically based on human decisions."
            ],
            beneficios: [
                "100% Autonomous: Operates 24/7 without supervision.",
                "Decisions in seconds: Project managers approve/reject directly from their inbox.",
                "Time-saving: Eliminates hours of manual data entry.",
                "Data integrity: Records are updated only after human validation."
            ],
            tecnologias: [
                "n8n: Open-source orchestration tool.",
                "JSONPlaceholder API: Test data source.",
                "Google Sheets: Final data storage and management.",
                "Gmail: Communication channel between robot and human."
            ],
            comoProbar: "You can find the workflow code in the file and load it into your own n8n instance to see it in action."
        },
        extras: {
            titulo: "Useful Snippets",
            footer: {
                desarrollado: "Developed by",
                creditos: "© 2025 · Made with ♥ and lots of coffee"
            }
        }
    }
};



function cambiarIdioma(lang) {
    const t = translations[lang];
    document.documentElement.lang = lang;

    // Texto de bienvenida
    const bienvenida = document.querySelector('.bienvenido');
    if (bienvenida) bienvenida.textContent = t.welcome;
    
    const bienvenidaMsg = document.querySelector('.bienvenidoMsg');
    if (bienvenidaMsg) bienvenidaMsg.textContent = t.welcomeMsg;

    // Proyecto 1
    const p1 = document.getElementById('proyecto1');
    if (p1) {
        p1.querySelector('.project__title').textContent = t.proyecto1.project__title;
        p1.querySelector('.summary_header').innerHTML = t.proyecto1.summary_header;
        p1.querySelector('.resumen').textContent = t.proyecto1.resumen;
        p1.querySelector('.objetivo').textContent = t.proyecto1.objetivo;
        const indicadores = p1.querySelectorAll('.indicadores li');
        indicadores.forEach((li, i) => li.textContent = t.proyecto1.indicadores[i]);
        p1.querySelector('.tecnologias').textContent = t.proyecto1.tecnologias;
        const resultados = p1.querySelectorAll('.resultados li');
        resultados.forEach((li, i) => li.textContent = t.proyecto1.resultados[i]);
        const toggleBtn = p1.querySelector('.toggle');
        if (toggleBtn) toggleBtn.textContent = t.proyecto1.verMas;
    }

    // Proyecto 2
    const p2 = document.getElementById('proyecto2');
    if (p2) {
        p2.querySelector('.titulo').textContent = t.proyecto2.titulo;
        p2.querySelector('.resumen').textContent = t.proyecto2.resumen;
        p2.querySelector('.propuesta').textContent = t.proyecto2.propuesta;
        const innovacion = p2.querySelectorAll('.innovacion li');
        innovacion.forEach((li, i) => li.textContent = t.proyecto2.innovacion[i]);
        const capacidades = p2.querySelectorAll('.capacidades li');
        capacidades.forEach((li, i) => li.textContent = t.proyecto2.capacidades[i]);
        p2.querySelector('.stack').textContent = t.proyecto2.stack;
        const casos = p2.querySelectorAll('.casos li');
        casos.forEach((li, i) => li.textContent = t.proyecto2.casos[i]);
        p2.querySelector('.resultados').textContent = t.proyecto2.resultados;
        const iniciarBtn = p2.querySelector('.iniciar');
        if (iniciarBtn) iniciarBtn.textContent = t.proyecto2.iniciar;
    }

    // Proyecto 3
    const p3 = document.getElementById('proyecto3');
    if (p3) {
        p3.querySelector('.titulo').textContent = t.proyecto3.titulo;
        p3.querySelector('.resumen').textContent = t.proyecto3.resumen;
        const flujo = p3.querySelectorAll('.flujo li');
        flujo.forEach((li, i) => li.textContent = t.proyecto3.flujo[i]);
        p3.querySelector('.problema').textContent = t.proyecto3.problema;
        p3.querySelector('.robot').textContent = t.proyecto3.robot;
        const tareas = p3.querySelectorAll('.tareas li');
        tareas.forEach((li, i) => li.textContent = t.proyecto3.tareas[i]);
        const beneficios = p3.querySelectorAll('.beneficios li');
        beneficios.forEach((li, i) => li.textContent = t.proyecto3.beneficios[i]);
        const tecnologias = p3.querySelectorAll('.tecnologias li');
        tecnologias.forEach((li, i) => li.textContent = t.proyecto3.tecnologias[i]);
        p3.querySelector('.comoProbar').textContent = t.proyecto3.comoProbar;
    }

    // Extras
    const extras = document.querySelector('.extras');
    if (extras) {
        extras.querySelector('.titulo').textContent = t.extras.titulo;
        extras.querySelector('.js').textContent = t.extras.js;
        extras.querySelector('.sql').textContent = t.extras.sql;
    }

    // Footer
    const footer = document.querySelector('footer');
    if (footer) {
        footer.querySelector('.desarrollado').textContent = t.footer.desarrollado;
        footer.querySelector('.creditos').textContent = t.footer.creditos;
    }
}
