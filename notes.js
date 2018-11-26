// console.log('starting notes.js');

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


const fetchNotes = () => {
    try {
        const notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);

    } catch (e) {
        return [];
    }


};
const saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

const addNote = (title, body) => {
    // console.log('adding note', title,body);
    let notes = fetchNotes();
    let note = {
        title,
        body
    };

    var duplicateNotes = notes.filter((note) => note.title === title); // create new array witch contain notes if it pass the test
    if (duplicateNotes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    };
};

const getAll = () => {
    // console.log('getting all notes');
    return fetchNotes();
}

const removeNote = (title) => {
    // console.log(`romoving note ${title}`);
    let notes = fetchNotes(); // fetching data from json file

    let notDeletedNotes = notes.filter(note => note.title !== title); //filter data if title in json file is equal with title passing from remowe command,and create new array with items wchich passed test
    // console.log(notDeleteNotes);
    saveNotes(notDeletedNotes); // save new array shorter of deleted item

    return notes.length !== notDeletedNotes.length;
}
const getNote = (title) => {
    // console.log(`geting note ${title}`);

    let notes = fetchNotes();
    let filteredNotes = notes.filter(note => note.title === title);
    return filteredNotes[0]
}

const logNote = (note) => {
    debugger;

    console.log('---');
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);;

};

module.exports = {
    addNote, // es6 syntax for  addNote:addNote  
    getAll,
    removeNote,
    getNote,
    logNote

}