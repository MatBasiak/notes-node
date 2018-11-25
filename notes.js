console.log('starting notes.js');

// console.log(module);

// module.exports.age = 25;

// module.exports.addNote =()=>{
//     console.log('add note');
//     return 'New Note'

// }

// module.exports.add =(a,b)=>{
//     console.log(`a equals ${a} and b equals ${b}  sum equals ${a+b}`);
//     return a+b;

// }

const fs = require('fs');

const addNote = (title, body) => {
    // console.log('adding note', title,body);
    let notes = [];
    let note = {
        title,
        body
    };




    try {
        const notesString = fs.readFileSync('notes-data.json');
        notes = JSON.parse(notesString);

    } catch (e) {

    }

    var duplicateNotes = notes.filter((note)=> note.title ===title);
if(duplicateNotes.length === 0 ){
    notes.push(note);
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));

}


};

const getAll = () => {
    console.log('getting all notes');
}

const removeNote = (title) => {
    console.log(`romoving note ${title}`);
}
const getNote = (title) => {
    console.log(`geting note ${title}`);
}

module.exports = {
    addNote, // es6 syntax for  addNote:addNote  
    getAll,
    removeNote,
    getNote

}