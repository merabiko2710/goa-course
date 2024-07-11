
# 5) Write an algorithm that prints multiples of 5 (numbers divisible by 5) from 1 to 50 inclusive
for i in range(1,51):
    if i % 5 == 0:
        print (str(i) + " is mutible of five" )
    else:
        print(str(i)  +" is not mutible of five")