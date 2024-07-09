// Default language setting
let currentLanguage = 'en';

// Function to change language
function changeLanguage(lang) {
    currentLanguage = lang;

    // Update text based on language
    document.querySelectorAll('.lang').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = languages[currentLanguage][key];
    });
}

// Language data (English, Latvian, Russian)
const languages = {
    'en': {
        'home': 'Home',
        'about': 'About',
        'projects': 'Projects',
        'contact_us': 'Contact us:',
        'email': 'Email: markindustry@gmail.com',
        'phone': 'Phone: +37129443312',
        'address': 'Address: Jaunā gatve 120, Ogre, LV-5001'
        // Add more translations as needed
    },
    'lv': {
        'home': 'Sākums',
        'about': 'Par mums',
        'projects': 'Projekti',
        'contact_us': 'Sazinieties ar mums:',
        'email': 'E-pasts: markindustry@gmail.com',
        'phone': 'Telefons: +37129443312',
        'address': 'Adrese: Jaunā gatve 120, Ogre, LV-5001'
        // Add more translations as needed
    },
    'ru': {
        'home': 'Главная',
        'about': 'О нас',
        'projects': 'Проекты',
        'contact_us': 'Свяжитесь с нами:',
        'email': 'Эл. почта: markindustry@gmail.com',
        'phone': 'Телефон: +37129443312',
        'address': 'Адрес: Jaunā gatve 120, Ogre, LV-5001'
        // Add more translations as needed
    }
};

// Initial translation based on current language
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang').forEach(element => {
        const key = element.getAttribute('data-key');
        element.textContent = languages[currentLanguage][key];
    });
});
