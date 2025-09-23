// scenario:Create a reusable function to calculate order totals with tax.


// let orderCosts=[200,300,500,600,700];
// let taxpercentage=2;
// function calculateTotalCost(orders){
//     let totalCost=0;
//     for(let i=0;i<orders.length;i++){
//         totalCost+=orders[i]+(orders[i]*(2/100));
//     }
//     return totalCost;
// }
// const cost=calculateTotalCost(orderCosts);
// console.log(cost);
// const reg=new RegExp("abc-*//");
// console.log(reg);


//Scenario:Build a counter app using closure to maintain a private state
//A closure gives you access to outer function variables even after the outer function has executed.
// A closure happens when a function remembers variables from its outer scope, even after the outer function has finished executing.This allows creating private variables.
// A function that remembers variables from the place it was created,Even after that place (outer function) has finished running.

// function increment(){
//     let count =0;
//     function upgrade(){
//         count++;
//         return count;
//     }
//     return upgrade;
// }
// const counter=increment();
// console.log(counter());
// console.log(counter());
// console.log(counter());
// console.log(counter());

function createCounter(){
    let count=0;
    function incrementCounter(){
        count++;
        return count;
    }
    function decrementCounter(){
        count--;
        return count;
    }
    return {
        increment:incrementCounter,
        decrement:decrementCounter
    }
}
const counter2=createCounter();
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.increment());
console.log(counter2.decrement());


