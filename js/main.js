const cameraGame = document.getElementById("games")
const cardGame = document.getElementsByClassName("game")
const carrouselGame = document.getElementById("carrousel")

console.log(lengGame)

var lengGame = cardGame.length
var changePos = 69 + 308
var cameraTotal = cameraGame.offsetWidth


function nextGame(val){

    alert(cardGame[0].offsetWidth)

    lengGame = lengGame + val

    if(lengGame < 0){
        return;
    }

    cameraGame.style.transform = "translateX(" + changePos + "px)";
}