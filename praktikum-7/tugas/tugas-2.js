class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);

        if (
            this.minStack.length === 0 ||
            value <= this.getMin()
        ) {
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return null;
        }

        const removed = this.stack.pop();

        if (removed === this.getMin()) {
            this.minStack.pop();
        }

        return removed;
    }

    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }

        return this.minStack[this.minStack.length - 1];
    }

    top() {
        if (this.stack.length === 0) {
            return null;
        }

        return this.stack[this.stack.length - 1];
    }
}

const ms = new MinStack();

ms.push(5);
console.log("getMin() =", ms.getMin()); // 5

ms.push(3);
console.log("getMin() =", ms.getMin()); // 3

ms.push(7);
console.log("getMin() =", ms.getMin()); // 3

ms.push(2);
console.log("getMin() =", ms.getMin()); // 2

ms.pop();
console.log("getMin() =", ms.getMin()); // 3

ms.pop();
console.log("getMin() =", ms.getMin()); // 3