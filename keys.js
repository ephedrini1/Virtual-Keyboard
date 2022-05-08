const keys = [
    [
        {
            content: 'Esc',
            code: 'Escape',
            type: 'spec',
        },
        {
            content: ['~', '\`'],
            code: 'Backquote',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ё',
            code: 'Backquote',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['!', '1'],
            code: 'Digit1',
            type: 'simple'
        },
        {
            content: ['@', '2'],
            code: 'Digit2',
            type: 'simple'
        },
        {
            content: ['#', '3'],
            code: 'Digit3',
            type: 'simple'
        },
        {
            content: ['$', '4'],
            code: 'Digit4',
            type: 'simple'
        },
        {
            content: ['%', '5'],
            code: 'Digit5',
            type: 'simple'
        },
        {
            content: ['^', '6'],
            code: 'Digit6',
            type: 'simple'
        },
        {
            content: ['&', '7'],
            code: 'Digit7',
            type: 'simple'
        },
        {
            content: ['*', '8'],
            code: 'Digit8',
            type: 'simple'
        },
        {
            content: ['(', '9'],
            code: 'Digit9',
            type: 'simple'
        },
        {
            content: [')', '0'],
            code: 'Digit0',
            type: 'simple'
        },
        {
            content: ['_', '-'],
            code: 'Minus',
            type: 'simple'
        },
        {
            content: ['+', '='],
            code: 'Equal',
            type: 'simple'
        },
        {
            content: 'Backspace',
            code: 'Backspace',
            type: 'spec'
        }
    ],
    [
        {
            content: 'Tab',
            code: 'Tab',
            type: 'spec'
        },
        {
            content: 'Q',
            code: 'KeyQ',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Й',
            code: 'KeyQ',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'W',
            code: 'KeyW',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ц',
            code: 'KeyW',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'E',
            code: 'KeyE',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'У',
            code: 'KeyE',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'R',
            code: 'KeyR',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'К',
            code: 'KeyR',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'T',
            code: 'KeyT',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Е',
            code: 'KeyT',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'Y',
            code: 'KeyY',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Н',
            code: 'KeyY',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'U',
            code: 'KeyU',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Г',
            code: 'KeyU',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'I',
            code: 'KeyI',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ш',
            code: 'KeyI',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'O',
            code: 'KeyO',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Щ',
            code: 'KeyO',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'P',
            code: 'KeyP',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'З',
            code: 'KeyP',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['{', '['],
            code: 'BracketLeft',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Х',
            code: 'BracketLeft',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['}', ']'],
            code: 'BracketRight',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ъ',
            code: 'BracketRight',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['|', '\\'],
            code: 'Backslash',
            type: 'simple'
        },

        {
            content: 'Done',
            code: 'Done',
            type: 'spec'
        }
    ],
    [
        {
            content: 'Caps Lock',
            code: 'CapsLock',
            type: 'spec'
        },
        {
            content: 'A',
            code: 'KeyA',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ф',
            code: 'KeyA',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'S',
            code: 'KeyS',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ы',
            code: 'KeyS',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'D',
            code: 'KeyD',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'В',
            code: 'KeyD',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'F',
            code: 'KeyF',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'А',
            code: 'KeyF',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'G',
            code: 'KeyG',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'П',
            code: 'KeyG',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'H',
            code: 'KeyH',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Р',
            code: 'KeyH',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'J',
            code: 'KeyJ',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'О',
            code: 'KeyJ',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'K',
            code: 'KeyK',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Л',
            code: 'KeyK',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'L',
            code: 'KeyL',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Д',
            code: 'KeyL',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: [':', ';'],
            code: 'Semicolon',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ж',
            code: 'Semicolon',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['"', "'"],
            code: 'Quote',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Э',
            code: 'Quote',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'Enter',
            code: 'Enter',
            type: 'spec',
        }
    ],
    [
        {
            content: 'Shift',
            code: 'ShiftLeft',
            type: 'spec'
        },
        {
            content: 'Z',
            code: 'KeyZ',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Я',
            code: 'KeyZ',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'X',
            code: 'KeyX',
            type: 'simple',
            change: 'change',
        },
          {
            content: 'Ч',
            code: 'KeyX',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'C',
            code: 'KeyC',
            type: 'simple',
            change: 'change',
        },
          {
            content: 'С',
            code: 'KeyC',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'V',
            code: 'KeyV',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'М',
            code: 'KeyV',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'B',
            code: 'KeyB',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'И',
            code: 'KeyB',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'N',
            code: 'KeyN',
            type: 'simple',
            change: 'change',
        },
         {
            content: 'Т',
            code: 'KeyN',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'M',
            code: 'KeyM',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ь',
            code: 'KeyM',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['<', ','],
            code: 'Comma',
            type: 'simple',
            change: 'change',
        },
         {
            content: 'Б',
            code: 'Comma',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['>', '.'],
            code: 'Period',
            type: 'simple',
            change: 'change',
        },
        {
            content: 'Ю',
            code: 'Period',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: ['?', '/'],
            code: 'Slash',
            type: 'simple',
            change: 'change',
        },
        {
            content: ['.', ','],
            code: 'Slash',
            type: 'simple',
            lang: 'invisible',
            change: 'change',
        },
        {
            content: 'context-menu',
            code: 'ContextMenu',
            type: 'spec'
        },
        {
            content: 'arrow-up',
            code: 'ArrowUp',
            type: 'spec'
        },

    ],
    [
        {
            content: 'Ctrl',
            code: 'ControlLeft',
            type: 'spec'
        },
        {
            content: 'Win',
            code: 'MetaLeft',
            type: 'spec',
        },
        {
            content: 'Alt',
            code: 'AltLeft',
            type: 'spec',
        },
        {
            content: 'Space',
            code: 'Space',
            type: 'spec',
        },

        {
            content: 'layout',
            code: 'Layout',
            type: 'spec'
        },

        {
            content: 'arrow-left',
            code: 'ArrowLeft',
            type: 'spec'
        },
        {
            content: 'arrow-down',
            code: 'ArrowDown',
            type: 'spec'
        },
        {
            content: 'arrow-right',
            code: 'ArrowRight',
            type: 'simple'
        }
    ]
];

export default keys;
