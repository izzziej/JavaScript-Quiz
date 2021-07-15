const nextButton =document.getElementById('next-btn')
const questionContainerElement = document.getElementsByClassName('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions,currentQuestionIndex;
let quizScore =0;


function selectAnswer(e){
    const selectedButton=e.target
    const correct =selectedButton.dataset.correct

    setStatusClass(document.body,correct)
    Array.from(answerButtonsElement.children)
        setStatusClass(button, button.dataset.correct)
}

if (shuffledQuestions.length > currentQuestionIndex +1){
    nextButton.classList.remove("hide")
}else { nextButton.innerText = "Done!"

}

if(selectedButton.dataset= correct) { quizScore++}
function setStatusClass(element,correct){
    clearStatusClass (element)
    if (correct) { element.classList.add("correct") }
    else {element.classList.add("wrong")}
}


function clearStatusClass(element){
    element.classList.remove ('correct')
    element.classList.remove ('wrong')
}

const questions = [
     {
    question: "Which Java object can be described as a True/False Statement?",
    answers : [ 
        {text:'String', correct: false},
        {text: 'Boolean', correct: true},
        {text: 'Integer', correct: false},
    ] 
  },
  {
    question: "How do you start writing a while loop in Java?",
     answers: [
        {text:'while x>y {}', correct: false},
        {text: 'while (x = y)', correct: false},
        {text: 'while (x > y)', correct: true},
     ]
    },
  {
    question: "Which of these scopes describe an object declared outside a function?",
    answers: [
        {text:'Global', correct: true},
        {text: 'Local', correct: false},
        {text: 'Block', correct: false},
     ]
    }
]