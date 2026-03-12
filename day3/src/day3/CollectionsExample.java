package day3;
import java.util.*;
public class CollectionsExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<String> fruits=new ArrayList<>();
		fruits.add("Apple");
		fruits.add("Mango");
		fruits.add("Mango");
		fruits.add("Banana");
		
		System.out.println(fruits);
		System.out.println(fruits.get(1)==fruits.get(2));

	}

}
