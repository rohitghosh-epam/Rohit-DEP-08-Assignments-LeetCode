
function removeDuplicate(arr) {
    let result = [];
    for(let element of arr) {
        if(result.indexOf(element) === -1) result.push(element);
    }
    return result;
}