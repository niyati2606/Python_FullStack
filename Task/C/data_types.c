//Lab excersice 3
/*
	Write a C program that includes variables, constants, and comments. Declare
	and use different data types (int, char, float) and display their values. 
*/

#include<stdio.h>
#include<conio.h>

void main(){
	
	//constant value : this value reamins the same
	const int Max_Marks = 100;
	int ID = 1;
	float percentage = 80.56;
	char grade = 'A';
	
	printf("Data Types\n");
	printf("Constant Value (Max_Marks) : %d\n", Max_Marks);
	printf("Integer Value (ID) : %i\n", ID);
	printf("Float Value (Percentage) : %.2f%\n", percentage);
	printf("Char Value (grade) : %c\n",grade);
	
	getch();
}
