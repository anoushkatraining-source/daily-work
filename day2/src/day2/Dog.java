package day2;

public class Dog extends Animal implements pet {
	private String breed;
	public void sound() {
		System.out.println("dog makes sound");
	}
	@Override
	public void play() {
		System.out.println(getName()+"Playing with dog");
	}
	
    public void bark() {
    	System.out.println(getName()+"Dog is barking");
    }

	public Dog(String breed) {
		this.breed = breed;
	}
	

}
