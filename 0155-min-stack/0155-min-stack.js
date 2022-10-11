
class MinStack  {
    constructor() {
        this.stack = [];
        this.minStack = [Infinity];
    }

    push(val) {
        this.stack.push(val);
        this.minStack.push(Math.min(this.minStack.at(-1), val));
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() {
        return this.stack.at(-1);
    }

    getMin() {
        return this.minStack.at(-1);
    }
};


// normal[1,2,2,0]   min[1,1,1,0]

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */