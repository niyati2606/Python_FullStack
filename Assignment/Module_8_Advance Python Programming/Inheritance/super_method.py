class Employee:
    def __init__(self, name, salary):
        self.name = name
        self.salary = salary

    def show_details(self):
        print(f"Name: {self.name}")
        print(f"Salary: {self.salary}")

class Manager(Employee):
    def __init__(self, name, salary, team_size):
        super().__init__(name, salary)  # calls Employee's __init__
        self.team_size = team_size

    def show_details(self):
        super().show_details()  # calls Employee's show_details
        print(f"Team size: {self.team_size}")

m = Manager("Niyati", 75000, 8)
m.show_details()
