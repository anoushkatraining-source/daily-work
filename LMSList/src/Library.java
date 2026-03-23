import java.io.*;
import java.util.*;
import java.util.function.Consumer;

class Library {

	static List<Book> books = new ArrayList<>();

	void add(String id, String title, float price, String author) {

		if (id == null || id.trim().isEmpty()) {
			throw new IllegalArgumentException("Book ID cannot be null or empty");
		}

		if (title == null || title.trim().isEmpty()) {
			throw new IllegalArgumentException("Title cannot be empty");
		}

		if (author == null || author.trim().isEmpty()) {
			throw new IllegalArgumentException("Author cannot be empty");
		}

		if (price < 0) {
			throw new IllegalArgumentException("Price cannot be negative");
		}

		Book book = new Book(id, title, price, author);
		books.add(book);

		try (FileWriter writer = new FileWriter("books.txt", true)) {
			writer.write(id + "," + title + "," + price + "," + author + "\n");
		} catch (IOException e) {
			e.printStackTrace();
		}
	}

	void reserve(String title) {
		if (title == null || title.trim().isEmpty()) {
			throw new IllegalArgumentException("Invalid title name");
		}

		for (Book b : books) {
			if (b.getTitle().equalsIgnoreCase(title)) {

				if (b.getStatus() == STATUS.AVAILABLE) {
					b.setStatus(STATUS.BOOKED);
					System.out.println("Borrowed: " + title);
					return;
				} else {
					throw new BookNotAvailableException("Book is not available");
				}
			}
		}

		System.out.println("Book not available");
	}

	void find(String title) {
		if (title == null || title.trim().isEmpty()) {
			throw new IllegalArgumentException("Invalid title");
		}

		List<Book> result = new ArrayList<>();

		Consumer<Book> consumer = b -> {
			if (b.getTitle().toLowerCase().contains(title.toLowerCase())) {
				result.add(b);
			}
		};

		books.forEach(consumer);
		System.out.println(result);
	}

	Book remove(String id) throws Exception {
		if (id == null || id.trim().isEmpty()) {
			throw new IllegalArgumentException("Invalid ID");
		}

		Iterator<Book> iterator = books.iterator();

		while (iterator.hasNext()) {
			Book book = iterator.next();
			if (book.getId().equalsIgnoreCase(id)) {
				iterator.remove();
				return book;
			}
		}

		throw new Exception("No book available for id: " + id);
	}

	void displayBooks() {
		for (Book b : books) {
			System.out.println(b);
		}
	}

	void displayAllBooks() {
		System.out.println("BOOKS AVAILABLE");
		System.out.println("============================================");

		for (Book b : books) {
			System.out.println(b + "\n");
		}

		System.out.println("============================================");
	}
}