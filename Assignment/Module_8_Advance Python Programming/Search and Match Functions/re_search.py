import re

def search_word(text, word):
    pattern = r'\b' + re.escape(word) + r'\b'
    match = re.search(pattern, text)

    if match:
        print(f"Word '{word}' found at position {match.start()} to {match.end()}.")
    else:
        print(f"Word '{word}' not found in the text.")

text = "Python is a powerful and easy to learn programming language."
search_word(text, "easy")
search_word(text, "Java")
