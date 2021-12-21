console.log('isAnagram',isAnagram('seed', 'sedw'));
console.log('iAnagram',iAnagram('Francis','sicnarf'));
console.log('checkAnagram',checkAnagram('Francis','sicnarf'));

function isAnagram(word, anagram){
    if(word.length !== anagram.length ){
        return false;
    }
    for(let i=0; i<word.length; i++){
        const index = anagram.indexOf(word[i]);

        if(index !== -1){
            anagram = anagram.substring(0,index) + anagram.substring(index +1, anagram.length);
        }
    }
    return anagram === '';
}

function iAnagram(word, anagram){
    const s1 = word.toLowerCase().split('').sort().join('')
    const s2 = anagram.toLowerCase().split('').sort().join('')
    return s1 === s2;
}

function checkAnagram(word, anagram){
    const builder = [];
    const arrAnagram = anagram.split('');

    for(let i=0; i<word.length; i++){
        const index = anagram.toLowerCase().indexOf(word[i].toLowerCase());
        if(index !== -1){
            arrAnagram.splice(index, 1);
        }
        else return false;
    }
    return arrAnagram.length === 0;
}           