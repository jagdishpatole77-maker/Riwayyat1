import { auth } from "./firebase-config.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

document.addEventListener('DOMContentLoaded', () => {

    // Simple Animations
    gsap.from(".title-area", { duration: 1, y: -20, opacity: 0, delay: 0.2 });
    gsap.from(".input-group", { duration: 0.8, x: -20, opacity: 0, stagger: 0.1, delay: 0.5 });
    gsap.from(".buttons", { duration: 0.8, y: 20, opacity: 0, delay: 0.8 });

    const loginForm = document.getElementById('login-form');

    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const email = document.getElementById('username').value; // Using username field as email for now, or assume username input is used for email
        // Wait, the HTML says <label>Username</label> <input type="text" id="username">.
        // Firebase Auth uses email/password.
        // I should probably check if it's an email format, or assume the user enters their email.
        // The signup asked for Email Address.
        // For standard Firebase Auth, we need Email.
        // I will assume the user enters their Email in the "Username" field, OR I should change the label to "Email".
        // Changing the label to "Email" is better for clarity.

        const password = document.getElementById('password').value;
        const btn = loginForm.querySelector('.login-btn');

        // Change button to show processing
        btn.innerText = "Authenticating...";
        btn.style.opacity = "0.8";
        btn.disabled = true;

        try {
            await signInWithEmailAndPassword(auth, email, password);
            // Go to index
            window.location.href = 'index.html';
        } catch (error) {
            console.error("Login Error:", error);

            // Show error in the UI
            const errorDiv = document.getElementById('error-message');
            if (errorDiv) {
                errorDiv.innerText = "Error: " + error.message;
            } else {
                alert("Login Failed: " + error.message);
            }

            // Reset button
            btn.innerText = "Login";
            btn.style.opacity = "1";
            btn.disabled = false;
        }
    });

    // Star Background Logic
    // Star Background Logic handled by star-animation.js
});
