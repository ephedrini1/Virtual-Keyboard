import keys from '/keys.js';
//let lang;

class Keyboard {

    constructor() {
        this.hidden = true;
        this.value = '';
        this.isCaps = false;
        this.isShift = false;
        this.isCtrl = false;
        this.isAlt = false;
        this.lang = 'en';

    }

    init() {
        const header = document.createElement('h1');
        header.innerHTML = "Virtual Keyboard";
        header.classList.add('title');
        document.body.append(header);

        const headerDescription = document.createElement('p');
        headerDescription.innerText = "ОS: Windows";
        headerDescription.classList.add('title__description');
        document.body.appendChild(headerDescription);

        const message = document.createElement('p');
        message.innerText = "press ALT + SHIFT or CTRL + SHIFT to switch language";
        message.classList.add('title__description');
        document.body.appendChild(message);

        const textarea = document.createElement('textarea');
        textarea.classList.add('input');
        textarea.setAttribute('placeholder', 'click here...');

        document.body.appendChild(textarea);

        this.container = document.createElement('div');
        this.container.classList.add('keyboard__container');

        this.keyBoard = document.createElement('div');
        this.keyBoard.classList.add('keyboard', 'hidden');

        this.hide = document.createElement('button');
        this.hide.classList.add('hide');
        this.hide.textContent = 'Show';

        this.keysContainer = document.createElement('div');
        this.keysContainer.classList.add('keyboard__keys');
        this.keysContainer.append(this._createKeys());

        this.keys = this.keysContainer.querySelectorAll('.keyboard__key');

        this.container.append(this.hide);
        this.keyBoard.append(this.keysContainer);
        this.container.append(this.keyBoard);

        document.body.append(this.container);

        this._addBtnEL();

    }

    _createKeys() {
        const fragment = document.createDocumentFragment();

        // Creates HTML for an icon
        const createIconHTML = icon_name => `<i class="material-icons">${icon_name}</i>`;

        for (let i = 0; i < keys.length; i++) {
            const row = document.createElement('div');
            row.classList.add('row');
            keys[i].forEach(key => {
                const btn = document.createElement('button');
                if (key.lang) { btn.classList.add(`${key.lang}`); }
                if (key.change) { btn.classList.add(`${key.change}`); }
                btn.classList.add('btn', `btn__${key.type}`);
                btn.setAttribute('data-code', key.code);

                switch (key.content) {
                    case 'Backspace':
                        btn.classList.add('btn__big');
                        btn.innerHTML = createIconHTML('backspace');
                        break;

                    case 'Caps Lock':
                        btn.classList.add('btn__big', 'btn__off');
                        btn.innerHTML = createIconHTML('keyboard_capslock');
                        break;

                    case 'arrow-left':
                        btn.innerHTML = createIconHTML('arrow_left');
                        break;

                    case 'arrow-right':
                        btn.innerHTML = createIconHTML('arrow_right');
                        break;

                    case 'arrow-down':
                        btn.innerHTML = createIconHTML('arrow_drop_down');
                        break;

                    case 'Enter':
                        btn.classList.add('btn__big');
                        btn.innerHTML = createIconHTML('keyboard_return');
                        break;

                    case 'Space':
                        btn.classList.add('space');
                        btn.innerHTML = createIconHTML('space_bar');
                        break;

                    case 'Done':
                        btn.innerHTML = createIconHTML('check_circle');
                        break;

                    case 'Shift':
                        btn.classList.add('btn__big');
                        btn.innerHTML = createIconHTML('arrow_upward');
                        break;

                    case 'context-menu':
                        btn.innerHTML = createIconHTML('list');
                        break;

                    case 'Tab':
                        btn.classList.add('btn__big');
                        btn.innerHTML = createIconHTML('keyboard_tab');
                        break;

                    case 'arrow-up':
                        btn.innerHTML = createIconHTML('arrow_drop_up');
                        btn.classList.add('btn__big');
                        break;

                    case 'layout':
                        btn.innerHTML = createIconHTML('language');
                        break;

                    case 'Ctrl':
                        btn.classList.add('btn__big');
                        btn.innerHTML += `${key.content}`;
                        break;

                    case 'Alt':
                        btn.classList.add('btn__big');
                        btn.innerHTML += `${key.content}`;
                        break;

                    default:

                        if (Array.isArray(key.content)) {
                            btn.innerHTML += `<sup>${key.content[0]}</sup>`;
                            btn.innerHTML += `${key.content[1]}`;
                        }
                        else {
                            btn.innerHTML += `${key.content}`;
                        }
                }
                fragment.appendChild(row);
                row.appendChild(btn);

            });
        }
        return fragment;

    }

    _addBtnEL() {

        //const textarea = document.querySelector('.input');

        document.querySelectorAll('.input').forEach(element => {
            element.addEventListener('focus', () => {
                this.open();
            });
        });

        document.querySelector('.hide').addEventListener('click', () => {
            this.toggle();
        }
        );

        document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('mousedown', () => {
            btn.classList.add('active');
            this._handleBtn(btn);
        }));

        document.querySelectorAll('.btn').forEach(btn => btn.addEventListener('mouseup', () => {
            setTimeout(btn.classList.remove('active'), 300);
            document.querySelector('textarea').focus();
        }));

        document.addEventListener('keydown', (event) => {
            event.preventDefault();
            const btns = document.querySelectorAll('button');
            const activeBtn = [...btns].filter(btn => !btn.classList.contains('invisible') && btn.getAttribute('data-code') === event.code)[0];
            activeBtn.classList.add('active');
            if (event.altKey || event.ctrlKey) {
                if (event.code == 'ShiftLeft') {
                    this._changeKeyboardLayout();
                }
            } else {
                this._handleBtn(activeBtn);
            }
        });

        document.addEventListener('keyup', (event) => {
            const btns = document.querySelectorAll('button');
            const activeBtn = [...btns].filter(btn => !btn.classList.contains('invisible') && btn.getAttribute('data-code') === event.code)[0];
            setTimeout(activeBtn.classList.remove('active'), 300);
        });
    }

    _handleBtn(btn) {

        const textarea = document.querySelector('.input');
        const position = this.getCursorPosition(textarea);

        let textareaLength = textarea.value.split('\n')[0].length || textarea.value.split('\r\n')[0].length;
        switch (btn.getAttribute('data-code')) {
            case 'ArrowRight':
                this.setCursorPosition(textarea, position.start + 1, position.end + 1);
                break;
            case 'ArrowLeft':
                this.setCursorPosition(textarea, position.start - 1, position.end - 1);
                break;
            case 'ArrowDown':
                this.setCursorPosition(textarea, position.start + textareaLength, position.end + textareaLength);
                break;
            case 'ArrowUp':
                this.setCursorPosition(textarea, position.start - textareaLength, position.end - textareaLength);
                break;
            case 'Done':
            case 'Escape':
                btn.addEventListener('click', () => {
                    this.close();
                });
                break;
            case 'Enter':
                textarea.value = textarea.value.substring(0, position.start) + '\n' + textarea.value.substring(position.start);
                this.setCursorPosition(textarea, position.end + 1, position.end + 1);
                break;

            case 'Space':
                textarea.value = textarea.value.substring(0, position.start) + ' ' + textarea.value.substring(position.start);
                this.setCursorPosition(textarea, position.end + 1, position.end + 1);
                break;

            case 'Tab':
                textarea.value += '    ';
                this.setCursorPosition(textarea, position.start + 4, position.end + 4);
                break;

            case 'Backspace':
                textarea.value = textarea.value.substring(0, position.start - 1) + textarea.value.substring(position.start);
                this.setCursorPosition(textarea, position.start - 1, position.end - 1);
                break;

            case 'CapsLock':
                this.isCaps = !this.isCaps;
                if (this.isCaps) {
                    btn.classList.remove('btn__off');
                    btn.classList.add('btn__on');
                }
                else {
                    btn.classList.remove('btn__on');
                    btn.classList.add('btn__off');
                }
                break;

            case 'ShiftLeft':
                if (this.isControl || this.isAlt) {
                        this._changeKeyboardLayout();
                        this.isControl = false;
                        this.isAlt = false;
                    }
                else
                this.isShift = true;
                break;

            case 'ControlLeft':
                this.isControl = true;
                break;

                case 'AltLeft':
                this.isAlt = true;
                break;

            case 'Layout':
                this._changeKeyboardLayout();
                break;

            default:
                if (btn.textContent.length > 1 && btn.classList.contains('btn__simple') && !btn.classList.contains('invisible')) {
                    const key = btn.textContent.split('');
                    const btnTxt = this.isCaps || this.isShift ? key[0] : key[1];
                    textarea.value = textarea.value.substring(0, position.start) + btnTxt + textarea.value.substring(position.start);
                    this.isShift = false;
                    this.isCtrl = false;
                    this.isAlt = false;
                    this.setCursorPosition(textarea, position.start + 1, position.end + 1);
                }
                else if (btn.classList.contains('btn__simple') && !btn.classList.contains('invisible')) {
                    const btnTxt = this.isCaps || this.isShift ? btn.textContent : btn.textContent.toLowerCase();
                    textarea.value = textarea.value.substring(0, position.start) + btnTxt + textarea.value.substring(position.start);
                    this.isCtrl = false;
                    this.isAlt = false;
                    this.isShift = false;
                    this.setCursorPosition(textarea, position.start + 1, position.end + 1);
                }
        }
    }

    getCursorPosition(ctrl) {
        if (ctrl.selectionStart || ctrl.selectionStart == '0') {
            return {
                'start': ctrl.selectionStart,
                'end': ctrl.selectionEnd
            };
        } else {
            return {
                'start': 1,
                'end': 1
            };
        }
    }

    setCursorPosition(ctrl, start, end) {
        if (ctrl.setSelectionRange) {
            ctrl.focus();
            ctrl.setSelectionRange(start, end);
        }
    }

    _changeKeyboardLayout() {
        if (this.lang === 'en') {
            this.lang = 'ru';
        }
        else { this.lang = 'en'; }

        localStorage.setItem('lang', this.lang);
        document.querySelectorAll('.btn').forEach((item) => {
            if (item.classList.contains('change')) {
                item.classList.toggle('invisible');
            }
        });
    }

    open() {
        this.hidden = false;
        this.keyBoard.classList.remove('hidden');
        this.hide.textContent = 'Hide';

    }
    close() {
        this.hidden = true;
        this.keyBoard.classList.add('hidden');
        this.hide.textContent = 'Hide';
    }

    toggle() {
        this.hidden = !this.hidden;
        this.keyBoard.classList.toggle('hidden');
        if (this.hidden) {
            this.hide.textContent = 'Show';
        }
        if (!this.hidden) {
            this.hide.textContent = 'Hide';
            document.querySelector('textarea').focus();
        }
    }
}

export default Keyboard;