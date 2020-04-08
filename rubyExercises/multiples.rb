def multiple number
    num = number - 1
    sum = 0

    while num > 0
        if num > 1000
            puts "Choose a number below 1000"
            exit
        elsif  num %  5 == 0 || num % 3 == 0
            sum = sum + num
            num = num - 1
        else
            num = num - 1
        end
        
    end
    puts sum
    
    
end

multiple 99