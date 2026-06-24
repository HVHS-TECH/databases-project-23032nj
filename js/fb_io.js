//Constants
const HTML_OUTPUT = document.getElementById("databaseOutputLogin");

//Variables

var userDisplayName;
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
    if (_user) {
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

        //if the user in on the login page, check if they're already in the database
        if (window.location.pathname.endsWith('/')) {
            console.log('checking')
            checkUser()
        }
    } else {
        console.log("User is not logged in, logging the user in now")
        popupLogin();
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
        userLoggedIn = true
    })
}


/**********************************
// fb_readError()
// error check 
***********************************/
function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
}


//if the user is on the game selection page, welcome them by their name  
function welcomeUser() {
    if (window.location.pathname.endsWith('/game-selection.html')) {
        writeWelcome();
    }
}

/**********************************
// writeWelcome()
// welcomes the user
***********************************/
function writeWelcome() {
    HTML_OUTPUT.innerHTML += "<p> Welcome " + userDisplayName + "! <p>"

}




//if the user is already in the database, send them straight to the game selection page
//if (window.location.pathname.endsWith('/index.html' && userLoggedIn == true)) {
//  window.location.href = "game-selection.html"
//}

