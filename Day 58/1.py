# 1)შექმენით ფუნქცია, რომელშიც იქნება რიცხვებით სავსე სია, ფუნქციამ უნდა გამოითვალოს ამ სიაში არსებული რიცხვების ჯამი]
def la_lista():
    list = [1, 568, -1, 545, 45,87, 12, 54]
    sum = 0
    for i in range(len(list)):
        sum += list[i]
    print(sum)
        

la_lista()