import React, { useState, useEffect } from "react";
import styled from "styled-components";

const About = () => {

    const [errorMsg, setErrorMsg] = useState('')
	const [anime, setAnime] = useState([])

    // useEffect only runs once when component is first rendered
	useEffect(() => {
		// asynchronous function so we can wait for data to be fetched
		const fetchData = async () => {
			try {
				setErrorMsg('')
				// wait for fetch request from API endpoint and store rsponse in variable
				const response = await fetch('https://anime-facts-rest-api.herokuapp.com/api/v1/bleach');
				
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

    return (
        
        <MaindivAbout>
                <section>
                    <h1>Bleach Facts</h1>
                    {/* map through data from API that is stored in the state */}
                    {anime.map((anime, index) => {
                        return (
                            <AnimeDivFact key={index}>
                                <p>{anime.fact_id}.</p>
                                <p>{anime.fact}</p>
                            </AnimeDivFact>
                        )
                    })}
                </section>
        </MaindivAbout>

    )
}

export default About;

const MaindivAbout = styled.div`
    display: flex;
    justify-content: center;
    font-family: Arial, Helvetica, sans-serif;
    width: 800px;
    height: 100%;
    section h1{
        display: flex;
        color: black;
        justify-content: center;
        font-size: 30px;
        padding: 0px;
        margin-bottom: 20px;
    }
`

const AnimeDivFact = styled.div`
    display: flex;
    justify-content: flex-start;
    align-self: center;
    background-color: #eee;
    margin: 10px;
    padding: 20px;
    border-radius: 10px;
    overflow: hidden;
	outline: 1px solid white;
	box-shadow: 0px 2px 64px #00000033;
    p{
        margin: 5px 10px 5px 5px;
        display: flex;
        font-family: Arial, Helvetica, sans-serif;
        font-size: 20px;
    }

`