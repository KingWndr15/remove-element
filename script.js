function removeElement(nums, val) {
    let left = 0;  // Pointer to track elements not equal to val
    let right = nums.length - 1;  // Pointer to track elements to be removed
    
    while (left <= right) {
        if (nums[left] === val) {
            // Swap nums[left] with nums[right] and decrement right
            [nums[left], nums[right]] = [nums[right], nums[left]];
            right--;
        } else {
            left++;  // Move left pointer if element is not equal to val
        }
    }
    
    return left;
}

// Test cases
let nums1 = [3, 2, 2, 3];
let val1 = 3;
console.log(removeElement(nums1, val1));  // Output: 2, nums1 = [2, 2, _, _]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
console.log(removeElement(nums2, val2));  // Output: 5, nums2 = [0, 1, 4, 0, 3, _, _, _]
