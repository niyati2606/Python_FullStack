#include<stdio.h>
#include<conio.h>

void main(){

	int num, orignalNum, lastDigit, max = 0;
	
	printf("Enter Number to find Max Number : ");
	scanf("%d", &num);
	orignalNum = num;
	
	while(num != 0){
		
		lastDigit = num % 10;
		if(lastDigit > max){
			max = lastDigit;
		}
		
		num = num /10;
	}
	
	printf("Max number in %d is %d.",orignalNum,max);

	getch();
}
