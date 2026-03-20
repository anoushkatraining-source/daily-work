class MyTask implements Runnable{
	public void run() {
		System.out.println("Task running");
	}
}
public class ImplementingRunnable {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Thread t=new Thread(new MyTask());
		t.start();

	}

}
