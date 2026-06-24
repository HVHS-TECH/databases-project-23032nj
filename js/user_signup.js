/************************************* 
// user_selection.js
// written by Nia 
// Nia's Games
*************************************/

//Variables
let gameName;
let userAge;

/**********************************
// submitUserDetailsForm()
***********************************/

function submitUserDetailsForm() {
    //collect and store the users username and age
    userAge = document.getElementById("age").value;
    gameName = document.getElementById("name").value;
    gameName = gameName.trim();
    if (gameName == "") {
        alert("Please enter a name");
        return;
    }

    //save the users info from login, and form to the database
    firebase.database().ref('/users/' + userUID).update({
        name: userDisplayName,
        gameName: gameName,
        age: userAge,
        email: userEmail,
        profilePicture: userProfilePicture
    })

    window.location.href = "game-selection.html"
}
