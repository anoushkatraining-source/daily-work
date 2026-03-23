import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.io.ByteArrayOutputStream;
import java.io.PrintStream;
import java.util.ArrayList;
import java.io.PrintStream;

class ReserveTest {

    Library library;

    @BeforeEach
    void setup() {
        library = new Library();
        Library.books = new ArrayList<>();
    }

    @Test
    void testReserveBooksWithoutId() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.add(null,"Java",100.0f,"anoushka");
        });
    }

    @Test
    void testReserveBooksWithBlankTitle() {
        assertThrows(IllegalArgumentException.class,() -> library.reserve("   "));
    }

    @Test
    void testReserveAvailableBook() {
        library.add("1","java",500.0f,"aditi");

        library.reserve("java");

        Book b = Library.books.get(0);
        assertEquals(STATUS.BOOKED, b.getStatus());
    }

    @Test
    void testReserveBookNotFound() {
        library.add("1", "Java", 400.0f, "o");

        assertDoesNotThrow(() -> library.reserve("Python"));

        Book b = Library.books.get(0);
        assertEquals(STATUS.AVAILABLE, b.getStatus());
    }

    @Test
    void testReserveAlreadyBooked() {
        library.add("1", "Java", 100.0f, "A");

        library.reserve("Java");

        assertThrows(BookNotAvailableException.class, () -> {
            library.reserve("Java");
        });
    }

    @Test
    void testRemoveSuccess() throws Exception {
        library.add("1", "Java", 100, "A");

        Book removed = library.remove("1");

        assertNotNull(removed);
        assertEquals("1", removed.getId());
        assertEquals(0, Library.books.size());
    }

    @Test
    void testRemoveIdNotFound() {
        library.add("1", "Java", 100, "A");

        assertThrows(Exception.class, () -> {
            library.remove("2");
        });
    }

    @Test
    void testRemoveBlankId() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.remove("   ");
        });
    }

    @Test
    void testFindBooks() {
        library.add("1","Java",100,"anoushka");
        library.add("2","Python",200,"aditi");

        assertDoesNotThrow(() -> library.find("Java"));
    }

    @Test
    void testAddWritesToMemory() {
        library.add("1","java",100,"anoushka");
        assertEquals(1, Library.books.size());
    }

    @Test
    void testDisplayBooks() {

        ByteArrayOutputStream outputStreamCaptor = new ByteArrayOutputStream();
        PrintStream standardOut = System.out;

        System.setOut(new PrintStream(outputStreamCaptor));

        Book book = new Book("1234","Learn Java",1234.0f,"John Doe");
        library.add("1234","Learn Java",1234.0f,"John Doe");

        library.displayBooks();

        assertTrue(outputStreamCaptor.toString().trim().contains(book.toString()));

        System.setOut(standardOut);
    }
    @Test
    void testAddBlankAuthor() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.add("2", "Java", 100, "   ");
        });
    }
    @Test
    void testAddNegativePrice() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.add("3", "Java", -50, "A");
        });
    }
    @Test
    void testReserveNullTitle() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.reserve(null);
        });
    }
    @Test
    void testRemoveNullId() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.remove(null);
        });
    }
    @Test
    void testReserveCaseInsensitive() {
        library.add("1", "Java", 100, "A");

        library.reserve("java"); 

        assertEquals(STATUS.BOOKED, Library.books.get(0).getStatus());
    }
    @Test
    void testDisplayBooksEmpty() {
        ByteArrayOutputStream output = new ByteArrayOutputStream();
        System.setOut(new PrintStream(output));

        library.displayBooks();

        assertTrue(output.toString().isEmpty());

        System.setOut(System.out);
    }

    @Test
    void testFindNullTitle() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.find(null);
            });
    }
    @Test
    void testFindBlankTitle() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.find("   ");
        });
    }
    @Test
    void testAddMultipleBooks() {
        library.add("1","Java",100,"anoushka");
        library.add("2","Python",200,"aditi");
        library.add("3", "C++", 300,"abcd");
        assertEquals(3, Library.books.size());
    }
}