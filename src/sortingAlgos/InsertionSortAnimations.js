export const InsertionSortAnimations = (arr) => {
  const animations = [];
  for (var i = 1; i < arr.length; i++) {
    for (var j = i - 1; j >= 0; j--) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        animations.push([j, j + 1, arr[j + 1], arr[j]]);
        swap(arr, j, j + 1);
      } else {
        animations.push([j, j + 1]);
        break;
      }
    }
  }

  return animations;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
