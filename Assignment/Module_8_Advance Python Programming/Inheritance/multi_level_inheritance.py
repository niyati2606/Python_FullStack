class Animal:
    def eat(self):
        print("This animal eats food.")

class Mammal(Animal):
    def walk(self):
        print("This mammal can walk.")

class Dog(Mammal):
    def bark(self):
        print("The dog barks.")

d = Dog()
d.eat()
d.walk()
d.bark()
