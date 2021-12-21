// return removeRecursive(word.substring(0, index) + word.substring(index +1, word.length()), ch);
//     }
// }
console.log(removeRecursive('abcahkgafkfkf', 'a'));

function removeRecursive(word, char){
    const index = word.indexOf(char);
    if(index === -1){
        return word;
    }

    return removeRecursive(word.substring(0, index) + word.substring(index+1, word.length), char);
}