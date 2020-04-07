#write your code here
def translate word
    splitWord = word.split(" ")
    splitWord.map do |wordy|
        sub = wordy[0]
        sub1 = wordy[0..1]
        sub2 = wordy[0..2]
        vowels = "aeiou".chars
        longVowels = ["ch", "thr", "sch", "qu", "squ", "br", "th"]
        if wordy == wordy.capitalize 
            if vowels.include? wordy[0]
                wordy = wordy.capitalize + "ay"
            elsif longVowels.include? wordy[0..2].downcase
                wordy = wordy[3...].capitalize + sub2.downcase + "ay"
            elsif longVowels.include? wordy[0..1].downcase
                wordy = wordy[2...].capitalize + sub1.downcase + "ay"
            else
                wordy = wordy[1...].capitalize + sub.downcase + "ay"
            end
        else
            if vowels.include? wordy[0]
                wordy = wordy + "ay"
            elsif longVowels.include? wordy[0..2]
                wordy = wordy[3...] + sub2 + "ay"
            elsif longVowels.include? wordy[0..1]
                wordy = wordy[2...] + sub1 + "ay"
            else
                wordy = wordy[1...] + sub + "ay"
            end
        end
    end.join(" ")
end