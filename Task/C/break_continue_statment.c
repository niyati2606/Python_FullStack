//Lab Excercise 7	
/*
	Write a C program that uses the break statement to stop printing numbers 
	when it reaches 5. Modify the program to skip printing the number 3 using the 
	continue statement. 
*/

#include<stdio.h>
#include<conio.h>

void main() {
	
    int i;

    // Using break statement
    printf("Using break statement:\n");
    for(i = 1; i <= 10; i++) {
        if(i == 5) {
            break;   // stops the loop when i becomes 5
        }
        printf("%d ", i);
    }

    // Using continue statement
    printf("\n\nUsing continue statement:\n");
    for(i = 1; i <= 10; i++) {
        if(i == 3) {
            continue;   // skips printing 3
        }
        printf("%d ", i);
    }

	getch();
}
