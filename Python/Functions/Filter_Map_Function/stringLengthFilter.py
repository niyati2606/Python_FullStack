def is_long(word):
    return len(word) > 4

words = ["niyati", "shalin", "deva", "python", "nr"]
result = filter(is_long, words)
print(list(result))


wordList = []
for i in words :
    longWords = is_long(i)
    if longWords != False :
        wordList.append(i)

print(wordList)
