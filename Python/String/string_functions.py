''' String : string is a group of character '''

text = "Niyati Patel 2699"

print("Length of text is : ", len(text))
print("Capitalize text :", text.capitalize())
print("Casefold Text : ", text.casefold())
print("Upper Text : ", text.upper())
print("Lower Text : ", text.lower())
print("Word Count : ", text.count("i"))
print(text.endswith("26"))
print(text.startswith("Niyati"))
print(text.find("Patel"))
print(text.index("i", 2))
print(text.isalnum())
print("niya".isalpha())
print("2699".isnumeric())
print(text.isspace())
print(text.title())
print("NIYA".isupper())
print("patel".islower())
print(text.replace("Niyati","niya"))
print(text.center(60,"*"))
