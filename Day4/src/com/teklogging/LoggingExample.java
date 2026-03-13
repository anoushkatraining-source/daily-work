package com.teklogging;
import java.util.logging.*;
public class LoggingExample {
	private static final Logger logger=Logger.getLogger(LoggingExample.class.getName());

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		logger.setLevel(Level.WARNING);
		logger.info("Application strated");
		logger.warning("Low memeory warning");
		logger.severe("System failure");
		

	}

}
