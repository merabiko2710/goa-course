
# 5) მომხმარებელს შემოატანინეთ რიცხვი შემდეგ შექმენით ფუნქცია რომელიც მიიღებს პარამტეტრად მომხმარებლის შემოტანილ რიცხვს ფუნქციამ უნდა დააბრუნოს ეს რიცხვი არის თუ არა ხუთის ჯერადი 
num = int(input("num"))
def five(jumberiko):
    if jumberiko % 5 == 0:
        print("jumberiko GOAelia")
    else:
        print("jumberiko novatoristia")
five(num)
