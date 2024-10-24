var findPoisonedDuration = function(timeSeries, duration) {
    // goal: return duration of time ashe is poisoned 
    console.log(timeSeries, duration)
    let poisonedSum = 0; 
    let poisonEnds = 0; 

    timeSeries.forEach((attackTime)=> {
        const attackEnds = attackTime + duration

        if(attackTime < poisonEnds){
            poisonedSum += (attackEnds - poisonEnds)
        } else {
            poisonedSum += duration
        }

        poisonEnds = attackEnds

    })
    return poisonedSum
};