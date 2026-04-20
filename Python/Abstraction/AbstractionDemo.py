from abc import ABC, abstractmethod

class RBI(ABC) :

    @abstractmethod
    def roi (r) :
        pass

class SBI(RBI) :
    def show(self):
        print("This is SBI Bank")

    def roi(self,a) :
        print("Rate of Interest given by SBI is :", a)

class cosmos(RBI) :
    def show(self):
        print("This is Cosmos Bank")

    def roi(self,a) :
        print("Rate of Interest given by cosmos is :", a)


s = SBI()
s.show()
s.roi(6.5)

c = cosmos()
c.show()
c.roi(5)
