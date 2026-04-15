package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
@EnableAspectJAutoProxy
@SpringBootApplication
public class SpringBasicsNewApplication {
	public static void main(String[] args) {
//		ConfigurableApplicationContext context1 = SpringApplication.run(SpringBasicsApplication.class, args);
//		NoteService service = context1.getBean(NoteService.class);
//		System.out.println(service);
		SpringApplication.run(SpringBasicsNewApplication.class, args);
	}
}