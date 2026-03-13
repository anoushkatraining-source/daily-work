import java.io.*;
public class checkedExample {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		try {
			readfile();
		} catch (FileNotFoundException e) {
			// TODO: handle exception
		   e.printStackTrace();
		}

	}
	private static void readfile() throws FileNotFoundException{
		System.out.println("file not found");
	}

}
