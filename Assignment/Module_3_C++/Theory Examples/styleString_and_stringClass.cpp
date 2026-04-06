#include <iostream>
#include <string>
#include <cstring>
using namespace std;

int main() {

    // ?? C++ String Class
    string str1 = "Hello";
    string str2 = "World";

    cout << "String Class:\n";
    cout << "Concatenation: " << str1 + " " + str2 << endl;
    cout << "Length: " << str1.length() << endl;

    // ?? C-Style String
    char cstr1[20] = "Hello";
    char cstr2[20] = "World";
    char result[50];

    cout << "\nC-Style String:\n";

    strcpy(result, cstr1);       // copy
    strcat(result, " ");         // add space
    strcat(result, cstr2);       // concatenate

    cout << "Concatenation: " << result << endl;
    cout << "Length: " << strlen(result) << endl;

    return 0;
}
