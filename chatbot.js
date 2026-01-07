function toggleChat() {
    const chatWindow = document.getElementById('chat-window');
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
    } else {
        chatWindow.style.display = 'none';
    }
}

function handleEnter(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
}

function sendMessage() {
    const inputField = document.getElementById('chat-input');
    const userText = inputField.value.trim();

    if (userText === "") return;

    // Add User Message
    addMessage(userText, 'user');
    inputField.value = "";

    // Bot Response Logic (Student-friendly "AI")
    setTimeout(() => {
        const botResponse = getBotResponse(userText.toLowerCase());
        addMessage(botResponse, 'bot');
    }, 500);
}

function addMessage(text, sender) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageDiv = document.createElement('div');

    messageDiv.classList.add('message');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'bot-message');
    // Use innerHTML to allow links
    messageDiv.innerHTML = text;

    messagesContainer.appendChild(messageDiv);

    // Auto scroll to bottom
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function getBotResponse(input) {

    // Simple Rule-Based Logic
    if (input.includes("hello") || input.includes("hi") || input.includes("hey")) {
        return "Hello! Welcome to Riwayyat. How can I help you regarding rentals today?";
    } else if (input.includes("price") || input.includes("cost") || input.includes("rent")) {
        return "Our rentals start from ₹1500 for jewelry and ₹2500 for outfits. Check the category pages for details!";
    } else if (input.includes("contact") || input.includes("phone") || input.includes("email")) {
        return "You can call us at +91 98765 43210 or email us at info@riwayyatrentals.com.";
    } else if (input.includes("location") || input.includes("address") || input.includes("shop")) {
        return "We are located at Fashion Street, Undri, Pune. We also offer home delivery!";
    } else if (input.includes("thank")) {
        return "You're welcome! Happy shopping!";
    } else if (input.includes("grievance") || input.includes("complaint") || input.includes("issue") || input.includes("problem") || input.includes("refund") || input.includes("damaged") || input.includes("late")) {
        return `I apologize for the inconvenience. Please contact the owner directly:<br><br>
        <strong>Phone:</strong> +91 98765 43210<br>
        <a href="mailto:owner@riwayyat.com?subject=Grievance: ${input}" style="color: #000; text-decoration: underline; font-weight: bold;">Click here to email the Owner</a>`;
    } else {
        return "I'm just a simple bot. Please try asking about 'price', 'contact', 'location', or 'grievance'.";
    }
}
