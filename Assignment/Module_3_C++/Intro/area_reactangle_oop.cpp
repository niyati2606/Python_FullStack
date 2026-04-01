#include <iostream>
using namespace std;

class Rectangle {
private:
    float length, width;

public:
    // Read values inside the class
    void getInput() {
        cout << "Enter length: ";
        cin  >> length;
        cout << "Enter width : ";
        cin  >> width;
    }

    float area() {
        return length * width;
    }
};

int main() {
    Rectangle rect;
    rect.getInput();
    cout << "Area = " << rect.area() << endl;
    return 0;
}

