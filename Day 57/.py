def go_shopping ():
    print("ადექი და გადი გარეთ")
    print("გაყევი მაღაზიის გზას ან თუ შორს არის გააკეტე შემდეგი:")
    # შორ მაღაზიასთან მისვლა
    print("აიღე შენი ტელეფონი")
    print("გახსენი ტაქსის ნებისმიერი აპლიკაცია ან დარეკე ტაქსში")
    print("უთხარი შენი მისამართი და დანიშნულების ადგილი")
    print("დაელოდე მოსვლას და გაიგე ტაქსის მანქანის ფერი და ნომერი")
    print("შემდეგ დაამტკიცე რომ შენი ტაქსია")
    print("შედი მანქანაში")
    # ახლო მაღაზიასტან მისვლა
    print("დააკვირდი სად არის მაღაზია და მასთან მიდი")
    # ორივე შემთხვევის გამოსავალი
    print("შედი მაღაზიაში")
    print("აირჩიე პროდუქტი(ები)")
    print("მიდი სალაროსთან და იკიტხე ფასი ან თუ იცი რა ღირს მაშინვე მიეცი მისი საფასური")
    print("გამყიდველი გაატარებს და შემდეგ მოგცემს პროდუქტს(ებს)")
    print("აიღე პროდუქტი(ები) და გაემგზავრე სახლში !")



def name_and_hello ():
    name=input("whats your name ?: ")
    print("ok,hello" + " " + name)


def num_and_sum ():
    num1 = int(input("enter num: "))
    num2 = int(input("enter nother one: "))
    print(num1 + num2)


def caculator ():
    num1 = int(input("enter num: "))
    num2 = int(input("enter nother one: "))
    mathematical_operation= input("choose mathematical_operation: ")

    if mathematical_operation == '+':
        print(num1 + num2)
    elif mathematical_operation == '-':
        print(num1 - num2)
    elif mathematical_operation == '*': 
        print(num1 * num2)
    elif mathematical_operation == '/':
        print(num1 / num2) 
    elif mathematical_operation == '**':
        print(num1 ** num2)
    elif mathematical_operation == '//':
        print(num1 // num2)
    else:
        print("wrong sintax cant do mathematical_operation")

caculator()



