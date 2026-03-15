#include <stdio.h>
#include <string.h>

int main()
{
	char str[100], rev[100];
    int i, len;

    printf("Enter a string: ");
    scanf("%s", str);

    len = strlen(str);

    // Reversing the string
    for(i = 0; i < len; i++)
    {
        rev[i] = str[len - 1 - i];
    }
    rev[i] = '\0';

    // Printing reversed string
    printf("Reverse of %s is %s\n", str, rev);

    // Checking palindrome
    if(strcmp(str, rev) == 0)
    {
        printf("%s is Palindrome", str);
    }
    else
    {
        printf("%s is not Palindrome", str);
    }

	getch();
    return 0;
}
