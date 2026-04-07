def cube(x) :
    return x*x*x
print("Cube of 6 is :", cube(6))

ans = lambda y : y*y*y #ans is object of function so we need to call it
print("Cube of 5 is : ", ans(5)) #function calling

x = lambda a,b : a + b
print(x(5,15))

y = lambda a: "Even" if a % 2 == 0 else "Odd"
print(y(10))
