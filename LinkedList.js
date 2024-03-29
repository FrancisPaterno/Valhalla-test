class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }

    find(value){
        if(!this.head){
            return null
        }

        let curNode = this.head

        while(curNode){
            if(curNode.value ===  value){
                return curNode;
            }
            curNode = curNode.next 
        }
        return null
    }

    insertAfter(value, afterValue){
       const existingNode = this.find(afterValue);
       if(existingNode){
           const newNode = {value:value, next:existingNode.next}
           existingNode.next = newNode
       }
    }

    append(value){
        const newNode = {value:value, next:null}
        if(this.tail){
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if(!this.head){
            this.head = newNode
        }
    }

    prepend(value){
        const newNode = {value:value, next:this.head}
        this.head = newNode
        if(!this.tail){
            this.tail = newNode
        }
    }

    delete(value){
        if(!this.head){
            return null
        }
        let curNode = this.head

        while(this.head && this.head.value === value){
            this.head = this.head.next
        }

        while(curNode.next){
            if(curNode.next.value === value){
                curNode.next = curNode.next.next
            }
            else curNode = curNode.next
        }

        if(this.tail.value === value){
            this.tail = curNode
        }
    }

    toArray(){
        const elements = []
        let curNode = this.head
        while(curNode){
            elements.push(curNode)
            curNode = curNode.next
        }
        return elements
    }

}

const LinkedList1 = new LinkedList();
LinkedList1.append(1)
LinkedList1.append('Hello World')
LinkedList1.append('Francis')
LinkedList1.append('Paterno')
LinkedList1.prepend('First me')
console.log(LinkedList1.toArray())
