/************************************* 
// leadeboards.js
// written by Nia 
// Nia's Games
*************************************/

//constants
const HTML_OUTPUT_LEADERBOARD_ONE = document.getElementById("databaseOutputLeaderboardOne");
const HTML_OUTPUT_LEADERBOARD_TWO = document.getElementById("databaseOutputLeaderboardTwo");

//    firebase.database().ref('/gameScores/geoDash'/userUidList[i]).once('value',  fb_readError);

//Geo Dash Leaderboard
function readGeoDashLeaderboard() {
  console.log("Reading sorted high scores");
  firebase.database().ref('/gameScores/geoDash').orderByChild('userScore').limitToLast(3).once('value', displayGeoDashLeaderboard, fb_readError);
}

function displayGeoDashLeaderboard(snapshot) {
  var 
  var userUidList = Object.keys(snapshot);
  console.log(userUidList);

  for (i = 0; i < userUidList.Length; i++) {
    var currentUserUid = userUidList[i]
    var currentUserInfo = firebase.database().ref('users/currentUserUid').once('value', fb_error,)
    console.log(currentUserInfo)

  };









  //snapshot.forEach(showscore)
}

function showscore(child) {
  console.log(child.key + " got ", child.val(), "points");
  HTML_OUTPUT_LEADERBOARD_ONE.innerHTML += "<p> " + child.key + ": " + child.val().userScore + " <p>"
}
























//Block Breaker Leaderboard

function readBlockBreakerLeaderboard() {
  console.log("Reading sorted high scores");
  firebase.database().ref('/gameScores/blockBreaker').orderByChild('userScore').limitToLast(3).once('value', displayBlockBreakerLeaderboard, fb_readError);
}

function displayBlockBreakerLeaderboard(snapshot) {
  snapshot.forEach(showscore)
}

function showscore(child) {
  console.log(child.key + " got ", child.val(), "points");
  console.log(child.val())
  HTML_OUTPUT_LEADERBOARD_TWO.innerHTML += "<p> " + child.key + ": " + child.val().userScore + " <p>"
}

function fb_readError(error) {
  console.log("There was an error reading the message");
  console.error(error);
}
