#write your code here
def echo word
    return word
end

def shout word
    return word.upcase
end

def repeat word, times=2
    t = times - 1
   return word + ((" " + word) * t)
end 

def start_of_word word, times
    return word[0..times-1]
end

def first_word (str)
    array = str.split(" ")
    return array.first
end

def titleize words
    array = words.split(" ")
    no_caps = ["and", "or", "the", "over", "to", "the", "a", "but"]
    array[0] = array[0].capitalize
    array.map.with_index(1) do |word| no_caps.include?(word) ? word : word.capitalize end.join(" ")
end