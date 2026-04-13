def fibonacci (n) :
    a,b = 0, 1
    for i in range(n) :
        yield a
        a,b = b, a+b
        
#create fibonacci generator
fib = fibonacci(50)

#iterate and print fibonacci series
print(list(fib))
