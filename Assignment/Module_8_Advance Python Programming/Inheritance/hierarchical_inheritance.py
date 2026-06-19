class Vehicle:
    def __init__(self, brand):
        self.brand = brand

    def info(self):
        print(f"This vehicle is made by {self.brand}.")

class Car(Vehicle):
    def wheels(self):
        print("A car has 4 wheels.")

class Bike(Vehicle):
    def wheels(self):
        print("A bike has 2 wheels.")

car = Car("Toyota")
bike = Bike("Yamaha")

car.info()
car.wheels()

bike.info()
bike.wheels()
