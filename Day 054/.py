# შექმენით პროგრამა რომელშიც გექნებათ ხილის სია კალათა (list), შემდეგ მომხარებელს
#  შემოატანინეთ თავისი საყვარელი ხილი (input), for ციკლის საშვალებით შეამოწმეთ არის
#  თუ არა ეს ხილი სიაში პირობითი განცხადების საშვალებით (if-else), თუ არის
#  დაუბეჭდეთ "Good choice" თუ არ არის "Fruit not in basket
basket = ["apple","peach","grapes","banana"]

fav_fruit = input("whats is your favourite fruit ? :")

for fruit in basket:
    if fav_fruit == fruit:
        print("good choice")
        