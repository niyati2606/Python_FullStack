#include<stdio.h>
#include<conio.h>

void printFibonacciSeries(int n){
	
	//first two terms of series
	
	int i, n3;
	int n1 = 0;
	int n2 = 1;
	
	printf("Fibonacci Series of %i\n\n",n);
	
	//for loop for print fibonacci series
	
	if(n == 0){
		printf("Please add Valid Value");
	}else{
		for(i=1;i<=n;i++){
		printf("%d, ",n1);
		n3 = n1 + n2;
		n1 = n2;
		n2 = n3;
		}	
	}
	
}

void main(){
	
	int number = 0;
	
	printf("Enter any Number to print series : ");
	scanf("%d",&number);
	
	printFibonacciSeries(number);
	
//	printf("Fibonaci Series : %i",number);
//	getch();
}
