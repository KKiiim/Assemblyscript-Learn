export function myqsort(arr: Int32Array, left: i32, right: i32): void {
    if (left > right) {
      return;
    }
  
    const tmp: i32 = arr[left];
    let i: i32 = left;
    let j: i32 = right;
  
    while (i != j) {
      while (arr[j] >= tmp && j > i) {
        j--;
      }
      while (arr[i] <= tmp && j > i) {
        i++;
      }
      const t: i32 = arr[i];
      arr[i] = arr[j];
      arr[j] = t;
    }
  
    arr[left] = arr[i];
    arr[i] = tmp;
  
    myqsort(arr, left, i - 1);
    myqsort(arr, i + 1, right);
}
  let arr: Int32Array = new Int32Array(11);
  arr[0] = 0;
  arr[1] = 5;
  arr[2] = 2;
  arr[3] = 4;
  arr[4] = 1;
  arr[5] = 3;

  myqsort(arr, 0, 5);