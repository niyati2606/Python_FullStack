#include<stdio.h>
#include<conio.h>

void main(){
	
	int num, firstDigit, lastDigit;
	
	printf("Enter Any Number for Summation of First and Last Digit : ");
	scanf("%d", &num);
	
	lastDigit = num % 10;
	
	while(num >= 10){
		num = num / 10;
	}
	
	firstDigit = num;
	
	printf("\nSummation of First and Last Digit is %d", firstDigit + lastDigit);
	
	getch();
}
