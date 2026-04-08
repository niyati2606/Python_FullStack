def findMax(x):
    maxNum = list1[0]
    for i in list1:
        if i > maxNum:
            maxNum = i
    if x == maxNum:
        return x
    else:
        return None
        

list1 = [3, 4, 66, 88, 99, 121, 34, 66, 89, 41]
ans = filter(findMax,list1)
print(list(ans))

#manual
list2 = []
for i in list1 :
    j = findMax(i)
    if j != None :
        list2.append(j)

print(list2)  
