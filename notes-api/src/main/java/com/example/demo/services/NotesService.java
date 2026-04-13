package com.example.demo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.entity.Note;
import com.example.demo.repositories.NotesRepository;

@Service
public class NotesService {
	@Autowired
	NotesRepository notesRepository;

	public Iterable<Note> getNotes() {
//	Note note=new Note();
//	note.setId(123);
//	note.setTitle("Test Note Title");
//	note.setContent("Test Note Content");
		return notesRepository.findAll();
	}

	public void createNote(Note note) {
//	System.out.println(note.getId());
//	System.out.println(note.getTitle());
		notesRepository.save(note);
	}
}
