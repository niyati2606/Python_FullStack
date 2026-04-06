#include <iostream>
using namespace std;

int main() {
    // 1D array
    int arr[5] = {1, 2, 3, 4, 5};

    cout << "1D Array: ";
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }

    // 2D array
    int matrix[2][3] = {
        {1, 2, 3},
        {4, 5, 6}
    };

    cout << "\n2D Array:\n";
    for(int i = 0; i < 2; i++) {
        for(int j = 0; j < 3; j++) {
            cout << matrix[i][j] << " ";
        }
        cout << endl;
    }

    return 0;
}
