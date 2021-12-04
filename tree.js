/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    if (!this.root) return 0;

    let sum = this.root.val;

    function sumHelper(node) {

      for (let child of node.children) {
        sum += child.val;
        // if child as childern
        if (child.children.length > 0) {
          sumHelper(child);
        }
      }
    }

    sumHelper(this.root);
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {

    let count = 0;
    if (!this.root) return 0;
    if (this.root.val % 2 === 0) {
      count++;
    }
    function countEvenInNode(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) {
          count++;
        }
        if (child.children.length > 0) {
          countEvenInNode(child);
        }
      }
    }
    countEvenInNode(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;

    let greaterCount = 0;
    if (this.root.val > lowerBound) {
      greaterCount++;
    }
    function countGreaterValue(node) {
      for (let child of node.children) {
        if (child.val > lowerBound) {
          greaterCount++;
        }
        if (child.children.length > 0) {
          countGreaterValue(child);
        }
      }
    }
    countGreaterValue(this.root);
    return greaterCount;
  }
}

module.exports = { Tree, TreeNode };
