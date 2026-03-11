#include<stdio.h>
#include<conio.h>


void addition(int a, int b) {
    printf("Addition of %d and %d is %d", a, b,a + b);
}

void subtraction(int a, int b) {
    printf("Subtraction of %d and %d is %d", a, b, a - b);
}

void multiplication(int a, int b) {
    printf("Multiplication of %d and %d is %d", a, b, a * b);
}

void division(int a, int b) {
    if(b != 0)
        printf("Division of %d and %d is %d", a, b, a / b);
    else
        printf("Division by zero not allowed");
}

void main(){
	
	int num1, num2, ch;
	
	printf("Enter Number 1 : ");
	scanf("%d",&num1);
	
	printf("Enter Number 2 : ");
	scanf("%d",&num2);
	
	printf("\n--------Menu--------\n");
	printf("1. Addition\n");
	printf("2. Subtraction\n");
	printf("3. Multiplication\n");
	printf("4. Divison\n");
	printf("-------------------\n");
	
	printf("\nEnter your choice :");
	scanf("%d",&ch);
	
	switch(ch){
		
		 case 1:
            addition(num1, num2);
            break;

        case 2:
            subtraction(num1, num2);
            break;

        case 3:
            multiplication(num1, num2);
            break;

        case 4:
            division(num1, num2);
            break;

        default:
            printf("Invalid Choice");
            
	}
	
	getch();
}
