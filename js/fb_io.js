/************************************* 
// fb_io.js
// written by Nia 
// Nia's Games
*************************************/

//Constants
const HTML_OUTPUT = document.getElementById("databaseOutputLogin");

//Variables

var userDisplayName;
let userEmail;
let userUID;
let userProfilePicture


/**********************************
// authenticateLogin()
***********************************/

function authenticateLogin() {
    console.log("Logging in user")
    authenticationListner = firebase.auth().onAuthStateChanged(handleLogin)
}

function handleLogin(_user) {
    if (_user) {
        GLOBAL_user = _user;
        console.log("User is logged in")
        userDisplayName = GLOBAL_user.displayName
        userEmail = GLOBAL_user.email
        userUID = GLOBAL_user.uid
        userProfilePicture = GLOBAL_user.photoURL
        console.log(userEmail)

        //if the user in on the login page, check if they're already in the database
        if (window.location.pathname.endsWith('/')) {
            console.log('checking')
            checkUser()
        }

        //if the user is on the game selection page, welcome them by their name  
        if (window.location.pathname.endsWith('/game-selection.html')) {
            writeWelcome();
        }

    } else {
        console.log("User is not logged in, logging the user in now")
        popupLogin();
    }
}

/**********************************
// popupLogin()
// error check 
***********************************/
function popupLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider).then((result) => {
        GLOBAL_user = result.user;
        console.log("User is logged in")
        userDisplayName = GLOBAL_user.displayName
        userEmail = GLOBAL_user.email
        userUID = GLOBAL_user.uid
        userProfilePicture = GLOBAL_user.photoURL
    })
}

/**********************************
// writeWelcome()
// welcomes the user
***********************************/
function writeWelcome() {
    HTML_OUTPUT.innerHTML += "<p> Welcome " + userDisplayName + "! <p>"
}

/**********************************
// fb_readError()
// error check 
***********************************/
function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
}