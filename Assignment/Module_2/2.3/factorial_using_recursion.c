#include<stdio.h>
#include<conio.h>

int factorial(int num){
	
	if(num == 1 || num == 0){
		return 1;
	}

	return num * factorial(num - 1);
}


void main(){
	
	int num, result;
	
	printf("Enter number : ");
	scanf("%d", &num);
	
	result = factorial(num);
	
	printf("Factorial number of %d is %d", num, result);
}
