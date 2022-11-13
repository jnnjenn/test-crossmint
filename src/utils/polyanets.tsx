// Import dependencies
import { useState } from "react";
import { IObj } from "../../types/global";
import to from "await-to-js";

// Import services
import { httpGetMatrix, httpCreatePolyanets, httpDeletePOLYanets, httpGetTempMatrix } from "../services/http";

/*
const [matrix, setMatrix] = useState([]);
const [matrixPositions, setMatrixPositions] = useState<string[]>([]);

// Function to use the http service to get the matrix
const callEndpointCreatePOLYanet = async (candidateCode:string, row:number, column:number) => {		
	const [error, responseData] = await to<IObj>(httpCreatePolyanets(candidateCode, row, column));
	if (error) {
		return;
	}
	setMatrix(responseData['goal']);
}

// Function to use the http service to get the matrix
const callEndpointDeletePOLYanet = async (candidateCode:string, row:number, column:number) => {		
	const [error, responseData] = await to<IObj>(httpDeletePOLYanets(candidateCode, row, column));
	if (error) {
		return;
	}
	return responseData;
}

// Function to delete all the positions are created on X lines
export const deletePositions = (candidateId: string) =>{	
	for (let position = 0; position < matrixPositions.length; position++) {
		let [x, y] = matrixPositions[position].split(",");
		return callEndpointDeletePOLYanet(candidateId, parseInt(x), parseInt(y));
	}
}*/


// Function to get the megaverse
export const getMegaverse = async () => {
	const [errorMatrix, matrix] = await to<IObj>(httpGetTempMatrix());
	if (errorMatrix) {
		console.error('polyanets.tsx - 71  >>>>>>>>> errorMatrix: ', errorMatrix);
		return;
	}
	return matrix.data;
};

export const createPOLYanet = async (megaverse:any[], position:number) => {
	position--;
	let total = (megaverse.length - 1) - position;
	let auxTotal = total;

	for(let i = position; i <= total; i++){
		megaverse[i][i] = '🪐';
		megaverse[i][auxTotal] = '🪐';
		auxTotal--;
	}
	return megaverse;	
}

export const resetPOLYanet = async (megaverse:any[]) => {
	console.log('polyanets.tsx - 108  >>>>>>>>> megaverse:', megaverse);
	let total = megaverse.length - 1;
	let auxTotal = total;

	for(let i = 0; i <= total; i++){
		megaverse[i][i] = '🌌';
		megaverse[i][auxTotal] = '🌌';
		auxTotal--;
	}
	return megaverse;	
}
