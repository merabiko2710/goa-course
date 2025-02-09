
from turtle import *
#we want to pant a house
#step 1: draw a square
width(10)
color("red")
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
forward(200)
left(90)
#end of square
#drawing a door

begin_fill()
forward(70)
color("orange")
left(90)
forward(100) #height of the door
right(90)
forward(50)
right(90)
forward(100)
end_fill()
#end of door
penup()
goto(200, 200)
pendown()
#drawing a roof
color("yellow")
begin_fill()
right(150)
forward(200)
left(120)
forward(200)
end_fill()
#end of roof
#drawing a window
penup()
color("blue")
begin_fill()
goto(170, 170)
pendown()
right(60)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
left(90)
forward(35)
end_fill()
exitonclick()












