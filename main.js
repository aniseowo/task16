var messages = document.getElementById('messages');

window.onload = getMessageFromServer
async function getMessageFromServer () {

    var response = await fetch ('https://fchatiavi.herokuapp.com/get/arick/?ofset=0&limit=10');

    response = await response.json();


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

    

            messages.innerHTML = allMessagesHTML; 
}