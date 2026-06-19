class Father:
    def skills(self):
        print("Father: Good at gardening.")

class Mother:
    def skills(self):
        print("Mother: Good at cooking.")

class Child(Father, Mother):
    def own_skill(self):
        print("Child: Good at coding.")

c = Child()
c.skills()
c.own_skill()
