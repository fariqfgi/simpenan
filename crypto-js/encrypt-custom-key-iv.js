const CryptoJS = require('crypto-js');

function encryptData(data) {
    try {
        const key = CryptoJS.enc.Hex.parse("4b7bebbf8198eeb89500955d77237a618458673173652c359edc2e6242fb4e65");
        const iv = CryptoJS.lib.WordArray.random(16);
        const encrypted = CryptoJS.AES.encrypt(data, key, { iv: iv });
        const encryptedData = encrypted.toString();
        const ivString = iv.toString();

        return {
            encryptedData: encryptedData,
            iv: ivString
        };
    } catch (error) {
        throw error;
    }
}

// Usage example:
const dataToEncrypt = "Hello, World!";
const encryptedData = encryptData(dataToEncrypt);
console.log(encryptedData);
