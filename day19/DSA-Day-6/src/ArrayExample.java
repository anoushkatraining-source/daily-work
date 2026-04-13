import java.awt.print.Book;
import java.util.*;
public class ArrayExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		int[] arr= {5,9,2,7,1};
		int start=0;
		int end=arr.length-1;
		while(start<end) {
			if(start<end) {
				swap(arr,start,end);
				start++;
				end--;
			}
		}
		for(int i=0;i<arr.length;i++) {
			System.out.println(arr[i]);
		}
	}

	private static void swap(int arr[],int start, int end) {
		// TODO Auto-generated method stub
		arr[start]=arr[start]+arr[end];
		arr[end]=arr[start]-arr[end];
		arr[start]=arr[start]-arr[end];
		
		
	}

}
