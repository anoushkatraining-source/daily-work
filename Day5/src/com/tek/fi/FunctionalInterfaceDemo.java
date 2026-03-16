package com.tek.fi;

@FunctionalInterface
interface Animal{
	void eat();
}
class Cat implements Animal{
	@Override
	public void eat() {
		System.out.println("animal eat inside class");
	}
}


public class FunctionalInterfaceDemo {
	public static void main(String[] args) {
		Animal animal=()->{
			System.out.println("animal eat");
		};
		animal.eat();
	}

}
