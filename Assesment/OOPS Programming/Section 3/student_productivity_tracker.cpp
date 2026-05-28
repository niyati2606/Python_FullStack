#include<iostream>
#include <fstream>
#include <string>
using namespace std;

const string FILE_NAME = "study_log.txt";

//Log daily study hours
void logStudyHours() {
    ofstream file(FILE_NAME.c_str(), ios::app);
    if (!file) {
        cout << "Error: Cannot open file." << endl;
        return;
    }
    string day;
    double hours;
    cout << "Enter day name  : ";
    cin  >> day;
    cout << "Enter hours studied: ";
    cin  >> hours;

    file << day << " " << hours << "\n";
    file.close();
    cout << "Logged successfully!" << endl;
}

//Generate weekly report
void generateReport() {
    ifstream file(FILE_NAME.c_str());
    if (!file) {
        cout << "No data found. Log study hours first." << endl;
        return;
    }

    string day, bestDay = "", worstDay = "";
    double hours, total = 0, maxH = -1, minH = 9999;
    int count = 0;

    cout << "\n==============================" << endl;
    cout << "     WEEKLY STUDY REPORT      " << endl;
    cout << "==============================" << endl;

    while (file >> day >> hours) {
        cout << day << " : " << hours << " hrs" << endl;
        total += hours;
        count++;
        if (hours > maxH) { maxH = hours; bestDay  = day; }
        if (hours < minH) { minH = hours; worstDay = day; }
    }
    file.close();

    if (count == 0) { cout << "No records found." << endl; return; }

    double avg = total / count;

    cout << "------------------------------" << endl;
    cout << "Total hours  : " << total     << endl;
    cout << "Average/day  : " << avg       << endl;
    cout << "Best day     : " << bestDay   << " (" << maxH << " hrs)" << endl;
    cout << "Worst day    : " << worstDay  << " (" << minH << " hrs)" << endl;

    if (avg >= 6)
        cout << "Status : Excellent week! Keep it up!" << endl;
    else if (avg >= 3)
        cout << "Status : Good effort. Push a bit more." << endl;
    else
        cout << "Status : Needs improvement. Stay consistent." << endl;

    cout << "==============================" << endl;
}

//View raw log
void viewLog() {
    ifstream file(FILE_NAME.c_str());
    if (!file) { cout << "No log file found." << endl; return; }
    string line;
    cout << "\n--- Raw Log Entries ---" << endl;
    while (getline(file, line))
        cout << line << endl;
    file.close();
}

//Clear log
void clearLog() {
    ofstream file(FILE_NAME.c_str(), ios::trunc);
    file.close();
    cout << "Log cleared." << endl;
}

// Menu driven
int main() {
    int choice;
    do {
        cout << "\n====== Student Productivity Tracker ======" << endl;
        cout << "1. Log Today's Study Hours" << endl;
        cout << "2. Generate Weekly Report"  << endl;
        cout << "3. View All Log Entries"    << endl;
        cout << "4. Clear Log"               << endl;
        cout << "5. Exit"                    << endl;
        cout << "Enter choice: ";
        cin  >> choice;

        switch (choice) {
            case 1:
				logStudyHours();  
				break;
				
            case 2: 
				generateReport();
				break;
            
			case 3: 
				viewLog(); 
				break;
            
			case 4: 
				clearLog();
				break;
            
			case 5:
			 	cout << "Goodbye!" << endl; 
				break;
            
			default: cout << "Invalid choice. Try again." << endl;
        }
    } while (choice != 5);

    return 0;
}

