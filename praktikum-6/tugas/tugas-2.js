class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

function palindromeLL(head) {
    const arr = [];
    let current = head;

    while (current) {
        arr.push(current.data);
        current = current.next;
    }

    let kiri = 0;
    let kanan = arr.length - 1;

    while (kiri < kanan) {
        if (arr[kiri] !== arr[kanan]) {
            return false;
        }

        kiri++;
        kanan--;
    }

    return true;
}

function hapusNDariAkhir(head, n) {
    const dummy = new Node(0);
    dummy.next = head;

    let fast = dummy;
    let slow = dummy;

    for (let i = 0; i <= n; i++) {
        if (!fast) {
            return head;
        }

        fast = fast.next;
    }

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }

    slow.next = slow.next.next;

    return dummy.next;
}

function tengahLinkedList(head) {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}

function buatList(arr) {
    if (arr.length === 0) {
        return null;
    }

    const head = new Node(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new Node(arr[i]);
        current = current.next;
    }

    return head;
}

function printList(head) {
    let current = head;
    let hasil = "";

    while (current) {
        hasil += current.next
            ? `[${current.data}] -> `
            : `[${current.data}]`;

        current = current.next;
    }

    console.log(hasil);
}

console.log("=== PALINDROME LINKED LIST ===");

console.log(
    "[1,2,3,2,1] :",
    palindromeLL(buatList([1, 2, 3, 2, 1]))
);

console.log(
    "[1,2,2,1] :",
    palindromeLL(buatList([1, 2, 2, 1]))
);

console.log(
    "[1,2,3] :",
    palindromeLL(buatList([1, 2, 3]))
);

console.log("\n=== HAPUS N DARI AKHIR ===");

let list1 = buatList([1, 2, 3, 4, 5]);
console.log("Sebelum:");
printList(list1);

list1 = hapusNDariAkhir(list1, 2);
console.log("Sesudah hapus n=2:");
printList(list1);

let list2 = buatList([10, 20, 30, 40]);
console.log("\nSebelum:");
printList(list2);

list2 = hapusNDariAkhir(list2, 1);
console.log("Sesudah hapus n=1:");
printList(list2);

let list3 = buatList([7, 8, 9]);
console.log("\nSebelum:");
printList(list3);

list3 = hapusNDariAkhir(list3, 3);
console.log("Sesudah hapus n=3:");
printList(list3);

console.log("\n=== NODE TENGAH ===");

let tengah1 = buatList([1, 2, 3, 4, 5]);
console.log(
    "[1,2,3,4,5] ->",
    tengahLinkedList(tengah1).data
);

let tengah2 = buatList([1, 2, 3, 4, 5, 6]);
console.log(
    "[1,2,3,4,5,6] ->",
    tengahLinkedList(tengah2).data
);

let tengah3 = buatList([99]);
console.log(
    "[99] ->",
    tengahLinkedList(tengah3).data
);