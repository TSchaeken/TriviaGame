var gameData = {
    score: 0,
    timeUp() {
        clearInterval(IntervalId);
        $("#time-remaining").text("Your time is up!");
    },
    tallyScore() {
        for (var i = 1; i < 11; i++) {
            var RadioOptions = "RadioOptions" + [i];
            if ($('input[name=inline' + RadioOptions + ']:checked').attr('id') == "CorrectAnswer") {
                this.score++
            }
        }

        $("#time-remaining").text("Your final score is "+this.score+"/10");
    }
}

var IntervalId;
var counter = 5;

function decrement() {
    $('#time-remaining').text("Time remaining: " + counter)
    if (counter < 0) {
        gameData.timeUp()
    }
    counter--
}

$(".jumbotron").on("click", "#start-btn", function () {
    $("#trivia-form").css({ display: "block" })
    intervalId = setInterval(decrement, 1000);
})

$("#trivia-form").on("click", "#submitBtn", function () {
    gameData.tallyScore()
    $(this).prop('disabled', true);
})
