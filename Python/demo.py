class Parent:
    def __init__(self):
        print("Parent constructor")

class Child(Parent):
    def __init__(self):
        super().__init__()  # calling parent constructor
        print("Child constructor")

obj = Child()
