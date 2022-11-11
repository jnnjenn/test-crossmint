import axios from "axios";
import to from 'await-to-js';

const http = axios.create({ baseURL: 'http://challenge.crossmint.io/api' });

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

export const getMatrix = async (candidateID : string) => {
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

export const createPolyanets = (candidateID: string, passRow: number, passColumn: number) => {
  return http.post(
		'/polyanets', 
		{
			candidateId : candidateID,
			row : passRow,
			column : passColumn
		}
  );
};

export const deleteMatrix = (candidateID: string, passRow: number, passColumn: number) => {
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

/*
useEffect(() => {
	// DELETE request using fetch with set headers
	const requestOptions = {
		method: 'DELETE',
		headers: { 
			'Content-Type': 'application/json',
			"Access-Control-Allow-Methods": '*'
		},
		body: JSON.stringify({
			candidateId : 'c05c87c3-a8b1-4fe2-9656-71c3e16f32a',
			row : 3,
			column : 4
		})
	};
	fetch('https://challenge.crossmint.io/api/polyanets', requestOptions)
		.then(() => console.log('Delete successful'));
}, []);
*/

