#include <iostream>
#include <string>
using namespace std;

int main() {
    string s = "Hello World";

	cout << s << endl;
    cout << s.size() << endl;        // 11 — number of characters
    cout << s.length() << endl;      // 11 — same as size()
    cout << s.capacity() << endl;    // allocated storage size (>= length)
    cout << s.max_size() << endl;    // maximum possible string length
    cout << s.empty() << endl;       // 0 (false) — string is not empty

    return 0;
}
