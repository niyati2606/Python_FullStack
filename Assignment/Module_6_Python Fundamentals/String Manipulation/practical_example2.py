my_string = "  Hello, Python World!  "

print(f"Original: '{my_string}'")
print(f"Stripped: '{my_string.strip()}'")# removes leading/trailing whitespace
print(f"Uppercase: '{my_string.upper()}'")
print(f"Lowercase: '{my_string.lower()}'")
print(f"Replaced: '{my_string.replace('Python', 'Claude')}'")
print(f"Split by comma: {my_string.strip().split(',')}")
print(f"Length: {len(my_string)}")
print(f"Starts with 'Hello' (after strip): {my_string.strip().startswith('Hello')}")
print(f"Ends with '!' (after strip): {my_string.strip().endswith('!')}")
print(f"Find 'Python': index {my_string.find('Python')}")
print(f"Title case: '{my_string.strip().title()}'")
print(f"Join example: {'-'.join(['Python', 'is', 'fun'])}")
