import re

print("Match Function")
print(re.match(r'dog','cat dog cat')) #not found

print("Searcg Function")
print(re.search(r'dog','cat dog cat')) #found
