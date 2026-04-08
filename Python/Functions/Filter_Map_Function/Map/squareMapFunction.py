def square(x) :
    return x*x;

list1 = [3,5,22,66,54,21,22]

ans = map(square,list1)
print(list(ans))

#manual
list2 = []
for i in list1:
    j = square(i)
    list2.append(j)

print(list2)    
