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
    if (userAge == "") {
        alert("Please enter an age");
        return;
    }

    //save the users info from login, and form to the database
    await firebase.database().ref('/users/' + userUID).set({
        Name: userDisplayName,
        gameName: gameName,
        Age: userAge,
        Email: userEmail,
        profilePicture: userProfilePicture
    })

    window.location.href = "game-selection.html"
}
