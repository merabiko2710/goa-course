# 1) მომხმარებელს შემოატანინეთ სახელი და გვარი, რასაც შემდეგ გადაუვლით for loop-ით და შემოტანილი სახელისა და გვარის თითოეულ ასოს ცალ-ცალკე გამოიტანთ ტერმინალში;
name = "saba zviadauri"
for char in name:
    print(char)
# 2) მომხმარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ ამ რიცხვის თითოეული ციფრი;
namesd =input("mome ricxvi: ")
for char in namesd:
    print(char)
# 3) მომხმარებელს შემოატანინეთ რიცხვი და დაბეჭდეთ რიცხვები მომხმარებლის შემოტანილი რიცხვიდან 0-მდე. (მაგ. input = 3. output: 3 2 1 );
names = int(input("mome ricxvi: "))
while names >= 1:
    names -= 1
    print(names)

