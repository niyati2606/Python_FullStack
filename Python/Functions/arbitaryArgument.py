def test(a,b,c, *d) :
    print("A : ",a, "B : ", b, "C : " , c, "D : ", d)

test(1,2,3,5)    #*d creates a tuple

def test(a,b,c, *d) :
    print("A : ",a, "B : ", b, "C : " , c, "D : ", list(d))

test(1,2,3,5,6,7,4,2)    #*d creates a list because we add list before d

def test(a,b,c, *d, **e) :
    print("A : ",a, "B : ", b, "C : " , c, "D : ", list(d), "E : ", e)

test(1,2,3,5,5,7,x = 4,y = 10, z = 40)    #**e creates a dict

