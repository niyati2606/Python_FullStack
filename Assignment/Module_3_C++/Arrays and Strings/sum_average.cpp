#include <iostream>
using namespace std;

int main() {
    int n;

    cout << "Enter number of elements: ";
    cin >> n;

    int arr[n];
    int sum = 0;

//    cout << "Enter " << n << " elements:" << endl;
    for (int i = 0; i < n; i++) {
    	cout << "Enter element " << i + 1 << ": ";
        cin >> arr[i];
        sum += arr[i];
    }

    float average = (float)sum / n;

    cout << "Sum = " << sum << endl;
    cout << "Average = " << average << endl;

    return 0;
}
