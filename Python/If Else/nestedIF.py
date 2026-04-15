# find max number from 3 numbers
a=int(input("Enter A : "))
b=int(input("Enter B : "))
c=int(input("Enter C : "))

if a>b:
    if a>c:
        print("A Is Max")
    else:
        print("C Is Max")
elif b>c:
    print("B Is Max")
else:
    print("C Is Max")
        
