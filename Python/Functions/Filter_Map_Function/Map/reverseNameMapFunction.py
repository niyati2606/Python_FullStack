def reverseString(name) :
    return name[::-1]

namelist = ["niyati", "ravi", "shalin", "Diya", "Bhavika"]

reverseName = map(reverseString,namelist)
print("-" * 40)
print("Orignal List : ", namelist)
print("-" * 40)
print("REverse Name List : ",list(reverseName))
print("-" * 40)

#manual
list1 = []
for i in namelist :
    j = reverseString(i)
    list1.append(j)

print(list1)
