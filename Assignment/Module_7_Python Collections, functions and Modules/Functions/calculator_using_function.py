def add(num1, num2) :
    ans = num1 + num2
    print("Addition of", num1, "and", num2, "is", ans)

def subtract(num1, num2) :
    ans = num1 - num2
    print("Subtract of", num1, "and", num2, "is", ans)

def multiply(num1, num2) :
    ans = num1 * num2
    print("Multiplication of", num1, "and", num2, "is", ans)

def divide(num1, num2) :
    ans = num1 / num2
    print("Divison of", num1, "and", num2, "is", ans)


print("*" * 40)
print("Simple Calculator")
print("1. Addition")
print("2. Subtraction")
print("3. Multiplication")
print("4. Division")
print("*" * 40)

num1 = int(input("Enter Number1 : "))
num2 = int(input("Enter Number2 : "))

choice = int(input("Enter Choice : "))

if choice == 1:
    add(num1, num2)
elif choice == 2:
    subtract(num1, num2)
elif choice == 3:
    multiply(num1, num2)
elif choice == 4:
    divide(num1, num2)
else:
    print("Invalid choice!")
