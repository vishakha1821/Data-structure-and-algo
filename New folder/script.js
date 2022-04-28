let nums = [2, 4, 3, 6, 5, 7, 13, 56, 34];

function binarySearch(array, target){
    let left = 0;
    let right = array.length-1;

    while(left<right){
        let mid = Math.floor((left + right)/2);
        if(target === array[mid]){
            return mid;
        }else if(target < array[mid]){
            return mid-1;
        } else{
            left = mid + 1;
        }
    }
    return false;
}

console.log(binarySearch(nums,56));