import React, { useState, useEffect } from "react";
import '../components/Modal.css'
// import About from "./About";

const Home = () => {

    const [errorMsg, setErrorMsg] = useState('')
	const [anime, setAnime] = useState([])
	const [modalOpen, setModalOpen] = useState(false);
    // const [show, setShow] = useState(false)

    // function showModal (){
    //     setShow(true)
    //     return;
    // }

    // function hideModal (){
    //     setShow(false)
    //     return;
    // }

	// useEffect only runs once when component is first rendered
	useEffect(() => {
		// asynchronous function so we can wait for data to be fetched
		const fetchData = async () => {
			try {
				setErrorMsg('')
				// wait for fetch request from API endpoint and store rsponse in variable
				const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1');
				
				// check to see if the response was successful otherwise throw error
				if(!response.ok){
					throw new Error(response.statusText)
				}
				// parse JSON response into normal javascript
				const data = await response.json();
				console.log(data.data)
				setAnime(data.data)
			} catch (error) {
				// catch an error that occurs in the try block
				setErrorMsg("Oops something went wrong...")
				console.log(error.message)
			}
		}
		fetchData()
		// empty array makes sure useEffect only runs when component mounts and not when component re-renders
	}, [])

	// display error message to user if something went wrong
	if(errorMsg !== ''){
		return <h1>{errorMsg}</h1>
	}

    // const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div id="mainDiv">
				{/* map through data from API that is stored in the state */}
				{anime.map((anime, index) => {
					return (
						<div className="anime" key={index}>
							
							<img src={anime.anime_img} alt="anime poster"/>
							<p>{anime.anime_name}</p>
							<button onClick={() => {setModalOpen(true);}}
									className="openModalBtn"
							>
								Read More
							</button>
							{modalOpen && <AnimeModal setOpenModal={setModalOpen} />}
						</div>
					)
				})}
			</div>
    )
}

function AnimeModal({ setOpenModal }) {
	return (
	  <div className="modalBackground">
		<div className="modalContainer">
		  <div className="titleCloseBtn">
			<button
			  onClick={() => {
				setOpenModal(false);
			  }}
			>
			  X
			</button>
		  </div>
		  <div className="title">
			<h1>{}</h1>
		  </div>
		  <div className="body">
			<p> Hello </p>
		  </div>
		  <div className="footer">
			<button
			  onClick={() => {
				setOpenModal(false);
			  }}
			  id="cancelBtn"
			>
			  Cancel
			</button>
			<button>Continue</button>
		  </div>
		</div>
	  </div>
	);
  }


export default Home;