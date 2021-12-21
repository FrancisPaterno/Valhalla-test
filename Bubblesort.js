function bubblesort(array){
    const arr = array.slice();
    for(let i=0; i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr;
}

let array = [2,4,3,4,5,4,5,5,7,9,90,80,56,54,2];
console.log(bubblesort(array));
console.log(array);