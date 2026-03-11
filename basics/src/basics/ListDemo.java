package basics;
import java.util.ArrayList;
import java.util.List;
public class ListDemo {

	public static void main(String[] args) {
		manageBooks();
		stringSuprise();
	}
	private static void stringSuprise() {
		String s1=new String("Book1");
		String s3=new String("Book2");
		String s2=new String("Book1");
		System.out.println(s1==s2);
	}
private static void manageBooks() {
	List<String> book=new ArrayList<>();
    book.add("Book1");
	book.add("Book2");
	book.add("book3");
	System.out.println(book.size());
	book.remove(0);
	System.out.println(book.size());
	book.forEach((books)->System.out.println(books));	
}
}
