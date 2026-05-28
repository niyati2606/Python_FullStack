#include<iostream>
using namespace std;

int main() {

	double screenTime[7];
    string days[] = {"Mon","Tue","Wed","Thu","Fri","Sat","Sun"};
    double total = 0;

    for (int i = 0; i < 7; i++) {
        cout << "Screen time for " << days[i] << " (hrs): ";
        cin >> screenTime[i];
        total += screenTime[i];
    }

    double average = total / 7.0;

    cout << "\n--- Weekly Report ---" << endl;
    cout << "Total   : " << total   << " hrs" << endl;
    cout << "Average : " << average << " hrs/day" << endl;

    if (average > 3.0)
        cout << "WARNING: Average exceeds 3 hrs/day. Reduce screen time!" << endl;
    else
        cout << "Good job! Screen time is within healthy limits." << endl;

	return 9;	
}
