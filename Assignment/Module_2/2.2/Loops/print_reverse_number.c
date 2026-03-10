#include<stdio.h>
#include<conio.h>

void main(){
	
	int num, original, reverse = 0, remainder;
	
	printf("Enter Number : ");
	scanf("%d",&num);
	
	original = num;
	
	while(num != 0){
		remainder = num % 10;  //last digit
		reverse = reverse * 10 + remainder; // create reverse number
		num = num / 10;
		
	}
	
	printf("\nReverse of %d is %d",original, reverse);
	
	getch();
}
