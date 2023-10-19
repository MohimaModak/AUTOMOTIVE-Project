import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4q2Z3gUnt_lk0M42hPr_hubUFtHxTiV4",
  authDomain: "assignment-ten-project-85a1e.firebaseapp.com",
  projectId: "assignment-ten-project-85a1e",
  storageBucket: "assignment-ten-project-85a1e.appspot.com",
  messagingSenderId: "748997514002",
  appId: "1:748997514002:web:eb9260f6d3eb6538c719cb",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth