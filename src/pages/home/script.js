var elem = document.documentElement;
var fullscreenButton = document.querySelector('#fullscreenButton');
var playButton = document.querySelector("#playButton");
var questText = document.querySelector("#hud h2");
var options = document.querySelector("#options");
var gameOptions = document.querySelectorAll(".gameOption");
var isFullscreen = false;

var actions = {
    start: {
        type: "start",
        text: "Seja bem vindo ao RPG,<br>o Reino do Pato Guerreiro.<br>Aventure-se nesse mundo cheio de desafios!",
        options: [
            {
                text: "Jogar",
                nextAction: "begin"
            },
        ]
    },
    begin: {
        type: "begin",
        text: "Você acorda perdido em uma estrada, sem saber onde está. Você só lembra que seu nome é Duque,<br>mas não sabe o que fazer. Ao longe há uma floresta em um castelo...",
        options: [
            {
                text: "Ir para o castelo",
                nextAction: "castle"
            },
            {
                text: "Ir para a floresta",
                nextAction: "forest"
            },
        ]
    },
    error: {
        type: "error",
        text: "Ocorreu um erro. Reinicie o jogo.",
        options: [
            {
                text: "Reiniciar",
                nextAction: "start"
            },
        ]
    }
}

const renderGameScreen = (actionName) => {
    let action = actionName in actions ? actions[actionName] : actions.error;
    questText.innerHTML = action.text;
    options.innerHTML = '';
    for(let option in action.options) {
        options.innerHTML += `
            <button 
            id="${action.options[option].nextAction in actions ? action.options[option].nextAction : `error`}"
            class="gameOption" 
            onclick="renderGameScreen('${action.options[option].nextAction in actions ? action.options[option].nextAction : `error`}')"
            >${action.options[option].text}</button>
        `
    }
}

/* View in fullscreen */
const openFullscreen = () => {
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
}

/* Close fullscreen */
const closeFullscreen = () => {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) { /* Safari */
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) { /* IE11 */
        document.msExitFullscreen();
    }
}

/* Fullscreen button onclick function */
fullscreenButton.onclick = () => {
    if (isFullscreen) {
        closeFullscreen();
    } else {
        openFullscreen();
    }
    isFullscreen = !isFullscreen;
}

/* Play music */
const playMusic = () => {
    let buttonIcon = document.getElementById("playIcon")
    let audio = document.getElementById("medievalMusic");
    if (buttonIcon.innerHTML === "music_note") {
        buttonIcon.innerHTML = 'pause'
        audio.play();
    } else {
        buttonIcon.innerHTML = 'music_note'
        audio.pause();
    }
}

playButton.onclick = () => {
    playMusic();
}

playMusic();
renderGameScreen("start");