
public class main {

	public static void main(String[] args) throws InterruptedException {
		// TODO Auto-generated method stub
		Thread t1=new ThreadExample();
		t1.start();
		t1.join();
		System.out.println("main");
	}

}
