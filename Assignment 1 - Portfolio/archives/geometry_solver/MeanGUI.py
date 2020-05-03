from tkinter import *

def findMean(myList):
    print((sum(myList) / len(myList)))

def findMode(myList):
    myList.sort()
    n = len(myList)

    if (n % 2) == 0:
        x = n - n / 2
        y = x + 1

        print((x + y) / 2)

    if (n % 2) != 0:
        x = n - n / 2
        print(x)


numbers = [1, 4, 2]
findMean(numbers)