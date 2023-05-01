class Keyboard {
    constructor() {
        this.keysEn = [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del'],
            ['Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '"', 'Enter'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '', 'Shift'],
            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
        ];
        this.keySymbolsEnCaps = [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Del'],
            ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '"', 'Enter'],
            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '', 'Shift'],
            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
        ];
        this.keySymbolsEnShift = [
            ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'],
            ['Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Del'],
            ['Caps Lock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter'],
            ['Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '', 'Shift'],
            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
        ];
        this.keySymbolsRu = [
            ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Del'],
            ['Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'],
            ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '', 'Shift'],
            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
        ];
        this.keySymbolsRuCaps = [
            ['Ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Del'],
            ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter'],
            ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '', 'Shift'],
            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
        ];
        this.keySymbolsRuShift = [
            ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
            ['Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Del'],
            ['Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',],
            ['Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '', 'Shift'],
            ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'Ctrl', '', '', ''],
        ];
        this.lineCodes = [
            ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace'],
            ['Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete'],
            ['CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter'],
            ['ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight'],
            ['ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight'],
        ];

        this.caps = false;
        this.shift = false;
        this.language = localStorage.getItem('language') === 'ru' ? 'ru' : 'en';

        this.keyboardLayout = this.keyboardLayout.bind(this);
        this.shiftToggle = this.shiftToggle.bind(this);
        this.shiftOff = this.shiftOff.bind(this);
    }

    generateKeyboard() {
        const title = document.createElement('h1');
        title.classList.add('title');
        title.textContent = 'Virtual Keyboard';

        const textarea = document.createElement('textarea');
        textarea.rows = 3;
        textarea.classList.add('textarea');
        textarea.focus();

        const keyboard = document.createElement('div');
        keyboard.classList.add('keyboard');

        document.body.appendChild(title);
        document.body.appendChild(textarea);
        document.body.appendChild(keyboard);

        for (let line = 0; line < 5; line += 1) {
            const keyboardLine = document.createElement('div');
            keyboardLine.classList.add('keyboard_line');
            keyboard.appendChild(keyboardLine);
        }

        const keyboardLines = keyboard.querySelectorAll('.keyboard_line');

        for (let k = 0; k < keyboardLines.length; k += 1) {
            for (let i = 0; i < this.lineCodes[k].length; i += 1) {
                const button = document.createElement('div');
                button.classList.add('keyboard_button');
                keyboardLines[k].appendChild(button);
            }
        }

        const note1 = document.createElement('p');
        note1.classList.add('note');
        note1.innerHTML = 'The keyboard was created in the <b>Windows OS</b>';
        const note2 = document.createElement('p');

        note2.classList.add('note', 'note_mb');
        note2.innerHTML = 'To switch the language layout press <b>Alt + Ctrl</b>';

        document.body.appendChild(note1);
        document.body.appendChild(note2);

        this.keyboardLayout();
        this.setButtonsClass();
        this.pressAnimation();
        this.buttonsHighlight();
        this.keydownAddText();
        this.buttonsAddText();
        this.shiftOff();

        textarea.selectionStart = 0;
        textarea.selectionEnd = 0;
        textarea.focus();
    }

    keyboardLayout() {
        const keyboard = document.querySelector('.keyboard');
        const keyboardLines = keyboard.querySelectorAll('.keyboard_line');
        const button = keyboard.querySelectorAll('.keyboard_button');
        let number;

        if (this.language === 'en') {
            if (!this.caps) {
                number = 0;
                for (let k = 0; k < keyboardLines.length; k += 1) {
                    for (let i = 0; i < this.lineCodes[k].length; i += 1) {
                        button[number].textContent = this.keysEn[k][i];
                        number += 1;
                    }
                }
            }

            if (this.caps) {
                number = 0;
                for (let k = 0; k < keyboardLines.length; k += 1) {
                    for (let i = 0; i < this.lineCodes[k].length; i += 1) {
                        button[number].textContent = this.keySymbolsEnCaps[k][i];
                        number += 1;
                    }
                }
            }

            if (this.shift) {
                number = 0;
                for (let k = 0; k < keyboardLines.length; k += 1) {
                    for (let i = 0; i < this.lineCodes[k].length; i += 1) {
                        button[number].textContent = this.keySymbolsEnShift[k][i];
                        number += 1;
                    }
                }
            }
        }

        if (this.language === 'ru') {
            if (!this.caps) {
                number = 0;
                for (let k = 0; k < keyboardLines.length; k += 1) {
                    for (let i = 0; i < this.lineCodes[k].length; i += 1) {
                        button[number].textContent = this.keySymbolsRu[k][i];
                        number += 1;
                    }
                }
            }

            if (this.caps) {
                number = 0;
                for (let k = 0; k < keyboardLines.length; k += 1) {
                    for (let i = 0; i < this.lineCodes[k].length; i += 1) {
                        button[number].textContent = this.keySymbolsRuCaps[k][i];
                        number += 1;
                    }
                }
            }

            if (this.shift) {
                number = 0;
                for (let k = 0; k < keyboardLines.length; k += 1) {
                    for (let i = 0; i < this.lineCodes[k].length; i += 1) {
                        button[number].textContent = this.keySymbolsRuShift[k][i];
                        number += 1;
                    }
                }
            }
        }

        if (keyboard.querySelector('.key_arr')) {
            const keyArrUp = keyboard.querySelector('.key_arr-up');
            keyArrUp.innerHTML = '▲';

            const keyArrLeft = keyboard.querySelector('.key_arr-left');
            keyArrLeft.innerHTML = '◄';

            const keyArrDown = keyboard.querySelector('.key_arr-down');
            keyArrDown.innerHTML = '▼';

            const keyArrRight = keyboard.querySelector('.key_arr-right');
            keyArrRight.innerHTML = '►';
        }
    }

    setButtonsClass() {
        this.keyboard = document.querySelector('.keyboard');

        const keyWithChars = this.keyboard.querySelectorAll('.keyboard_button');
        keyWithChars.forEach((key) => {
            if (!['Backspace', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Ctrl', 'Win', 'Alt'].includes(key.textContent)) {
                key.classList.add('key_char');
            }
        });

        const keyBackspace = this.keyboard.querySelectorAll('.keyboard_button')[13];
        keyBackspace.classList.add('key_backspace');

        const keyTab = this.keyboard.querySelectorAll('.keyboard_button')[14];
        keyTab.classList.add('key_tab');

        const keyDel = this.keyboard.querySelectorAll('.keyboard_button')[28];
        keyDel.classList.add('key_del');

        const keyCaps = this.keyboard.querySelectorAll('.keyboard_button')[29];
        keyCaps.classList.add('key_caps');

        const keyEnter = this.keyboard.querySelectorAll('.keyboard_button')[41];
        keyEnter.classList.add('key_enter');

        const keyShiftL = this.keyboard.querySelectorAll('.keyboard_button')[42];
        keyShiftL.classList.add('key_shift-l', 'key_shift');

        const keyShiftR = this.keyboard.querySelectorAll('.keyboard_button')[54];
        keyShiftR.classList.add('key_shift-r', 'key_shift');

        const keyCtrlL = this.keyboard.querySelectorAll('.keyboard_button')[55];
        keyCtrlL.classList.add('key_ctrl-l', 'key_ctrl');

        const keyCtrlR = this.keyboard.querySelectorAll('.keyboard_button')[60];
        keyCtrlR.classList.add('key_ctrl-r', 'key_ctrl');

        const keyWin = this.keyboard.querySelectorAll('.keyboard_button')[56];
        keyWin.classList.add('key_win');

        const keyAltL = this.keyboard.querySelectorAll('.keyboard_button')[57];
        keyAltL.classList.add('key_alt-l', 'key_alt');

        const keyAltR = this.keyboard.querySelectorAll('.keyboard_button')[59];
        keyAltR.classList.add('key_alt-r', 'key_alt');

        const keySpace = this.keyboard.querySelectorAll('.keyboard_button')[58];
        keySpace.classList.add('key_space');

        const keyArrUp = this.keyboard.querySelectorAll('.keyboard_button')[53];
        keyArrUp.classList.add('key_arr-up', 'key_arr');
        keyArrUp.innerHTML = '▲';

        const keyArrLeft = this.keyboard.querySelectorAll('.keyboard_button')[61];
        keyArrLeft.classList.add('key_arr-left', 'key_arr');
        keyArrLeft.innerHTML = '◄';

        const keyArrDown = this.keyboard.querySelectorAll('.keyboard_button')[62];
        keyArrDown.classList.add('key_arr-down', 'key_arr');
        keyArrDown.innerHTML = '▼';

        const keyArrRight = this.keyboard.querySelectorAll('.keyboard_button')[63];
        keyArrRight.classList.add('key_arr-right', 'key_arr');
        keyArrRight.innerHTML = '►';
    }

    pressAnimation() {
        this.buttons = document.querySelectorAll('.keyboard_button');
        this.buttons.forEach((key) => key.addEventListener('click', () => {
            const button = key;
            button.style.transform = 'translateY(2px)';
            button.style.boxShadow = '-1px -1px 3px rgba(0, 0, 0, 0.6)';
            function keyTransit() {
                button.style.transform = 'translateY(0px)';
                button.style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.5)';
            }
            setTimeout(keyTransit, 50);
        }));
    }

    buttonsHighlight() {
        const keyboardLine = document.querySelectorAll('.keyboard_line');

        document.addEventListener('keydown', (event) => {
            const textarea = document.querySelector('.textarea');
            textarea.focus();

            for (let line = 0; line < 5; line += 1) {
                const buttonsLine = keyboardLine[line].querySelectorAll('.keyboard_button');
                for (let i = 0; i < buttonsLine.length; i += 1) {
                    if (event.code === this.lineCodes[line][i]) {
                        buttonsLine[i].style.background = 'rgb(208,125,184)';
                        buttonsLine[i].style.boxShadow = '0 0 15px rgba(125, 176, 208, 0.3)';
                        buttonsLine[i].style.transform = 'translateY(2px)';
                        const keyTransit = () => {
                            buttonsLine[i].style.background = '#907087';
                            buttonsLine[i].style.boxShadow = '1px 1px 5px rgba(0, 0, 0, 0.5)';
                            buttonsLine[i].style.transform = 'translateY(0px)';
                        };
                        setTimeout(keyTransit, 100);
                    }

                    buttonsLine[i].addEventListener('mouseover', () => {
                        buttonsLine[i].classList.add('hover');
                    });

                    buttonsLine[i].addEventListener('mouseleave', () => {
                        buttonsLine[i].classList.remove('hover');
                    });
                }
            }
        });
    }

    keydownAddText() {
        document.addEventListener('keydown', (event) => {
            const textarea = document.querySelector('.textarea');
            const keyboardLine = document.querySelectorAll('.keyboard_line');
            if (!['Backspace', 'Delete', 'CapsLock', 'Enter', 'MetaLeft', 'ShiftLeft', 'ShiftRight', 'ControlLeft', 'ControlRight', 'AltLeft', 'AltRight'].includes(event.code)) {
                event.preventDefault();
                for (let line = 0; line < 5; line += 1) {
                    const buttonsLine = keyboardLine[line].querySelectorAll('.keyboard_button');
                    for (let i = 0; i < buttonsLine.length; i += 1) {
                        if (event.code === this.lineCodes[line][i]) {
                            let newChar = buttonsLine[i].textContent;
                            if (event.code === 'Tab') {
                                newChar = '\t';
                            }

                            textarea.setRangeText(
                                newChar,
                                textarea.selectionStart,
                                textarea.selectionEnd,
                                'end',
                            );
                        }
                    }
                }
            }

            if (event.code === 'CapsLock' && !event.repeat) {
                const keyCaps = keyboardLine[2].querySelectorAll('.keyboard_button')[0];
                this.caps = !this.caps;
                this.keyboardLayout();
                keyCaps.classList.toggle('active');
            }

            if (event.shiftKey && !event.repeat) {
                const buttonShiftL = document.querySelectorAll('.key_shift')[0];
                const buttonShiftR = document.querySelectorAll('.key_shift')[1];
                if (event.code === 'ShiftLeft') {
                    if (!buttonShiftR.classList.contains('active')) {
                        buttonShiftL.classList.add('active');
                        this.shift = true;
                        this.keyboardLayout();
                    }
                }

                if (event.code === 'ShiftRight') {
                    if (!buttonShiftL.classList.contains('active')) {
                        buttonShiftR.classList.add('active');
                        this.shift = true;
                        this.keyboardLayout();
                    }
                }
            }

            if (event.ctrlKey && event.altKey) {
                event.preventDefault();
                this.language = this.language === 'en' ? 'ru' : 'en';
                localStorage.setItem('language', this.language);
                this.keyboardLayout();
            }
        });
    }

    shiftOff() {
        document.addEventListener('keyup', (event) => {
            const buttonShiftL = document.querySelectorAll('.key_shift')[0];
            const buttonShiftR = document.querySelectorAll('.key_shift')[1];
            if (event.code === 'ShiftLeft') {
                buttonShiftL.classList.remove('active');
                if (!buttonShiftR.classList.contains('active')) {
                    this.shift = false;
                    this.keyboardLayout();
                }
            }

            if (event.code === 'ShiftRight') {
                buttonShiftR.classList.remove('active');
                if (!buttonShiftL.classList.contains('active')) {
                    this.shift = false;
                    this.keyboardLayout();
                }
            }
        });
    }

    buttonsAddText() {
        const textarea = document.querySelector('.textarea');
        const buttons = document.querySelectorAll('.keyboard_button');
        const buttonsChar = document.querySelectorAll('.key_char');

        buttonsChar.forEach((key) => {
            key.addEventListener('click', () => {
                textarea.focus();
                let newChar = key.textContent;
                if (key.textContent === 'Tab') {
                    newChar = '\t';
                }
                textarea.setRangeText(
                    newChar,
                    textarea.selectionStart,
                    textarea.selectionEnd,
                    'end',
                );
            });
        });

        buttons.forEach((key) => key.addEventListener('click', (event) => {
            if (event.target.textContent === 'Caps Lock') {
                this.caps = !this.caps;
                this.keyboardLayout();
                event.target.classList.toggle('active');
            }

            if (event.target.textContent === 'Shift') {
                this.shiftToggle(event.target);
                setTimeout(this.shiftToggle, 200, event.target);
            }

            if (event.target.textContent === 'Backspace') {
                const carPos = textarea.selectionStart;
                if (carPos !== 0) {
                    let text = textarea.value;
                    text = text.slice(0, carPos - 1) + text.slice(carPos);
                    textarea.value = text;
                    textarea.selectionStart = carPos - 1;
                    textarea.selectionEnd = carPos - 1;
                }
                else {
                    textarea.selectionStart = carPos;
                    textarea.selectionEnd = carPos;
                }
                textarea.focus();
            }

            if (event.target.textContent === 'Del') {
                const carPos = textarea.selectionStart;
                let text = textarea.value;
                const len = text.length;
                if (carPos !== len) {
                    text = text.slice(0, carPos) + text.slice(carPos + 1);
                    textarea.value = text;
                }
                textarea.selectionStart = carPos;
                textarea.selectionEnd = carPos;
                textarea.focus();
            }

            if (event.target.textContent === 'Enter') {
                const carPos = textarea.selectionStart;
                textarea.setRangeText(
                    '\n',
                    textarea.selectionStart,
                    textarea.selectionEnd,
                    'end',
                );
                textarea.selectionStart = carPos + 1;
                textarea.selectionEnd = carPos + 1;
                textarea.focus();
            }
        }));
    }

    shiftToggle(target) {
        target.classList.toggle('active');
        this.shift = !this.shift;
        this.keyboardLayout();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const keyBrd = new Keyboard();
    keyBrd.generateKeyboard();
});
