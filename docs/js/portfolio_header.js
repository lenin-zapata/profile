
// -------- Lógica de navegación (sin inline JS) ----------
const sections = [...document.querySelectorAll('[data-project]')];
const navButtons = [...document.querySelectorAll('.nav-btn')];

function showProject(id) {
    sections.forEach(s => s.hidden = (s.id !== id));
    navButtons.forEach(btn => {
    btn.setAttribute('aria-current', btn.dataset.target === id ? 'page' : 'false');
    });
    // Enfoque accesible al inicio de la sección
    const active = document.getElementById(id);
    if (active) active.querySelector('.project__title')?.focus?.();
}

navButtons.forEach(btn => {
    btn.addEventListener('click', () => showProject(btn.dataset.target));
});

// -------- Lightbox sencillo ----------
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');

document.addEventListener('click', (e) => {
    const img = e.target.closest('.gallery img');
    if (img) {
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt || '';
    lightbox.classList.add('open');
    }
    if (e.target === lightbox) {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    lightboxImg.alt = '';
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('open')) {
    lightbox.classList.remove('open');
    lightboxImg.src = '';
    lightboxImg.alt = '';
    }
});

// -------- I18N mínimo (ES/EN) ----------
const i18n = {
    es: {
    siteTitle: "Portafolio de Lenin Omar Zapata Esparza",
    navProject1: "Proyecto 1",
    navProject2: "Proyecto 2",
    navSnippets: "Snippets Útiles",
    welcome: "Bienvenido",
    welcomeMsg: "Explora mis proyectos, snippets y ejemplos interactivos.",
    p1Title: "Proyecto 1",
    p1Desc: "Descripción breve del Proyecto 1.",
    p2Title: "Proyecto 2",
    p2Desc: "Descripción breve del Proyecto 2.",
    snippetsTitle: "Snippets Útiles",
    snippetsDesc: "Pequeños fragmentos de código que uso con frecuencia.",
    seeMore: "Ver más"
    },
    en: {
    siteTitle: "Portfolio of Lenin Omar Zapata Esparza",
    navProject1: "Project 1",
    navProject2: "Project 2",
    navSnippets: "Useful Snippets",
    welcome: "Welcome",
    welcomeMsg: "Explore my projects, snippets, and interactive examples.",
    p1Title: "Project 1",
    p1Desc: "Short description for Project 1.",
    p2Title: "Project 2",
    p2Desc: "Short description for Project 2.",
    snippetsTitle: "Useful Snippets",
    snippetsDesc: "Small code pieces I use frequently.",
    seeMore: "See more"
    }
};

const langToggle = document.getElementById('langToggle');
let currentLang = 'es';
function setLang(lang) {
    currentLang = lang;
    langToggle.textContent = lang.toUpperCase();
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const txt = i18n[lang][key];
    if (txt) el.textContent = txt;
    });
}

langToggle.addEventListener('click', () => {
    setLang(currentLang === 'es' ? 'en' : 'es');
});

// -------- utilidades ----------
document.getElementById('year').textContent = new Date().getFullYear();

// Inicializa: ya está Proyecto 1 visible por defecto
// Enfocar accesible en título de proyecto activo al cargar
document.getElementById('proyecto1').querySelector('.project__title').tabIndex = -1;

function toggleDetalles() {
    const detalles = document.getElementById('detallesProyecto1');
    const btn = event.target;
    if (detalles.style.display === 'none') {
        detalles.style.display = 'block';
        btn.textContent = 'Ver menos';
    } else {
        detalles.style.display = 'none';
        btn.textContent = 'Ver más';
    }
}
