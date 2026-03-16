package com.tek.io;
import java.io.*;
public class filewriterexample {

	public static void main(String[] args) throws IOException {
		// TODO Auto-generated method stub
		FileWriter writer=new FileWriter("output.txt");
		writer.write("Hello java file IO");
		writer.close();

	}

}
