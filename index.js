import Keyboard from '/keyboard.js'
let lang = localStorage.getItem('lang') || 'true';
const keyboard = new Keyboard();
console.log(lang)
window.onload = () => {
    keyboard.init();

    if (keyboard.lang !== lang) {
        console.log(keyboard.lang)
        keyboard.lang = lang;
        document.querySelectorAll('.btn').forEach((item) => {
            if (item.classList.contains('change')) {
                item.classList.toggle('invisible')
            }
        });
    }


}