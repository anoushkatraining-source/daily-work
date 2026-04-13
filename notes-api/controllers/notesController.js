const { getNotes, saveNotes } = require('../services/notesServices');
exports.getAllNotes = async (req, res) => {
    const notes = await getNotes();
    res.json(notes);
};
exports.getNoteById = async (req, res) => {
    const id = Number(req.params.id);
    const notes = await getNotes();
    const note = notes.find(n => n.id === id);
    if (!note) {
        return res.status(404).json({ error: "Not found" });
    }
    res.json(note);
};
exports.createNote = async (req, res) => {
    const { title, content, startDate, endDate, priority } = req.body;
    if (
        typeof title !== "string" || !title.trim() ||
        typeof content !== "string" || !content.trim()
    ) {
        return res.status(400).json({ error: "Invalid input" });
    }
    const notes = await getNotes();
    const newNote = {
        id: Date.now(),
        title,
        content,
        startDate,
        endDate,
        priority
    };
    notes.push(newNote);
    await saveNotes(notes);
    res.status(201).json(newNote);
};
exports.updateNote = async (req, res) => {
    const id = Number(req.params.id);
    const notes = await getNotes();
    const updatedNotes = notes.map(note =>
        note.id === id ? { ...note, ...req.body } : note
    );
    await saveNotes(updatedNotes);
    res.json({ message: "Updated" });
};
exports.deleteNote = async (req, res) => {
    const id = Number(req.params.id);
    const notes = await getNotes();
    const noteExists = notes.find(note => note.id === id);
    if (!noteExists) {
        return res.status(404).json({ error: "Not found" });
    }
    const filteredNotes = notes.filter(note => note.id !== id);
    await saveNotes(filteredNotes);
    res.json({ message: "Deleted" });
};