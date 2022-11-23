function hasTargetSum(array, target) {
  // Write your algorithm here
  let result = false;
  for (let i = 0; i < array.length ; i++)
     for(let j = i + 1 ; j < array.length ; j++)
         if (array[i] + array[j] === target){
           return result = true;
         }
  return result;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  grab the 1st element of the array 
  add the element to the 2nd element 
  if the sum is equal to 10 or the passed parameter then return true 
  if not then add 1st element to 3rd element and repeat the process
*/

/*
  Add written explanation of your solution here
  need 2 loops , one to grab the element and 2nd to check if sum is equal or not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 7, 10, 18], 17));
}

module.exports = hasTargetSum;
