empty_list = []

num = int(input("Enter how many elements you want to add :"))

for i in range(num) :
    list_item = input(f"Enter element {i + 1} : ")
    empty_list.append(list_item)

print("List after appending elements : ", empty_list)
