#include<stdio.h>
#include<conio.h>
#include<string.h>

void main() {
	
char str[100];
    int i = 0, length = 0;

    // Taking string input from user
    printf("Enter a string: ");
    scanf("%s", str);

    // Counting length of string
    while (str[i] != '\0')
    {
        length++;
        i++;
    }

    // Printing result in required format
    printf("Length of %s is %d", str, length);
	getch();
	
}
