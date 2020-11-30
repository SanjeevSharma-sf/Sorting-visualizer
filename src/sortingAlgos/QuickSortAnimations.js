export const QuickSortAnimations = (arr) => {
  var animations = [];
  var lo = 0;
  var hi = arr.length - 1;

  QuickSort(animations, arr, lo, hi);

  return animations;
};
const QuickSort = (animations, arr, lo, hi) => {
  if (lo >= hi) {
    return;
  }
  var pivot = arr[hi]; //value
  var pidx = partition(animations, arr, pivot, lo, hi);
  QuickSort(animations, arr, lo, pidx - 1);
  QuickSort(animations, arr, pidx + 1, hi);
};
const partition = (animations, arr, pivot, lo, hi) => {
  // 0 to j-1  ->  all elements are equal and smaller than pivot
  // j to i-1  ->  all elements are greater than pivot
  // i to arr.length-1  ->  unknown elements
  var i = lo;
  var j = lo;
  while (i <= hi) {
    animations.push([i, hi]);
    animations.push([i, hi]);
    if (arr[i] <= pivot) {
      animations.push([i, j, arr[j], arr[i]]);
      swap(arr, i, j);
      i++;
      j++;
    } else {
        animations.push([i]);
      i++;
    }
  }

  return j - 1;
};
const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
