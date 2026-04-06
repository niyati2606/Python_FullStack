#include <iostream>
using namespace std;

int main() {

    // ----------- FOR LOOP -----------
    // Used when number of iterations is known
    cout << "For Loop:\n";
    for (int i = 1; i <= 5; i++) {
        cout << i << " ";
    }

    cout << "\n\n";

    // ----------- WHILE LOOP -----------
    // Used when condition is checked first
    cout << "While Loop:\n";
    int j = 1;
    while (j <= 5) {
        cout << j << " ";
        j++;  // increment
    }

    cout << "\n\n";

    // ----------- DO-WHILE LOOP -----------
    // Executes at least once even if condition is false
    cout << "Do-While Loop:\n";
    int k = 1;
    do {
        cout << k << " ";
        k++;  // increment
    } while (k <= 5);

    return 0;
}
