var gameData = {
    timeUp(){
        $("#game-container").text("Your time is up!")
        clearInterval(IntervalId);
    }
}

var IntervalId;
var counter = 5;

function decrement(){
    $('#question-row').text(counter)
    if (counter == 0) {
        gameData.timeUp()
    }
    counter--
}

$(".jumbotron").on("click", "#start-btn", function(){
    intervalId = setInterval(decrement, 1000);
})