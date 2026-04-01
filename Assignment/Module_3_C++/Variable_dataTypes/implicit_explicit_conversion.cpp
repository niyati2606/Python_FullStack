#include <iostream>
using namespace std;

int main() {
    int a;
    double x;

    // User input
    cout << "Enter an integer value: ";
    cin >> a;

    cout << "Enter a decimal value: ";
    cin >> x;

    // Implicit Conversion
    double b = a;   // int to double

    cout << "\nImplicit Conversion:" << endl;
    cout << "Integer a = " << a << endl;
    cout << "Converted to double b = " << b << endl;

    // Explicit Conversion
    int y = (int)x;   // double to int

    cout << "\nExplicit Conversion:" << endl;
    cout << "Double x = " << x << endl;
    cout << "Converted to integer y = " << y << endl;

    return 0;
}
