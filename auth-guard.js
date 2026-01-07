import { auth } from "./firebase-config.js";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Check authentication state
onAuthStateChanged(auth, (user) => {
    if (user) {
        // User is signed in, stay on index.html
        console.log("User is authenticated:", user.email);
        document.body.style.display = 'block'; // Show body if hidden
    } else {
        // User is not signed in, redirect to login
        console.log("User not authenticated, redirecting to login...");
        window.location.href = "login.html";
    }
});
