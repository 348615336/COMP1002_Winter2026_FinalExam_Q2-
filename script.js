// gettiing  form and where message will show 
const form = document.getElementById("registrationForm");
const message = document.getElementById("confirmationMessage");

// when the user hits submit
form.addEventListener("submit", function(event) {
    event.preventDefault();

    // get the name the user typed in
    const name = document.getElementById("name").value;

    // show a message using their name
    message.textContent = "Thank you, " + name + "! You have registered.";
});