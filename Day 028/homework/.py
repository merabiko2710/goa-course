#you are a detective . try to find the criminal in miami.
suspect1 = "Many Pat "
suspect2 = "Jeffery Dahmer" 
suspect3 = "Peter Lincon"
suspect4 = "Hubert Mc. Donald"
Many_Pat= 23
Jeffery_Dahmer=63
Peter_Lincon=9
Hubert_McDonald=47

if Many_Pat > Peter_Lincon:
    print ("maybe_pat")
    maybe_pat=32
else:
    print ("maybe_peter")
    maybe_peter=31

if maybe_pat < Jeffery_Dahmer:
    print ("maybe_Dahmer")
    maybe_Dahmer = 96
else:
    print ("maybe_many_pat")
    maybe_many_pat= 95

if maybe_Dahmer < Hubert_McDonald:
    print("the criminal is Hubert Mcdonald")
else:
    print("the criminal is Jeffery Dahmer")


