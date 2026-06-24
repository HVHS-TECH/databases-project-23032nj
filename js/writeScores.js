/************************************* 
// writeScores.js
// written by Nia 
// Nia's Games
*************************************/

//Writes the users Geo Dash score to the database, if it's higher than the users previous score
function fb_writeGeoDashScore() {
    firebase.database().ref('/gameScores/geoDash/' + userUID).once('value', displayScore, fb_readError);

    function displayScore(snapshot) {
        var checkUserPastScore = snapshot.val();
        var userPastScore;
        if(checkUserPastScore == null) {
            console.log("past score is null")
            userPastScore = 0
        }
        else {
            userPastScore = snapshot.val().userScore;
        }
        console.log(userPastScore)
        if (userPastScore < score || userPastScore == 0) {
            firebase.database().ref('/gameScores/geoDash/' + userUID).update({
                userScore: score
            })
        }
    }

}

//Writes the users Block Breaker score to the database, if it's higher than the users previous score
function fb_writeBlockBreakerScore() {
    firebase.database().ref('/gameScores/blockBreaker/' + userUID).once('value', displayScore, fb_readError);

    function displayScore(snapshot) {
        var checkUserPastScore = snapshot.val();
        var userPastScore;
        if(checkUserPastScore == null) {
            console.log("past score is null")
            userPastScore = 0
        }
        else {
            userPastScore = snapshot.val().userScore;
        }
        console.log(userPastScore)
        if (userPastScore < score) {
            firebase.database().ref('/gameScores/blockBreaker/' + userUID).update({
                userScore: score
            })
        }
    }
}

function fb_readError(error) {
    console.log("There was an error reading the message");
    console.error(error);
}