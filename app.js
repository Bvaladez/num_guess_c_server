var answerRange = 10;
var motitvation = [];

var answer = Math.floor(Math.random() * answerRange)

// Check Answer button
var check_guess_button = document.querySelector("#check-guess-button");
console.log("check guess button", check_guess_button);

var get_motivation_button = document.querySelector("#motivation-button");
console.log("Get motivation button", get_motivation_button);

// Range of 10 button
var range_ten_button = document.querySelector("#ten-number-button");
console.log("Range of 10 button", range_ten_button);

// Range of 50 button
var range_fifty_button = document.querySelector("#fifty-number-button");
console.log("Range of 50 button", range_fifty_button);

// Range of 100 button
var range_one_hundred_button = document.querySelector("#oneHundred-number-button");
console.log("Range of 100 button", range_one_hundred_button);

// Feedback after each guess
var feedbackResponse = document.querySelector("#feedback-response");
console.log("Feed back response", feedbackResponse);

// The range of numbers the user should guess between
var number_range_text = document.querySelector("#number-range");
console.log("Number range for user to guess between",  number_range_text);

// Get the data from the server
//https://api.jsonbin.io/b/5f5266e0514ec5112d162a04
fetch("https://api.jsonbin.io/b/5f5266e0514ec5112d162a04").then(function(response){
	response.json().then(function(data){
		motitvation = data;
	});
});


// Clear the entirety of the past guesses list
function clearGuessList(){
	var guess_list = document.querySelector("#list-past-guesses");
	while(guess_list.firstChild){
		guess_list.removeChild(guess_list.firstChild);
	}
};

// Clear the feedback text
function clearFeedbackText(){
	feedbackResponse.innerHTML = ""
	feedbackResponse.style.color = "#000000"
};

range_ten_button.onclick = function(){
	answerRange = 10;
	number_range_text.innerHTML = "1 and 10."
	answer = Math.floor(Math.random() * answerRange)
	clearGuessList();
	clearFeedbackText();
};

range_fifty_button.onclick = function(){
	answerRange = 50;	
	number_range_text.innerHTML = "1 and 50."
	answer = Math.floor(Math.random() * answerRange)
	clearGuessList();
	clearFeedbackText();
};

range_one_hundred_button.onclick = function(){
	answerRange = 100;	
	number_range_text.innerHTML = "1 and 100."
	answer = Math.floor(Math.random() * answerRange)
	clearGuessList();
	clearFeedbackText();
};

get_motivation_button.onclick = function(){
	randomIndex = Math.floor(Math.random() * motitvation.length)
	motivation_message = document.querySelector("#motivational-text");	
	motivation_message.innerHTML = motitvation[randomIndex];
}

check_guess_button.onclick = function(){

	var guess_input_field = document.querySelector("#guess-input-field");
	console.log("text input field", guess_input_field);
	
	// capture the users guess and compare it to answer
	var guess = guess_input_field.value;
	if(guess == answer){
		feedbackResponse.innerHTML = "You guessed Correct!";
		feedbackResponse.style.color = "#35cd16"
	}
	else if(guess < answer){
		feedbackResponse.innerHTML = "Guess Higher";
	}
	else if(guess > answer){
		feedbackResponse.innerHTML = "Guess Lower";
	}

	//update the most recent guess 
	lastGuess = document.querySelector("#most-recent-guess");
	lastGuess.innerHTML = guess;

	// Check the guess and give feedback


	// Create a new list element and add guess to new list
	var past_guesses_list = document.createElement("li");
	past_guesses_list.innerHTML = guess;

	//	Update list with new data
	var guess_list = document.querySelector("#list-past-guesses");
	guess_list.appendChild(past_guesses_list);

};
