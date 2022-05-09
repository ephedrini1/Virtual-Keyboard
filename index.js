import Keyboard from './keyboard.js';
let lang = localStorage.getItem('lang') || 'en';
const keyboard = new Keyboard();
window.onload = () => {
    keyboard.init();

    if (keyboard.lang !== lang) {
        keyboard.lang = lang;
        document.querySelectorAll('.btn').forEach((item) => {
            if (item.classList.contains('change')) {
                item.classList.toggle('invisible');
            }
        });
    }
};