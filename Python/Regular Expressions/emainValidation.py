import re

pattern = r"^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$"
email = "niya@gmail.com"
#email = "niya$gmail.com"

if re.match(pattern, email) :
    print("Valid Email")
else :
    print("Email is not Valid")
