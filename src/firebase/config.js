import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDXPMQfJ7HLMMqNpkCA-baQgt_zpbuU6Lk",
    authDomain: "payroll-payment-14884.firebaseapp.com",
    projectId: "payroll-payment-14884",
    storageBucket: "payroll-payment-14884.appspot.com",
    messagingSenderId: "637527089722",
    appId: "1:637527089722:web:920c02541ba44cef9a8b03"
  }
//init firebase
firebase.initializeApp(firebaseConfig)

//init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp
const timestamp = firebase.firestore.FieldValue.serverTimeStamp

export { projectFirestore, projectAuth, timestamp}