// Import dependencies
import React, { useEffect } from 'react'

import logo from '../../assets/logo.png';

// Import fetch
import { getMat, createPolyanets, deleteMatrix } from '../../services/http';

// * Styles
import './style.scss';

const ViewHome = () => {

	const del = deleteMatrix('c05c87c3-a8b1-4fe2-9656-71c3e16f32a', 3, 4);


	return (
		<>
			<section className='container--header'>
				<header className='header--description'>
					<div className='logo--description'>
						<img src={logo} alt="Logo Crossmint" className='logo_description' />
						<h6>crossmint</h6>
					</div>
					<div className='title--description'>
						<h1>Megaverso Coding Challenge</h1>
						<div className='by--description'>
							<h4>By: Jenniffer Paola Orjuela</h4>
						</div>
					</div>
				</header>
			</section>
			<section className='container--form'>				
				<form action="" className='form--description'>
					
					<div className='candidate--description'>
						<div className='candidate--labels'>
							<label>Candidate Code:</label>							
						</div>
						<div className='candidate--inputs'>
							<input type="text" className='txt-candidateid' />
							<button>Validate</button>
						</div>
					</div>

					<div className='map--description'>
						<div className='map--labels'>
							<label>
								To create the megaverse I design the way to create an "X" inside of the matrix only it 
								needs is the number where it will be start:
							</label>
						</div>
						<div className='map--inputs'>
							<label>Start In</label>
							<input type="s" className='txt-candidateid' />
							<button>Create</button>
							<button>Reset</button>
						</div>
					</div>

				</form>
			</section>
		</>
	)
}

export default ViewHome;