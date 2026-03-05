//Lab excersice 5
/*
	Write a C program to check if a number is even or odd using an if-else 
	statement. Extend the program using a switch statement to display the month 
	name based on the user’s input (1 for January, 2 for February, etc.). 
*/

#include<stdio.h>
#include<conio.h>

void main(){
	
	int num, month;
	
	printf("Enter Value to check Odd or Even: ");
	scanf("%d", &num);
	
	if(num % 2 == 0){
		printf("\nNumber %d is Even", num);
	}else {
		printf("\nNumber %d is Odd", num);
	}
	
	printf("\n\nEnter Number to Print Month Name: ");
	scanf("%d", &month);
	
	switch(month){
		case 1:
			printf("\nJanuary");
			break;
		case 2:
			printf("\nFebruary");
			break;
		case 3:
			printf("\nMarch");
			break;
		case 4: 
			printf("\nApril");
			break;
		case 5:
			printf("\nMay");
			break;
		case 6:
			printf("\nJune");
			break;
		case 7:
			printf("\nJuly");	
			break;
		case 8:
			printf("\nAugust");	
			break;
		case 9:
			printf("\nSeptember");	
			break;
		case 10:
			printf("\nOctober");	
			break;
		case 11:
			printf("\nNovember");	
			break;
		case 12:
			printf("\nDecember");	
			break;				
		default :
			printf("\nInvalid Month..!!");
	}
	
}
