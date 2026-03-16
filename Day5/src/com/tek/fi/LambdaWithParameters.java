package com.tek.fi;
interface Add{
	int sum(int a,int b);
}
public class LambdaWithParameters {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Add sum=(int a,int b)->a+b;
		System.out.println(sum.sum(3,4));

	}

}
