var count = 0;
function numberOfItems(arr, item) {
    // Write the code that goes here
    for(let x=0; x<arr.length;x++ ){
        if (arr[x] === item){
           return 1;
        }
        if(Array.isArray(arr[x])){
           numberOfItems(arr[x], item);
        }
    }
  }
  
 
  var arr = [
    25,
    "apple",
    ["banana", "strawberry", "apple", 25]
  ];
  console.log(numberOfItems(arr, 25));
  console.log(numberOfItems(arr, "apple"));