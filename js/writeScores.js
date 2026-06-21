
function fb_writeGeoDashScore() {
    firebase.database().ref('/gameScores/geoDash/' + userUID).once('value', displayScore, fb_readError);

    function displayScore(snapshot) {
        var userPastScore = snapshot.val().userScore;
        console.log(userPastScore)
        if (userPastScore < score) {
            firebase.database().ref('/gameScores/geoDash/' + userUID).update({
                userScore: score
            })
        }
    }

    function fb_readError(error) {
        console.log("There was an error reading the message");
        console.error(error);
    }
}

function fb_writeBlockBreakerScore() {
    firebase.database().ref('/gameScores/blockBreaker/' + userUID).once('value', displayScore, fb_readError);

    function displayScore(snapshot) {
        var userPastScore = snapshot.val().userScore;
        console.log(userPastScore)
        if (userPastScore < score) {
            firebase.database().ref('/gameScores/blockBreaker/' + userUID).update({
                userScore: score
            })
        }
    }

    function fb_readError(error) {
        console.log("There was an error reading the message");
        console.error(error);
    }
}