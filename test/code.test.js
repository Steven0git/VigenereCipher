const VigenereCipher = require("../code");

function runTests() {
    console.info("------------------------------------")
    console.info("\tTEST BEGIN")
    console.info("------------------------------------")
  const cipher = new VigenereCipher("testKey");

  console.log("--- Encryption Test ---");
  const plainText = "Hello, this is a test message!";
  cipher.setText(plainText);
  const encryptedText = cipher.encrypt();
  console.log(`Plain text: ${plainText}`);
  console.log(`Encrypted text: ${encryptedText}`);

  console.log("\n--- Decryption Test ---");
  const decryptedText = cipher.decrypt(cipher.setText(encryptedText));
  console.log(`Decrypted text: ${decryptedText}`);

  if(plainText.toUpperCase() === decryptedText){
    console.info("------------------------------------")
    console.info("\tTEST SUCCESS!")
    console.info("------------------------------------")
  } else {
    console.info("------------------------------------")
    console.error("\tTEST FAILURE!")
    console.info("------------------------------------")
  }
}

runTests();
