let jfile = require('./test.json');
console.log("Test")
console.log(typeof(jfile));
for(let i in jfile){
    console.log(jfile[i]);
}