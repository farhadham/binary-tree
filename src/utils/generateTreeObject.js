function generateTreeObject(arr) {
  let obj = { parent: arr[0] };
  let queue = [obj];

  let i = 1;
  while (i < arr.length) {
    let node = queue.shift();

    let childLeft = { parent: arr[i++] };
    node.childLeft = childLeft;
    queue.push(childLeft);

    if (i < arr.length) {
      let childRight = { parent: arr[i++] };
      node.childRight = childRight;
      queue.push(childRight);
    }
  }

  return obj;
}

export default generateTreeObject;
