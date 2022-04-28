const jfile = require("./test.json");
let stringjson = JSON.stringify(jfile);
let testjson = JSON.parse(stringjson);
console.log("Test")
console.log(testjson.friendslist.friends);





