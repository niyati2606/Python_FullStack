def getFullNameFromDict(dic) :
    return dic["fName"] + " " + dic["lName"]

nameList = [
    {"fName" : "Niya", "lName" : "Patel"},
    {"fName" : "Shalin", "lName" : "Amin"},
    {"fName" : "Ravi", "lName" : "Amin"},
    {"fName" : "Niyati", "lName" : "Patel"},
    {"fName" : "Devanshi", "lName" : "Patel"}
    ]

fullName = map(getFullNameFromDict,nameList)
print(list(fullName))

#manual
fullNameList = []

for i in nameList :
    fullName = getFullNameFromDict(i)
    fullNameList.append(fullName)

print(fullNameList)
