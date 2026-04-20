import re

pattern = r"\s+"  # Matches one or more whitespace characters
string = "This is sentence with white spaces"

result = re.split(pattern, string)

print(result)
