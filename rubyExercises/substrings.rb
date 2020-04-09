dict = ["below","down","go","going","horn","how","howdy","it","i","low","own","part","partner","sit"]

def substrings (array)
    newArray = array.split(" ")
    
    new = newArray.downcase.gsub(/\W+/, ' ')
    puts new
end
substrings("Hello, what is the limit?!")