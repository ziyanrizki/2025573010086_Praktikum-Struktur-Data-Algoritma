class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    // Big O: O(1)
    append(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.size++;
    }

    // Big O: O(1)
    prepend(data) {
        const newNode = new Node(data);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.size++;
    }

    // Big O: O(n)
    insertAt(data, index) {
        if (index < 0 || index > this.size) return;

        if (index === 0) {
            this.prepend(data);
            return;
        }

        if (index === this.size) {
            this.append(data);
            return;
        }

        const newNode = new Node(data);
        let current = this.head;

        for (let i = 0; i < index; i++) {
            current = current.next;
        }

        newNode.next = current;
        newNode.prev = current.prev;

        current.prev.next = newNode;
        current.prev = newNode;

        this.size++;
    }

    // Big O: O(n)
    delete(data) {
        if (!this.head) return false;

        let current = this.head;

        while (current) {
            if (current.data === data) {

                if (current === this.head) {
                    this.head = this.head.next;

                    if (this.head) {
                        this.head.prev = null;
                    } else {
                        this.tail = null;
                    }
                }
                else if (current === this.tail) {
                    this.tail = this.tail.prev;
                    this.tail.next = null;
                }
                else {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                }

                this.size--;
                return true;
            }

            current = current.next;
        }

        return false;
    }

    // Big O: O(n)
    reverse() {
        let current = this.head;
        let temp = null;

        while (current) {
            temp = current.prev;
            current.prev = current.next;
            current.next = temp;
            current = current.prev;
        }

        temp = this.head;
        this.head = this.tail;
        this.tail = temp;
    }

    // Big O: O(n)
    print() {
        let result = "";
        let current = this.head;

        while (current) {
            result += current.next
                ? `[${current.data}] ⇄ `
                : `[${current.data}]`;

            current = current.next;
        }

        console.log("Maju :", result);
    }

    // Big O: O(n)
    printReverse() {
        let result = "";
        let current = this.tail;

        while (current) {
            result += current.prev
                ? `[${current.data}] ⇄ `
                : `[${current.data}]`;

            current = current.prev;
        }

        console.log("Mundur:", result);
    }
}

const dll = new DoublyLinkedList();

dll.append(10);
dll.append(20);
dll.append(30);
dll.prepend(5);

dll.print();
dll.printReverse();

dll.insertAt(15, 2);
dll.print();

dll.delete(20);
dll.print();

dll.reverse();
dll.print();
dll.printReverse();