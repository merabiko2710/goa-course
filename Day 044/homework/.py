# day 44:
#      For Loop:

# # 1) Print all integers from 0 to 20 inclusive.
for i in range(21):
    print(i)
# # 2) Print the first 10 natural numbers.
for i in range(11):
     print(i)
# # 3) Print even numbers separately and odd numbers separately from 0 to 100 inclusive.

# # 4) Enter a number to the user and then using a for loop output the sum of all the numbers up to this number (for example, if he enters 10, output the sum of all the numbers up to 10, for example).
# # 5) Write an algorithm that prints multiples of 5 (numbers divisible by 5) from 1 to 50 inclusive
for i in range(1,51):
    if i % 5 == 0:
        print(i)
    
# While Loop:

# 1) Print even numbers up to 20.
numy = 0
num = 20
while num > 0:
    num = num - 1
    numy = numy + 1
    print(numy)

# 2) calculate the sum of numbers from 1 to 10.

# 3) Write a while loop that asks the user to guess a number between 1 and 10 until they get it right. The correct number is 7.
num = "165"
guess = input("enter num :")
while guess != num:  
  guess = input("ENTER THE RIGHT FLIPIN NUMBER :") 
print("corect!!")
# 4) Write a while loop that processes a list of numbers, doubling each number, and prints the new list.

# 5) Write a while loop that repeatedly asks the user to enter a password until the correct password "password123" is entered.
password = "password123"
guess = input("enter password :")
while guess != password:  
  guess = input("DO YOU HAVE A SQURIL'S BRAIN, IN THAT EMPTY HEAD,ENTERR THEE PAAASWOOORD!!! :") 
print("password correct!!")


# If - Else:

# 1) Write an if-else statement that prints "Good morning!" if the current hour is less than 12 and "Good afternoon!"
current_hour = 6
if current_hour < 12:
    print("good afternoon")
else:
    print("good morning")
# 2) Write an if-else statement that checks if a number is even or odd. If the number is even, print "Even"; otherwise, print "Odd."
num = 98
if num % 2 == 0:
    print("even")
else:
    print("odd")

# 3) Create an if-else statement to check if the temperature is above 30 degrees. If it is, print "It's hot outside!"; otherwise, print "It's not too hot."
temperature = 78
if temperature > 30:
    print("it's hot outside")
else:
    print("it's not too hot")
# 4) Create an if-else statement that determines if a person is a teenager. If the age is between 13 and 19 (inclusive), print "You are a teenager!"; otherwise, print "You are not a teenager."
person_age = 19
for i in range(13,20):
    if person_age != i:
        print("not tennager")
    else:
        print("tennager")

