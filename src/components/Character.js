// Write your Character component here
import React, { } from 'react'
import styled from 'styled-components'
import arrows from './arrowIcons'

const Character = props => {
   const { charInfo, setCurrentCharId } = props

   const CharName = styled.p`
      opacity: 1;
      color: black;
      font-weight: bold;
      font-size: 1.2rem
   `

   const openDetails = created => {
      setCurrentCharId(created)
   }

   return (
      <div className='expand'>
         <CharName>
            {charInfo.name}
            <button onClick={() => {
               openDetails(charInfo.created)
            }
            } >
               {arrows.open}
            </button>
         </CharName>
      </div>
   )
}

export default Character