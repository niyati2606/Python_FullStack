#include<stdio.h>
#include<conio.h>

void main(){
	
	int number, originalNum, lastDigit, sum =0;
	
	printf("Enter Number for Summation: ");
	scanf("%d",&number);
	originalNum = number;
	
	while(number != 0){
		
		lastDigit = number % 10;
		sum = sum + lastDigit;
		number = number / 10;
	}
	
	printf("Summation of %d is %d", originalNum, sum);
	
	getch();
}
