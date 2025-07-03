document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const lightModeStylesheet = document.getElementById('theme-light-style');

    function applyTheme(theme, isInitialLoad = false) {
        const isLight = theme === 'light-mode';

        // Update stylesheet and body class
        lightModeStylesheet.disabled = !isLight;
        document.body.classList.toggle('light-mode', isLight);
        document.body.classList.toggle('dark-mode', !isLight);

        // In dark mode, show the sun icon; in light mode, show the moon icon.
        const iconClass = isLight ? 'fa-moon' : 'fa-sun';
        
        // Recreate the icon element to force FontAwesome to re-render the SVG.
        // This is the most robust way to handle dynamic icon changes with the FA JS library.
        if (themeToggle) {
            themeToggle.innerHTML = `<i class="fas ${iconClass} fa-fw" id="theme-icon"></i>`;
        }

        // Only save to localStorage on user action, not on initial load.
        if (!isInitialLoad) {
            localStorage.setItem('theme', theme);
        }
    }

    // Load saved theme or default to dark mode
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    applyTheme(savedTheme, true); // Pass true for initial load

    // Add the click event listener
    themeToggle.addEventListener('click', (e) => {
        e.preventDefault();
        const newTheme = document.body.classList.contains('dark-mode') ? 'light-mode' : 'dark-mode';
        applyTheme(newTheme);
    });
});