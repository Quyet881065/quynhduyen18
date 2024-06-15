// Get the name element
const nameElement = document.getElementById('name');
const containerElement = document.querySelector('.container');

// Assuming you have a way to get the birthday person's name (e.g., from user input)
const name = "Quỳnh Duyên"; // Replace with the actual name

// Set the name in the element
nameElement.textContent = name;

// Add event listener for the play button (add functionality to play music here)
const playButton = document.getElementById('play-button');
const displayContainer2 = document.querySelector('.container2');
playButton.addEventListener('click', () => {
    containerElement.style = "display :none";
     displayContainer2.style = "display : block";
});