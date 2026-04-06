#include <iostream>
using namespace std;

class BankAccount {
private:
    double balance;  // private data

public:
    // Setter function
    void setBalance(double b) {
        balance = b;
    }

    // Getter function
    double getBalance() {
        return balance;
    }
};

int main() {
    BankAccount acc;
    double amount;

    // Taking input from user
    cout << "Enter balance: ";
    cin >> amount;

    // Setting value using setter
    acc.setBalance(amount);

    // Displaying value using getter
    cout << "Balance: " << acc.getBalance();

    return 0;
}
