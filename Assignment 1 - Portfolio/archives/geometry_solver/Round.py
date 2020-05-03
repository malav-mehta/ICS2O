import tkinter as tk
import tkinter.messagebox
from math import sqrt

def solve(leg, leg2):
    global hyp
    try:
        int(leg)
        int(leg2)
    except ValueError:
        tk.messagebox.showinfo(title='Error!', text='Please enter a valid number!')

    hyp = leg ** 2 + leg2 ** 2
    hyp = sqrt(hyp)
    print(hyp)

pts = tk.Tk()
hyp = 0
entry = tk.Entry(pts, text='Enter Leg')
entry.pack()
button = tk.Button(pts, text='Solve', command=(solve, 5, 12)).pack()
pts.mainloop()
