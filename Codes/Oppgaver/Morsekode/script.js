// Model
const app = document.getElementById('app');
const morseCodeArray = [ '.-', '-...', '-.-.', '-..', '.', '..-.', '--.', '....', '..', '.---', '-.-', '.-..', '--', '-.', '---', '.--.', '--.-', '.-.', '...', '-', '..-', '...-', '.--', '-..-', '-.--', '--..', ' ', '·−·−', '−−−·', '·−−·−'];
const alphabet = "abcdefghijklmnopqrstuvwxyz æøå"
let inputText = "";
let morseCodeText = "";


// View
function updateView(){
    html = /*html*/ `
        <h1>Translate text to morse code</h1>
        <input type="text" onchange="oversetter(this)" placeholder="Enter your text here..."/>
        <div> Translated text:
            <p>${morseCodeText}</p>
        </div>
    
    `;
    app.innerHTML = html;
}

// Controller
function oversetter(input){
    inputText = input.value.toLowerCase();
    morseCodeText = "";

    for (var letter of inputText){
        let letterIndex = alphabet.indexOf(letter);
        morseCodeText += morseCodeArray[letterIndex] + " ";
    }

    updateView();

}

updateView();
