// Import dependencies
import React from 'react';
import { useRef, useState } from 'react'
import Alert from 'react-popup-alert'

import logo from '../../assets/logo.png';
import 'react-popup-alert/dist/index.css'

// Import fetch
import { getMatrix, createPolyanets, deleteMatrix } from '../../services/http';
import { getPositions, deletePositions } from '../../utils/polyanets';

// * Styles
import './style.scss';

const ViewHome = () => {

	const [candidateID, setCandidateID] = useState('');
	const inputCandidateId = useRef(null);
	const [alert, setAlert] = React.useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })

	const onShowAlert = (type:string, text: string) => {
		console.log('ViewHome.tsx - 26  >>>>>>>>> ');
    setAlert({
      type: type,
      text: text,
      show: true
    })
  }

	const onCloseAlert = () => {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }
 
	//const del = deleteMatrix('c05c87c3-a8b1-4fe2-9656-71c3e16f32a', 3, 4);

	const actionValidate = () => {
		console.log('ViewHome.tsx - 20  >>>>>>>>> ENTRO VALIDATE');
		if (inputCandidateId.current.value) {
			console.log(inputCandidateId.current ? inputCandidateId.current.value : '');
		}else{
			onShowAlert('error', 'Enter the code for the candidate to validate.');
			console.log('ViewHome.tsx - 41  >>>>>>>>> ');
		}
	}

	const actionCreate = () => {
		console.log('ViewHome.tsx - 20  >>>>>>>>> ENTRO CREATE');
	}

	const actionReset = () => {
		console.log('ViewHome.tsx - 20  >>>>>>>>> ENTRO RESET');
	}

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
				<form className='form--description' onSubmit={e => { e.preventDefault(); }}>
					
					<div className='candidate--description'>
						<div className='candidate--labels'>
							<label>Candidate Code:</label>							
						</div>
						<div className='candidate--inputs'>
							<input type="text" className='txt-candidateid' ref={inputCandidateId} />
							<button onClick={actionValidate}>Validate</button>
						</div>
					</div>

					<div className='map--description'>
						<div className='map--labels'>
							<label>
								To create the "Megaverse!", I designed a way to create an "X" inside the matrix;
								all that is needed is to enter the number of the row from which it will start(2):
							</label>
						</div>
						<div className='map--inputs'>
							<input type="number" className='txt-startin' placeholder='Start in: 2' />
							<button className='btn-create' onClick={actionCreate}>Create</button>
							<button className='btn-reset' onClick={actionReset} >Reset</button>
						</div>
					</div>

				</form>
			</section>
			<Alert
        header=''
        btnText={'Close'}
        text={alert.text}
        type={alert.type}
        show={alert.show}
        onClosePress={onCloseAlert}
        pressCloseOnOutsideClick={true}
        showBorderBottom={true}
        alertStyles={{}}
        headerStyles={{}}
        textStyles={{}}
        buttonStyles={{}}
      />
		</>
	)
}

export default ViewHome;