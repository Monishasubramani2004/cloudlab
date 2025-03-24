let score = 0; // Track score
let currentQuestion = 0; // Track which question is being answered

const questions = [
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5"],
        correct: "4"
    },
    {
        question: "What is the color of the sky?",
        options: ["Green", "Blue", "Red"],
        correct: "Blue"
    },
    {
        question: "What is 5 + 3?",
        options: ["7", "8", "9"],
        correct: "8"
    },
    {
        question: "How many days are in a week?",
        options: ["5", "6", "7"],
        correct: "7"
    },
    {
        question: "What is 3 + 3?",
        options: ["6", "9", "12"],
        correct: "6"
    }
];

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const answerButtons = document.querySelectorAll(".answer-btn");

    // Ensure the current question is within bounds
    if (currentQuestion < questions.length) {
        const question = questions[currentQuestion];
        questionElement.textContent = question.question;

        // Update the answer buttons with the options for this question
        answerButtons[0].textContent = question.options[0];
        answerButtons[1].textContent = question.options[1];
        answerButtons[2].textContent = question.options[2];

        // Attach the answer checking to each button
        answerButtons[0].onclick = () => checkAnswer(question.options[0]);
        answerButtons[1].onclick = () => checkAnswer(question.options[1]);
        answerButtons[2].onclick = () => checkAnswer(question.options[2]);
    } else {
        // Show final score when all questions are done
        questionElement.textContent = "Quiz Finished!";
        const resultElement = document.getElementById("result");
        resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
    }
}

function checkAnswer(selectedAnswer) {
    const resultElement = document.getElementById("result");
    const scoreElement = document.getElementById("score");

    // Get the correct answer from the current question
    const correctAnswer = questions[currentQuestion].correct;

    // Check if the answer is correct
    if (selectedAnswer === correctAnswer) {
        score++; // Increase score for correct answer
        resultElement.textContent = "Correct! Well done!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Oops! Try again.";
        resultElement.style.color = "red";
    }

    // Update score display
    scoreElement.textContent = `Score: ${score}`;

    // Move to the next question after a short delay
    currentQuestion++;

    // Ensure we are not going beyond the number of questions
    if (currentQuestion < questions.length) {
        setTimeout(() => {
            displayQuestion(); // Display the next question
        }, 1000); // Wait 1 second before showing the next question
    } else {
        // End the quiz and show final score
        setTimeout(() => {
            displayQuestion();
        }, 1000);
    }
}

// Initialize the quiz by displaying the first question
displayQuestion();
