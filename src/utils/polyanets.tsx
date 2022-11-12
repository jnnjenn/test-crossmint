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



export const actionCreatePOLYanets = (candidateCode:string, startIn: number) => {



}


// Function to get all the positions where we call the endpoint to create a POLYanet
export const setPositions = (matrix : []) => {
	let startin = 2;
	let total = (matrix.length - 1) - startin;
	let auxTotal = total;
	let positions = [];

	for(let i = startin; i <= total; i++){
		positions.push(i +","+ i);
		positions.push(i +","+ auxTotal);
		auxTotal--;
	}
	positions.sort();
	return [...new Set(positions)];
};

// Function to draw all the row pass through parameter
const drawRow = (row:[]) => {
	let drawRow = '';
	for (let index = 0; index < row.length; index++) {
		drawRow += ` ${row[index]} `;		
	}
	return drawRow + '<br/>';
}

// Function to get the megaverse
export const getMegaverse = async () => {
	const [errorMatrix, matrix] = await to<IObj>(httpGetTempMatrix());
	if (errorMatrix) {
		console.error('polyanets.tsx - 71  >>>>>>>>> errorMatrix: ', errorMatrix);
		return;
	}
	return matrix.data;
};

// Function who get the initial megaverse and pass the string to draw in html
export const drawMegaverse = (megaverse:any	[]) => {	
	let drawMegaverse = `<div className='megaverse--row'>`;
	for (let index = 0; index < megaverse.length; index++) {
		drawMegaverse += drawRow(megaverse[index]);
	}
	return drawMegaverse = drawMegaverse + '</div>';	
}



export const createPOLYanet = (megaverse:any[], position:number) => {
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
