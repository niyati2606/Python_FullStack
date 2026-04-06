#include <iostream>
using namespace std;

class BankAccount {
private:
    float balance;

public:
    BankAccount() {
        balance = 0;
    }

    void deposit(float amount) {
        balance += amount;
        cout << "Deposited: " << amount << endl;
    }

    void withdraw(float amount) {
        if (amount > balance) {
            cout << "Insufficient balance!" << endl;
        } else {
            balance -= amount;
            cout << "Withdrawn: " << amount << endl;
        }
    }

    void display() {
        cout << "Current Balance: " << balance << endl;
    }
};

int main() {
    BankAccount acc;
    float dep, wit;

    cout << "Enter amount to deposit: ";
    cin >> dep;
    acc.deposit(dep);

    cout << "Enter amount to withdraw: ";
    cin >> wit;
    acc.withdraw(wit);

    acc.display();

    return 0;
}
