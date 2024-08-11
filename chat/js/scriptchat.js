document.getElementById('chat-floating-button').addEventListener('click', function () {
    document.getElementById('chat-container').style.display = 'flex';
    document.getElementById('chat-floating-button').style.display = 'none';
});

document.getElementById('close-button').addEventListener('click', function () {
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('chat-floating-button').style.display = 'block';
});

document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('message-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const messageInput = document.getElementById('message-input');
    const message = messageInput.value.trim();

    if (message) {
        displayMessage('Usuario', message);
        messageInput.value = '';
    }
}

function displayMessage(username, message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');

    const usernameElement = document.createElement('span');
    usernameElement.classList.add('username');
    usernameElement.textContent = username;

    const textElement = document.createElement('span');
    textElement.classList.add('text');
    textElement.textContent = message;

    messageElement.appendChild(usernameElement);
    messageElement.appendChild(textElement);
    chatBox.appendChild(messageElement);

    chatBox.scrollTop = chatBox.scrollHeight;
}