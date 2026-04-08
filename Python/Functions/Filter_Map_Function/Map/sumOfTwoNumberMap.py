def add(num1, num2) :
    return num1 + num2

list1 = [11,33,43,23,100]
list2 = [45,54,2,22,1000]

sum = map(add,list1,list2)
print(list(sum))
