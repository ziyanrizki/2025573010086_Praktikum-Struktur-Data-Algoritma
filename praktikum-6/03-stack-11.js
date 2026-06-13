class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    prepend(data) {
        const newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    removeHead() {
        if (!this.head) {
            return null;
        }

        const value = this.head.data;
        this.head = this.head.next;
        this.length--;

        return value;
    }

    getHead() {
        return this.head ? this.head.data : null;
    }

    isEmpty() {
        return this.length === 0;
    }

    size() {
        return this.length;
    }

    print() {
        if (!this.head) {
            console.log("[stack kosong]");
            return;
        }

        let current = this.head;
        let result = "";

        while (current) {
            result += current.next
                ? `[${current.data}] -> `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log(result);
    }
}

class Stack {
    constructor() {
        this.list = new LinkedList();
    }

    push(data) {
        this.list.prepend(data);
    }

    pop() {
        return this.list.removeHead();
    }

    peek() {
        return this.list.getHead();
    }

    isEmpty() {
        return this.list.isEmpty();
    }

    size() {
        return this.list.size();
    }

    print() {
        this.list.print();
    }
}

const stack = new Stack();

console.log("=== PUSH ===");
stack.push("Buka Aplikasi");
stack.push("Ketik Dokumen");
stack.push("Simpan");
stack.push("Cetak");

stack.print();

console.log("\nTop:", stack.peek());
console.log("Size:", stack.size());

console.log("\n=== UNDO ===");
console.log("Undo:", stack.pop());
console.log("Undo:", stack.pop());

stack.print();

console.log("\nTop sekarang:", stack.peek());
console.log("Size sekarang:", stack.size());

console.log("\n=== PUSH AKSI BARU ===");
stack.push("Export PDF");

stack.print();

console.log("\n=== KOSONG? ===");
console.log(stack.isEmpty());

console.log("\n=== HAPUS SEMUA ===");
while (!stack.isEmpty()) {
    console.log("Pop:", stack.pop());
}

console.log("Kosong?", stack.isEmpty());