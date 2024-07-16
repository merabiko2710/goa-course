# # 4) Enter a number to the user and then using a for loop output the sum of all the numbers up to this number (for example, if he enters 10, output the sum of all the numbers up to 10, for example).
# ახლა ჩვენ უნდა გავაკეთოთ კოდი რომელიც მომხმარებელს შეეკითხება რიცხვს შემდეგ იმ რიცხვს იხმარს რომ გაიგოს მისი ჯამი.
#  ამისტვის ჩვენ უნდა დავწეროთ კოდი რომელსაც შეუძლია მომხმარებელს ნებისმიერი რამ შეეკითხოს და შემდეგ მეორე კოდით უნდა გავიგოთ ჯამი.
# ამის დახმარებით კი ტერმინალში (სადაც გამოდის ნამუშევარის შედეგები) დაწერს რიცხვის ჯამს.
sum = int(input("noombers eenter noombers: "))
for i in range(sum):
    sum = sum + i
    print(sum)