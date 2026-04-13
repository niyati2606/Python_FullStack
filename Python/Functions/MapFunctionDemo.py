def cube(x) :
    return x*x*x

list1 = [1,5,7,4,7,88,6]

ans = map(cube,list1) #syntax : map(functionname, iterator) iterator like list,tuple,string,dict)

print(list(ans))

#manual 
l1 = []

for i in range(1,10) :
    j = cube(i)
    l1.append(j)

print(l1)
