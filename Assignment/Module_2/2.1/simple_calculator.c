#include<stdio.h>
#include<conio.h>

void main(){
	

	int num1,num2,ans;
	
	printf("Enter First Value : ");
	scanf("%d", &num1);
	printf("num1 %d", num1);

	printf("\nEnter Second Value : ");
	scanf("%d", &num2);
	printf("num2 %d", num2);

	//arithmetic operations
	printf("\n------------------------------");
	printf("\nAddition\n");
	ans = num1 + num2;
	printf("Sum of %i and %i = %i",num1,num2,ans);

  	printf("\n------------------------------");
	printf("\nSubtraction\n");
	ans = num1 - num2;
	printf("Subtraction of %i and %i = %i",num1,num2,ans);

	printf("\n------------------------------");
	printf("\nMultiplication\n");
	ans = num1 * num2;
	printf("Multiplication of %i and %i = %i",num1,num2,ans);
	
	printf("\n------------------------------");
	printf("\nDivison\n");
	ans = num1 / num2;
	printf("Divison of %i and %i = %i",num1,num2,ans);

	printf("\n------------------------------");
	printf("\nModule\n");
	ans = num1 % num2;
	printf("Module of %i and %i = %i",num1,num2,ans);
	
	getch();
}
