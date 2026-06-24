function checkUser() {
    firebase.database().ref('/users/' + userUID).once('value', displayUsers, fb_readError);
}

function displayUsers(snapshot) {
    var currentUser = snapshot.val();
    if (currentUser == null) { //if there is no currentUser, dbData will be null, therefore they're new to the interface
        window.location.href = "user-signup.html";
    }
    else { //user is already in the database, they can go straight to game selection page
        window.location.href = "game-selection.html";
    }
}