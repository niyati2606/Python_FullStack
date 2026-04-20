class Student :
    subject = "Python"

    def __init__(self, name, age) :
        self.name = name
        self.age = age

    @classmethod
    def getSubject(cls) :
        return cls.subject

    @classmethod
    def setSubject(cls, newSubject):
        cls.subject = newSubject

print(Student.getSubject())

Student.setSubject("Flutter")
print(Student.getSubject())
