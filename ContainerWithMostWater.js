var maxArea = function(height) {
    let current_area = 0
    
    let left = 0
    let right = height.length - 1

    while( left < right) {

        // length by width 
        let area = Math.min(height[left], height[right]) * (right - left)
 
        if(area > current_area) {
            current_area = area
        }

    // logic to move it in the right direction 
        if(height[left] < height[right]){
            left++
        } else {
            right--
        }
    }
    return current_area
};