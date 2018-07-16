console.log('starting app.js');
const fs= require('fs');
// const os= require('os'); 
const yargs= require('yargs');

const notes= require('./notes.js');
// const _ = require('lodash');

const argv= yargs
.command('add','Add a new note',{
    title:{
        describe: 'title of the note',
        demand: true,
        alias: 't' 
    },
    body:{
        describe: 'body of the note',
        demand: true,
        alias: 'b'
    }
})
.command('read','read a specific note',{
    title: {
        describe: 'title of the note',
        demand: true,
        alias: 't'  
    }
})
.command('list','to list all the notes')
.command('remove','to remove a specific note',{
    title:{
        describe: 'title of the note',
        demand: true,
        alias: 't'
    }
})
.help()
.argv;
//var command= process.argv[2];
var command= argv._[0];
// console.log(command);
// console.log('process: ', process.argv); 
// console.log('yargs: ', argv);


if (command=== 'add'){
    notes.addNote(argv.title,argv.body);

}
else if (command=== 'list'){
    notes.getAll(); 
}
else if(command=== 'read'){
    notes.read(argv.title);
}
else if (command=== 'remove'){
    if(notes.remove(argv.title)){
        console.log('removed');
    }else{
        console.log('it was not removed');
    }

}
else {
    console.log('command not recognized');
}




// console.log(_.isString('fahim'));
// var user= os.userInfo();

// var res= notes.add(22,3);
// console.log(res);  
//console.log(user);

// fs.appendFile('grretings.txt',`hello ${user.username} and your age is ${notes.age}` , function(err){
//     if(err){
//         console.log('unable to write to file');
//     }
// }); 