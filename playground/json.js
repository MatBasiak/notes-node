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

const originalNote={
    title:'abrakadabra title node js',
    body:'abrakadabra body'
};

const originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

const noteString = fs.readFileSync('notes.json')

const note = JSON.parse(noteString);

console.log(typeof note);
console.log(note.title);
