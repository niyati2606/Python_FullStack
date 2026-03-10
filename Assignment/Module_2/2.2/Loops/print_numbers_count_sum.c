#include<stdio.h>
#include<conio.h>

void main() {
	
	int num[10];
	int i;
	int evencount = 0, oddcount = 0;
	int evenTotalSum = 0;
	int oddTotalSum = 0;
	
	for(i = 0; i<10; i++){
		printf("Enter number %d: ", i+1);
        scanf("%d", &num[i]);
	}
	
	for(i = 0; i<10;i++){
		if(num[i] % 2 == 0){
			//printf("\neven");
			evencount++;
			evenTotalSum += num[i];
		}else{
			//printf("\nodd");
			oddcount++;
			oddTotalSum += num[i];
		}
	}
	
	printf("\nTotal Even Numbers is %d", evencount);
	printf("\nTotal Odd Numbers is %d", oddcount);
	printf("\nTotal Odd Numbers Sum is %d", oddTotalSum);
	printf("\nTotal Even Numbers is %d", evenTotalSum);
}
