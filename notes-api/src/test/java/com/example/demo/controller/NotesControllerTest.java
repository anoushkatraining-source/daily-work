package com.example.demo.controller;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;

import com.example.demo.services.NotesService;

class NotesControllerTest {
    @InjectMocks
    NotesController noteController;
    @Mock
    NotesService noteService;
	@Test
	void GetNotes() {
		
	}

}
