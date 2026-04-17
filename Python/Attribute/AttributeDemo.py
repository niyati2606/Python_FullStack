class BankAccount :
    def __init__(self, accountHolder, balance) :
        self.accountHolder = accountHolder
        self.__balance = balance #Private attribute

    def getBalance(self) :
        return self.__balance

    def deposit(self,amount) :
        if amount > 0 :
            self.__balance = self.__balance + amount
        else :
            print("Ener Valid amount, Amount must be positive.")

    def withDraw(self, amount) :
        if 0 < amount <= self.__balance :
            self.__balance -= amount
        else :
            print("Invalid  withdrawl amount.")

account = BankAccount("Niya Patel",1000)
print(account.accountHolder) # output : Niya
#__banalce is avalible in class but it is a private attribute so we can not call it
#print(account.__balance) # attribute error : "BankAccount has no attribute named __balace
print(account.getBalance())
account.deposit(500)
print(account.getBalance())
account.withDraw(200)
print(account.getBalance())
#Trying to access private attribute using name mangling
print(account._BankAccount__balance) # not recommend to use
