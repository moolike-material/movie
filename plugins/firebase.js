import firebase  from 'firebase'

const config ={
    projectId: process.env.FIREBASE_PROJECT_ID,  
    apiKey: "AIzaSyDPrbQj6xsAgz4w8mst-CXLEBkv6rIHP9Q",
    authDomain: "moolike-8fc66.firebaseapp.com",
    storageBucket: "moolike-8fc66.appspot.com",
    messagingSenderId: "502900178834",
    appId: "1:502900178834:web:058c576d2b2a962a1ccb4b",
    measurementId: "G-VY5NNX8QT3"
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

export default firebase