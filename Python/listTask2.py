list1 = [1,2,3,4,5,6,7]
list2 = [2,4,5,6,8,9,10]
list3 = []

for i in list1 :
    if i not in list2 :
        list3.append(i)

print(list3)        
    
