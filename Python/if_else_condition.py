''' Odd Even '''


a = int(input("Enter any Number : "))

if a % 2 == 0:
    print("Number is Even")
else:
    print("Number is Odd")

        
''' Find Max Number '''
print("")
print("---Find Max from 2 number----")
num1 = int(input("Enter Number1 : "))
num2 = int(input("Enter Number2 : "))

if num1 > num2:
    largest = num1
else:
    largest = num2

print("Largest Number is ", largest)    
