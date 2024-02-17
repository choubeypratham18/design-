from turtle import*
import colorsys

bgcolor("black")
speed(0)
pensize(2)
setup(width=700,height=800,startx=2)

h=0
n=88

for i in range(110):
    c=colorsys.hsv_to_rgb(h,1,0.9)
    color(c)
    h+=1/n
    left(154)
    forward(i)
    for j in range(3):
        left(55)
        forward(i)
        
mainloop()        