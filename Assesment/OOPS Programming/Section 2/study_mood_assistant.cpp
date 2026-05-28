#include<iostream>
using namespace std;

int main() {
	
	int hours;

    cout << "Enter hours studied today: ";
    cin >> hours;
	
	    if (hours == 0) {
        cout << "You haven't studied yet. Start with just 30 minutes!" << endl;
    } else if (hours >= 1 && hours <= 2) {
        cout << "Good start! Keep the momentum going." << endl;
    } else if (hours >= 3 && hours <= 5) {
        cout << "Great effort! You're building solid habits." << endl;
    } else if (hours >= 6 && hours <= 8) {
        cout << "Outstanding! You're in the zone today!" << endl;
    } else {
        cout << "Incredible! Remember to take breaks too." << endl;
    }
	
	return 0;
}
