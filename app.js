console.log('starting app.');

const fs = require('fs'); //require module fs
const os = require('os'); //fequire moduls os , take a look at  nodejs.org/api


let user = os.userInfo();

// console.log(user);
fs.appendFile('greetings.txt', `Hello ${user.username} !`, function (err) {
    if (err) {
        console.log('unable to write to file')
    }
});