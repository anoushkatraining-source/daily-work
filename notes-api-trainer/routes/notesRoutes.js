const express=require('express');
const router=express.Router();
const controller=require('../controllers/notesController');
router.get('/',controller.getAllNotes);
router.post('/',controller.createNote);
router.get('/:id',controller.getNoteById);
router.put('/:id', controller.updateNote);
router.delete('/:id',controller.deleteNote);
module.exports=router;