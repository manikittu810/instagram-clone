import firebase from "firebase";
const firebaseApp=firebase.initializeApp({ 

        apiKey: "AIzaSyDOK6S3yztCyny00pGFQ6BTwGLBOKrUeo4",
        authDomain: "instagram-clone-react-df4e8.firebaseapp.com",
        databaseURL: "https://instagram-clone-react-df4e8.firebaseio.com",
        projectId: "instagram-clone-react-df4e8",
        storageBucket: "instagram-clone-react-df4e8.appspot.com",
        messagingSenderId: "776286639290",
        appId: "1:776286639290:web:1cec5b8f2e34aaefd0de83",
        measurementId: "G-LRNL2PD40F"

});
const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage=firebase.storage();

export {db,auth,storage};