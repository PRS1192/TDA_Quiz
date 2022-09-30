//Add database of questions

let quizData = [
  {
    question: "1) The series is set in which city?",
    a: "Los Angeles",
    b: "New York City",
    c: "Miami",
    d: "Seattle",
    correct: "b",
  },
  {
    question: "2) What pet did Ross own?",
    a: "A dog named Keith",
    b: "A rabbit called Lancelot",
    c: "A monkey named Marcel",
    d: "A lizard named Alistair",
    correct: "c",
  },
  {
    question: "3) What is Monica skilled at?",
    a: "Bricklaying",
    b: "Cooking",
    c: "American Football",
    d: "Singing",
    correct: "b",
  },
  {
    question: "4) What song is Phoebe best known for? ",
    a: "Reeking Rabbit",
    b: "Stinky Dog",
    c: "Smelly Cat",
    d: "All of the above",
    correct: "c",
  },
  {
    question: "5) What does Joey never share?",
    a: "His books",
    b: "His information",
    c: "His food",
    d: "His DVDs",
    correct: "c",
  },
  {
    question: "6) What is Chandler's middle name?",
    a: "Muriel",
    b: "Jason",
    c: "Kim",
    d: "Zachary",
    correct: "a",
  },
  {
    question: "7) Who did Rachel almost marry?",
    a: "Paolo",
    b: "Joshua",
    c: "Barry",
    d: "Paul",
    correct: "c",
  },
  {
    question: "8) How many seasons of Friends are there?",
    a: "8",
    b: "28",
    c: "10",
    d: "2",
    correct: "c",
  },
  {
    question: "9) What is janice most likely to say as she enters a room?",
    a: "Talk to the hand!",
    b: "Get me a coffee, pronto!",
    c: "No way José",
    d: "Oh... my... God!!",
    correct: "d",
  },
  {
    question: "10) Who was Chandler's TV magazine always addressed to?",
    a: "Chanandler Bing",
    b: "Chanandler Bang",
    c: "Chanandler Bong",
    d: "Chanandler Beng",
    correct: "c",
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
let quiz = document.getElementById("quiz");
let answerEls = document.querySelectorAll(".answer");
let questionEl = document.getElementById("question");
let a_text = document.getElementById("a_text");
let b_text = document.getElementById("b_text");
let c_text = document.getElementById("c_text");
let d_text = document.getElementById("d_text");
let submitBtn = document.getElementById("submit");
let startBtn = document.getElementById("start");
let currentQuiz = 0;
let score = 0;

// initial page start-up - hide quiz and submit

hideItems(quiz);

// When Start button is clicked
startBtn.addEventListener("click", function () {
  showItems(quiz);
  hideItems(startBtn);
  hideItems(posterFriends);
  hideItems(initialInfo);
});

// Load quiz with initially no radio buttons checked

loadQuiz();
function loadQuiz() {
  deselectAnswers();
  let currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}
function deselectAnswers() {
  answerEls.forEach((answerEl) => (answerEl.checked = false));
}
function getSelected() {
  let answer;
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

// Check/Count score when correct answer and submit button is clicked

submitBtn.addEventListener("click", () => {
  let answer = getSelected();
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++; //Adds additional 1 point to score
    }

    // Run next question if no. of Q's answered is less than database
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    }

    // Else condition - run if no more Q's left.
    else {
      quiz.innerHTML = `
           <h2>Score ${score}/${quizData.length} </h2>
           <button onclick="location.reload()">Retry</button>
           `;
    }
  }
});
