import React, { useEffect, useState } from 'react';
import axios from 'axios'
import Character from '../src/components/Character'
import Details from '../src/components/Details'

const starWarsEndpoint = `https://swapi.dev/api/people/`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentCharId, setCurrentCharId] = useState(null)

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const closeDetails = () => {
    setCurrentCharId(null)
  }

  useEffect(() => {
    axios
      .get(starWarsEndpoint)
      .then(res => {
        setCharacters(res.data)
        console.log(res.data)
      }
      )
      .catch(err => {
        console.log(err)
      })
  }, []
  )

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      {
        characters.map((person, i) => {
          return <Character key={person[i]} charInfo={person} />
        })
      }
      {
        currentCharId && <Details charId={currentCharId} close={closeDetails} />
      }
    </div>
  );
}

export default App;
