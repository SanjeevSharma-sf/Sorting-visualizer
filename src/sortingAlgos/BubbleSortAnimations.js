export const BubbleSortAnimations = (arr) => {
  const animations = [];
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = 0; j < arr.length - i - 1; j++) {
      animations.push([j, j + 1]);
      animations.push([j, j + 1]);
      if (arr[j] > arr[j + 1]) {
        // animations.push([j, j + 1]);
        animations.push([j, j + 1, arr[j + 1], arr[j]]);
        swap(arr, j, j + 1);
      }
        else {
          animations.push([j, j + 1]);
        }
    }
    console.log(j); //ye hum use kar sakte hein last final color ko change karne ke liye
  }
  //   console.log(arr);
  return animations;
};

const swap = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};
