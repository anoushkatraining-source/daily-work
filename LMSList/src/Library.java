
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Consumer;

class Library {

	static List<Book> books = new ArrayList<>();

	void add(String id, String title, float price, String author) {
		if (id == null || id.trim().isEmpty()) {
		    throw new IllegalArgumentException("Book ID cannot be null or empty");
		}
	    Book book = new Book(id, title, price, author);
	    books.add(book);

	    try {
	        FileWriter writer = new FileWriter("books.txt", true);
	        writer.write(id + "," + title + "," + price + "," + author + "\n");
	        writer.close();
	    } catch(IOException e) {
	        e.printStackTrace();
	    }
	   
	}
	
	void reserve(String title) {
		if(title==null) {
			throw new IllegalArgumentException("title cannot be null");
		}
		if(title=="  ") {
			throw new IllegalArgumentException("title cannot have spaces");
		}
		
		
		try {
			for (Book b : books) {
				if (b.title.equals(title) && b.getStatus() == STATUS.AVAILABLE) {
					b.setStatus(STATUS.BOOKED);
					System.out.println("Borrowed: " + title);
					return;
				}
		
				else {
			    BookAvailability(title);
				}
				System.out.println("Book not available");
				}
			} 
		catch (Exception e) {
			e.printStackTrace();
		}
		}
		private static void BookAvailability(String title) {
		for(Book b: books) {
		if(b.title.equals(title) && b.getStatus()!=STATUS.AVAILABLE) {
			throw new BookNotAvailableException("Book is not available");
		}
		}

	}
//lambda function
	void find(String title) {
		List<Book> books = new ArrayList<>();
		Consumer<Book> consumer= name -> {
			if (name.title.toLowerCase().contains(title.toLowerCase())) {
				books.add(name);
			}
			System.out.println(books);
			
		};
		books.forEach(consumer);
		
	}

	Book remove(String id) throws Exception {
		for (Book book : books) {
			if (book.getId().toLowerCase().equals(id.toLowerCase())) {
				books.remove(book);
				return book;
			}
		}
		throw new Exception("No book was availaible for the id: " + id);
	}

	void displayBooks() {
		try {
			readfile();
		}
		catch (IOException e) {
			e.printStackTrace();
		}
	}

	void displayAllBooks() {

		System.out.println("BOOKS AVAILIABLE");
		System.out.println("============================================");
		for (Book b : books)
			System.out.println(b + "\n\n");
		System.out.println("============================================");
	}
	static void readfile()throws IOException {
        BufferedReader reader =new BufferedReader(new FileReader("books.txt"));
		String line;
		while((line=reader.readLine())!=null) {
		System.out.println(line);
		}
		reader.close();

}
}