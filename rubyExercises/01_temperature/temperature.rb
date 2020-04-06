#write your code here
def ftoc temp   
    if temp == 32
        return 0
    else
        return (5.0/9.0)*(temp-32)
    end
end

def ctof temp
    return (9.0/5.0) * temp + 32
end


ftoc 32
ftoc 212
ftoc 98.6
ftoc 68
ctof 0
ctof 100
ctof 20
ctof 37