package com.tek.fi;

@FunctionalInterface
interface Animal1{
	void eat();
}
class Cat1 implements Animal1{
	@Override
	public void eat() {
		System.out.println("animal eat inside class");
	}
}


public class functionalInterfaceTwoWays {
	public static void main(String[] args) {
		oopsWay();
	}


private static void oopsWay() {
	Animal1 animal=new Cat1();
	animal.eat();
}
private static void fucntional() {
	Animal animal=()->{
		System.out.println("animal eat");
	};
	animal.eat();
}
}

