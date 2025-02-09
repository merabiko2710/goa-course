# 4) Write a while loop that processes a list of numbers, doubling each number, and prints the new list.
nums = [154 , 1976 , 987]
double_num = []
index = 0
while index < len(nums):
    double_num.append (nums[index] * 2)
    index += 1
    print (double_num)
