#include<stdio.h>
#include<conio.h>

void main() {
	
float r, l, w, b, h;

    printf("Enter radius of circle: ");
    scanf("%f", &r);

    printf("Enter length of rectangle: ");
    scanf("%f", &l);

	printf("Enter width of rectangle: ");
    scanf("%f", &w);

    printf("Enter base of triangle: ");
    scanf("%f", &b);

	printf("Enter height of triangle: ");
    scanf("%f", &h);

    printf("\nArea of Circle = %.2f\n", 3.14 * r * r);
    printf("Area of Rectangle = %.2f\n", l * w);
    printf("Area of Triangle = %.2f\n", 0.5 * b * h);
	
	getch();
	
}
