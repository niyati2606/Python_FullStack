#include <iostream>
using namespace std;

// Recursive function to calculate factorial
int factorial(int n) {
    if (n == 0 || n == 1) {
        return 1; // Base case
    }
    else {
        return n * factorial(n - 1); // Recursive call
    }
}

int main() {
    int num;

    cout << "Enter a number: ";
    cin >> num;

    if (num == 0) {
        cout << "Please Enter Valid Number";
    }
    else {
        cout << "Factorial of " << num << " is " << factorial(num);
    }

    return 0;
}
