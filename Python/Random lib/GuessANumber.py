import random

number = random.randint(1,30)

while True :

    guess = int(input("Guess a number between 1 to 30 : "))
    if guess == number :
        print("You guessed a correct number")
        break
    elif guess > number :
        print("You guessed a greater number")
        
    elif guess < number :
        print("You guessed a smaller number")
        
