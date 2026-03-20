
public class SleepExample extends Thread {
	    @Override
		public void run() {
			try {
				sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();			
				}
			System.out.println("worker thread is running");
	    }
}
