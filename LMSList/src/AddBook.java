import java.util.*;
class Books{
	String Title;
	int id;
	double price;
	String author;
	
	Books(String Title,int id,double price,String author){
		this.Title=Title;
		this.price=price;
		this.id=id;
		this.author=author;
	}
	@Override
	 public String toString() {
	        return "Title: " + Title + "ID: "+id+ "Price :"+ price + " Author: " + author;
	    }
	}


  public class AddBook{
	public static void main(String[] args) {
		Scanner sc=new Scanner (System.in);
		// TODO Auto-generated method stub
		List<Books> books=new LinkedList<>();
		System.out.println("Enter the nuber of bbooks");
		int n=sc.nextInt();
		sc.nextLine();
		for(int i=0;i<n;i++){
			System.out.println("Enter details for book:"+(i+1));
			System.out.print("Enter the book title: ");
			String Title=sc.next();
			System.out.println("Enter the book id: ");
			int id=sc.nextInt();
			System.out.println("Enter the book price");
			double price=sc.nextDouble();
			sc.nextLine();
			System.out.println("Enter the book author");
			String author=sc.next();
			books.add(new Books(Title,id,price,author));
		
	}
		for(Books book:books) {
			System.out.println(book);
			
		}
sc.close();
	}
  }

