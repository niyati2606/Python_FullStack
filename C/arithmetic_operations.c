#include <stdio.h>
#include <conio.h>

void main() {
	
	//data types : int, float, char
	//syntax : datatype name = value
	
	int a = 5;
	int b = 15;

	float aF = 25000.7558;
	float bF = 22000.78;
		
	int ans;
	float ansF;
	
	printf("\n------------------------------");
	printf("\nInt Values");
	printf("\n------------------------------");
	printf("\nAddition\n");
	ans = a + b;
	printf("Sum of %i and %i = %i",a,b,ans);

  	printf("\n------------------------------");
	printf("\nSubtraction\n");
	ans = a - b;
	printf("Subtraction of %i and %i = %i",a,b,ans);

	printf("\n------------------------------");
	printf("\nMultiplication\n");
	ans = a * b;
	printf("Multiplication of %i and %i = %i",a,b,ans);
	
	printf("\n------------------------------");
	printf("\nDivison\n");
	ans = a / b;
	printf("Divison of %i and %i = %i",a,b,ans);

	printf("\n\n------------------------------");
	printf("\nFloat Values");
	printf("\n------------------------------");
	printf("\nAddition\n");
	ansF = aF + bF;
	printf("Sum of %.2f and %.2f = %.2f",aF,bF,ansF);

  	printf("\n------------------------------");
	printf("\nSubtraction\n");
	ansF = aF - bF;
	printf("Subtraction of %.2f and %.2f = %.2f",aF,bF,ansF);

	printf("\n------------------------------");
	printf("\nMultiplication\n");
	ansF = aF * bF;
	printf("Multiplication of %.2f and %.2f = %.2f",aF,bF,ansF);
	
	printf("\n------------------------------");
	printf("\nDivison\n");
	ansF = aF / bF;
	printf("Divison of %.2f and %.2f = %.2f",aF,bF,ansF);	
	
}
