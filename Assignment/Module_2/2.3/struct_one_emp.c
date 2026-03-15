#include<stdio.h>
#include<conio.h>

// Defining structure
struct employee
{
    int empno;
    char empname[50];
    char address[100];
    int age;
};

void main(){

    struct employee e;   // Structure variable

    // Taking input from user
    printf("Enter Employee Number: ");
    scanf("%d", &e.empno);

    printf("Enter Employee Name: ");
    scanf("%s", e.empname);

    printf("Enter Address: ");
    scanf("%s", e.address);

    printf("Enter Age: ");
    scanf("%d", &e.age);

    // Displaying employee information
    printf("\nEmployee Details\n");
    printf("Employee Number: %d\n", e.empno);
    printf("Employee Name: %s\n", e.empname);
    printf("Address: %s\n", e.address);
    printf("Age: %d\n", e.age);	
	
}
