///**
// * Created by yoneta on 3/23/16.
// */

//A zero-indexed array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element of the array is also moved to the first place.
//
//    For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7]. The goal is to rotate array A K times; that is, each element of A will be shifted to the right by K indexes.
//
//    Write a function:
//
//function cyclicRotation(A, K);
//
//that, given a zero-indexed array A consisting of N integers and an integer K, returns the array A rotated K times.
//
//    For example, given array A = [3, 8, 9, 7, 6] and K = 3, the function should return [9, 7, 6, 3, 8].\
//input: 2 inputs, an array and an number
//output: and array (eith the numbers rearranged)
//tools: loop - the loop will run for the  number of rotation that we want the array to go thru.
//.unshift() adds a new item to the beginning of an array
//.shft() removes element at beginning.
//adding something the beginning "prepend" or unshift() or push()
//shift() pop() append removes something from the end
//shift, unshift, push and pop methods to work with arrays, we want to use them to get teh last element in the array and move it to the beginning each time the loop runs
//output the array once the loop has finished.

    
function cyclicRotation(arr, rotation) {

    for(let i = 0; i < rotation; i++){
      let a =arr.pop();
       arr.unshift(a);
    }
    return arr;
  }