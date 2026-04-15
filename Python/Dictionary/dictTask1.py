dict = {}

n = int(input("Enter N : "))
sum = 0

for i in range(1, n+1) :
    dict[i] = i*i
    sum = sum + dict[i]
    
print(dict)
print("Sum : ", sum)
