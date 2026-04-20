import re

NameAge = """Rany is 23 and Jeny is 65, Tom is 85 and Roy is 42"""
age = re.findall(r'\d{1,3}',NameAge)
names = re.findall(r'[A-Z][a-z]*', NameAge)
ageDict = {}
a = 0

for eachName in names :
    ageDict[eachName] = age[a]
    a += 1

print(ageDict)
