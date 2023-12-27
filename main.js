const VigenereCipher = require("./code.js");
const rl = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout,
});
function getInput() {
    rl.question("Enter 'e' to encrypt, 'd' to decrypt, or 'q' to quit: ", (choice) => {
        if (choice.toLowerCase() === 'e') {
            rl.question("Enter the key: ", (key) => {
                rl.question("Enter the text to encrypt: ", (text) => {
                    const cipher = new VigenereCipher(key);
                    cipher.setText(text);
                    const encryptedText = cipher.encrypt();
                    console.log(`Encrypted text: ${encryptedText}\n`);
                    getInput();
                });
            });
        }
        else if (choice.toLowerCase() === 'd') {
            rl.question("Enter the key: ", (key) => {
                rl.question("\nEnter the text to decrypt: ", (text) => {
                    const cipher = new VigenereCipher(key);
                    cipher.setText(text);
                    const decryptedText = cipher.decrypt();
                    console.log(`Decrypted text: ${decryptedText}\n`);
                    getInput();
                });
            });
        }
        else if (choice.toLowerCase() === 'q') {
            rl.close();
        }
        else {
            console.log("Invalid choice. Please enter 'e', 'd', or 'q'.");
            getInput();
        }
    });
}
getInput();
