def oddEven(num) :
    if num %2 == 0:
        print(num, "is Even")
    else :
        print(num, "is Odd")

def maxofTwo(num1,num2) :
    if num1>num2 :
        print(num1, "is Max")
    else :
         print(num2, "is Max")

def maxofThree(num1,num2,num3) :
    if num1>num2 :
        if num1 > num3 :
            print(num1, "is max")
        else :    
            print(num3, "is Max")
    elif num2 > num3 :
         print(num2,"is max")
    else :
         print(num3, "is Max")

def fibonacci(num) :
    a,b,=0,1
    print(a,end = " ")
    while b < num :
        print(b, end = " ")
        a, b=b, a+b
    print()

def isPrimeNum(num) :
    if num % 2 == 0:
        for i in range(3,int(num/2)+1,2):
            if num % i == 0:
                print(num, "is Not Prime")
        else:
            print(num, "is Prime")
    else :
        print(num, "is Not Prime")
