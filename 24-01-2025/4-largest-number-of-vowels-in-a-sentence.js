// Find the word in a sentence which has the largest number of vowels

var result = (sentence) => {
    var maxVowelLengthWord = "";
    var maxVowelLength = 0;
    var eachWord = "";
    var eachWordVowelLength = 0;

    for(let i=0; i<sentence.length(); i++) {
        if(sentence.charAt(i) == '.' || sentence.charAt(i) == ',' || sentence.charAt(i) == '!' || sentence.charAt(i) == '?') continue;

        if(sentence.charAt(i) == ' ') {
            if(eachWordVowelLength >= maxVowelLength) {
                maxVowelLengthWord = eachWordVowelLength;
                eachWordVowelLength = 0;
                maxVowelLengthWord = eachWord;
                eachWord = "";
            }
            
        }

        else {
            eachWord = eachWord+sentence.charAt(i);
            if(sentence.charAt(i) == 'a' || sentence.charAt(i) == 'e' || sentence.charAt(i) == 'i' || sentence.charAt(i) == 'o' || sentence.charAt(i) == 'u' || sentence.charAt(i) == 'A' || sentence.charAt(i) == 'E' || sentence.charAt(i) == 'I' || sentence.charAt(i) == 'O' || sentence.charAt(i) == 'U') eachWordVowelLength++;
        } 
    }

    if(eachWord.length() >= maxVowelLengthWord.length()) {
        maxVowelLengthWord = eachWord;
    }

    return maxword;
}