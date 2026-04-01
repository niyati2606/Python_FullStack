#include <iostream>
using namespace std;

// Function definitions
int add(int a, int b) {
    return a + b;
}

int subtract(int a, int b) {
    return a - b;
}

int multiply(int a, int b) {
    return a * b;
}

float divide(int a, int b) {
    if (b == 0) {
        cout << "Error: Division by zero!" << endl;
        return 0;
    }
    return (float)a / b;
}

int main() {
    int num1, num2, choice;

    cout << "Enter First number: ";
    cin >> num1;

	cout << "Enter Second number: ";
    cin >> num2;


    cout << "\nChoose operation:\n";
    cout << "1. Addition\n2. Subtraction\n3. Multiplication\n4. Division\n";
    cout << "Enter your choice: ";
    cin >> choice;

    switch (choice) {
        case 1:
            cout << "Result: " << add(num1, num2);
            break;
        case 2:
            cout << "Result: " << subtract(num1, num2);
            break;
        case 3:
            cout << "Result: " << multiply(num1, num2);
            break;
        case 4:
            cout << "Result: " << divide(num1, num2);
            break;
        default:
            cout << "Invalid choice!";
    }

    return 0;
}
