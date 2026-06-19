def even_numbers():
    for i in range(2, 21, 2):
        yield i

# Using the generator
for num in even_numbers():
    print(num)
