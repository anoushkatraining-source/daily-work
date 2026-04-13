package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.example.demo.controller.NotesController;
import com.example.demo.service.NoteService;

@SpringBootApplication
public class SpringBasics1Application {
	public static void main(String[] args) {
//    ConfigurableApplicationContext context=SpringApplication.run(SpringBasics1Application.class, args);
//	ConfigurableApplicationContext context1=SpringApplication.run(NotesController.class, args);
//    NoteController controller=context.getBean(NoteController.class);
	//NoteService service=context.getBean(NoteService.class);
	//System.out.println(controller);
	//System.out.println(service);
		
	SpringApplication.run(SpringBasics1Application.class, args);
}
}
