// * Import dependencies
import React, { useEffect, useState } from 'react';
import Alert from 'react-popup-alert';

// * Import resources
import logo from '../../assets/logo.png';

// * Import functionality 
import { actionCreatePOLYanets, getMegaverse, drawMegaverse, createPOLYanet } from '../../utils/polyanets';

// * Styles
import './style.scss';
import 'react-popup-alert/dist/index.css';

const ViewHome = () => {
	const inputCandidateId = 'c05c87c3-a8b1-4fe2-9656-71c3e16f32ac';
	const [inputStartIn, setInputStartIn] = useState(0);
	const [megaverse, setMegaverse] = useState([]);
	const [paintMegaverse, setPaintMegaverse] = useState('');

	// Getting the paint of the megaverse when html load at first time
	useEffect(() =>{
		getMegaverse().then((e) => setMegaverse(e??''));	
	},[]);

	// Draw again the paint when megaverse variable change
	useEffect(() =>{
		console.log('ViewHome.tsx - 28  >>>>>>>>> megaverse: ', megaverse);
		if(megaverse.length > 0){
			console.log('ViewHome.tsx - 30  >>>>>>>>> ');
			setPaintMegaverse(drawMegaverse(megaverse));	
		}
	},[megaverse]);

	// Create the state for the alert component and setting some values
	const [alert, setAlert] = React.useState({
    type: 'error',
    text: 'This is a alert message',
    show: false
  })

	// Function to show the alert with some parameter to set
	const onShowAlert = (type:string, text: string) => {
    setAlert({
      type: type,
      text: text,
      show: true
    })
  }

	// Function to clode the alert and empty all the variables modified inside
	const onCloseAlert = () => {
    setAlert({
      type: '',
      text: '',
      show: false
    })
  }
 
	const actionCreate = () => {
		if(!inputStartIn){
			onShowAlert('error', 'The row number where the 🪐 POLYanets "X" will be initialized in 🌌 Megaverse are required, please enter it.');
		}else if(inputStartIn < 1 || inputStartIn > 5){
			onShowAlert('error', 'The row number must be in a range since 1 to 5, please change it.');
		}else{
			let newMegaverse:any = createPOLYanet(megaverse, inputStartIn);

			setMegaverse(newMegaverse);
			console.log('ViewHome.tsx - 67  >>>>>>>>> newMegaverse: ',newMegaverse);
			actionCreatePOLYanets(inputCandidateId, inputStartIn);
		}
	}

	const actionReset = () => {	}

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
							{megaverse}
						</div>
					</div>
				</header>
			</section>
			<section className='container--form'>				
				<form className='form--description' onSubmit={e => { e.preventDefault(); }}>
					<div className='map--description'>						
						<div className='map--labels'>
							<label>
								Megaverses are 2D spaces comprised of combinations of different astral objects:
								🪐 POLYanets with 🌙 SOLoons around them and ☄ comETHs floating around.
							</label>
							
							<label>
								<br/>
								<div dangerouslySetInnerHTML={{ __html: paintMegaverse }}></div>
								<br/>
							</label>
							<label>
								I have designed a way to create an POLYanet's "X" inside of the Megaverse; 
								the only you need is enter the row number where it will start 
								(the number must be in a range since 1 to 5):
							</label>
						</div>

						<div className='inputs--description'>
							<div className='inputs--labels'>
								<label>Row number where it'll start:</label>
							</div>
							<div className='inputs--inputs'>
								<input type="number" className='txt-startin' value={inputStartIn} onChange={ e => setInputStartIn( Number(e.target.value) ) } min={1} max={5} autoFocus />
							</div>
						</div>
						
						<div className='map--inputs'>							
							<button className='btn-create' onClick={actionCreate}>Create</button>
							<button className='btn-reset' onClick={actionReset}>Reset</button>
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