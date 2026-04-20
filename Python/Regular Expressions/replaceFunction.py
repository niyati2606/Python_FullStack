import re

word = "dog, god, road, bot, rose, cat, boat"

regex = re.compile("[b]ot")
word = regex.sub("Sample", word)

print(word)
