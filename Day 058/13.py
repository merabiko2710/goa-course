# 12) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს რიცხვს და დააბრუნებს True, თუ ის ლუწია  და False, თუ არა.
def number():
    number = int(input("enter num"))
    if number % 2 == 0:
        print("true")
    else:
        print("false")
number()