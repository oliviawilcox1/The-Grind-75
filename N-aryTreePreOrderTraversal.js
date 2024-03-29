// Given the root of an n-ary tree, return the preorder traversal of its nodes' values.

// Nary-Tree input serialization is represented in their level order traversal. Each group of children is separated by the null value (See examples)

// Example 1:

// Input: root = [1,null,3,2,4,null,5,6]
// Output: [1,3,5,6,2,4]
// Example 2:

// Input: root = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14]
// Output: [1,2,3,6,7,11,14,4,8,12,5,9,13,10]

// Solution One 
const preOrder = (node, list) => {
    list.push(node.val);
     if ( node.children) {
         console.log(node.children.length)
       for(let i = 0; i < node.children.length; i++) {
            preOrder(node.children[i], list);
        }
     }
    return list;
}

var preorder = function(root) {
    if(root === null) return [];
    return preOrder(root, []);
};

// Another clearer way to solve the problem
var preorder = function(root) {
    let result = [];
  
    function helper(root) {
      if (!root) return result;
       console.log("root is ", root.val, root.children)
      result.push(root.val);
        
      root.children?.forEach((el) => helper(el));
      
      return result;
    }
    return helper(root);
  };
  
  
  
  