dict1 = {
    101 : "Niya",
    102 : "Ravi",
    103 : "Shalin",
    104 : "Niyati",
    105 : "Deva",
    106 : "Sonal"
}

print("Original Dict : ", dict1)
d1 = {107 : "ABC", 109 : "Python"}
dict1.update(d1)
print("Updated Dict : ", dict1)
dict1[104] = "Niyati R"
print("Updated value of 104 key in Dict : ", dict1)
