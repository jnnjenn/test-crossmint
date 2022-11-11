export const getPositions = () => {
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

	return new Set(myArray);;
};

export const deletePositions = () =>{
	let mymap = {"goal":[["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE"],["SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE"],["SPACE","SPACE","POLYANET","SPACE","SPACE","SPACE","SPACE","SPACE","POLYANET","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"],["SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE","SPACE"]]};
	let allData = mymap['goal'];
	
	for (let i = 0; i < allData.length; i++) {
		const e = allData[i];

		for (let j = 0; j < e.length; j++) {
			const f = e[j];
			console.log('polyanets.tsx - 29  >>>>>>>>> e, f:', e, f);

		}
		
	}

}