def isPositive(n) :
    return n > 0

numberList = [1,2,3,10,-22,-11,2,-33,-89,9,8,5,6]

numbers = filter(isPositive, numberList)
print(list(numbers))

#manual
list1 = []

for i in numberList :
    isPositiveNum = isPositive(i)
    if isPositiveNum != False :
        list1.append(i)

print(list1)
