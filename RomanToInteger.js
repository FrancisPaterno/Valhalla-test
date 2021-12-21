console.log(romanToInt('DCXXI') )

function romanToInt(s) {
    let num = 0;
    for(let i=0; i < s.length; i++){
        var x = i-1

         if(i === 0)
            num += getRomanVal(s[i])

        if(i>0){
            if(getRomanVal(s[x])<getRomanVal(s[i])){
                num += getRomanVal(s[i]) - getRomanVal(s[x]) - getRomanVal(s[x])
            }
            else{
                num += getRomanVal(s[i])
            }
        }
        
    }
    return num
};

function getRomanVal(s){
    switch(s.toUpperCase())
       {
            case 'I':
                return 1
           case 'V':
                return 5
           case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
               break; 
       }
}