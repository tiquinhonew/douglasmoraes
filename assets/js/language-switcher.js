document.addEventListener('DOMContentLoaded', () => {
    const langButtons = document.querySelectorAll('.lang-switcher-btn');
    const defaultLang = 'pt'; // Define o idioma padrão
    let translations = {};

    async function loadTranslations(lang) {
        try {
            const response = await fetch(`assets/lang/${lang}.json`);
            translations = await response.json();
            applyTranslations();
            localStorage.setItem('lang', lang);
        } catch (error) {
            console.error('Error loading translations:', error);
        }
    }

    function applyTranslations() {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[key]) {
                element.textContent = translations[key];
            }
        });
    }

    langButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            event.preventDefault();
            const lang = event.currentTarget.getAttribute('data-lang');
            loadTranslations(lang);
        });
    });

    // Load saved language or default
    const savedLang = localStorage.getItem('lang') || defaultLang;
    loadTranslations(savedLang);
});
