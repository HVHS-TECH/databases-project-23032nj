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
gamePickHTML = "HTML_OUTPUT_LEADERBOARD_ONE";
readLeaderboard()
}

function readBlockBreakerLeaderboard() {
  gamePick = "blockBreaker";
  gamePickHTML = "HTML_OUTPUT_LEADERBOARD_TWO";
  readLeaderboard();
}

async function readLeaderboard() {
  console.log("Reading sorted high scores");
  const snapshotScores = await firebase.database()
    .ref('/gameScores/'+gamePick)
    .orderByChild('userScore')
    .limitToLast(3)
    .once('value');

  snapshotUsers = await firebase.database().ref('/users').once('value')
  
  displayBlockBreakerLeaderboard(snapshotScores);    
}

function displayBlockBreakerLeaderboard(snapshotScores) {
  snapshotScores.forEach(showscore)
}

function showscore(score) {
  var uid = score.key;
  var gameName = snapshotUsers.child(uid).val().gameName
  var profilePicture = snapshotUsers.child(uid).val().profilePicture
  console.log(profilePicture)

  HTML_OUTPUT_LEADERBOARD_TWO.innerHTML += '<img src=' + profilePicture + ' alt= "users profile picture" class="profilePictureBorder" width="30px" height="30px"> </img>'
  HTML_OUTPUT_LEADERBOARD_TWO.innerHTML += "<p> " + gameName + ": " + score.val().userScore + " <p>"

  //gamePickHTML.innerHTML += '<img src=' + profilePicture + ' alt= "users profile picture" class="imageBorder" width="30px" height="30px"> </img>'
  //gamePickHTML.innerHTML += "<p> " + gameName + ": " + score.val().userScore + " <p>"
}
