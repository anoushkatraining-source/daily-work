package com.tek.fi;
import java.util.*;
import java.util.stream.*;
public class StreamExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
        stream1();
        streamWithChain();
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
		Stream<Integer> finalstream= numbers.stream().map(number->number*number).filter((number)->{
			System.out.println(number);
			return number%2!=0;
		});
		System.out.println(finalstream.count());
	}

}
