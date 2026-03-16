package com.tek.fi;
import java.util.function.Predicate;
public class PredicateExample {

	public static void main(String[] args) {
		// TODO Auto-generated method 
		 Predicate<Integer> isEven=n->n%2==0;
/*      Predicate<Integer> isEven=n->n%2==0; //return is implicit*/      
/*
 * Predicate<Integer> isEven=n->{ return n%2==0; };
 */
		System.out.println(isEven.test(10));

	}

}
