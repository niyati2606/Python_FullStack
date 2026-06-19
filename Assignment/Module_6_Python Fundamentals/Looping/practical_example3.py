list1 = ['apple', 'banana', 'mango', 1, 100, 'niya']
findString = input("Enter String : ")

found = False

for i in list1 :
    if findString == i :
        found = True
        break

if found == True :
    print(findString, "found in list")
else :
    print(findString, "is not found in list")
