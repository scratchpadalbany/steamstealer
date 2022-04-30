const jfile = require("./test.json");
let stringjson = JSON.stringify(jfile);
let testjson = JSON.parse(stringjson);
console.log("Test");
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






