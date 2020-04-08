class OrangeTree

    def initialize
        @height = 0
        @oranges = 0
        @months = 0
        @picked = 0
    puts "You just planted an Orange tree!"
    end

    def count
        puts @oranges.to_s + "are on your tree."
        @months = @months + 1
    end

    def pick
        if @oranges > 5
            @picked = 2
            puts "You picked " + @picked.to_s + " oranges"
            @months = @months + 1
        elsif @oranges > 0 
            @picked = 1
            puts "You picked " + @picked.to_s + " orange"
            @months = @months + 1
        else @picked = 0
            puts "Sorry, there are not no oranges on your tree!"
            @months = @months + 1
        end
    end

    def water
        @months = @months + 1
        addOranges
        month
        puts "Hmmm tasty!"
    end



   

        def month
            if @months == 2
                @height = @height + 1
                oneYearPasses
            end
        end
            

        def oneYearPasses
                    @oranges = 0
                    @months = 0
                puts "Your tree is " + @height.to_s + "metres!"

        end
        

        def addOranges
            if @height == 5
                puts "Your tree has died!"
                exit
            elsif @height >= 2
                @oranges = @oranges + 4
                puts "There are " + @oranges.to_s + " on your tree"
            else 
                @oranges = @oranges + 1
                puts "There are " + @oranges.to_s + " on your tree"
            end
        end
end

myTree = OrangeTree.new
function = gets.chomp
while function != "exit"
    if function == "water"
        myTree.water()
        function = gets.chomp
    elsif function == "count"
        myTree.count()
        function = gets.chomp
    elsif function == "pick"
        myTree.pick()
        function = gets.chomp
    else function = gets.chomp 
    end
end