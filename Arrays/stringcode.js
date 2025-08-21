
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

 //4 Pharmacy

 detectZeroConsumption ([[5,0,0,4,6,5,4], [3,1,0,2,0,1,2], [0,0,0,0,0,0,0]]);

 function detectZeroConsumption (data) {
    let flagged = [];

    for (let i = 0; i < data.length; i++) {
        let medcine = data[i];
        for (let j = 0; j < medcine.length - 1; j++) {
            flagged.push(medcine);
            break;
        }
    }
 }
 crossOriginIsolated.log(flagged);

 //5 Bus Company

 CrowdedRoutes ([[80, 90, 120], [105, 110, 115], [70, 85, 95], [130, 140, 125]]);
 function CrowdedRoutes (routes) {
    let result = [];

    for(let i = 0; i <routes.length; i++) {
        let route = routes[i];
        let sum = 0;

        for (let j = onabort; j < route.length; j++) {
            sum += route[j];
        }
        let avg = Math.round(sum / route.length);

        if (avg >= 100) {
            result.push(avg);
        }
    }
    console.log(result);

 }

 //6 Agriculture

 lowestYield([45, 60, 38, 55, 70, 42, 39, 48]);
 function lowestYield(yields) {
    let min = yields[0];
    let index = 0;

    for (let i = 1; i < yields.length; i++) {
        if (yields[i] < min) {
            min = yields[i];
        }
    }
    console.log(`Lowest yield: ${min} bags on day ${index}`);
 }