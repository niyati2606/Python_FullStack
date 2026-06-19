import re

def match_word(text, word):
    pattern = r'\b' + re.escape(word) + r'\b'
    match = re.match(pattern, text)

    if match:
        print(f"Text starts with the word '{word}'.")
    else:
        print(f"Text does not start with the word '{word}'.")

text = "Python is a powerful and easy to learn programming language."
match_word(text, "Python")
match_word(text, "easy")
