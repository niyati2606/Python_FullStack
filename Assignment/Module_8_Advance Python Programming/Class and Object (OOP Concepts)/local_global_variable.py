total_students = 0  # global variable

class Student:
    school_name = "Greenfield High School"  # class-level variable, shared by all objects

    def __init__(self, name, marks):
        self.name = name      # instance variable, local to each object
        self.marks = marks
        global total_students
        total_students += 1

    def show_grade(self):
        passing_marks = 40  # local variable, only exists inside this method
        if self.marks >= passing_marks:
            status = "Pass"
        else:
            status = "Fail"
        print(f"{self.name} ({self.school_name}): {status}")

s1 = Student("Niyati", 85)
s2 = Student("Aarav", 30)

s1.show_grade()
s2.show_grade()

print(f"\nTotal students created (global variable): {total_students}")
print(f"School name (class variable): {Student.school_name}")
