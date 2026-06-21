/************************************* 
// script.js
// written by Nia 
// Nia's Games
*************************************/
console.log("Running Nia's Games")

//Constants
const HTML_OUTPUT_LOGIN = document.getElementById("databaseOutputLogin");
const HTML_OUTPUT_SUBMIT = document.getElementById("databaseOutputSubmit");



//Variables
let userLoggedIn = false
let userFormSubmitted = false
let userRegistered = false

let userDisplayName;
let userEmail;
let userUID;
let userProfilePicture

let userName;
let userAge;
/**********************************
// authenticateLogin()
***********************************/

function authenticateLogin() {
    console.log("Logging in user")
    authenticationListner = firebase.auth().onAuthStateChanged(handleLogin)
}

function handleLogin(_user) {
    if (userLoggedIn == false) {
        if(_user) {
            GLOBAL_user = _user;
            console.log("User is logged in")
            userDisplayName = GLOBAL_user.displayName
            userEmail = GLOBAL_user.email
            userUID = GLOBAL_user.uid
            userProfilePicture = GLOBAL_user.photoURL
            console.log(userDisplayName)
            console.log(userEmail)
            console.log(userUID)
            console.log(userProfilePicture)
            HTML_OUTPUT_LOGIN.innerHTML += "<p> Welcome " + userDisplayName + "! <p>"
            userLoggedIn = true
        } else {
            console.log("User is not logged in, logging the user in now")
            popupLogin();
        }
    }
}

function popupLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
    GLOBAL_user = result.user;
    console.log("User is logged in")
    userDisplayName = GLOBAL_user.displayName
    userEmail = GLOBAL_user.email
    userUID = GLOBAL_user.uid
    userProfilePicture = GLOBAL_user.photoURL
    console.log(userDisplayName)
    console.log(userEmail)
    console.log(userUID)
    console.log(userProfilePicture)
    HTML_OUTPUT_LOGIN.innerHTML += "<p> Welcome " + userDisplayName + "! <p>"
    userLoggedIn = true
})
}

/**********************************
// submitUserDetailsForm()
***********************************/

function submitUserDetailsForm() {
    //collect and store the users username and age
    if(userLoggedIn == true) {
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
            Name: userDisplayName,
            gameName: userName,
            Age:userAge,
            Email: userEmail,
            profilePicture: userProfilePicture
        })
        saveUserInfo()
        userFormSubmitted = true;
        HTML_OUTPUT_SUBMIT.innerHTML += "<p> Thank you for submitting " + userName + "!! You can now select a game! </p>"
    } else {
        alert("Please log in before registering")
    }
}

function gameSelection() {
    if(userFormSubmitted == true) {
        window.location.href = 'game-selection.html'
    } else {
        alert("Please log in and submit your details before playing the games")
    }
}

/**********************************
// saveUserInfo()
***********************************/

function saveUserInfo() {
    console.log("running saveUserInfo")
}