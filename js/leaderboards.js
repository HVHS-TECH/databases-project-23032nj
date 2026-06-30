/************************************* 
// leaderboards.js
// written by Nia 
// Nia's Games
*************************************/

//constants
const HTML_OUTPUT_LEADERBOARD_ONE = document.getElementById("databaseOutputLeaderboardOne");
const HTML_OUTPUT_LEADERBOARD_TWO = document.getElementById("databaseOutputLeaderboardTwo");

//variables
let gamePick;
let gamePickHTML;
var snapshotUsers;



/***************************************************************************************************
// reading leaderboards
//readLeaderboard()
// reads and displays the high scores for both games depending on which button has been clicked
**************************************************************************************************/

function readGeoDashLeaderboard() {
  gamePick = "geoDash";
  gamePickHTML = HTML_OUTPUT_LEADERBOARD_ONE;
  gamePickHTML.innerHTML = "";
  readLeaderboard()
}

function readBlockBreakerLeaderboard() {
  gamePick = "blockBreaker";
  gamePickHTML = HTML_OUTPUT_LEADERBOARD_TWO;
  gamePickHTML.innerHTML = "";
  readLeaderboard();
}

async function readLeaderboard() {
  const snapshotScores = await firebase.database()
    .ref('/gameScores/' + gamePick)
    .orderByChild('userScore')
    .limitToFirst(3)
    .once('value');

  snapshotUsers = await firebase.database().ref('/users').once('value')

  displayLeaderboard(snapshotScores);
}

function displayLeaderboard(snapshotScores) {
  snapshotScores.forEach(showscore)
}

function showscore(score) {
  var uid = score.key;
  var gameName = snapshotUsers.child(uid).val().gameName
  var profilePicture = snapshotUsers.child(uid).val().profilePicture
  var displayScore = score.val().userScore * -1

  //HTML_OUTPUT_LEADERBOARD_TWO.innerHTML += '<img src=' + profilePicture + ' alt= "users profile picture" class="profilePictureBorder" width="30px" height="30px"> </img>'
  //HTML_OUTPUT_LEADERBOARD_TWO.innerHTML += "<p> " + gameName + ": " + displayScore + " <p>"

  gamePickHTML.innerHTML += '<img src=' + profilePicture + ' alt= "users profile picture" class="profilePictureBorder" width="30px" height="30px"> </img>'
  gamePickHTML.innerHTML += "<p> " + gameName + ": " + displayScore + " <p>"
}