/************************************* 
// leadeboards.js
// written by Nia 
// Nia's Games
*************************************/

//constants
const HTML_OUTPUT_LEADERBOARD = document.getElementById("databaseOutputLeaderboard");


function readBlockBreakerLeaderboard() {
    console.log("Reading sorted high scores");
    firebase.database().ref('/gameScores/geoDash').orderByValue().limitToLast(3).once('value', displayBlockBreakerLeaderboard, fb_readError);
}

function displayBlockBreakerLeaderboard(snapshot) {
  snapshot.forEach(showscore)
}

function showcore(child) {
  //console.log(child.val());
  console.log(child.key+" got ", child.val(), "points");
  console.log(child.val())
  HTML_OUTPUT_LEADERBOARD.innerHTML += "<p> " + child.key+": " + child.val().userScore + " <p>"

}

function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}



