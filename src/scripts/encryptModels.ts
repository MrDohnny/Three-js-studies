import CryptoJS from "crypto-js";
import fs from "fs";
import characters from "../data/characters.json";

const secretKey = "your-secret-key";

const encryptedCharacters = characters.map((char) => {
  const encryptedModel = CryptoJS.AES.encrypt(char.model, secretKey).toString();
  return { ...char, model: encryptedModel };
});

fs.writeFileSync(
  "./data/characters.json",
  JSON.stringify(encryptedCharacters, null, 2)
);
