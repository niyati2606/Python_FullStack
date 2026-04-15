import random

list = []
luckyList = []

for i in range(1, 101):
    list.append(i)

for i in range(10):
    number = random.choice(list)
    luckyList.append(number)
    list.remove(number)

print("Orignal List : ", list)
print("Lucky List : ", luckyList)
