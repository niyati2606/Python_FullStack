list = [1,5,3,True, 1.1, "Niya", "ABC", 100, 200, 2.9, False, 10, 20]

print("Orignal List : ",list)
list.append(200)
print("Append 200 at last index in list : ",list)
#list.clear()
#print(list)
list1 = list.copy()
print("Copy of original list : ",list1)
list1.append(1000)
print("Append 1000 in last index at list1 : ",list1)
list2 = list
list2.append(300)
print(list)
print(list2)
print("Count 1 in list ",list.count(1)) #count is 2 becuase 1 itself and 2 is True
#true = 1, flase = 0
list3 = [2000,2200,4569]
print("List 3 : ",list3)
list.extend(list3)
print("Exted list3 in list : ",list)
print("Index of 1.1 in list : ",list.index(1.1))
list.insert(5,101)
print("Insert value at 5th index in list : ",list)
list.pop()
print("POP last element from list : ",list)
list.pop(10)
print("POP value at 10th index : ",list)
list.remove("ABC")
print("Remove ABC from list : ", list)
list.reverse()
print("Reverse list : ",list)
print("")
print("Iterate the element of list : ")
for i in list:
    print(i)
