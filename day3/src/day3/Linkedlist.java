package day3;
import java.util.*;
public class Linkedlist {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		List<String> cities=createListOfCities();
		System.out.println(cities.contains("Delhi"));
		System.out.println(cities.remove("Delhi"));
		System.out.println(cities.lastIndexOf("delhi"));
		System.out.println(cities.set(0, "Chennai"));
		System.out.println(cities);
		
	}


	private static List<String> createListOfCities() {
		List<String> cities=new LinkedList<>();
		cities.add("Delhi");
		cities.add("Delhi");
		cities.add("Mumbai");
		cities.add("Banaglore");
		return cities;
	}

	private static void defensiveDownCasring(List<String> cities) {
		if(cities instanceof LinkedList<String>) { //defensive coding
		LinkedList<String> LinkedList=((LinkedList)cities); //Down casting 
		LinkedList.addFirst("Chennai");
		}
	}}