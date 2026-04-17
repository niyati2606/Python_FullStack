class Person :

    def __init__ (self,name,age) :
        self.__name = name
        self.__age = age

    def get_name(self) :
        return self.__name

    def set_name (self,name) :
        if isinstance(name, str) and len(name) > 0:
            self.__name = name

        else :
            print("Invalid name. Name should be a non-empty")

    def get_age(self) :
        return self.__age

    def set_age(self, age) :
        if isinstance(age, int) and age >= 0:
            self.__age = age

        else :
            print("Invalid age. Age should be a non-negative integer")

person = Person("Niya",26)

print(person.get_name())
print(person.get_age())

person.set_name("Niyati")
person.set_age(26)

print(person.get_name())
print(person.get_age())

person.set_name("")
person.set_age(-26)
