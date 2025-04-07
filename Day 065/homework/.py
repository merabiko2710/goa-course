def fn(name ):
 return name [0]

fn(fn("merabi"))
 

def reverse_list(arr):
    print(arr[::-1])

reverse_list([1,2,3,4])


def odd_and_even(arr):
    odd_list = []
    even_list = []
    for i in arr:
        if i %2 == 0:
            even_list.append(i)
        else:
            odd_list.append(i)
    print(odd_list)
    print(even_list)

odd_and_even([1,2,3,4])

def min_name(name, lastname):
    print(name[0] + '.' + lastname[0])

min_name('levani','samsonidze')

def my_list(arr):
    new_list = []
    for i in arr:
        new_list.append(str(i))

    print(new_list)
my_list([1,2,3,4])
