const CryptoJS = require('crypto-js');

function decryptData(encryptedData, iv) {
    try {
        const key = CryptoJS.enc.Hex.parse("4b7bebbf8198eeb89500955d77237a618458673173652c359edc2e6242fb4e65");
        const decrypted = CryptoJS.AES.decrypt(encryptedData, key, { iv: CryptoJS.enc.Hex.parse(iv) });
        const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
        return decryptedText;
    } catch (error) {
        throw error;
    }
}

// Usage example:
const encryptedData = "J915Mv8f3dyKbkZb0VU+aw==";
const iv = "899f69a7a9a86d93c35ebf5607c7dfa9";

const decryptedData = decryptData(encryptedData, iv);
console.log(decryptedData);
