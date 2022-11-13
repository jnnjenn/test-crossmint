// Component to draw the megaverse change
const MegaversePaint = ({megaverse}:any) => {
	
	// Function to draw all the row 
	const drawRow = (row:string[]) => {
		return row.map((value) => {
				return value
			}		
		);
	}

	// Function to draw the matrix pass through parameter
	const drawMegaverse = (matrix:[]) => {
		return matrix.map((row:string[]) => {
			return (
				<div>
					{ drawRow(row) }
					<br/>
				</div>
			)					
		})
	}

	return (
		<div className='megaverse--row'>
			{ drawMegaverse(megaverse) }
		</div>
	)
}

export default MegaversePaint;