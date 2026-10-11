'''
tuple : it is mix type of data 
it starts with 0 index 
decalre in ()
we can not change data at runtime

if list is avalible in tupple then we can use list fuction in that list to modify
'''

t = (1,2,10,20,"tops",True,[100,200,300],"python",False,1,2,10)

print(t)
print(t.count(1))
print(t.index(10))

for i in t:
    print(i)

print(t[6])
t[6].append(400)
print(t)
