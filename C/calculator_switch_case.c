#include<stdio.h>
#include<conio.h>

void main() {
	
	int num1, num2, result;
	char operator;
	
	printf("Calculator Using Switch Case\n\n");
	
	printf("Enter First Value : ");
	scanf("%d", &num1);
	printf("num1 %d", num1);

	printf("\nEnter Second Value : ");
	scanf("%d", &num2);
	printf("num2 %d", num2);

	printf("Enter any operator (+, -, *, /): ");
    scanf(" %c", &operator);
    printf("%c",operator);
    
    switch(operator) {
    	
    	case '+':
            result = num1 + num2;
            printf("%i + %i = %i\n", num1, num2, result);
            break;
        case '-':
            result = num1 - num2;
            printf("%i - %i = %i\n", num1, num2, result);
            break;
        case '*':
            result = num1 * num2;
            printf("%i * %i = %i\n", num1, num2, result);
            break;
        case '/':
            if (num2 != 0) {
                result = num1 / num2;
                printf("%i / %i = %i\n", num1, num2, result);
            } else {
                printf("Error: Division by zero is not allowed.\n");
            }
            break;
        default:
            printf("Error: Invalid operator entered.\n");
    } 
    
//	ans = num1 + num2;
//    printf("\nAnswers is %i",ans);
//	
	getch();
}
