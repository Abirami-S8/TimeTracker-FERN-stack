const admin = require("firebase-admin");
const serviceAccount = require("./maestro-tracker-3cad5-firebase-adminsdk-fbsvc-1c99a0cb32.json"); // put this file in /backend

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();
module.exports = db;