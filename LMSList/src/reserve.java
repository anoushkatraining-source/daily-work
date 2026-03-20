import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import java.util.ArrayList;

class reserve {

    Library library;

    @BeforeEach
    void setup() {
        library = new Library();
        Library.books = new ArrayList<>();
    }

    @Test
    void testReserveBooksWithoutId() {
        assertThrows(IllegalArgumentException.class, () -> {
            library.add(null, "Java",100.0f, "anoushka");
        });
    }

    @Test
    void testReserveBooksWithBlankTitle() {
        assertThrows(IllegalArgumentException.class,
                () -> library.reserve(null));
    }

    @Test
    void testReserveWhenBookTitleContainsOnlySpaces() {
        assertThrows(IllegalArgumentException.class,
                () -> library.reserve("   "));
    }

    @Test
    void testReserveAvailableBook() {
        library.add("1", "Java", 500.0f, "aditi");

        library.reserve("Java");

        Book b = Library.books.get(0);
        assertEquals(STATUS.BOOKED, b.getStatus());
    }

    @Test
    void testReserveAlreadyBookedBook() {
        library.add("1", "Java", 100.0f, "anoushka");

        Library.books.get(0).setStatus(STATUS.BOOKED);

        assertThrows(BookNotAvailableException.class, () -> {
            library.reserve("Java");
        });
    }

    @Test
    void testReserveBookNotFound() {
        library.add("1", "java", 400.0f, "o");

        assertDoesNotThrow(() -> library.reserve("Java"));

        Book b = Library.books.get(0);
        assertEquals(STATUS.AVAILABLE, b.getStatus());
    }
}