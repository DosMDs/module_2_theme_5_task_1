// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyBcBY8QfSccAATj5mB7UA2CkDUqLskNq4k",
	authDomain: "todolist-f2085.firebaseapp.com",
	projectId: "todolist-f2085",
	storageBucket: "todolist-f2085.firebasestorage.app",
	messagingSenderId: "679115214618",
	appId: "1:679115214618:web:9b1ec4a76321505f7426a3",
	databaseUrl:
		"https://todolist-f2085-default-rtdb.europe-west1.firebasedatabase.app/",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
