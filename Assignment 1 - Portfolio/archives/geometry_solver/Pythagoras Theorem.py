from math import sqrt
import time


def stepsHL(hyp, leg, unit):
    print('\nHere are your steps: ')
    print("c² - a² = b² (Pythagoras Theorem)")
    time.sleep(1)
    print(str(hyp) + '² - ' + str(leg) + '² = b²')
    time.sleep(1)
    hyp = hyp ** 2; leg = leg ** 2
    print(str(hyp), '-', str(leg), '= b²')
    time.sleep(1)
    total = hyp - leg; total = str(total)
    print(total, '= b²')
    time.sleep(1)
    time.sleep(1)
    total = int(total); total = sqrt(total); total = str(total)
    print(total, unit, '= b')


def stepsLL(leg, leg2, unit):
    print('\nHere are your steps:')
    print('a² + b² = c² (Pythagoras Theorem)')
    time.sleep(1)
    print(str(leg) + '² + ' + str(leg2) + '² = c²')
    time.sleep(1)
    leg = leg ** 2; leg2 = leg2 ** 2
    print(str(leg), '+', str(leg2), '= c²')
    time.sleep(1)
    total = leg + leg2; total = str(total)
    print(total, '= c²')
    time.sleep(1)
    time.sleep(1)
    total = int(total); total = sqrt(total); total = str(total)
    print(total, unit, '= c')

print('PYTHAGORAS THEOREM RIGHT TRIANGLE SOLVER \nVERSION 1.2')

while True:
    choice = int(input('\n1. SOLVE WITH HYPOTENUSE AND LEG.\n2. SOLVE WITH BOTH LEGS\n3. QUIT\n\nCHOOSE ONE AND PRESS ENTER: '))

    if choice == 1:
        hyp = int(input('\nWhat is the length of the hypotenuse: '))
        time.sleep(1)
        leg = int(input('What is the length of the leg: '))
        time.sleep(1)
        unit = input('What is the unit: ')
        time.sleep(1)
        stepsHL(hyp, leg, unit)

    if choice == 2:
        leg = int(input('\nWhat is the length of leg A: '))
        time.sleep(1)
        leg2 = int(input('What is the length of Leg B: '))
        time.sleep(1)
        unit = input('What is the unit: ')
        time.sleep(1)
        stepsLL(leg, leg2, unit)

    if choice == 3:
        input('THANKS FOR USING THIS PROGRAM.\nPRESS <return> TO QUIT.')
        quit()

    else:
        pass
