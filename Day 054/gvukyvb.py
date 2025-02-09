""" #შექმენით პროგრამა რომელშიც მომხმარებელს შემოატანინებთ 2 რიცხვს (input), შემდეგ პირობითი განცხადებების საშვალებით (if-else) შეამოწმებთ რომელია უდიდესი, შემდეგ უმცირესიდან უდიდესამდე for ციკლის გამოყენებით (for loop) დაბეჭდეთ ყველა რიცხვი და თითეულს გვერდზე მიუწერეთ ლუწია თუ კენტ"""
BOB = int(input("enter number: "))
BILL =  int(input("enter second number: "))
if BOB > BILL:
    for i in range(BILL,BOB):
        print(i)
else:
    for i in range(BOB,BILL):
        print(i)