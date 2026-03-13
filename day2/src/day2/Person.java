package day2;

public class Person {
private String name;
private Adress address;
private Phone phone;
private int age;
pet Pet;
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}

public void adoptPet(pet Pet) {
	System.out.println("adopted a pet");
}
}
