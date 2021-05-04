 const batteryBatches = [4, 5, 3, 4, 4, 6, 5];
 
 const totalBatteries = batteryBatches.reduce((accumulator,number) => {
     return number + accumulator
 }, 0)
 console.log(totalBatteries)





 // let battarray= []
// // Code your solution here
// const totalBatteries = batteryBatches.reduce((accumulation, number) => {
//     accumulation.push(number)
//     return accumulation
// }, battarray)
// const obj = {
//     numbers:[]
// }
// const totalBatteries = batteryBatches.map((number) => {
//     obj.numbers.push(number)

// })

//     console.log(obj)