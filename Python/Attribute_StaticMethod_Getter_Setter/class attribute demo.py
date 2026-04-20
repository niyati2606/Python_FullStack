class Car :
    wheels = 4 #class attribute shared by all instances

    def __init__(self, brand, model) :
        self.brand = brand
        self.model = model

car1 = Car("Hyundai","i20")
car2 = Car("Toyota","Camry")

print(car1.wheels)
print(car2.wheels)
