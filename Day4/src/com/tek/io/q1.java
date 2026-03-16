package com.tek.io;

import java.util.*;
import java.io.*;
import java.nio.file.Files;

public class q1 {
	public static void main(String[] args) throws IOException {
		Scanner sc = new Scanner(System.in);
		FileWriter writer = new FileWriter("output1.txt", true);
		while (true) {
			System.out.println("enter the text: ");
			String text = sc.nextLine();
			writer.write(text);
			writer.flush();
			System.out.println("File overwritten successfully.");
			System.out.println("file updated");
			

		}

	}
}
