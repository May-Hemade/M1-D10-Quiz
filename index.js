const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
]

const userAnswers = {}

const displayQuestions = function () {
  let allQuestionsNode = document.getElementById("all-questions-container")
  for (let i = 0; i < questions.length; i++) {
    let currentQuestion = questions[i]
    // create a container for questions and answers
    let qaContainerNode = document.createElement("div")
    qaContainerNode.classList.add("qa-container")
    // create  question in h2
    let questionNode = document.createElement("h2")
    questionNode.innerText = currentQuestion.question

    // put question  node inside qa container
    qaContainerNode.appendChild(questionNode)
    let answersContainerNode = document.createElement("div")

    // all answers
    let answerArr = []
    answerArr.push(currentQuestion.correct_answer)
    answerArr = answerArr.concat(currentQuestion.incorrect_answers)
    for (let answer of answerArr) {
      let answerNode = document.createElement("input")
      answerNode.type = "radio"
      // pass question index to the radio button
      answerNode.name = i
      answerNode.value = answer
      answerNode.onclick = onAnswerSelected
      let labelNode = document.createElement("label")

      labelNode.innerText = answer

      answersContainerNode.appendChild(answerNode)
      answersContainerNode.appendChild(labelNode)
    }

    qaContainerNode.appendChild(answersContainerNode)
    // put qa container inside all questions container
    allQuestionsNode.appendChild(qaContainerNode)
  }
}

const onAnswerSelected = function (eventData) {
  let questionIndex = eventData.target.name
  let answer = eventData.target.value
  userAnswers[questionIndex] = answer
  console.log(userAnswers)
}

const userScore = function (){
    let total = 0
  for ( let i=0; i<questions.length; i++){
     let currentAnswer =  userAnswers[i] 
     if ( currentAnswer ===questions[i].correct_answer){
        total++
     }
  } 
  return total 
}

const displayScore = function (){ 
    let scoreNode = document.getElementById("score")
    scoreNode.innerText= userScore()  
}
window.onload = function () {
  displayQuestions()

  // HINTS
  // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
  // For each question, create a container for wrapping it; then create a radio button
  // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
  // with, as options, both the correct answer and the incorrect ones
  // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
  //
  // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
  // Display the first question with the text and the radio buttons
  // when the user selects an answer, pick the next question from the array and replace the old one with it
  // saving the user's choice in a variable
}

// How to calculate the result? You can do it in 2 ways:
// If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
// If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer
