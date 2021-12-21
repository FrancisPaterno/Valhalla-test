var counter = 0;
permutation('','abcdef')
console.log(counter);
function permutation(perm, word){
    if(word === ''){
        console.log(perm + word);
        counter++;
    }
    else{
        for(let i=0; i<word.length; i++){
            permutation(perm+word.charAt(i),word.substring(0,i)+word.substring(i+1, word.length));
        }
    }
}