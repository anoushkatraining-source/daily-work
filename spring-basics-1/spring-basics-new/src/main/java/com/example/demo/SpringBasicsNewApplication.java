package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
@EnableAspectJAutoProxy
@SpringBootApplication
public class SpringBasicsNewApplication {
	public static void main(String[] args) {
		SpringApplication.run(SpringBasicsNewApplication.class, args);
	}
}