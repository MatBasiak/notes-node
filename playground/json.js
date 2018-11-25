// const obj = {
//     name:'Mateusz',
//     age:25
// };

// let stringObj = JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);



// const personString='{"name":"andrew","age":55}';

// const person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

const fs = require('fs');

var originalNote = {
    title: 'abrakadabra title node js',
    body: 'abrakadabra body'
};

const originalNoteString = JSON.stringify(originalNote); // convert from js object to json string

fs.writeFileSync('notes.json', originalNoteString); //write to a file

var noteString = fs.readFileSync('notes.json') //read from file

const note = JSON.parse(noteString); // convert from json file to a object

console.log(typeof note);
console.log(note.title);