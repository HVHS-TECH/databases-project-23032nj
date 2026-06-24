/************************************* 
// script.js
// written by Nia 
// Nia's Games
*************************************/
console.log("Running Nia's Games")

//Constants
const HTML_OUTPUT_SUBMIT = document.getElementById("databaseOutputSubmit");

//Variables
let userFormSubmitted = false
let userRegistered = false

let userDisplayName;
let userEmail;
let userUID;
let userProfilePicture

let userName;
let userAge;

/**********************************
// submitUserDetailsForm()
***********************************/

function submitUserDetailsForm() {
    //collect and store the users username and age
        var userName = document.getElementById("name").value;
        const userAge = document.getElementById("age").value;
        userName = userName.trim();
        if (userName == "") {
        alert("Please enter a name");
        return;
        }
        console.log(userName)
        console.log(userAge)
        firebase.database().ref('/users/'+userUID).update ({
            gameName: userName,
            Age:userAge,
        })
        userFormSubmitted = true;
        HTML_OUTPUT_SUBMIT.innerHTML += "<p> Thank you for submitting " + userName + "!! You can now select a game! </p>"

}

function gameSelection() {
    if(userFormSubmitted == true) {
        window.location.href = 'game-selection.html'
    } else {
        alert("Please log in and submit your details before playing the games")
    }
}
