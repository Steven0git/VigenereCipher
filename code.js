class VigenereCipher {
    constructor(mykey) {
        this.msg = null;
        this.key = mykey;
    }
    setText(text) {
        this.msg = text;
        console.log(`Text set: ${text}`);
    }
    encrypt() {
        let result = '';
        for (let i = 0, j = 0; i < this.msg.length; i++) {
            const c = this.msg.charAt(i);
            if (this.isLetter(c)) {
                if (this.strFormat(c)) {
                    result += this.encryptChar(c, this.key.toUpperCase().charCodeAt(j), 65);
                }
                else {
                    result += this.encryptChar(c, this.key.toLowerCase().charCodeAt(j), 97);
                }
            }
            else {
                result += c;
            }
            j = ++j % this.key.length;
        }
        return result;
    }
    decrypt() {
        let result = '';
        for (let i = 0, j = 0; i < this.msg.length; i++) {
            const c = this.msg.charAt(i);
            if (this.isLetter(c)) {
                if (this.isUpperCase(c)) {
                    result += this.decryptChar(c, this.key.toUpperCase().charCodeAt(j));
                }
                else {
                    result += this.decryptChar(c, this.key.toLowerCase().charCodeAt(j));
                }
            }
            else {
                result += c;
            }
            j = ++j % this.key.length;
        }
        return result;
    }
    isLetter(letter) {
        return letter.length === 1 && letter.match(/[a-zA-Z]/i);
    }
    isUpperCase(character) {
        return character === character.toUpperCase();
    }
    strFormat(character) {
        return character === character.toUpperCase();
    }
    encryptChar(char, keyCharCode, base) {
        return String.fromCharCode(((char.charCodeAt(0) + keyCharCode - 2 * base) % 26) + base);
    }
    decryptChar(char, keyCharCode) {
        return String.fromCharCode(90 - ((25 - (char.charCodeAt(0) - keyCharCode)) % 26));
    }
}
module.exports = VigenereCipher;
