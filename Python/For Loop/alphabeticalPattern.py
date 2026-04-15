'''
A
AB
ABC
ABCD
ABCDE
ABCDEF
ABCDEFG
ABCDEFGH
ABCDEFGHI
ABCDEFGHIJ
'''

for i in range(65,75) :
    for j in range(65, i+1) :
        print(chr(j), end = "")
    print()
    
print("================================")

'''
A
BB
CCC
DDDD
EEEEE
FFFFFF
GGGGGGG
HHHHHHHH
IIIIIIIII
JJJJJJJJJJ
'''

for i in range(65,75) :
    for j in range(65, i+1) :
        print(chr(i), end = "")
    print()
    
print("================================")
