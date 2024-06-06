// document.addEventListener('DOMContentLoaded', function() {
//     // Prompt the user for their name
//     let userName = prompt("Please enter your name:");

//     // Set the user's name in the HTML element
//     if (userName) {
//         document.getElementById('client-name').textContent = userName;
//     } else {
//         document.getElementById('client-name').textContent = "Guest";
//     }

//     // Handle form submission for messages
//     const messageForm = document.querySelector('.messageus-form');
//     const messagesContainer = document.getElementById('messages-container');

//     messageForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message-box').value;

//         if (name && email && message) {
//             addMessage(name, email, message);
//             messageForm.reset();
//         }
//     });

//     function addMessage(name, email, message) {
//         const messageItem = document.createElement('div');
//         messageItem.classList.add('message-item');
//         messageItem.innerHTML = `
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Message:</strong> ${message}</p>
//         `;
        
//         messagesContainer.appendChild(messageItem);

//         // Scroll to the latest message
//         messagesContainer.scrollTop = messagesContainer.scrollHeight;
//     }
// });


// document.addEventListener('DOMContentLoaded', function() {
//     // Prompt the user for their name
//     let userName = prompt("Please enter your name:");

//     // Set the user's name in the HTML element
//     if (userName) {
//         document.getElementById('client-name').textContent = userName;
//     } else {
//         document.getElementById('client-name').textContent = "Guest";
//     }

//     // Handle form submission for messages
//     const messageForm = document.querySelector('.messageus-form');
//     const messagesContainer = document.getElementById('messages-container');

//     messageForm.addEventListener('submit', function(event) {
//         event.preventDefault();

//         const name = document.getElementById('name').value;
//         const email = document.getElementById('email').value;
//         const message = document.getElementById('message-box').value;

//         if (name && email && message) {
//             addMessage(name, email, message);
//             messageForm.reset();
//         }
//     });

//     function addMessage(name, email, message) {
//         const messageItem = document.createElement('div');
//         messageItem.classList.add('message-item');
//         messageItem.innerHTML = `
//             <p><strong>Name:</strong> ${name}</p>
//             <p><strong>Email:</strong> ${email}</p>
//             <p><strong>Message:</strong> ${message}</p>
//         `;
        
//         messagesContainer.appendChild(messageItem);

//         // Scroll to the latest message
//         messagesContainer.scrollTop = messagesContainer.scrollHeight;
//     }

//     // Burger menu functionality
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('nav');

//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');
//         burger.classList.toggle('toggle-burger');
//     });

//     // Close the navigation when clicking outside
//     document.addEventListener('click', function(event) {
//         if (!burger.contains(event.target) && !nav.contains(event.target)) {
//             nav.classList.remove('nav-active');
//             burger.classList.remove('toggle-burger');
//         }
//     });
// });


// function navSlide() {
//     var burger = document.querySelector(".burger");
//     var navLists = document.querySelector("nav");
  
//     burger.addEventListener("click", function() {
//       // Toggle nav list and burger class
//       navLists.classList.toggle("nav-active");
//       burger.classList.toggle("toggle-burger");
//     });
//   }


document.addEventListener('DOMContentLoaded', function() {
    // Prompt the user for their name
    let userName = prompt("Please enter your name:");

    // Set the user's name in the HTML element
    if (userName) {
        document.getElementById('client-name').textContent = userName;
    } else {
        document.getElementById('client-name').textContent = "Guest";
    }

    // Handle form submission for messages
    const messageForm = document.querySelector('.messageus-form');
    const messagesContainer = document.getElementById('messages-container');

    messageForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message-box').value;

        if (name && email && message) {
            addMessage(name, email, message);
            messageForm.reset();
        }
    });

    function addMessage(name, email, message) {
        const messageItem = document.createElement('div');
        messageItem.classList.add('message-item');
        messageItem.innerHTML = `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${message}</p>
        `;
        
        messagesContainer.appendChild(messageItem);

        // Scroll to the latest message
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
    
    function navSlide() {
        var burger = document.querySelector(".burger");
        var navLists = document.querySelector("nav");
    
        burger.addEventListener("click", function() {
            // Toggle nav list and burger class
            navLists.classList.toggle("nav-active");
            burger.classList.toggle("toggle-burger");
        });
    }
    
    // Call the navSlide function
    navSlide();
});

