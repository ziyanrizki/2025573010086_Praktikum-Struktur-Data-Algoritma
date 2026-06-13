class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = newNode;
        }

        this.size++;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    insertAt(data, index) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.prepend(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        newNode.next = current.next;
        current.next = newNode;
        this.size++;
    }

    delete(data) {
        if (!this.head) return false;

        if (this.head.data === data) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;

        while (current.next) {
            if (current.next.data === data) {
                current.next = current.next.next;
                this.size--;
                return true;
            }

            current = current.next;
        }

        return false;
    }

    search(data) {
        let current = this.head;
        let index = 0;

        while (current) {
            if (current.data === data) {
                return index;
            }

            current = current.next;
            index++;
        }

        return -1;
    }

    getAt(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }

        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        return current.data;
    }

    deleteAt(index) {
        if (index < 0 || index >= this.size) {
            return false;
        }

        if (index === 0) {
            this.head = this.head.next;
            this.size--;
            return true;
        }

        let current = this.head;

        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        current.next = current.next.next;
        this.size--;

        return true;
    }

    indexOf(data) {
        return this.search(data);
    }

    isEmpty() {
        return this.size === 0;
    }

    clear() {
        this.head = null;
        this.size = 0;
    }

    reverse() {
        let prev = null;
        let current = this.head;

        while (current) {
            const next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }

        this.head = prev;
    }

    toArray() {
        const arr = [];
        let current = this.head;

        while (current) {
            arr.push(current.data);
            current = current.next;
        }

        return arr;
    }

    print() {
        if (!this.head) {
            console.log("[list kosong]");
            return;
        }

        let result = "";
        let current = this.head;

        while (current) {
            result += current.next
                ? `[${current.data}] -> `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log(result, `(size: ${this.size})`);
    }
}

const ll = new LinkedList();

console.log("=== append ===");
ll.append(10);
ll.append(20);
ll.append(30);
ll.append(40);
ll.print();

console.log("\n=== prepend ===");
ll.prepend(5);
ll.print();

console.log("\n=== insertAt di indeks 2 ===");
ll.insertAt(15, 2);
ll.print();

console.log("\n=== search ===");
console.log("index nilai 20:", ll.search(20));
console.log("index nilai 99:", ll.search(99));

console.log("\n=== delete 20 ===");
ll.delete(20);
ll.print();

console.log("\n=== reverse ===");
ll.reverse();
ll.print();

console.log("\n=== getAt ===");
console.log("data indeks 0:", ll.getAt(0));
console.log("data indeks 3:", ll.getAt(3));
console.log("data indeks 99:", ll.getAt(99));

console.log("\n=== indexOf ===");
console.log("index nilai 30:", ll.indexOf(30));
console.log("index nilai 999:", ll.indexOf(999));

console.log("\n=== deleteAt(2) ===");
ll.deleteAt(2);
ll.print();

console.log("\n=== isEmpty ===");
console.log(ll.isEmpty());

console.log("\n=== clear ===");
ll.clear();
ll.print();

console.log("isEmpty setelah clear:", ll.isEmpty());