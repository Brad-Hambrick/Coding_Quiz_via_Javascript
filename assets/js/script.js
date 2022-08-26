
// Questions to be asked

const questions = [{
    
    q: "1. What coding language styles a webpage?",
    a: [{text: "A. HTML", isCorrect: false },
        {text: "B. CSS", isCorrect: true },
        {text: "C. Javascript", isCorrect: false },
        {text: "D. NodeJS", isCorrect: false }
    ]},
    {
    
    q: "2. What is the document type that makes up the static skeleton of a webpage?",
    a: [{text: "A. HTML", isCorrect: true },
        {text: "B. CSS", isCorrect: false },
        {text: "C. Javascript", isCorrect: false },
        {text: "D. NodeJS", isCorrect: false }
    ]},
    {
    
    q: "3. What language would be used to add If Else Statements?",
    a: [{text: "A. HTML", isCorrect: false },
        {text: "B. CSS", isCorrect: false },
        {text: "C. Javascript", isCorrect: true },
        {text: "D. NodeJS", isCorrect: false }
    ]}, 
    {
    
    q: "4. What identifier is represented by a # Symbol?",
    a: [{text: "A. Class", isCorrect: false },
        {text: "B. Header", isCorrect: false },
        {text: "C. Footer", isCorrect: false },
        {text: "D. ID", isCorrect: true }
    ]},

    {
    
    q: "5. Which is your best friend when it comes to coding",
    a: [{text: "A. Netflix", isCorrect: false },
        {text: "B. Google", isCorrect: true },
        {text: "C. Amazon Prime", isCorrect: false },
        {text: "D. Comcast", isCorrect: false }
    ]}];

    let currentQuestionIndex = 0; 
    let score = 0;
    finished = document.getElementsByClassName("quiz-box");
 
function start() {
if (begin_button = 'true') {
    timer();
    testing();
    showQuestions();
 }
}

function timer() {
    time_seconds = 60;
    let countdownTimer = setInterval(() => {
        time_seconds--;
        document.getElementById("time-seconds").textContent = time_seconds;
        if (time_seconds <= 0) {
            clearInterval(countdownTimer);
            alert("You are out of time!")
        }},1000);   
}

let choiceA = document.getElementById("answer1a")
let choiceB = document.getElementById("answer1b")
let choiceC = document.getElementById("answer1c")
let choiceD = document.getElementById("answer1d")

function showQuestions() {
   
// Grabbing the Begin Button
let begin_button = document.querySelector(".begin-button");
// Grabbing the results area
const result = document.getElementById("results");
result.textContent = score;
// Grabbing the question
const question = document.getElementById("question")
// Adding the question text
question.innerText = questions[currentQuestionIndex].q;
// Grabbing the multiple choice options
const op1 = document.getElementById('answer1a');
const op2 = document.getElementById('answer1b');
const op3 = document.getElementById('answer1c');
const op4 = document.getElementById('answer1d');
// Adding the multiple choice option text
op1.innerText = questions[currentQuestionIndex].a[0].text;
op2.innerText = questions[currentQuestionIndex].a[1].text;
op3.innerText = questions[currentQuestionIndex].a[2].text;
op4.innerText = questions[currentQuestionIndex].a[3].text;
// Declaring the value of the Multiple choice options
op1.value = questions[currentQuestionIndex].a[0].isCorrect;
op2.value = questions[currentQuestionIndex].a[1].isCorrect;
op3.value = questions[currentQuestionIndex].a[2].isCorrect;
op4.value = questions[currentQuestionIndex].a[3].isCorrect;
}
function testing() {

    choiceA.addEventListener("click", function(){
        grading(choiceA.value);
        showQuestions();
    })
    
    choiceB.addEventListener("click", function(){
        grading(choiceB.value);
        showQuestions();
    })
    
    choiceC.addEventListener("click", function(){
        grading(choiceC.value);
        showQuestions();
    })
    
    choiceD.addEventListener("click", function(){
        grading(choiceD.value);
        showQuestions();
    })
}

// Grading
function grading(value) {

    if (value === "true") {
        alert("Correct")
        console.log(value)
        score = score +20;
        console.log(score);
        
        if (currentQuestionIndex <= 3) {
            currentQuestionIndex ++
        }else {
            initialSubmit()
        }
        console.log(currentQuestionIndex)
        // testing()
    }else {
        alert("Incorrect")
        console.log(value)
        time_seconds = time_seconds -5;
        
        if (currentQuestionIndex <= 3) {
            currentQuestionIndex ++
        }else {
            initialSubmit()
        }
        console.log(currentQuestionIndex)
        // testing()
    }
}

function initialSubmit() {
    var userInitials= document.getElementById("initials");
    localStorage.setItem("initials", userInitials);
    localStorage.setItem("score", score)

}



// if (begin_button) {
//     testing("0");
// }

//Moving to the next question
// const next_btn = document.getElementById('next-btn')[0];
// let id = 0;

// next_btn.addEventListener("click", () => {
//     begin_button = false;
//     if (id < 4) {
//         id++;
//         testing(id);
//         console.log(id);
//     }
// })





//{
//     ans1a = document.getElementById("answer1a");
//     ans1b = document.getElementById("answer1b");
//     ans1c = document.getElementById("answer1c");
//     ans1d = document.getElementById("answer1d");
//     ans1a = false;
//     ans1b = true;
//     ans1c = false;
//     ans1d = false;
  
//     if (onclic) {
//         alert("Correct");
//         ques2.style.display = "block";
//         ques1.style.display = "none";
//     } else {
//         alert("Incorrect");
//         time_seconds -5;

//     }
// }
 






  


