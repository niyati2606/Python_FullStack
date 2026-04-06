#include <iostream>
using namespace std;

// Class definition
class Student {
public:
    string name;
    int age;

    void display() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

int main() {
    // Creating object
    Student s1;

    // Assigning values
    s1.name = "Niyati";
    s1.age = 26;

    // Calling function
    s1.display();

    return 0;
}
