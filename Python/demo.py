class Dog:
    species = "Canine"  # Class Attribute (shared)

    def __init__(self, name, age):
        self.name = name  # Instance Attribute (unique)
        self.age = age    # Instance Attribute (unique)

    def bark(self):       # Instance Method (behavior)
        return f"{self.name} says Woof!"

# Creating an Object (Instance)
my_dog = Dog("Buddy", 3)

# Accessing Attributes and Methods
print(my_dog.name)      # Output: Buddy
print(my_dog.species)   # Output: Canine
print(my_dog.bark())    # Output: Buddy says Woof!
