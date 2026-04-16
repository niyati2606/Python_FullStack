''' value of argument in functions works right to left so if we want to pass value for argument
we have to give value to all the arhuments otherwise it will gives syntax error '''

def test(a=40, b=30, c=20, d=10) :
    print("A : ",a, "B : ",b, "C : ",c, "D : ",d)

# test(1,2,4,5 )
test(b=25,d=35)
