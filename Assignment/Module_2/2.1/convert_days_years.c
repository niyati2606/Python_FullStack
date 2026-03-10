#include<stdio.h>
#include<conio.h>

void main(){
	
	int years, days;

    // Convert years to days
    printf("Enter number of years: ");
    scanf("%d", &years);
    days = years * 365;
    printf("Days = %d\n", days);

    // Convert days to years
    printf("Enter number of days: ");
    scanf("%d", &days);
    years = days / 365;
    printf("Years = %d\n", years);
 
 	getch();   
}
