# 3) შექმენი ფუნქცია, რომელიც შემოატანინებს მომხარებელს ორ ციფრს და დააბრუნებს მათ შორის უმცირესს
def met():
    input1=int(input("enter num"))
    input2=int(input("enter num"))
    if input1 > input2:
        print(input2)
    else:
        print(input1)
met()