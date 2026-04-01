#include <iostream>
using namespace std;

// Base class
class Person {
protected:
    string name;
    int age;

public:
    void setPerson(string n, int a) {
        name = n;
        age = a;
    }

    void displayPerson() {
        cout << "Name: " << name << endl;
        cout << "Age: " << age << endl;
    }
};

// Derived class: Student
class Student : public Person {
private:
    int marks;

public:
    void inputStudent() {
        cout << "Enter Student Name: ";
        cin >> name;
        cout << "Enter Age: ";
        cin >> age;
        cout << "Enter Marks: ";
        cin >> marks;
    }

    void displayStudent() {
        displayPerson();
        cout << "Marks: " << marks << endl;
    }
};

// Derived class: Teacher
class Teacher : public Person {
private:
    string subject;

public:
    void inputTeacher() {
        cout << "Enter Teacher Name: ";
        cin >> name;
        cout << "Enter Age: ";
        cin >> age;
        cout << "Enter Subject: ";
        cin >> subject;
    }

    void displayTeacher() {
        displayPerson();
        cout << "Subject: " << subject << endl;
    }
};

int main() {
    Student s;
    Teacher t;

    cout << "Enter Student Details:" << endl;
    s.inputStudent();

    cout << "\nEnter Teacher Details:" << endl;
    t.inputTeacher();

    cout << "\nStudent Details:" << endl;
    s.displayStudent();

    cout << "\nTeacher Details:" << endl;
    t.displayTeacher();

    return 0;
}
