#include<stdio.h>
#include<conio.h>

void main(){
	
	int i, j;
    int rows = 6; // maximum stars in the middle row

    // Ascending part
    for(i = 1; i <= rows; i++) {
        for(j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }

    // Descending part
    for(i = rows - 1; i >= 1; i--) {
        for(j = 1; j <= i; j++) {
            printf("* ");
        }
        printf("\n");
    }
	
}
