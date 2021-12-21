const rl = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question('Enter brackets: ', brackets=>{
    let ans=''
    do{
        validateBrackets(brackets);
        console.log('Do you want to try again?');
        ans = readLine();
    }while(ans.toUpperCase()==='Y');
    //rl.close();
});

const validateBrackets = (brackets)=>{
    if(validateInput(brackets)){
        const arr = [];
        for(let i=0; i<brackets.length; i++){
            switch(brackets[i]){
                case '(':
                    arr.push(brackets[i]);
                    break;
                case '[':
                    arr.push(brackets[i]);
                    break;
                case '{':
                    arr.push(brackets[i]);
                    break;
                default:
                    if(arr[arr.length-1] === '(' && brackets[i] ===')'){
                        arr.pop();
                    }
                    if(arr[arr.length-1] === '{' && brackets[i] === '}'){
                        arr.pop();
                    }
                    if(arr[arr.length-1] === '[' && brackets[i] === ']'){
                        arr.pop();
                    }
            }
        }
        if(arr.length === 0){
            console.log('Input is valid.');
        }
        else{
            console.log('Input is invalid');
        }
    }
    else console.log('Input is invalid');
}
function validateInput(input){
    let res = true;
    let brackets = '{[()]}';
    if(input.length %2 !==0){
        res = false;
    } 

    for(let i=0; i<input.length; i++){
        let b = [];
        for(let j=0; j<brackets.length; j++){
           if(input[i] === brackets[j]) {
               b.push(input[i]);
               break;
           }
        }
        if(b.length === 0){
            res = false;
            break;
        }
    }
    
    return res;
}