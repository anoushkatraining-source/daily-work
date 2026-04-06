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
    if (!request.body) {
        return response.status(400).json({ error: 'Request body required' });
    }
    const { title,content,time, status } = request.body;
    if (
        !request.body ||
        typeof request.body !=='object'||
        typeof title !=='string'||
        typeof content !=='string'||
        typeof status !=='string'||
        !title.trim()||
        !status.trim()
    ) {
        return response.status(400).json({ error: 'Invalid input' });
    }
    const notes = await getNotes();
    const newNote = {
        id: Date.now(),
        title,
        content,
        time,
        status:status
    };
    notes.push(newNote);
    await saveNotes(notes);
    response.status(201).json(newNote);
};
exports.updateNote = async (req, res) => {
    const notes = await getNotes();
    const updatedNotes = notes.map(note =>
        note.id == req.params.id ? { ...note, ...req.body } : note);
    await saveNotes(updatedNotes);
    res.json({ message: "Updated" });
};
exports.deleteNote = async (request, response) => {
    const id=Number(request.params.id);
    const notes = await getNotes();
    const note = notes.find(note => note.id ==id);
    if (!note) {
        return response.status(404).json({ error: 'Not found' });
    }
    const filtered = notes.filter(note => note.id != request.params.id);
    await saveNotes(filtered);
    response.json({ message: 'Deleted' });
};

