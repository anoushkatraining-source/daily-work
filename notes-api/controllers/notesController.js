const service = require('../services/notesServices');

const { getNotes, saveNotes } = require('../services/notesServices');
 
exports.getAllNotes = async (request, response) => {

    const notes = await service.getNotes();

    response.json(notes);

};
 
exports.getNoteById = async (request, response) => {

    const notes = await service.getNotes();

    const note = notes.find(note => note.id == request.params.id);
 
    if (!note) {

        return response.status(404).json({ error: "Not found" });

    }
 
    response.json(note);

};
 
exports.createNote = async (request, response) => {

    const { title, content } = request.body;
 
    if (!title || !content) {

        return response.status(400).json({ error: 'title and content required' });

    }
 
    const notes = await getNotes();
 
    const newNote = {

        id: Date.now(),

        title,

        content

    };
 
    notes.push(newNote);

    await saveNotes(notes);
 
    response.status(201).json(newNote);

};
 
exports.updateNote = async (request,response) => {

    const notes = await getNotes();

    const updated = notes.map(note=> note.id == request.params.id ? {...note, ...request.body} :note );

    await saveNotes(updated);

    response.json({ message: 'update'});

};
 
exports.deleteNote = async (request,response) => {

    const notes = await getNotes();

     const note = notes.find(note => note.id == request.params.id);
 
    if (!note) {

        return response.status(404).json({ error: 'Not found' });

    }

    const filtered = notes.filter(note => note.id != request.params.id);

    await saveNotes(filtered);

    response.json({ message:'Deleted'});

};
 