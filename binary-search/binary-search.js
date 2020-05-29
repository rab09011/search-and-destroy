"use strict";

// Complete this algo
const binarySearch = (
  array,
  target,
  startidx = 0,
  endidx = array.length - 1
) => {
  if (startidx > endidx) return false;
  let middleishIndex = startidx + Math.floor((endidx - startidx) / 2);
  if (array[middleishIndex] == target) return true;
  if (array[middleishIndex] > target)
    return binarySearch(array, target, startidx, middleishIndex - 1); //go lower
  if (array[middleishIndex] < target)
    return binarySearch(array, target, middleishIndex + 1, endidx); //go higher
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch;
