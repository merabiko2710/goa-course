# 6) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს და თუ ის დადებითი იქნება, დააბრუნებს "დადებითი", და თუ უარყოფითი იქნება, "უარყოფითი"

number_1= int(input("num"))
def func(number):
    if number > 0:
        print("positive")
    else:
        print("negative")
func(number_1)