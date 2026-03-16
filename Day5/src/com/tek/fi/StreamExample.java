package com.tek.fi;
import java.util.*;
import java.util.stream.*;
public class StreamExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        stream1();
        System.out.println("-------------");
        streamWithChain();
        System.out.println("-------------");
        //streamOddSquared();
        comparatorWithAnonymousInnerClass();
	}
	private static void stream1() {
		List<Integer> numbers=Arrays.asList(1,2,3,4,5);
		Stream<Integer> stream= numbers.stream();
		Stream<Integer> squaredStream=stream.map(number->number*number);
		Stream filteredStream=squaredStream.filter((number)->{
			System.out.println(number);
			return number%2!=0;
		});
		System.out.println(filteredStream.count());
	}
	private static void streamWithChain() {
		List<Integer> numbers=Arrays.asList(1,2,3,4,5);
		Stream<Integer> finalstream= numbers.stream().parallel().map(number->number*number).filter((number)->{
			System.out.println(number);
			return number%2!=0;
		});
		List finalList=finalstream.collect(Collectors.toList());
		finalList.forEach(x->System.out.println(x));
		finalList.forEach(System.out::println);
	}
	
	
	/*
	 * private static void streamOddSquared() { List<Integer>
	 * numbers=Arrays.asList(1,2,3,4,5); Stream<Integer>
	 * stream=numbers.stream().map(number->{ return (number %2==1)?
	 * number*number:number; }).filter((number)->{System.out.println(number); return
	 * number%2!=0 ;}); System.out.println(stream.count()); }
	 */
	private static void comparatorWithAnonymousInnerClass() {
		List<String> names=Arrays.asList("java","python","GO");
		names.sort(new Comparator<String>() {
			public int compare(String o1,String o2) {
				return o1.length()-o2.length();
			}
		});
		System.out.println(names);
		
	}
}
