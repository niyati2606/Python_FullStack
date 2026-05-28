#include <iostream>
using namespace std;

// Function to swap numbers using pointers
void swapNumbers(int *a, int *b)
{
    int temp;

    temp = *a;
    *a = *b;
    *b = temp;
}

int main()
{
    int num1, num2;

    // Input from user
    cout << "Enter first number: ";
    cin >> num1;

    cout << "Enter second number: ";
    cin >> num2;

    // Before swapping
    cout << "\nBefore swapping:" << endl;
    cout << "num1 = " << num1 << endl;
    cout << "num2 = " << num2 << endl;

    // Function call using addresses
    swapNumbers(&num1, &num2);

    // After swapping
    cout << "\nAfter swapping:" << endl;
    cout << "num1 = " << num1 << endl;
    cout << "num2 = " << num2 << endl;

    return 0;
}
