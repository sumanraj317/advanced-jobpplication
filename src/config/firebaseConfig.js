import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCS6ApYA_mSypHEKQPp_mfzfRu_m9OPloA",
  authDomain: "jobapplication-ab1f6.firebaseapp.com",
  projectId: "jobapplication-ab1f6",
  storageBucket: "jobapplication-ab1f6.appspot.com",
  messagingSenderId: "924461541132",
  appId: "1:924461541132:web:df1453f52b855d445ecb29"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

