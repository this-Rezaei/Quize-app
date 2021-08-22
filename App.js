const quizData = [
    {
        question: "How old is Florin",
        a: "10",
        b: "17",
        c: "26",
        d: "110",
        correct: "c",
    },
    {
        question: "What is the most used programming language in 2021?",
        a: "Java",
        b: "C",
        c: "Payton",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US",
        a: "Florin pop",
        b: "Hilari Clinton",
        c: "Donald trump",
        d: " Jow baiden",
        correct: "d",
    },
    {
        question: "What does HTMl stand for?",
        a: "HyperText markup Language",
        b: "cascading Style sheet",
        c: "jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What years was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "d",
    },
];

const submitBtn = document.getElementById("submit");
const questionEl = document.getElementById("question");

const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    const currentQuizeData = quizData[currentQuiz];
    questionEl.innerText = currentQuizeData.question;
    a_text.innerHTML = currentQuizeData.a;
    b_text.innerHTML = currentQuizeData.b;
    c_text.innerHTML = currentQuizeData.c;
    d_text.innerHTML = currentQuizeData.d;
}

function getSelected() {
    const answersEls = document.querySelectorAll(".answer");

    let answer = undefined;

    answersEls.forEach((answersEl) => {
        if (answersEl.checked) {
            answer = answersEl.id;
        }
    });
    return answer;
}
submitBtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            submitBtn.innerHTML =
                "You finished! Get yourself an Orange Lemonade";
            submitBtn.style.backgroundColor = "red";
        }
    }
});
