import java.util.*;

class RemoveBook {

    // Method to remove a book from the list when borrowed
    public boolean borrowBook(List<Book> books, int bookId) {
        Iterator<Books> iterator = books.iterator();
        while (iterator.hasNext()) {
            Books book = iterator.next();
            if (book.id == bookId) {
                iterator.remove(); // Remove the book from the list
                System.out.println("Book borrowed and removed: " + book);
                return true;
            }
        }
        System.out.println("Book with ID " + bookId + " not found.");
        return false;
    }
}