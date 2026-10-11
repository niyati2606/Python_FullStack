'''
dictionary : 
collection of key-value pairs. 
Each key is unique, and the associated value can be any data type.
'''

d = {101:"Diya",345:"Bhavika",909:"Niya",566:"Om",234:"Pralaj",787:"Monik",454:"Parth"}

print(d)
print("Print the value of 909 key :",d[909])
print("Print the value of 101 key :",d.get(101))
print("Print the dict ",d.items())
#dict_items([(101, 'Diya'), (345, 'Bhavika'), (909, 'Niya'), (566, 'Om'), (234, 'Pralaj'), (787, 'Monik'), (454, 'Parth')])
print("Print keys of dict : ",d.keys())
print("Print values of dict in list",d.values())
print(d.pop(566))
print(d)
d.popitem()
print(d)
d1 = {454:"Parth",566 : "Om"}
d.update(d1)
print(d)
d[202] = "Ravi"
print(d)

#d[101] = "Shalin"
#print(d)

for i in d:
    print(i," : ",d[i])
