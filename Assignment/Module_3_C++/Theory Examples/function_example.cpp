#include <iostream>
using namespace std;

// Definition — actual implementation
int add(int x, int y) {
    return x + y;
}

// Declaration (prototype) — tells compiler add() exists
int add(int, int);

int main() {
    int a = 10, b = 20;

    // Function Call — executes the function
    int sum = add(a, b);

    cout << "Sum = " << sum << endl;   // Output: Sum = 30
    return 0;
}

