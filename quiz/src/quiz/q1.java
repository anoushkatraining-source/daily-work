package quiz;
  class Parent{
	private static void show() {
		System.out.println("Parent");
	}
	
}
 class Child extends Parent{
	 void show() {
		System.out.println("Child");
	}
	
}

public class q1 {
       public static void main(String[] args) {
    	   Parent p=new Child();
    	   p.show();
       }
       
}
