import java.util.*;
import java.io.*;

public class systemLogger {
	public static void main(String[] args) throws IOException {
		Map<String, Integer> map = new HashMap<>();
		String path = "system.log";
		try {
			FileReader fileReader = new FileReader(path);
			BufferedReader bufferedReader = new BufferedReader(fileReader);
			String line;
			while ((line = bufferedReader.readLine()) != null) {
				String[] block = line.split(":");
				if (block.length > 1) {
					String log = block[0].trim();
					map.put(log, map.getOrDefault(log, 0) + 1);
				}
			}
			bufferedReader.close();
		} catch (FileNotFoundException e) {
			System.out.println("Error:File Not Found");
		}

		System.out.println("Log Level Counts:");
		for (Map.Entry<String, Integer> entry : map.entrySet()) {
			System.out.println(entry.getKey() + ":" + entry.getValue());
		}

	}
}
