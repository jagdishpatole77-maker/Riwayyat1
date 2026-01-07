import { auth, db } from "./firebase-config.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { doc, setDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

console.log("Signup script loaded");
// alert("Debug: Signup script is ACTIVE"); // Uncomment if console is ignored

document.addEventListener('DOMContentLoaded', () => {

    // Simple Animations
    gsap.from(".title-area", { duration: 1, y: -20, opacity: 0, delay: 0.2 });
    gsap.from(".input-group", { duration: 0.8, x: -20, opacity: 0, stagger: 0.1, delay: 0.5 });
    gsap.from(".buttons", { duration: 0.8, y: 20, opacity: 0, delay: 0.8 });

    const signupForm = document.getElementById('signup-form');

    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Check password
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const confirmPassword = document.getElementById('confirm-password').value;

        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const btn = signupForm.querySelector('.signup-btn');

        // Show processing
        btn.innerText = "Signing Up...";
        btn.style.opacity = "0.8";
        btn.disabled = true;

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            // Store user data in Firestore
            await setDoc(doc(db, "users", user.uid), {
                username: username,
                email: email,
                uid: user.uid,
                createdAt: new Date().toISOString()
            });

            alert("Signup Successful! Redirecting to login...");
            window.location.href = 'login.html';

        } catch (error) {
            console.error("Signup Error:", error);

            // Show error in the UI
            const errorDiv = document.getElementById('error-message');
            if (errorDiv) {
                errorDiv.innerText = "Error: " + error.message;
            } else {
                alert("Error: " + error.message);
            }

            // Reset button
            btn.innerText = "Sign Up";
            btn.style.opacity = "1";
            btn.disabled = false;
        }
    });

    // Star Background Logic handled by star-animation.js
});
