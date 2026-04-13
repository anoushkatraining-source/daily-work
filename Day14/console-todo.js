const { log } = require('console');

const fs=require('fs').promises;
const FiLE="notes.json"
async function init(){
try{
    await fs.access(FILE);
}
catch{
   await fs.writeFile(FILE,JSON.stringify([]));
}
}

async function getNotes(){
    const data=await fs.readFile(FILE,'utf8');
    return JSON.parse(data);
}
async function saveNotes(notes){
    await fs.writeFile(FILE,JSON.stringify(notes,null,2));
}
async function addNote(title,content){
const notes=await getNotes();
const newNote={
    id:Date.now(),
    title,
    content
};

notes.push(newNote);
await saveNotes(notes);
console.log("Note added:", newNote);
}
async function getNoteById(id){
    const notes=await getNotes();

    const note=notes.find(n=>n.id===id)
         console.log("found:", note);
    }
async function updateNote(id,newContent){
    const notes=await getNotes();
    const update=notes.map(n=> {
        if(n.id===id){
            return {...n,content: newContent};
        }
        return n;
    });
    await saveNotes(updated);
    console.log("note updated");
}
async function  deleteNote(id){
    const notes=await getNotes();
    const filtered=notes.filter(n=>n.id!==id);
    await saveNotes(filtered);
    console.log("Note deleted");
}
async function run(){
await init();
await addNote("First Note","This is my first note");
await addNote("Second note","Learning Node.js");
await listNotes();
const notes=await getNotes();
const id =notes[0].id;
await getNoteById(id);
await updateNote(id,'updated content');
await deleteNote(id);
await listNotes();
}
run();