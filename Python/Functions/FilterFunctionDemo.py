def oddEven(x) :
    if x % 2 == 0:
        return x

list1 = [1,2,3,4,5,6,7,8,9,10]

ans = filter(oddEven,list1)

# ans1 = list(filter(oddEven ,list1))

list2 = []
for i in list1 :
    j = oddEven(i)
    if j is not None :
        list2.append(j)

print(list(ans))
#print(list(ans1))
print(list2)
