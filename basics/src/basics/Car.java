package basics;

import java.util.Date;
import java.util.List;

public class Car {
	private String model; //enum
	private String color;
	private float price;
	private Engine engine;  //Has-A
	private String fuleType;
	String number;
	boolean insured;
	String transmission;
	int seats;
	float weight;
	String design;  //Coupe, sedan, XUV
	float mileage;
	String brand;
	boolean ev;
	Date manfacturingDate;
	List<Wheel> wheels;
}