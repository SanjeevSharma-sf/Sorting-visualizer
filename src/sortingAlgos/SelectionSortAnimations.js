export const SelectionSortAnimations = (arr) => {
  const animations = [];
  for (var i = 0; i < arr.length; i++) {
    let minidx = i;
    for (var j = i + 1; j < arr.length; j++) {
      animations.push([j, minidx]);
      animations.push([j, minidx]);

      if (arr[j] < arr[minidx]) {
        minidx = j;
      }
    }
    animations.push([i, minidx, arr[minidx], arr[i]]);
    swap(arr, i, minidx);
  }
  return animations;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
