numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

odd_numbers = list(filter(lambda x: x % 2 != 0, numbers))

print(f"Original list: {numbers}")
print(f"Odd numbers (evens filtered out): {odd_numbers}")
