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

async function submitUserDetailsForm() {
    //collect and store the users username and age
    userAge = document.getElementById("age").value;
    gameName = document.getElementById("name").value;
    gameName = gameName.trim();
    if (gameName == "") {
        alert("Please enter a name");
        return;
    }

    //save the users info from login, and form to the database
    await firebase.database().ref('/users/' + userUID).set({
        name: userDisplayName,
        gameName: gameName,
        age: userAge,
        email: userEmail,
        profilePicture: userProfilePicture
    })

    window.location.href = "game-selection.html"
}
