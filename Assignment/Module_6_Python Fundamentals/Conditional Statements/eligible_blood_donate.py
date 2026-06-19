age = int(input("Enter age: "))
weight = float(input("Enter weight (kg): "))

if age >= 18 and age <= 65:
    if weight >= 50:
        print("Eligible to donate blood")
    else:
        print("Not eligible: weight must be at least 50 kg")
else:
    print("Not eligible: age must be between 18 and 65")
