class Student:
    def __init__(self, name, age, course):
        self.name = name
        self.age = age
        self.course = course

    def display_info(self):
        print(f"Name: {self.name}")
        print(f"Age: {self.age}")
        print(f"Course: {self.course}")

student1 = Student("Niyati", 22, "Computer Science")

print(student1.name)
print(student1.age)
print(student1.course)

student1.display_info()

student1.age = 23
print(f"\nUpdated age: {student1.age}")
