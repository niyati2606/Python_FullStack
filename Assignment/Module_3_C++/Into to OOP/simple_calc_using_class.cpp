#include <iostream>
using namespace std;

class Calculator {
public:
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
            cout << "Cannot divide by zero!" << endl;
            return 0;
        }
        return (float)a / b;
    }
};

int main() {
    Calculator calc; // object creation
    int x, y;

    cout << "Enter First number: ";
    cin >> x;

	cout << "Enter Second number: ";
    cin >> y;

    cout << "\nAddition = " << calc.add(x, y) << endl;
    cout << "Subtraction = " << calc.subtract(x, y) << endl;
    cout << "Multiplication = " << calc.multiply(x, y) << endl;
    cout << "Division = " << calc.divide(x, y) << endl;

    return 0;
}
