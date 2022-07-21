import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Character from '../src/components/Character'
import Details from '../src/components/Details'
import styled from 'styled-components'

const starWarsEndpoint = `https://swapi.dev/api/people/`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharId, setCurrentCharId] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  //closeDetails is for the details accordion component
  const closeDetails = () => {
    setCurrentCharId(null)
  }

  useEffect(() => {
    axios
      .get(starWarsEndpoint)
      .then(res => {
        setCharacters(res.data)
      }
      )
      .catch(err => {
        console.log(err)
      })
  }, []
  )

  const CharDiv = styled.div`
    opacity: .5;
    background-color: #FFFAE6;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
  `

  const AppDiv = styled.div`
    display:flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
  `

  const HeaderDiv = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;  
  `

  return (
    <div className="App">
      <AppDiv>
        <HeaderDiv>
          <h1 className="Header">Characters</h1>
        </HeaderDiv>
        <CharDiv>
          {
            characters.map((person) => {
              console.log(person)
              return <Character charInfo={person} setCurrentCharId={setCurrentCharId} />
            })
          }
          {
            characters.map((person) => {
              <Details charId={person.created} close={closeDetails} charInfo={person} />
            })
          }
        </CharDiv>
      </AppDiv>
    </div>
  );
}

export default App;
