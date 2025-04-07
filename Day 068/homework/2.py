# 2) შექმენით ფუნქცია რომელსაც გადაეცემა რიცხვების სია შემდეგ გამოიტანეთ ამ ყველა რიცხვის ჯამი
my_list = [3,5,123,0,1234,875,65]

def list_sum(list):
    sum_of_list = 0
    for i in range(len(list)):
        sum_of_list += list[i]
    print(sum_of_list)
        
        
list_sum(my_list)