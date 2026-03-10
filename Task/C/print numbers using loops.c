//Lab Excercise 6

/*
	Write a C program to print numbers from 1 to 10 using all three types of loops 
	(while, for, do-while).
*/	

#include<stdio.h>
#include<conio.h>

void main() {
	
	int i;

    //while loop
    printf("While loop:\n");
    i = 1;
    while (i <= 10) {
        printf("%d ", i);
        i++;
    }

    //for loop
    printf("\n\nFor loop:\n");
    for (i = 1; i <= 10; i++) {
        printf("%d ", i);
    }

    //do-while loop
    printf("\n\nDo-while loop:\n");
    i = 1;
    do {
        printf("%d ", i);
        i++;
    } while (i <= 10);

//	getch();
}
