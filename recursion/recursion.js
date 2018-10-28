module.exports = function recursion(tree) {
  const array = [];
  function nodes(node, height) {
    if (!node) return null;
    if (!('value' in node)) return array.push([]);
    if (!array[height]) {
      array[height] = [node.value];
    } else {
      array[height].push(node.value);
    }
    nodes(node.left, height += 1);
    nodes(node.right, height);
    return null;
  }
  nodes(tree, 0);
  return array;
};
