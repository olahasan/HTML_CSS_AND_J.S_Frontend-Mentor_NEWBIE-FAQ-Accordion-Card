// Select all question and answer elements
const questions = document.querySelectorAll(".q");
const answers = document.querySelectorAll(".a");

// Function to toggle the visibility of answers
function toggleAnswer() {
  const answer = this.nextElementSibling; // Get the next sibling (the answer)
  const isHidden = answer.classList.contains("hide");

  // Hide all answers
  answers.forEach((ans) => {
    ans.classList.add("hide");
  });

  // If the clicked question's answer was hidden, show it
  if (isHidden) {
    answer.classList.remove("hide");
  }
}

// Add click and keyboard event listeners to each question
questions.forEach((question) => {
  question.addEventListener("click", toggleAnswer);
  question.addEventListener("keypress", function (event) {
    if (event.key === "Enter" || event.key === " ") {
      // Check for Enter or Space
      event.preventDefault(); // Prevent the default action
      toggleAnswer.call(this); // Call the toggle function
    }
  });
});
