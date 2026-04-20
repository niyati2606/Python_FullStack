import re

pattern =  r"Hello"
string = "Hello World.."
result = re.match(pattern, string)

if result :
    print("Match Found")
else :
    print("No match found")
