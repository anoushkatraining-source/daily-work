package day3;

import java.util.*;

public class practice {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		List<Integer> common=new ArrayList<>();
     List<Integer> list1=Arrays.asList(1,2,3,4);
     List<Integer> list2=Arrays.asList(3,4,5,6);
     for(int i=0;i<list1.size();i++) {
    	 for(int j=0;j<list2.size();j++) {
    		 if(list1.get(i)==list2.get(j)) {
    			 common.add(list1.get(i));
    		 }
    	 }
     }
     System.out.println(common);
     
	}

}
