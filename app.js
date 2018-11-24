console.log('starting app.');

const fs = require('fs'); //require module fs
const os = require('os'); //fequire moduls os , take a look at  nodejs.org/api
const notes=require('./notes.js') //require a file 

let res = notes.addNote();
console.log(res);

let add = notes.add(5,10);
console.log(add)


// let user = os.userInfo();

// // console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}  you are ${notes.age} !`, function (err) {
//     if (err) {
//         console.log('unable to write to file')
//     }
// });