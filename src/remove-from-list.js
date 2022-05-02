const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let top = new ListNode();
  for (let i = l.length - 1; i >= 0; i--) {
    if (!top.value) {
      top = new ListNode(l[i]);
    }
    else {
      let nodeTemp = new ListNode(l[i]);
      nodeTemp.next = top;
      top = nodeTemp;
    }
  }
  let curr = top;
  if (top.value == k) {
    top = top.next;
    curr = top;
  }
  let prev = curr.next;
  while (curr.next) {
    if (prev.value == k) {
      curr.next = curr.next.next;
    }
    curr = curr.next;
    prev = curr.next;
  }
  return top;
}

console.log(removeKFromList([3, 1, 2, 3, 4, 5], 3));

module.exports = {
  removeKFromList
};
