class Animal:
    def eat(self):
        print("This animal eats food.")

class Mammal(Animal):
    def walk(self):
        print("This mammal can walk.")

class Bird(Animal):
    def fly(self):
        print("This bird can fly.")

class Bat(Mammal, Bird):
    def echolocate(self):
        print("The bat uses echolocation.")

b = Bat()
b.eat()
b.walk()
b.fly()
b.echolocate()
