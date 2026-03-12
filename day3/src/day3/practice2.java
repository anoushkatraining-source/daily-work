package day3;

import java.util.*;

public class practice2 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> list=Arrays.asList(1,2,2,3,2,4);
		int target=2;
		int freq=0;
		for(int i=0;i<list.size();i++) {
			if(list.get(i)==2) {
				freq+=1;
			}
		}
		System.out.println(freq);

	}

}
