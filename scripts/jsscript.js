let theUrl = "http://api.steampowered.com/ISteamUser/GetFriendList/v0001/?key=778CC62732B9E6FEC9E94295C4FB17C9&steamid=76561198127152089&relationship=friend";
function callback(response) {
    if (response.ok) {
        return response.json()
    }
}
function httpGetAsync(theUrl, callback(response))
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous 
    xmlHttp.send(null);
}

//const jfile = require("./test.json");
let stringjson = JSON.stringify(jfile);
let testjson = JSON.parse(stringjson);
console.log("Test")
console.log(testjson.friendslist.friends);
console.log(String(testjson.friendslist.friends[0].steamid));
let strid = String(testjson.friendslist.friends[0].steamid);



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






