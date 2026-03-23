import java.util.*;
import java.io.*;
public class SystemLogger {
public static void main(String[] args) throws IOException {
	Map<String,Integer> map=new HashMap<>();
	String filepath="system.log";
	try {
		FileReader fileReader=new FileReader(filepath);
		BufferedReader bufferedReader=new BufferedReader(fileReader);
		String line;
		while((line=bufferedReader.readLine())!=null) {
			String[] part=line.split(";");
			if(part.length>1) {
				String logLevel=part[0].trim();
				map.put(logLevel, map.getOrDefault(logLevel, 0) + 1);  
				bufferedReader.close();
			}
		}
	}catch (FileNotFoundException e) {
		System.out.println("Error: File Not Found");
	}
	System.out.println("Log Level Counts:");
    for (Map.Entry<String, Integer> entry : map.entrySet()) {
        System.out.println(entry.getKey() + ": " + entry.getValue());
    }

}
}
