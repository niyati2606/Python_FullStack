#include <iostream>
using namespace std;

int main() {
    int matrix[2][3] = {
        {1, 2, 3},   // row 0
        {4, 5, 6}    // row 1
    };

    for (int i = 0; i < 2; i++) {           // rows
        for (int j = 0; j < 3; j++) {       // columns
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }
    return 0;
}
