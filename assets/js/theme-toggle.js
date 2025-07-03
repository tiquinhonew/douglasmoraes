document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const lightModeStylesheet = document.getElementById('theme-light-style'); // Get the new stylesheet link

    // Function to apply theme
    function applyTheme(theme) {
        if (theme === 'light-mode') {
            lightModeStylesheet.disabled = false; // Enable light mode stylesheet
            themeIcon.classList.remove('bi-sun');
            themeIcon.classList.add('bi-moon');
            document.body.classList.remove('dark-mode'); // Ensure dark-mode class is removed
            document.body.classList.add('light-mode'); // Add light-mode class
        } else { // Default to dark-mode
            lightModeStylesheet.disabled = true; // Disable light mode stylesheet
            themeIcon.classList.remove('bi-moon');
            themeIcon.classList.add('bi-sun');
            document.body.classList.remove('light-mode'); // Ensure light-mode class is removed
            document.body.classList.add('dark-mode'); // Add dark-mode class
        }
        localStorage.setItem('theme', theme);
    }

    // Check for saved theme preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        // Default to dark mode if no preference is saved
        applyTheme('dark-mode');
    }

    themeToggle.addEventListener('click', () => {
        if (lightModeStylesheet.disabled) { // Currently in dark mode, switch to light
            applyTheme('light-mode');
        } else { // Currently in light mode, switch to dark
            applyTheme('dark-mode');
        }
    });
});