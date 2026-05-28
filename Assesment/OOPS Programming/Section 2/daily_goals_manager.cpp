#include<iostream>
#include <fstream>
#include <string>
using namespace std;

void writeGoal() {
    ofstream file("goals.txt", ios::app);  // append mode
    if (!file) { 
		cout << "Error opening file!" << endl; 
		return; 
	}

    string goal;
    cout << "Enter today's goal: ";
    cin.ignore();
    getline(cin, goal);
    file << goal << "\n";
    file.close();
    cout << "Goal saved!" << endl;
}

void readGoals() {
    ifstream file("goals.txt");  // read mode
    if (!file) { 
		cout << "No goals found." << endl; 
		return; 
	}

    string line;
    cout << "\n--- Your Daily Goals ---" << endl;
    while (getline(file, line))
        cout << line << endl;
    file.close();
}

int main() {

	int choice;
    cout << "1. Add Goal  2. View Goals\nChoice: ";
    cin >> choice;
    if (choice == 1) {
    	writeGoal();
	}
	else if (choice == 2) {
		readGoals();
	}else {
		cout<<"Invalid Choice..!!";
	}
	return 0;	
}
