// There are n cars at given miles away from the starting mile 0, traveling to reach the mile target.

// You are given two integer array position and speed, both of length n, where position[i] is the starting mile of the ith car and speed[i] is the speed of the ith car in miles per hour.

// A car cannot pass another car, but it can catch up and then travel next to it at the speed of the slower car.

// A car fleet is a car or cars driving next to each other. The speed of the car fleet is the minimum speed of any car in the fleet.

// If a car catches up to a car fleet at the mile target, it will still be considered as part of the car fleet.

// Return the number of car fleets that will arrive at the destination.




var carFleet = function(target, position, speed) {
    const stack = []

    const times = position.map((positions, index) => (target - positions)/ speed[index])


    const cars = position.map((positions, index) => [positions, times[index]])

    cars.sort((a,b) => b[0] - a[0])
    let fleets = 0;
    console.log(cars)
    for (const [pos, time] of cars) {
        // If stack is empty or current time is greater than the time at the top of the stack, push the current time onto the stack
        console.log("time", time)
        if (stack.length === 0 || time > stack[stack.length - 1]) {
            fleets += 1;  // We have a new fleet
            stack.push(time);  // Push the current time onto the stack
        }
    }
    return fleets
};