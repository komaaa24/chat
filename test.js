class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    addBack(val) {
        let root = this.head;
        while (root.next) {
            root = root.next;
        }
        root.next = new Node(val);
    }

    addFront(val) {
        let node = new Node(val);
        node.next = this.head;
        this.head = node;
    }

    clear() {
        this.head = null;
    }

    getLast() {
        let node = this.head;
        let last;
        while (node) {
            last = node;
            node = node.next;
        }
        return last;
    }

    getFirst() {
        return this.head;
    }

    print() {
        let root = this.head;
        while (root) {
            console.log(root.val);
            root = root.next;
        }
    }
    reverse() {
        let head = this.head;
        let temp = head;
        while (head) {
            head.next = temp;
            temp = temp.next;
        }
    }
}

let list = new LinkedList(null);

// console.log(list);

// for (let i = 1; i <= 10; i++) {
//     list.addBack(i);
// }


// list.addBack(new Node(9));

// // list.reverse()

// list.print();























function validatePhone(phone) {
    let validPhoneNumber = 0;
    if (phone.length == 9 && !isNaN(Number(phone))) {
        return Number(phone);
    }
    else if (phone.startsWith("+998") && phone.length == 13) {
        validPhoneNumber = Number(phone.slice(4));
        return validPhoneNumber;
    }
    else if (phone.replace(/\d/, "").length > 1) {
        return false;
    } else if (isNaN(Number(phone))) {
        return false;
    } else {
        return Number(phone);
    }
}


// Usage:
var phone = "904567890";

if (validatePhone(phone)) {
    console.log("Valid phone number");
} else {
    console.log("Invalid phone number");
}






