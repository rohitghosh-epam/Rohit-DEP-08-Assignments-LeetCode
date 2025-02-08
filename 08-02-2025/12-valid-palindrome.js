
function valid_palindrome(s) {
    let newString = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
    newString = newString.split('').reverse().join('');
    return (newString === s);
}