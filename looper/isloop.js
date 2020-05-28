'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
    let currentNode = linkedlist.head
    while (currentNode.next != null && currentNode.next.previous == currentNode){
        currentNode = currentNode.next
    }
    if (currentNode.next != null) {
        return true
    } else {
        return false
    }
};

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop