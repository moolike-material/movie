import firebase  from 'firebase'

const config ={
    projectId: process.env.FIREBASE_PROJECT_ID,  
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTHDOMAIN,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMEN_ID,
    terminalDatabasesAfterGenerate:true
}

if(!firebase.apps.length){
    firebase.initializeApp(config)
}

export default firebase