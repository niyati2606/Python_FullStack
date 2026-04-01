#include <iostream>
using namespace std;

// Global variable
int x = 10;

void show() {
    int x = 20; // Local variable
    cout << "Local x = " << x << endl;
    cout << "Global x = " << ::x << endl;
}

int main() {
    cout << "Global x in main = " << x << endl;

    show();

    return 0;
}
