# 5) Write a while loop that repeatedly asks the user to enter a password until the correct password "password123" is entered.
# ახლა ჩვენ უნდა დავწეროთ ციკლი, რომელიც გაუჩერებლად გვთხოვს პაროლის შეყვანას, სანამ არ შევიყვანთ სწორი პაროლი კი არის "password123". ამისთვის გვჭირდება 2 ცვლადი და 1 ციკლი.
#  ( და ცოდნა თავის თავად )ამ ციკლის დახმარებით კი მე - 2 მლანძღავ სეიფს გავაკეთებთ.
password = "password123"
guess = input("enter password: ")
while guess != password:  
  guess = input("DO YOU HAVE A SQURIL'S BRAIN, IN THAT EMPTY HEAD,ENTERR THEE PAAASWOOORD!!! : ") 
print("password correct!!")