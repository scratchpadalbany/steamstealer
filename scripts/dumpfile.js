//dump file

let endpoint ="http://api.steampowered.com/ISteamUserStats/GetPlayerAchievements/v0001/?appid=960090&key=778CC62732B9E6FEC9E94295C4FB17C9&steamid=76561198053794848"

const getSuggestions = () => {
fetch(endpoint, {method: 'GET', cache: 'no-cache'}).then(response => {
    if (response.ok) {
        getElementById("friend1").innerHTML = response.json().join("");
    }
});
}
const displaySuggestions = (event) => {
    getSuggestions();
}

bt1.addEventListener('click', displaySuggestions);


/*
const jfile = require("./test.json");
let stringjson = JSON.stringify(jfile);
let testjson = JSON.parse(stringjson);
console.log("Test");
console.log(testjson.friendslist.friends);
console.log(String(testjson.friendslist.friends[0].steamid));
let strid = String(testjson.friendslist.friends[0].steamid);
*/
/*
bt1.addEventListener('click', event => {
    test();
  });

function test(){
    alert("The function 'test' is executed");
    document.getElementById("friend1").innerHTML = str(testjson.friendslist.friends[1]); 
    document.getElementById("friend1").innerHTML = "test2";
}
*/
function test(){
   
    document.getElementById("friend1").innerHTML = strid; 
}






