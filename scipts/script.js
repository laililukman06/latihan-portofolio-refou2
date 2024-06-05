document.getElementById('message-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const messageBox = document.getElementById('message-box').value;

    const messageContainer = document.getElementById('messages-container');

    const messageItem = document.createElement('div');
    messageItem.classList.add('message-item');

    const messageContent = `
        <strong>${name}</strong><br>
        <p>${messageBox}</p>
    `;

    messageItem.innerHTML = messageContent;
    messageContainer.appendChild(messageItem);

    // Scroll to the bottom of the message container to show the latest message
    messageContainer.scrollTop = messageContainer.scrollHeight;

    // Clear form fields after submission
    document.getElementById('message-form').reset();
});
