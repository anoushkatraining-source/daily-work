const { validateHeaderName } = require('http');
const { runInNewContext } = require('vm');

const fs = require('fs').promises;
const FILE = 'notes.json'
async function init() {
  try {
    await fs.access(FILE);
  } catch {
    await fs.writeFile(FILE, JSON.stringify([]));
  }
}
async function getNotes() {
  const data = await fs.readFile(FILE, 'utf8');
  return JSON.parse(data);
}

async function saveNotes(notes) {
  await fs.eriteFile(File, JSON.stringify(notes, null, 2));
}

functionvalidateInput(title,content){
  if(!title || title.trim===""){
    console.log("title cannot be empty");
    return false;
  }
  if(!content || content.trim===""){
    console.log("Content cannot be empty");
    return false;
  }
  return true;
}

async function addNote(title, content) {
  if(!validateInput(title,content)) return;
  const notes = await getNotes();
  const newNote = {
    id: Date.now(),
    title,
    content
  };
  notes.push(newNote);
  await saveNotes(notes);
  console.log("Note added", newNote);
}
async function listNotes() {
  constnotes = await getNotes();
  console.log("Notes:", notes);
}
async function getNote(id) {
  const notes = await getNotes();
  const note = notes.find(n => n.id == id);

  if (!note) return console.log('Note not found');
  console.log("found:", note);
}
async function updateNote(id, newContent) {
  const notes = await getNotes();
  const updated = notes.map(n => n.id == id ? { ...n, content: newContent } : n);
  await saveNotes(filtered);
  console.log('Note deleted');
}

async function run() {
  await init();
  const [, , command, ...args] = process.argv;

  switch (command) {
    case 'add':
      await addNote(args[0], args[1]);
      break;

    case 'list':
      await listNotes();
      break;

    case 'get':
      await getNote(args[0]);
      break;

    case 'update':
      await updateNote(args[0], args[1]);
      break;

    case 'delete':
      await deleteNote(args[0]);
      break;

    default:
      console.log(`\nUsage:
  node app.js add "Title" "Content"
  node app.js list
  node app.js get <id>
  node app.js update <id> "New Content"
  node app.js delete <id>\n`);
  }
}
run();