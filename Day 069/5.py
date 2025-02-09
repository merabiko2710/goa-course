# 5) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს და თუ ის დადებითი იქნება, დააბრუნებს "დადებითი", და თუ უარყოფითი იქნება, "უარყოფით
input = int(input("enter num: "))
def kit(intput):
    if intput%2==0:
        print("even")
    else:
        print("odd")
kit(input) 