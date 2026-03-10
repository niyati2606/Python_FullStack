#include<stdio.h>
#include<conio.h>

void main(){
	
	int num, limit, i;
	
	printf("Enter Number to Print Table :");
	scanf("%d", &num);
	
	printf("Enter Number to set limit of Table :");
	scanf("%d", &limit);
	
	for(i = 1; i <= limit; i++){
		printf("\n%d * %d = %d", num, i, num * i);
	}
}
