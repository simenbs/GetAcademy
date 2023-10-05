function selectCharacter(character) {
    var battleImg = document.getElementById('battle-img');
    battleImg.src = character + '.png';
    battleImg.alt = character;
    changeBackground()
}

function changeBackground() {
    let backgroundImg = document.getElementById('background');
    backgroundImg.style.backgroundImage = 'url("battle.png")'; 
    document.getElementById("character-selection").style.display = "none"

}


