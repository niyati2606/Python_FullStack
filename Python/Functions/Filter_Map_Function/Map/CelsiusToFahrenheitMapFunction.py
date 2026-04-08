def celsiusToFarenhit(num) :
    Fahrenheit = (num * 9/5) + 32 #(c - 32) * 5/9 fahrenhit to celsius
    return Fahrenheit

celsiusList = [23,45,30,19,1,55]

ans = map(celsiusToFarenhit,celsiusList)
print("celsius to Fahrenheit List : ", list(ans))

#manual
list1 = []

print("")
for i in celsiusList :
    j = celsiusToFarenhit(i)
    list1.append(j)

print(list1)
