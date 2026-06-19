print("---Find prime number----")
num = int(input("Enter Number : "))

if num < 2:
    print(num, "is Not Prime")
elif num == 2:
    print(num, "is Prime")
elif num % 2 == 0:
    print(num, "is Not Prime")
else:
    for i in range(3, int(num/2)+1, 2):
        if num % i == 0:
            print(num, "is Not Prime")
            break
    else:
        print(num, "is Prime")
