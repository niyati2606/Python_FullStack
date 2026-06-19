import math

num = int(input("Enter a number: "))

# sqrt()
if num >= 0:
     print(f"Square root of {num} is {math.sqrt(num)}")
else:
    print("Cannot calculate square root of a negative number.")

print("")
num2 = float(input("Enter Number for ceil and floor : "))
# ceil()
print(f"Ceil of {num2} is {math.ceil(num2)}")

# floor()
print(f"Floor of {num2} is {math.floor(num2)}")
