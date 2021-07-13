const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//totalBatteries holds the sum of batteryBatches
const totalBatteries = batteryBatches.reduce(cb, 0)


function cb(total, nextEle){
    return total + nextEle;
}