// portfolio_header.js
document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones de navegación y secciones
    const navButtons = document.querySelectorAll('.nav-btn');
    const projectSections = document.querySelectorAll('[data-project]');
    const langToggle = document.getElementById('langToggle');
    
    // Debug logs
    console.log('Botones encontrados:', navButtons.length);
    console.log('Secciones encontradas:', projectSections.length);
    console.log('Secciones:', Array.from(projectSections).map(s => s.id));
    
    // Función para mostrar una sección específica
    function showProject(targetId) {
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
        const detalles = document.getElementById('detallesProyecto1');
        const button = event.target;
        
        if (detalles.style.display === 'none' || detalles.style.display === '') {
            detalles.style.display = 'block';
            button.textContent = 'Ver menos';
        } else {
            detalles.style.display = 'none';
            button.textContent = 'Ver más';
        }
    };
    
    // Actualizar el año en el footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
    
    // Funcionalidad del botón de idioma (básica)
    if (langToggle) {
        langToggle.addEventListener('click', function() {
            if (this.textContent === 'ESP') {
                this.textContent = 'ENG';
                this.setAttribute('aria-label', 'Switch language');
                // Aquí podrías agregar la lógica de traducción
            } else {
                this.textContent = 'ESP';
                this.setAttribute('aria-label', 'Cambiar idioma');
            }
        });
    }
});
