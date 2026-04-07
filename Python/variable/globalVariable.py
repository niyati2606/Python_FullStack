#global declaration outside function is not works in python

def test1() :
    global x
    x = 10
    global y
    y = 20

    print("X : ", x)
    print("Y : ", y)
    x = x+30

def test2() :
    print("X : ",x) #output is 40 because at the end of test1 we increase the value of x
    print("Y : ",y)

test1()
test2()

print("X : " ,x)
print("Y : ",y)
