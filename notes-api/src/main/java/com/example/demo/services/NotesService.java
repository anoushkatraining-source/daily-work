package com.example.demo.services;

import org.springframework.stereotype.Service;
import com.example.demo.NotesApiApplication;
import com.example.demo.entity.Note;

@Service
public class NotesService {

//    private final NotesApiApplication notesApiApplication;
//
//    NotesService(NotesApiApplication notesApiApplication) {
//        this.notesApiApplication = notesApiApplication;
//    }
public Note getNotes(){
	Note note=new Note();
	note.setId(123);
	note.setTitle("Test Note Title");
	note.setContent("Test Note Content");
	return note;	
}
public void createNote(Note note) {
	System.out.println(note.getId());
	System.out.println(note.getTitle());
}
}
