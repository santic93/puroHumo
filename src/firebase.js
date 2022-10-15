// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-analytics.js';
import { getDatabase } from 'https://www.gstatic.com/firebasejs/9.10.0/firebase-database.js';
const firebaseConfig = {
  apiKey: 'AIzaSyC324qUp-Yhb4m3qG7mSgbZu71bQDFvNEY',
  authDomain: 'puro-humo.firebaseapp.com',
  databaseURL: 'https://puro-humo-default-rtdb.firebaseio.com',
  projectId: 'puro-humo',
  storageBucket: 'puro-humo.appspot.com',
  messagingSenderId: '238823940930',
  appId: '1:238823940930:web:58e84cc8b2917fc2cb1edb',
  measurementId: 'G-VG84S9444J',
};

//INICIALIZO FIREBASE
let app = initializeApp(firebaseConfig);
let analytics = getAnalytics(app);
let db = getDatabase();

export default db;
