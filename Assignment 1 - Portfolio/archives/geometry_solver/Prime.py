import time

state = True

def getDivisors(n, myList):
    for i in range(2, n):
        if n % i == 0:
            myList.append(i)

def check_prime(myList):
    if myList == []:
        return True

    else:
        return False

while state:
    print('WELCOME TO THE PRIME NUMBER CHECKER. \n VERSION 1.0')
    my = []
    num = int(input('Your number: '))

    getDivisors(num, my)
    if check_prime(my):
        print('Yes\n')

    if  not check_prime(my):
        print('No\n')

time.sleep(10)
