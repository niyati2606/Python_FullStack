#include <stdio.h>

float calculate_area(float l, float w) {
    return l * w;
}

int main() {
    float length, width;

    /* Prompt + read user input */
    printf("Enter length: ");
    scanf("%f", &length);

    printf("Enter width : ");
    scanf("%f", &width);

    float area = calculate_area(length, width);

    printf("Area = %.2f\n", area);
    return 0;
}
