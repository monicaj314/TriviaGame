var triviaGame = {
	questions: [{id: 1, challenge: "In Legion, who replaced Vol'jin as chieftain of the Horde faction?", answerChoices: ["Thrall", "Gul'dan", "Sylvanas Windrunner", "Garrosh Hellscream"], rightAnswer: "Sylvanas Windrunner"},
				{id: 2, challenge: "Which sub-race of elves feed on the Nightwell, lest they disintegrate into a mindless Withered savage?", answerChoices: ["Blood Knights", "Nightborne", "Highborne", "Darkfallen"], rightAnswer: "Nightborne"}, 
				{id: 3, challenge: "A mage spell that interrupts an enemy's spellcast and locks out any spell of the same type of magic is:", answerChoices:["Counterspell", "Arcane Torrent", "Frost Bolt", "Silence"], rightAnswer: "Counterspell" }, 
				{id: 4, challenge: "Which of the following abilities does NOT increase haste by 30% for 40 seconds?", answerChoices: ["Heroism", "Bloodlust", "Time Warp", "Drums of Fury"], rightAnswer: "Drums of Fury" }, 
				{id: 5, challenge: "What is the capital city of the Alliance faction?", answerChoices: ["Stormwind", "Stormheim", "Ambermill", "Stonard"], rightAnswer: "Stormwind"},
				{id: 6, challenge: "What currency does Thalryssa require to grant access to Withered Army training?", answerChoices: ["Silver", "Apexis Crystals", "Ancient Mana", "Curious Coin"], rightAnswer: "Ancient Mana"}, 
				{id: 7, challenge: "Which of these crafting reagents is needed to create Potions of Prolonged Power?", answerChoices: ["Primal Spirit", "Blood of Sargeras", "Felhide", "Chaos Crystal"], rightAnswer: "Blood of Sargeras"}, 
				{id: 8, challenge: "The Grimtotem are a corrupted tribe of what race?", answerChoices: ["Troll", "Undead", "Worgen", "Tauren"], rightAnswer: "Tauren" }],
	countRight: 0,
	countWrong: 0,
	countBlank: 0,
	timeRemaining: 5

}

for (var i = 0; i < triviaGame.questions.length; i++) {
	var triviaQuestion = triviaGame.questions[i];
	var nextQuestion = $('<div id="question' + triviaQuestion.id + '">' + triviaQuestion.challenge + '</div>');
	$('#trivia_game').append(nextQuestion);
	listChoices(triviaQuestion);
	$("#timer").text("Time Remaining: " + triviaGame.timeRemaining);
}

function listChoices() {
	for (var i = 0; i < triviaQuestion.answerChoices.length; i++) {
		var guessOptions = $('<div class="answer_choices"><input type="radio" name="' + triviaQuestion.id + '" value="' + triviaQuestion.answerChoices[i] + '">' + triviaQuestion.answerChoices[i] + '<div>');
		$('#trivia_game').append(guessOptions);
	}
}

function checkAnswers() {
	for (var i = 0; i < triviaGame.questions.length; i++) {
		var questionId = triviaGame.questions[i].id;
		var selectedAnswer = $('input[name=' + questionId + ']:checked').val();
		if (selectedAnswer == triviaGame.questions[i].rightAnswer) {
			triviaGame.countRight++
		} else if (selectedAnswer) {
			triviaGame.countWrong++
		} else {
			triviaGame.countBlank++
		}
	} 
	showResults();
	console.log(triviaGame);
}

function showResults() {
	$("#trivia_container").hide();
	$("#results").append("<p>Correct Answers: " + triviaGame.countRight + "</p>");
	$("#results").append("<p>Incorrect Answers: " + triviaGame.countWrong + "</p>");
	$("#results").append("<p>Unanswered: " + triviaGame.countBlank + "</p>");
	$("#results").show();
	
}

function startTimer() {
	var triviaTimer = setInterval(function(){
		if (triviaGame.timeRemaining <= 0) {
		clearInterval(triviaTimer);
		checkAnswers();
	} else {
		triviaGame.timeRemaining--; 
		$("#timer").text("Time Remaining: " + triviaGame.timeRemaining);
	}
}, 1000);
}

$("#start_game").on("click", function() {
	$("#start").hide();
	$("#trivia_container").show();
	startTimer();
});

$('#summon_results').on("click", function() {
	checkAnswers();
});
	
