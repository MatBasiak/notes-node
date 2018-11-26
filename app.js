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

// console.log('starting app.');

const fs = require('fs'); //require module fs
const _ = require('lodash');
const yargs = require('yargs')

const notes = require('./notes.js'); //require a file 

const body = {
    
        describe:'body of note',
        demand:true,
        alias:'b'
    

}
const title = {
    
        describe:"title of note",
        demand:true,
        alias:'t'
    
}

const argv = yargs
.command('add','Add a new Note',{
    title,
    body
})
.command('list','List All notes')
.command('read','read a note',{
    title
})
.command('remove','remove a note',{
    title

})
.help()
.argv;
// const command = process.argv[2]; 
const command = argv._[0];
// console.log('Command:', command);
// console.log('process:',process.argv);
// console.log("yargs :", argv);


// if (command === 'add') {
//     console.log('adding new note');
// } else if (command === "list") {
//     console.log('listing all notes');
// } else {
//     console.log(`command '${command}' not recognized`)
// }

switch (command) {
    case 'add':
        {
            // console.log('Adding new notes');
            let note = notes.addNote(argv.title, argv.body);
            if (note === undefined) {
                console.log('the title already taken');

            } else {
                // console.log(`The note titled: ${note.title} added`);
                // console.log(` body: ${note.body}`);
                console.log('Note created');
                notes.logNote(note);
            }
        }
        break;
    case 'list':
        // console.log('Listing all notes');
        let allNotes = notes.getAll();
        console.log(`Printing ${allNotes.length} note(s).`);
        allNotes.forEach(note => notes.logNote(note));
        break;
    case 'remove':
        let noteRemoved = notes.removeNote(argv.title);

        let message = noteRemoved ? `note titled: ${argv.title} was removed` : 'note not found';
        console.log(message);



        break;
    case 'read':
        {
            let note = notes.getNote(argv.title);
            //    console.log(noteToRead[0].title);
            //   try{ let message1 = noteToRead[0].title? (noteToRead[0].body): ''
            //    console.log(message1);}
            //    catch{
            //        console.log('note not found');
            //    };

            if (note) {
                console.log('Note found');
                notes.logNote(note);
            } else {
                console.log('note not found');

            }
        }
        break;
    default:
        console.log(`command '${command}' not recognized`);

}