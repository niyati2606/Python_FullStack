#include<stdio.h>
#include<conio.h>

void main(){
	
	int day;
	
	printf("Enter Number to Print Day: ");
	scanf("%d", &day);
	
	switch(day){
		case 1:
			printf("\nMonday");
			break;
		case 2:
			printf("\nTuesday");
			break;
		case 3:
			printf("\nWednesday");
			break;
		case 4: 
			printf("\nThursday");
			break;
		case 5:
			printf("\nFriday");
			break;
		case 6:
			printf("\nSaturday");
			break;
		case 7:
			printf("\nSunday");	
			break;
		default :
			printf("\nInvalid Day..!!");
	}
	
}
