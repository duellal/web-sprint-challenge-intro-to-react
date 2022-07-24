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
      font-size: 1.2rem;
   `
   const Arrows = styled.span`
   display: flex;
   justify-content: right;
   `
   // Below commented out code: Trying to iterate through the object of the character to get their name, height, mass, birth_year, gender, and films in order to create an accordion from the arrow button that when clicked, will show those details. Then when you click on it again, it closes the details accordion.

   // const charInfoArr = Object.keys(charInfo)

   // console.log(charInfoArr)

   const openDetails = (charInfo) => {
      setCurrentCharId(charInfo.created)

      // const details = []

      // keys.forEach((key, i) => {

      // })
   }



   return (
      <div className='expand'>
         <CharName>
            {charInfo.name}
            <Arrows>
               <button onClick={() => {
                  openDetails()
               }
               } >
                  {arrows.open}
               </button>
            </Arrows>
         </CharName>
      </div>
   )
}

export default Character