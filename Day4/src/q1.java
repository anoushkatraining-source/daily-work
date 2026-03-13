import java.util.*;
public class q1 {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
try {
	int res=10/0;
	System.out.println(res);
}
catch(ArithmeticException e) {
	System.out.println("division by zero!!!");
}
finally {
	System.out.println("program finished!!");
}

	}

}
