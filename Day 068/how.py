# 2) შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვების სია შემდეგ გამოიტანეთ ამ ყველა რიცხვის ჯამი
def la_lista():
    list = [1, 568, -1, 545, 45,87, 12, 54]
    sum = 0
    for i in range(len(list)):
        sum += list[i]
    print(sum)
        

la_lista()