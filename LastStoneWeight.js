// You are given an array of integers stones where stones[i] is the weight of the ith stone.

// We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

// If x == y, both stones are destroyed, and
// If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
// At the end of the game, there is at most one stone left.

// Return the weight of the last remaining stone. If there are no stones left, return 0.


var lastStoneWeight = function(stones) {

    while(stones.length > 1) {
        stones.sort((a,b) => b-a);

        let first = stones.shift();
        let second = stones.shift();

        if(first !== second) {
            stones.push(Math.abs(first-second));
        }
    }

    if(stones.length == 0) {
        return 0;
    }

    return stones[0];

};

var lastStoneWeight = function(stones) {
    while(stones.length > 1) {
        stones.sort((a,b) => b - a)
        const stone1 = stones.shift()
        const stone2 = stones.shift()
        if (stone1 !== stone2) {
            stones.push(stone1 - stone2)
        }
    }
    return stones.length === 1 ? stones[0] : 0
};