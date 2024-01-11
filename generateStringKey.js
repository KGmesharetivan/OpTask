/* eslint-disable linebreak-style */
const crypto = require("crypto");

// Function to generate a random string (secret key)
function generateRandomString(length) {
  return crypto
    .randomBytes(Math.ceil(length / 2))
    .toString("hex")
    .slice(0, length);
}

// Generate a random secret key (32 characters in this example)
const secretKey = generateRandomString(32);

console.log("Generated Secret Key:", secretKey);
