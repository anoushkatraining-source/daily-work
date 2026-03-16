package com.tek.fi;
import java.util.*;
import java.util.Arrays;
import java.util.function.Consumer;

public class LambdaWithCollections {

	public static void main(String[] args) {
		List<String> names = Arrays.asList("JAVA","PYTHON","C++");
		consumer();
		comparator();
}
	private static void comparator() {
		List<String> names = Arrays.asList("JAVA","PYTHON","C++");
		names.sort((str1, str2)->{
			return str1.length()-str2.length();
		});
		System.out.println(names);
	}
	private static void consumer() {
		List<String> names = Arrays.asList("JAVA","PYTHON","C++");
		Consumer<String> consumer= name -> System.out.println(name);
		names.forEach(consumer);
		
	}
     
}