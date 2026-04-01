#include <iostream>
using namespace std;

int main() {
    // Variables of different data types
    int a = 10;
    float b = 5.5;
    char c = 'A';
    string name = "Niyati";
    bool isStudent = true;

    // Constant
    const float PI = 3.1416;

    // Operations
    int sum = a + 5;
    float product = b * 2;
    int area = PI * a * a;  // using constant

    // Output
    cout << "Different Data Types" << endl;
    cout << "Integer value : " << a << endl;
    cout << "Float value : " << b << endl;
    cout << "Character : " << c << endl;
    cout << "String : " << name << endl;
    cout << "Boolean : " << isStudent << endl;

    cout << "\nOperations:";
    cout << "\nSum (a + 5): " << sum;
    cout << "\nProduct (b * 2): " << product;
    cout << "\nArea using constant PI: " << area;

    return 0;
}
