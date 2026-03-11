package day2;
import java.util.ArrayList;
import java.util.List;
public class PetClinic {
public static void main(String[] args) {
	methodOverriding();
	
}
private static void methodOverriding() {
	pet Pet =new Dog("Husky");
	Animal animal=(Animal)Pet;
	animal.sound();
}

private static void demo1() { 
	Dog dog=new Dog("Husky");
	dog.setName("Happy");
	pet dog1=new Dog("Husky");
	dog.setName("Pluto");
	Cat cat =new Cat();
	dog.bark();
	List<pet> pets=new ArrayList<pet>();
	pets.add(dog);
	pets.add(dog1);
	pets.add(cat);
}
}

