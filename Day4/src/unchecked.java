import java.io.*;
public class unchecked {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		//String str=null;
		//System.out.println(str.length());
		try {
			validateAge(17);
		} catch (InvalidAgeException e) {
			e.printStackTrace();
			
		}
		System.out.println("finished");
	}

	private static void validateAge(int age) {
		if(age<18) {
			throw new InvalidAgeException("age must be 18+");
		}
		
		
	}

}
