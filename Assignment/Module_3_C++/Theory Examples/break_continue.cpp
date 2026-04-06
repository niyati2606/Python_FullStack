#include <iostream>
using namespace std;

int main() {
	 
	cout << "------- Break Statement -------\n"; 
	for (int i = 1; i <= 10; i++) {
        if (i == 5)
            break;  // loop stops when i = 5
        cout << i << " ";
    }
    
    cout << "\n\n------- Continue Statement -------\n";
     for (int i = 1; i <= 5; i++) {
        if (i == 3)
            continue;  // skip when i = 3
        cout << i << " ";
    }
    return 0;
}
