// console.log('starting app.');

// const fs = require('fs'); //require module fs
// // const os = require('os'); //fequire moduls os , take a look at  nodejs.org/api
// const _ = require('lodash')
// const notes=require('./notes.js') //require a file 

// console.log(_.isString('mateusz '));//return true or false
// console.log(_.uniq(['maaat',1,'maaat',1,2,3,4,4,5,4]));//uniq removes duplicates from array





// let res = notes.addNote();
// console.log(res);

// let add = notes.add(5,10);
// console.log(add)


// let user = os.userInfo();

// // console.log(user);
// fs.appendFile('greetings.txt', `Hello ${user.username}  you are ${notes.age} !`, function (err) {
//     if (err) {
//         console.log('unable to write to file')
//     }
// });

console.log('starting app.');

const fs = require('fs'); //require module fs
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js'); //require a file 

const argv = yargs.argv
const command = process.argv[2];
console.log('Command:', command);
// console.log('process:',process.argv);
console.log("yargs :",argv);


// if (command === 'add') {
//     console.log('adding new note');
// } else if (command === "list") {
//     console.log('listing all notes');
// } else {
//     console.log(`command '${command}' not recognized`)
// }

switch (command) {
    case 'add':
        // console.log('Adding new notes');
        notes.addNote(argv.title, argv.body);
        break;
    case 'list':
        // console.log('Listing all notes');
        notes.getAll();
        break;
    case 'remove':
       notes.removeNote(argv.title);
        break;
    case 'read':
      notes.getNote(argv.title);
        break;
    default:
        console.log(`command '${command}' not recognized`);

}