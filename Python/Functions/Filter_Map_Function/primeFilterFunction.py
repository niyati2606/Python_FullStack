def isPrime(num) :
    if num % 2 == 0:
        return False
    else :
        for i in range(3,int(num/2)+1,2):
            if num % i == 0:
                return False
        else:
            return True
    
list1 = [3,4,66,88,99,121,34,66,89,41]
ans = filter(isPrime,list1)
print("Prime Number List :",list(ans))

#manual
list2 = []
for i in list1 :
    j = isPrime(i)
    if j == True :  
        list2.append(i)

print(list2)   
