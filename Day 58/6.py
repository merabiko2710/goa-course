# 5) შექმენით დროში მოგზაურობის ფუნქცია რომელიც მომხმარებელს შეეკითხება მის ახლანდელ ასაკს და ამჟამინდელ წელს, ასევე რამდენი ხანით სურს დროშ მოგზაურობა შემდეგ კი ფუნქციამ უნდა დააბრუნოს დაბეჭდოს დროში მოგზაურობის შემდეგ რომელი წელი იქნება და რამდენი წლის იქნება მომხმარებელი, ასევე დაამატეთ რომ მომხმარებელმა მიიღოს გადაწყვეტილება წარსულში სურს დრში მოგზაურობა თუ მომავალშ
def time_travel():
    age = int(input("how old are you"))
    time_traveler = input("past or the future?")
    if time_traveler == "past":
        time=int(input("how much back?"))
        print(age - time)
    else:
        time=int(input("how much forward?"))
        print(age + time)

time_travel()

