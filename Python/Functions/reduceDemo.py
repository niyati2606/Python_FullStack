from functools import reduce

def add(num1,num2) :
    return num1 + num2

numbers = [1,3,4,2,5]

result = reduce(add,numbers,100) # 100 is intializer sum starts with 100
print(result)
