#include <stdio.h>
#include<conio.h>

// Structure declaration
struct employee
{
    int empno;
    char name[20];
    int age;
};

// Union declaration
union employee1
{
    int empno;
    char name[20];
    int age;
};

void main()
{
	
	struct employee s;
    union employee1 u;
    
    // Input for Structure
    printf("Enter Employee Number: ");
    scanf("%d", &s.empno);

    printf("Enter Employee Name: ");
    scanf("%s", s.name);

    printf("Enter Age: ");
    scanf("%d", &s.age);

    // Assigning values to Union
    printf("\nEnter Name for Union: ");
    scanf("%s", u.name);

    // Display Structure values
    printf("\nStructure Details:\n");
    printf("Employee No: %d\n", s.empno);
    printf("Name: %s\n", s.name);
    printf("Age: %d\n", s.age);

    // Display Union value
    printf("\nUnion Name: %s\n", u.name);

    // Showing memory difference
    printf("\nSize of Structure = %lu", sizeof(s));
    printf("\nSize of Union = %lu", sizeof(u));
    getch();
}
