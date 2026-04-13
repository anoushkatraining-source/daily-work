package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.Bean;

import com.example.demo.controller.NoteController;
import com.example.demo.controller.NoteService;

@SpringBootApplication
public class SpringBasicsApplication {
	public static void main(String[] args) {
    ConfigurableApplicationContext context=SpringApplication.run(SpringBasicsApplication.class, args);
	//ConfigurableApplicationContext context1=SpringApplication.run(SpringBasicsApplication.class, args);
   // NoteController controller=context.getBean(NoteController.class);
	NoteService service=context.getBean(NoteService.class);
	//System.out.println(controller);
	System.out.println(service);
}


@Bean
NoteService noteService() {
	return new NoteService();
}
}