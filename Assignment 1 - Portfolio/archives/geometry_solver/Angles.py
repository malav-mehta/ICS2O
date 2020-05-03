while True:
    print('\nPLEASE ENTER YOUR ANGLE.\nOR, PRESS 1234 TO QUIT.')
    angle = int(input('> '))

    if angle == 1234:
        input('THANKS FOR USING THIS PROGRAM.\nPRESS <enter> TO QUIT.')
        quit()
    if angle > 180:
        print("This is a reflex angle.")

    if angle < 180:
        sup = 180 - angle; print('The supplementary angle is', str(sup) + '.')
        com = 90 - angle; print('The complementary angle is', str(com) + '.')

    if angle == 90:
        print('This is a right angle.')

    if angle == 180:
        print('This is a straight angle.')

    if angle > 90 and angle < 180:
        print('This is an obtuse angle.')

    if angle < 90:
        print('This is an acute angle.')

    else:
        pass
