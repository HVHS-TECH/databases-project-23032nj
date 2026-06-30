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
    } else if (userAge < 16) {
        alert("You have to be 16 or older to use this site")
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
