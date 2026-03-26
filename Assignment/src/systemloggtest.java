import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class systemloggtest {

	@Test
	public void testFileNotFound() {
		assertDoesNotThrow(() -> new SystemLogger().main(new String[] {}));
	}

}
