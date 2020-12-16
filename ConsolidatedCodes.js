//Here is all the codes from question 1 through 5.
//To run each test you may copy each and run on new JS file.
//IDE used: VSCode


//Question 1:

const rl1 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl1.question("Enter some words:", words=>{
    let arrStr = words.split(' ')
    let reverseStr = '';
    for(var i=arrStr.length-1; i>=0; i--){
        reverseStr += `${arrStr[i]} `
    }
    console.log(reverseStr)
    rl1.close();
});

//Question 2:
const rl2 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl2.question("Enter an array of integers:", arrInput=>{
    let arrInt = JSON.parse(arrInput);
    console.log(arrInt)
    let highest, lowest;
    for(var i=0; i<arrInt.length;i++){

        if(i===0){
            highest = arrInt[i]
            lowest = arrInt[i]
        }
        else{
            if(highest<arrInt[i]){
                highest = arrInt[i]
            }

            if(lowest>arrInt[i]){
                lowest = arrInt[i]
            }
        }
    }
    console.log('Highest:',highest)
    console.log('Lowest:',lowest)
    rl2.close();
});

//Question 3:
const rl3 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});


rl3.question('Enter array of integers:', arr=>{
    var arrInt = JSON.parse(arr)
    for(var i=arrInt.length-1; i>=0;i--){
       for(var j=1; j<=i; j++){
           if(arrInt[j-1] > arrInt[j]){
               var tmp = arrInt[j-1]
               arrInt[j-1] = arrInt[j]
               arrInt[j]=tmp
           }
       }
    }
    rl3.close()
    console.log(arrInt);
});

//Question 4:
const rl4 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl4.question("Enter string:", word=>{
    var res = null;
    const len = word.length
    var gap = len;
    for(var i=0; i<len; i++){
        for(var j=0;j<len;j++){
            if(word[i] === word[j] && i !==j ){
                if(Math.abs(i-j) < gap){
                    gap = Math.abs(i-j);
                    res = word[j]
                    rl4.close();
                    break
                }
               
            }
        }
    }
    rl4.close()
    console.log(`\"${word}\" => \"${res}\"`)
});

//Qustion 5:
const rl5 = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

rl5.question("Enter an array of integers:",arr=>{
    let len = arr.length
    let arrNum = JSON.parse(arr)
    res = 'No'
    for(var i=0;i<len;i++){
        for(var j=0; j<len; j++){
            if(i !== j){
                if(i !==j && arrNum[i]+arrNum[j] === 8 ){
                    res='Yes'
                    rl5.close();
                    break
                }
            }
        }
    }
    console.log(`${arrNum} Sum = 8 ${res}`);
    rl5.close();
}); 
