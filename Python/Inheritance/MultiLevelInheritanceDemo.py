class A :
    def getA(self,a) :
        self.a = a

    def setA(self) :
        print("A : " , self.a)

class B(A) :
    def getB(self,b) :
        self.b = b

    def setB(self) :
        print("B : ", self.b)

class C(B) :
    def getC(self,c) :
        self.c = c

    def setC(self) :
        print("C : ", self.c)

b1 = C()
b1.getA(10)
b1.getB(20)
b1.getC(30)

b1.setA()
b1.setB()
b1.setC()
