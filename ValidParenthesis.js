class ValidParenthesis{
    constructor(){
        this.map = new Map();
        this.map.set(')', '(')
        this.map.set('}', '{')
        this.map.set(']', '[')
    }

    isValidString(s){
        let stack = []
        for(let i=0; i<s.length; i++){
            let c = s[i]
            if(this.map.has(c)){
                let topEl = stack.length === 0?'#': stack.pop()
                if(topEl !== this.map.get(c)){
                    return false
                }
            }
            else stack.push(s[i])

           

        }
        return stack.length === 0;
    }

    display(){
        console.log(this.map)
    }
}

const vp = new ValidParenthesis()
vp.display();
console.log(vp.isValidString('(())[]{}}'))