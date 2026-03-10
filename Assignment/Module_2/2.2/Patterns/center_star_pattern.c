#include<stdio.h>
#include<conio.h>

void main(){
	
	int i, j, k;
    int rows = 5;

    for(i = 1; i <= rows; i++) {
        // print leading spaces
        for(j = 1; j <= rows - i; j++) {
            printf("  "); // two spaces for alignment
        }

        // print stars with space
        for(k = 1; k <= (2 * i - 1); k++) {
            printf("* ");
        }

        printf("\n");
    }

}
