var messages = document.getElementById('messages');
var sendButton = document.getElementById('send-btn');

sendButton.addEventListener('click', sendUserMessage);

start();

function start() {
    getMessageFromServer();
    setInterval(getMessageFromServer, 2000)
    
}

var lastMessages = [];

getMessageFromServer();
async function getMessageFromServer () {

    var response = await fetch ('https://fchatiavi.herokuapp.com/get/arick/?ofset=0&limit=10');

    response = await response.json();

    var messagesHTML = fromMessagesHTML(response);

    messages.innerHTML = allMessagesHTML; 
           
    if (lastMessages.length < response.length) {
        scrollToEnd ();
    }

    lastMessages = response;
}
async function sendUserMessage() {
    debugger;
    var userNickname = documen.getElementById('nickname-input').value;
    var userMessage = documen.getElementById('message-input').value;

    if(userNickname.length === 0) {
        alert("Ти повинен ввести ім'я")
        return;
    }
    if(userMessage.length === 0) {
        alert("Ти повинен ввести повідомлення")
        return;
    }
 await fetch ('https://fchatiavi.herokuapp.com/send/arick/', {
    method:`post`,
    body: JSON.stringify({
        Name: userNickname,
        Message: userMessage
    })
 });
 getMessageFromServer ();
 scrollToEnd();
}

function fromMessagesHTML (messages) {
    var allMessagesHTML = '';
    for (var i=0; i < response.length; i++) {
        var messageData = response [i];
       var message = `
        <div class="message">
                <div class="nickname">${messageData.Name}</div>
                <div class="message-text"> ${messageData.Message}</div>
            </div>
            `; 
            allMessagesHTML = allMessagesHTML + message;
    }
    return allMessagesHTML;
}

function scrollToEnd() {
   messages.scrollTop = messages.scrollHeight;
}