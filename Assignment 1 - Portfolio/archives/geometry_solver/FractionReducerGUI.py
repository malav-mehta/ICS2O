from tkinter import *
import tkinter.messagebox

def get_divisors(n, myList, m, myList2):
    for i in range(2, n + 1):
        if n % i == 0:
            myList.append(i)

    for i in range(2, m + 1):
        if m % i == 0:
            myList2.append(i)

def get_common_list(n, m, aList, bList, cList):
    for i in aList:
        if i in bList:
            cList.append(i)

    if cList == []:
        simplified.configure(text='Fraction is irreduceable.')

    if cList != []:
        a = cList[-1]

        n = n / a
        m = m / a

        simplifiedText = str(n) + '\n' + '―――' + '\n' + str(m)
        simplified.configure(text=simplifiedText)

        for i in aList:
            del i

        for i in bList:
            del i

        for i in cList:
            del i

def getNum():
    global x
    x = numE.get()
    x = int(x)

def getDen():
    global y
    y = denE.get()
    y = int(y)

def simplify():
    global x, y, numList, denList, comList

    get_divisors(x, numList, y, denList)
    get_common_list(x, y, numList, denList, comList)

root = Tk()
root.title('Fraction Reducer')

frame1 = Frame(root)
frame1.pack()

frame2 = Frame(root)
frame2.pack()

frame3 = Frame(root)
frame3.pack()

frame4 = Frame(root)
frame4.pack()

x = 0
y = 0
numList = []
denList = []
comList = []

numE = Entry(frame1, text='Enter you numerator.', width=5)
numE.pack(side='left')
Button(frame1, text='Enter', command=getNum).pack(side='right')

Label(frame2, text='―――').pack(side='left')
Label(frame2, text='          ').pack(side='left')

denE = Entry(frame3, text='Enter your denominator', width=5)
denE.pack(side='left')
Button(frame3, text='Enter', command=getDen).pack(side='right')

simplifyB = Button(frame4, text='Reduce!', command=simplify)
simplifyB.pack()

simplified = Label(frame4)
simplified.pack(side='right')

root.mainloop()