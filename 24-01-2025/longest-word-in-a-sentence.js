// Find the longest word in a sentence

var result = (sentence) => {
    var maxLengthWord = "";
    var eachWord = "";

    for(let i=0; i<sentence.length(); i++) {
        if(sentence.charAt(i) == '.' || sentence.charAt(i) == ',' || sentence.charAt(i) == '!' || sentence.charAt(i) == '?') continue;

        if(sentence.charAt(i) == ' ') {
            if(eachWord.length() >= maxLengthWord.length()) {
                maxLengthWord = eachWord;
                eachWord = "";
            }
        }

        else eachWord = eachWord+sentence.charAt(i);
    }

    if(eachWord.length() >= maxLengthWord.length()) {
        maxLengthWord = eachWord;
    }

    return maxLengthWord;
}