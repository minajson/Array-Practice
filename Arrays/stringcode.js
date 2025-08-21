
//1. GeoDrill - Highest single Day Discovery
// Example
discovery ([300, 450, 120, 800, 540, 760, 310, 900, 500, 620]);

function discovery (data) {
    let max = data[0];
    let value = 0;

for (let i = 1; i < data.length; i++) {
    if (data[i] > max) {
        max = data[i];
        value = i;
    }
}
console.log (`Highest single day discovery: ${max} barrels at position ${value}`);
}

//2. Coastal - Total Liters and Capacity Alert 

r,function refinerycapacity(crude) {
    let total = 0;

    for (let i = 0; i< crude.length; i++) {
        total += crude[i];

    }
    if (total > 10000){
        console.log(`Total delivered: ${total} liters ALERT: Capacity Exceeded!`);
    } else {
        console.log(`Total delivered: ${total} litres`);
    }
}
 //Defective Parts
 filterDefects ([2, 8, 1, 0, 6, 7, 3, 9, 5]);

 function filterDefects(defects) {
    let result = [];
    for (let i = 0; i < defects.length; i++) {
        if (defects[i] > 5) {
            result.push(defects[i]);
        }
    }
    console.log(result);
 }
 