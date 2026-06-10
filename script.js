/************************************* 
// script.js
// written by Nia 
// Nia's Games
*************************************/
console.log("Running Nia's Games")

//Constants


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
    userLoggedIn = true
})
}

/**********************************
// submitUserDetailsForm()
***********************************/

function submitUserDetailsForm() {
    //collect and store the users username and age
    if(userLoggedIn == true) {
        const userName = document.getElementById("name").value;
        const userAge = document.getElementById("age").value;
        console.log(userName)
        console.log(userAge)

        saveUserInfo()
        userFormSubmitted = true;
    } else {
        alert("Please log in before registering")
    }
}

/**********************************
// saveUserInfo()
***********************************/

function saveUserInfo() {
    console.log("running saveUserInfo")
}