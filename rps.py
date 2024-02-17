import random
moves=["Rock","Scissor","Paper"]
while True:
    ucount=0
    ccount=0
    uc=int(input('''
Game start...
1 Yes
2 No|Exit                 
                 '''))
    if uc<=1:
        for a in range(1,4):
            userinput=int(input('''
1 Rock
2 Scissor
3 Paper                                
                                '''))
            if userinput==1:
                un="Rock"
            elif userinput==2:
                un="Scissor"
            elif userinput==3:
                un="Paper"  
            cn=random.choice(moves)
            if cn==un:
                print("Computer value",cn)
                print("User value",un)
                print("Game draw")
                ucount=ucount+1
                ccount=ccount+1
            elif (un=="Rock" and cn=="Scissor") or (un=="Paper" and cn=="Rock") or (un=="Scissor" and cn=="Paper"):
                print("Computer value",cn)
                print("User value",un)
                print("You are win")
                ucount=ucount+1
            else:
                print("Computer value",cn)
                print("User value",un)
                print("Computer win")
                ccount=ccount+1
            
            if ucount==ccount:
                print("Final Game Draw")
                print("user value",ucount)
                print("computer value",ccount)
            elif ucount>ccount:
                print("Final You win")
                print("user value",ucount)
                print("computer value",ccount)
            else:
                print("Final Computer win")
                print("user value",ucount)
                print("computer value",ccount)
        else:
            break    
            