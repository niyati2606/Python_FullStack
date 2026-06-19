string1 = input("Enter any String :")
counts = {}

for char in string1 :
    if char in counts :
        counts[char] += 1
    else :
        counts[char] = 1

print("Total character in String :", counts)
