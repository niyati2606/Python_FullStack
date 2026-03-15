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

void main()
{
    struct employee e[5];   // Array of structure for 5 employees
    int i;

    // Taking input for 5 employees
    for(i = 0; i < 5; i++)
    {
        printf("\nEnter details of Employee %d\n", i + 1);

        printf("Enter Employee Number: ");
        scanf("%d", &e[i].empno);

        printf("Enter Employee Name: ");
        scanf("%s", e[i].empname);

        printf("Enter Address: ");
        scanf("%s", e[i].address);

        printf("Enter Age: ");
        scanf("%d", &e[i].age);
    }

    // Displaying employee details
    printf("\nEmployee Details:\n");

    for(i = 0; i < 5; i++)
    {
        printf("\nEmployee %d\n", i + 1);
        printf("Employee Number: %d\n", e[i].empno);
        printf("Employee Name: %s\n", e[i].empname);
        printf("Address: %s\n", e[i].address);
        printf("Age: %d\n", e[i].age);
    }

}
