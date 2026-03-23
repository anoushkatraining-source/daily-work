import static org.junit.jupiter.api.Assertions.*;

import java.util.ArrayList;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BookRemove {

    Library library;

    @BeforeEach
    void setup() {
        library = new Library();
        Library.books = new ArrayList<>();
    }

    @Test
    void testBookidNotPresent() {
        assertThrows(Exception.class, () -> library.remove("1"));
    }
}