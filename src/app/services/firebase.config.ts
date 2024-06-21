import firebase from 'firebase';
import { environment } from "src/environments/environment";



firebase.initializeApp(environment.firebaseConfig);

// if (Capacitor.isNativePlatform()) {
//     initializeAuth(firebase, {
//         persistence: indexedDBLocalPersistence
//     });
//     console.log("native")
// }

let auth = firebase.auth;
const database = firebase.database();
let fire = firebase;
// firebase.auth. = 'en';

export { fire , database };