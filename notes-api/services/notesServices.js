const fs=require('fs').promises;
async function getNotes(){
   const data= await fs.readFile('./data/notes.json','utf-8');
    return JSON.parse(data);
}
async function getNoteById(id) {
    const notes = await getNotes();
    const found = notes.find((note)=> note.id === id);
    return found;
}
async function saveNotes(notes) {
    await fs.writeFile('./data/notes.json', JSON.stringify(notes, null, 2));
}
async function updateNote(notes){
    await fs.writeFile('./data/notes.json', JSON.stringify(notes, null, 2));
}
module.exports= {getNotes,saveNotes, updateNote};