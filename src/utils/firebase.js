import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore , collection , addDoc , getDocs, writeBatch , doc } from "firebase/firestore";
import flightDetails from '../utils/Flights'



const firebaseConfig = {
  apiKey: "AIzaSyDeTWNNxmpu-iXNFMcj3RKGPYRtHkOHN5U",
  authDomain: "travel-agency-220f7.firebaseapp.com",
  projectId: "travel-agency-220f7",
  storageBucket: "travel-agency-220f7.appspot.com",
  messagingSenderId: "694519420016",
  appId: "1:694519420016:web:e42eb1e68f73b8163850b5",
  measurementId: "G-X4Y8CSJF65"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app)
const auth = getAuth(app)








export {
    app,
    db,
    getDocs,
    // flightTicketsCollection,
    // collection,
    flightDetails,
    doc,
    auth

}








