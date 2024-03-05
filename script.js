document.getElementById('sendMessage').onclick = function() {
    const message = document.getElementById('messageInput').value;
    displayMessage('User', message); // Display user message in chat window
    // Code to send message to the other user via WebSocket
};

document.getElementById('chime').onclick = function() {
    const chat = document.getElementById('chatWindow').innerText;
    // Code to send chat to ChatGPT via OpenAI API
    // Display ChatGPT's response in chat window
};

function displayMessage(sender, message) {
    const chatWindow = document.getElementById('chatWindow');
    const messageElement = document.createElement('div');
    messageElement.textContent = `${sender}: ${message}`;
    chatWindow.appendChild(messageElement);
    // Scroll to the bottom of the chat window
    chatWindow.scrollTop = chatWindow.scrollHeight;
}
