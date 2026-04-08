def is_passing(student):
    return student["marks"] >= 50

students = [
    {"name": "Niyati", "marks": 85},
    {"name": "Shalin", "marks": 90},
    {"name": "Devanshi",   "marks": 42},
    {"name": "Ravi", "marks": 67},
    {"name": "Maitri",  "marks": 30},
]

result = filter(is_passing, students)
print(list(result))

#manual
list1 = []

for i in students :
    passStudents = is_passing(i)
    if passStudents != False :
        list1.append(i)

print(list1)
