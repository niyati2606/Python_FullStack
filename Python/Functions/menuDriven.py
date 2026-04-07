import userDefineLib

while True :

    print("-" * 45)
    print("1. Number is Odd or Even")
    print("2. Find Max Number from 2 Numbers")
    print("3. Find Max Number from 3 Numbers")
    print("4. Fibonacci Series")
    print("5. Prime Number")
    print("6. Exit")
    print("-" * 45)

    choice = int(input("Enter Your choice : "))
    print("-" * 45)

    if choice == 1 :
        num1 = int(input("Enter Number : "))
        userDefineLib.oddEven(num1)

    elif choice == 2:
        num1 = int(input("Enter Number : "))
        num2 = int(input("Enter Number : "))
        userDefineLib.maxofTwo(num1,num2)

    elif choice == 3:
        num1 = int(input("Enter Number : "))
        num2 = int(input("Enter Number : "))
        num3 = int(input("Enter Number : "))
        userDefineLib.maxofThree(num1,num2,num3)

    elif choice == 4:
        num1 = int(input("Enter Number : "))
        userDefineLib.fibonacci(num1)

    elif choice == 5:
        num1 = int(input("Enter Number : "))
        userDefineLib.isPrimeNum(num1)

    elif choice == 6 :
        print("Thank you..!! :)")
        print("-" * 45)
        break

    else :
        print("Invalid choice. Please Select number between 1 to 6")
    print("-" * 45)    
