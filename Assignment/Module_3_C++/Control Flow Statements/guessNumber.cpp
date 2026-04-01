#include <iostream>
#include <cstdlib>
#include <ctime>
using namespace std;

int main() {
    int guess, number;

    // Generate random number between 1 and 100
    srand(time(0));
    number = rand() % 100 + 1;

    cout << "Guess a number between 1 and 100" << endl;

    while (true) {
        cout << "Enter your guess: ";
        cin >> guess;


        if (guess > number) {
            cout << "You guessed a greater number." << endl;
        }
        else if (guess < number) {
            cout << "You guessed a smaller number" << endl;
        }
        else {
            cout << "You guessed a correct number";
            break; // Exit loop when correct
        }
    }

    return 0;
}
