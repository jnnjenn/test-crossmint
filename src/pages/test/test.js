const message = 'Hello world' // Try edit me
let mymap = {"goal":[["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE"],["SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE"],["SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"]]};
let allData = mymap['goal'];
let startin = 2;
let total = (allData.length - 1) - startin;
let auxTotal = total;
let myArray = [];

for(let i=startin; i<= total; i++){
  myArray.push(i+","+i);
  myArray.push(i+","+auxTotal);
  auxTotal--;
}

myArray.sort();
let finalResult = new Set(myArray);
console.log(finalResult);
