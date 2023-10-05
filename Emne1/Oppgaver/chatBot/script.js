// Model
const app = document.getElementById('app');
let messageInput = "";
let chatlog = "";
let delayInMs = 1001;

// View
updateView();
function updateView(){
    html = /*html*/ ` 
    <input id="chatbox" type="text" oninput="messageInput = this.value">
    <button onclick="sendMessage()">Spør botten</button>
    <div>${chatlog}</div>    
    `;
    app.innerHTML = html;
}


// Controler

function sendMessage() {

    chatlog += `${messageInput}`;
    updateView();
    setTimeout(() => {
        botReply();
        

    })



}
