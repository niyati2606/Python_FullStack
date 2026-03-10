#include<stdio.h>
#include<conio.h>

int factorial(int n){
	
	int ans = 1, i;
	
	for(i = 1;i<=n;i++){
		ans = ans * i;
	}
	
	return ans;
}

void main(){
	
	int num;
	
	printf("Enter Number:");
	scanf("%d", &num);
	
	//printf("added numbers is %d", num);
	printf("\nFactorial number of %d is %d",num,factorial(num));
	
	getch();
}
