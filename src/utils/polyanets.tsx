// * Import dependencies
import { IObj } from "../../types/global";
import to from "await-to-js";

// * Import services
import { httpCreatePolyanets, httpDeletePOLYanets, httpGetTempMatrix } from "../services/http";

// Function to use the http service to get the matrix
export const callEndpointCreatePOLYanet = async (candidateCode:string, megaverse:any[], position:number) => {
	position--;
	let total = (megaverse.length - 1) - position;
	let auxTotal = total;

	for(let i = position; i <= total; i++){
		httpCreatePolyanets(candidateCode, i, i);
		httpCreatePolyanets(candidateCode, i, auxTotal);
		auxTotal--;
	}
}

// Function to delete all the positions are created on X lines
export const callEndpointDeletePOLYanet = (candidateCode: string, megaverse:any[]) =>{
	let auxTotal = megaverse.length - 1;
	for(let i = 0; i <= megaverse.length - 1; i++){
		httpDeletePOLYanets(candidateCode, i, i);
		httpDeletePOLYanets(candidateCode, i, auxTotal);
		auxTotal--;
	}
	return megaverse;
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

// Function to create the X POLYanet since the position passed
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

// Function to get all the posible points on X draw and delete
export const resetPOLYanet = async (megaverse:any[]) => {
	let auxTotal = megaverse.length - 1;

	for(let i = 0; i <= megaverse.length - 1; i++){
		megaverse[i][i] = '🌌';
		megaverse[i][auxTotal] = '🌌';
		auxTotal--;
	}
	return megaverse;	
}
