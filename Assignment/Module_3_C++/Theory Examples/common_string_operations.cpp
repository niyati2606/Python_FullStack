#include <iostream>
#include <string>
#include <algorithm>
using namespace std;

int main() {
    string str = "Hello World";

    cout << "Original String: " << str << endl;

    // Length
    cout << "Length: " << str.length() << endl;

    // Access
    cout << "First Character: " << str[0] << endl;

    // Append
    str.append(" !!!");
    cout << "After Append: " << str << endl;

    // Insert
    str.insert(5, " C++");
    cout << "After Insert: " << str << endl;

    // Erase
    str.erase(5, 4);
    cout << "After Erase: " << str << endl;

    // Substring
    cout << "Substring (0-5): " << str.substr(0, 5) << endl;

    // Find
    cout << "Position of 'World': " << str.find("World") << endl;

    // Reverse
    reverse(str.begin(), str.end());
    cout << "Reversed String: " << str << endl;

    return 0;
}
