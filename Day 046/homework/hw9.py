# 4) Write a while loop that processes a list of numbers, doubling each number, and prints the new list.
# ახლა ჩვენ უნდა დავწეროთ ციკლი, რომელიც აპროცესებს რიცხვების სიას, აორმაგებს რიცხვებს და ბეჭდავს ჩვენს ახალ სიას.
# ამისთვის ჩვენ უნდა დავწეროთ კოდი რომლითაც ვქმნით 2 სიას და 1 ცვლადს. პირველ სიაში არის რიცხვები, შემდეგ ციკლით პირველ სიაში ვაორმაგებთ რიცხვებს, მერე ამ გაორმაგებულ რიცხვებს
# გადავიტანთ მე - 2 სიაში. ამ სიას კი ტერმინალში გამოვიტანთ.
nums = [154 , 1976 , 987]
double_num = []
index = 0
while index < len(nums):
    double_num.append (nums[index] * 2)
    index += 1
    print (double_num)
