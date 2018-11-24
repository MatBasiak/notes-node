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

const addNote=(title,body)=>{
console.log('adding note', title,body);
};

const getAll=()=>{
    console.log('getting all notes');
}

const removeNote=(title)=>{
    console.log(`romoving note ${title}` );
}
const getNote=(title)=>{
    console.log(`geting note ${title}`);
}

module.exports={
   addNote, // es6 syntax for  addNote:addNote  
   getAll,
   removeNote,
  getNote

}