text = input("Enter String : ")

al=0 #alphabate
nm=0 #numbres
sp=0 #space
uc=0 #upper case
lc=0 #lower case

for i in text:
    if i.isalpha():
        al=al+1
    elif i.isnumeric():
        nm=nm+1
    elif i.isspace():
        sp=sp+1
    if i.isupper():
        uc=uc+1
    elif i.islower():
        lc=lc+1

print("Total Alphabets : ",al)
print("Total Numeric : ",nm)
print("Total Space : ",sp)
print("Total Upper Case : ",uc)
print("Total Lower Case : ",lc)
