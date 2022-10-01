//Add database of questions

let questionDatabase = [
  {
    question: "1) The series is set in which city?",
    a: "Los Angeles",
    b: "New York City",
    c: "Miami",
    d: "Seattle",
    correct: "buttonB",
  },
  {
    question: "2) What pet did Ross own?",
    a: "A dog named Keith",
    b: "A rabbit called Lancelot",
    c: "A monkey named Marcel",
    d: "A lizard named Alistair",
    correct: "buttonC",
  },
  {
    question: "3) What is Monica skilled at?",
    a: "Bricklaying",
    b: "Cooking",
    c: "American Football",
    d: "Singing",
    correct: "buttonB",
  },
  {
    question: "4) What song is Phoebe best known for? ",
    a: "Reeking Rabbit",
    b: "Stinky Dog",
    c: "Smelly Cat",
    d: "All of the above",
    correct: "buttonC",
  },
  {
    question: "5) What does Joey never share?",
    a: "His books",
    b: "His information",
    c: "His food",
    d: "His DVDs",
    correct: "buttonC",
  },
  {
    question: "6) What is Chandler's middle name?",
    a: "Muriel",
    b: "Jason",
    c: "Kim",
    d: "Zachary",
    correct: "buttonA",
  },
  {
    question: "7) Who did Rachel almost marry?",
    a: "Paolo",
    b: "Joshua",
    c: "Barry",
    d: "Paul",
    correct: "buttonC",
  },
  {
    question: "8) How many seasons of Friends are there?",
    a: "8",
    b: "28",
    c: "10",
    d: "2",
    correct: "buttonC",
  },
  {
    question: "9) What is Janice most likely to say as she enters a room?",
    a: "Talk to the hand!",
    b: "Get me a coffee, pronto!",
    c: "No way José",
    d: "Oh... my... God!!",
    correct: "buttonD",
  },
  {
    question: "10) Who was Chandler's TV magazine always addressed to?",
    a: "Chanandler Bing",
    b: "Chanandler Bang",
    c: "Chanandler Bong",
    d: "Chanandler Beng",
    correct: "buttonC",
  },
];

// Declaring hide and show functions

function hideItems(element) {
  element.style.display = "none";
}
function showItems(element) {
  element.style.display = "block";
}

// Defining variables

let posterFriends = document.getElementById("posterFriends");
let initialInfo = document.getElementById("initialInfo");
let submitButton = document.getElementById("submit");
let startButton = document.getElementById("start");
let quizBox = document.getElementById("quizContainerBox");
let questionSelection = document.getElementById("questionText");

let answerSelectionA = document.getElementById("answerA");
let answerSelectionB = document.getElementById("answerB");
let answerSelectionC = document.getElementById("answerC");
let answerSelectionD = document.getElementById("answerD");
let radioBtnClass01All = document.querySelectorAll(".radioBtnClass01"); // querySelectorAll selects all specified elements from HTML code (as seen between double quotation marks = HTML Class [hence the preceding full-stop])

let score = 0; //Starts score on zero
let currentQuestionNo = 0; //Starts current question number on zero (until start button clicked)

// initial page start-up - hide quiz and submit

hideItems(quizBox);

// When Start button is clicked - show and hide the following:
startButton.addEventListener("click", function () {
  showItems(quizBox);
  hideItems(startButton);
  hideItems(posterFriends);
  hideItems(initialInfo);
});

// Define a function to load a question from the question database depending on what no. question currently on

function loadQuestion() {
  // Run: 'Deselect checked radio buttons' (function defined below) everytime the load question function has been run
  deselectRadioButtons();

  //  Define Function: 'Deselect checked radio buttons'
  function deselectRadioButtons() {
    radioBtnClass01All.forEach(( radioCheckbox) => ( radioCheckbox.checked = false)); // output = to uncheck the radiobuttons (i.e. false) --  input = output for all the radio buttons
  }

  // Extract/use question+answers text from questionDatabase depending on current question no.
  let currentQuestionData = questionDatabase[currentQuestionNo];
  questionSelection.innerText = currentQuestionData.question; // .innerText allows us to extract and use text from within the Javascript file
  answerSelectionA.innerText = currentQuestionData.a;
  answerSelectionB.innerText = currentQuestionData.b;
  answerSelectionC.innerText = currentQuestionData.c;
  answerSelectionD.innerText = currentQuestionData.d;
}

// Function checks and returns answer selected by the user
function getSelected() {
  radioBtnClass01All.forEach(( radioCheckbox) => {
    if ( radioCheckbox.checked) {
      answerSelected =  radioCheckbox.id;
    }
  });
  return answerSelected; 
}

// Run function to load inital/first question
loadQuestion();

// When submit button is clicked check/count score when correct answer has been chosen
submitButton.addEventListener("click", () => {
  let answerSelected = getSelected();
  if (answerSelected) {
    if (answerSelected === questionDatabase[currentQuestionNo].correct) { // Compares selected answer by user to correct answer stored in database
      score++; // Adds additional 1 point to score when answer is correct
    }

    // Add 1 to current question no. after submit button clicked
    currentQuestionNo++;

    // Load the next question if current question no. is less than no. of Q's in database
    if (currentQuestionNo < questionDatabase.length) {
      loadQuestion();
    }

    // Else condition - show score if no more Q's left and provide 'Retry' Button
    else {
      quizBox.innerHTML = `
           <button onclick="location.reload()">Retry</button>
           <h2>Score ${score}/${questionDatabase.length} </h2>
           `;
    }
  }
});


// Final 