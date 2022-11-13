// Import 
import axios from "axios";
import to from 'await-to-js';

const http = axios.create({ baseURL: 'http://challenge.crossmint.io/api' });
const httpTemp = axios.create({ baseURL: 'https://test-crossmint-default-rtdb.firebaseio.com/' });

http.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // tslint:disable-next-line:no-console
    console.error(error);
    return Promise.reject(error);
  },
);

// Function to call the Endpoint that return the goal map for a candidate
export const httpGetMatrix = async (candidateID : string) => {
	const [error, response] = await to(http.get(`/map/${candidateID}/goal`, 
		{
			headers: {
				'Accept': '*/*',
				'Cache-Control' : 'public, max-age=0, must-revalidate',
				'Content-Encoding' : 'br',
				'Content-Type' : 'application/json; charset=utf-8'
			}
		}
	));
	if (error) {
		throw error;
	}
	return response;
};

// Function to call the Endpoint that create a POLYanets in the matrix
export const httpCreatePolyanets = (candidateID: string, passRow: number, passColumn: number) => {
  return http.post(
		'/polyanets', 
		{
			candidateId : candidateID,
			row : passRow,
			column : passColumn
		}
  );
};

// Function to delete a POLYanet inside the matrix, we need to send the position of this as (row, column)
export const httpDeletePOLYanets = (candidateID: string, passRow: number, passColumn: number) => {
  return http.delete('/polyanets', 
	{
		headers: {
			'Content-Type' : 'application/json',
			'Access-Control-Allow-Origin': '*',
			"Access-Control-Allow-Methods" : "GET, POST, PUT, DELETE, OPTIONS"
		},
		data: {
			candidateId : candidateID,
			row : passRow,
			column : passColumn
		}
	}
	);
};


// Function to call the Endpoint that return the goal map for a candidate
export const httpGetTempMatrix = async () => {
	const [error, response] = await to(httpTemp.get(`megaverso/goal.json`));
	if (error) {
		throw error;
	}
	return response;
};
