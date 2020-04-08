def caesar_cipher(word, number)
    num = number.to_i
    array = word.split("")
    alphabet_array = *('a'..'z')
    alpha = alphabet_array.join("")

    array.map do |letter|
       index = alpha.index(letter)
       newIndex = index.to_i + num.to_i
       if newIndex > 26 
        newIndex = newIndex - 26
       end
       newletter = alpha[newIndex]
       letter = newletter
    end.join("")
end

puts caesar_cipher("abcdefz", 5)




