def factorial(num) :
    if num == 0 or num == 1 :
        return 1
    else :
        return num*factorial(num-1)

a = int(input("Enter Number :"))
print("Factorial of " ,a ,"is :", factorial(a))
#print(type(factorial(50)))
