# 5) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელიც მიიღებს პარამტეტრად მომხმარებლის შემოტანილ რიცხვს ფუნქციამ უნდა დააბრუნოს ეს რიცხვი არის თუ არა ხუთის ჯერადი
number = int(input("number1"))
def five(intsa):
    if intsa % 5 == 0:
        print("intsa GOAelia")
    else:
        print("intsa novatoristia")
five(number)