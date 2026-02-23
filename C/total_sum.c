#include<stdio.h>
#include<conio.h>

int totalSum(int n){
	
	int sum = 0, i;
	
	for(i = 1;i<=n;i++){
		sum = sum + i;
	}
	
	return sum;
}

void main(){
	
	int num;
	
	printf("Enter Number :");
	scanf("%d", &num);
	
	//printf("added numbers is %d", num);
	printf("\nTotal Sum of %d is %d",num,totalSum(num));
	
	getch();
}
