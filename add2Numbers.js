/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addValue = 0;
let count = 0;
var addTwoNumbers = function(l1, l2) {
    let firstNode = new ListNode(0);
    firstNode.next = getNextNode(l1, l2)
    addValue = 0;
    return firstNode.next;
};

const getNextNode = function (l1, l2) {
    let newNode = null;
    if (l1 !== null || l2!== null) {
      newNode = createNewNode(l1, l2);
      l1 = (l1 && l1.next) || null;
      l2 = (l2 && l2.next) || null;
      newNode.next = getNextNode(l1, l2);
    } else if (addValue !== 0) {
      newNode = new ListNode(addValue);
    }
    return newNode;
}

const createNewNode = function(l1, l2) {
  let newNode = null;
  const value1 = (l1 && l1.val) || 0;
  const value2 = (l2 && l2.val) || 0;
  const newValue = (value1 + value2 + addValue) % 10;
  addValue = Math.floor((value1 + value2 + addValue) / 10); 
  newNode = new ListNode(newValue);   
    
  return newNode;
}