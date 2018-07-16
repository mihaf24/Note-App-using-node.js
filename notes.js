console.log('starting notes.js');
const fs= require('fs');

var fetchNote = ()=>{
    try{
        var noteString= fs.readFileSync('notes-data.json');
        return JSON.parse(noteString);

    }catch(e){
        return [];
    }
}

var saveNote= (notes)=>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title,body)=>{
    var notes= fetchNote();
    var note= {
        title: title,
        body:body
    };

    // var duplicateNotes = notes.filter((note)=>{
    //     return note.title=== title;
    // })
    var duplicateNotes = notes.filter((note) => note.title === title);
   

    //console.log(duplicateNotes);
    if (duplicateNotes.length ===0){
        notes.push(note);
        saveNote(notes);
        console.log('notes created');
    }else{
        console.log("duplicate title");
    }
 
}

var getAll= ()=>{
    //console.log('getting all notes');
    var notes= fetchNote(); 
    if(notes.length===0){
        console.log('The list is empty. No note is found');
    }else{
        var allnotes= notes.filter((note)=>{
            console.log(`Title:${note.title}`);
            console.log(`Body:${note.body}`);
        })
    }
    

}

var read= (title)=>{
    var notes= fetchNote();
    var filteredNotes= notes.filter((note)=>{
        return note.title=== title;
    })
    if(filteredNotes.length >0){
        console.log(`Title:${filteredNotes[0].title}`);
        console.log(`Body:${filteredNotes[0].body}`);
    }else{
        console.log('no notes found on that title');
    }

    
}

var remove= (title)=> {
    var notes= fetchNote();
    var filteredNotes = notes.filter((note) => note.title !== title);
    saveNote(filteredNotes);

    return notes.length !== filteredNotes.length; //same size howa mane kisu delete hoy nai. so 0 return korbe.

}
module.exports= {
    addNote,
    getAll,
    read,
    remove
};


// console.log(module);

// module.exports.addnote = ()=>{
//     console.log('addnote');
//     return 'new notes';
// };

// module.exports.add= (a,b)=>{
//     return a+b;
// }
