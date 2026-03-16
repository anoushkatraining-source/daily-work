package com.tek.io;
import java.io.*;
public class filereader {

	public static void main(String[] args) throws IOException{
		// TODO Auto-generated method stub
		FileReader reader=new FileReader("data.txt");
		int character;
		while((character=reader.read())!=-1) {
			System.out.print((char) character);
		}
		reader.close();
	}

}
