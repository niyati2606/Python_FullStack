#include<iostream>
using namespace std;

int main() {
	
	int n = 0;
	
	cout << "Enter Number :";
	cin >> n;
	
	if(n%2 == 0){
		cout << "Number is Even";
	}else {
		cout << "Number is Odd";
	}
	
	return 0;
}
