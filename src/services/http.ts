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

export const getMat = async (candidateID : string) => {
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
	{ params: 
		{
			candidateId : candidateID,
			row : passRow,
			column : passColumn
		}
	});
};


/* useEffect(()=>{
// 	fetch('https://challenge.crossmint.io/api/map/c05c87c3-a8b1-4fe2-9656-71c3e16f32ac/goal', {
// 		method : 'GET'
// 	})
// 		.then((response) => console.log(response))
// 		.then((data) => console.log(data));
// },[])

const makeAPICall = async () => {
	try {
		const response = await fetch('http://challenge.crossmint.io/api/map/c05c87c3-a8b1-4fe2-9656-71c3e16f32ac/goal', {mode:'cors'});
		const data = await response.json();
		console.log({ data })
	}
	catch (e) {
		console.log(e)
	}
}
useEffect(() => {
	makeAPICall();
}, [])
*/

export default http;
