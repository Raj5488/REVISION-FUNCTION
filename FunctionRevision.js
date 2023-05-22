// Amazon Shopping Bills
function cartBillTotal (...numbers){
    //take a variable total
    let total = 0;
    //loop all values and keep adding to total 
    for(const num of numbers){
        total += num
        //total =total + num
        
    }
    // return total
    return total
}

console.log(cartBillTotal);