var triviaGame = {
	questions: [{id: 1, challenge: "In Legion, who replaced Vol'jin as chieftain of the Horde faction?", answerChoices: ["Thrall", "Gul'dan", "Sylvanas Windrunner", "Garrosh Hellscream"]},
				{id: 2, challenge: "Which sub-race of elves feed on the Nightwell, lest they disintegrate into a mindless Withered savage?", answerChoices: ["Blood Knights", "Nightborne", "Highborne", "Darkfallen"]}, 
				{id: 3, challenge: "A mage spell that interrupts an enemy's spellcast and locks out any spell of the same type of magic is:", answerChoices:["Counterspell", "Arcane Torrent", "Frost Bolt", "Silence"] }, 
				{id: 4, challenge: "Which of the following abilities does NOT increase haste by 30% for 40 seconds?", answerChoices: ["Heroism", "Bloodlust", "Time Warp", "Drums of Fury"] }, 
				{id: 5, challenge: "What is the capital city of the Alliance faction?", answerChoices: ["Stormwind", "Stormheim", "Ambermill", "Stonard"]},
				{id: 6, challenge: "What currency does Thalryssa require to grant access to Withered Army training?", answerChoices: ["Silver", "Apexis Crystals", "Ancient Mana", "Curious Coin"]}, 
				{id: 7, challenge: "What crafting reagent (not including crystal vial) is needed to create Potions of Prolonged Power?", answerChoices: ["Primal Spirit", "Blood of Sargeras", "Felhide", "Chaos Crystal"]}, 
				{id: 8, challenge: "The Grimtotem are a corrupted tribe of what race?", answerChoices: ["Troll", "Undead", "Worgen", "Tauren"] }]
}


for (var i = 0; i < triviaGame.questions.length; i++) {
	var choices = triviaGame.questions[i].answerChoices;
	var nextQuestion = $('<div id="question' + triviaGame.questions[i].id + '">' + triviaGame.questions[i].challenge + '</div>');
	// var guessOptions = $('<div class="choices">' + choices + '<div>');
	$('body').append(nextQuestion);
	// $('body').append(guessOptions);
	listChoices();
}

function listChoices() {
	for (var i = 0; i < choices.length; i++) {
		var guessOptions = $('<div class="choices">' + choices[i] + '<div>');
		$('body').append(guessOptions);
	}
}