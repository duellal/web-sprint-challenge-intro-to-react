// Write your Character component here
import React, { } from 'react'
import styled from 'styled-components'

const Character = props => {
   const { charInfo, key } = props

   const CharDiv = styled.div`
   opacity: .5;
   background-color: #FFFAE6;
   `

   const CharName = styled.p`
      opacity: 1;
      color: black;
      font-weight: bold;
      font-size: 1.2rem
   `

   return (
      <div>
         <CharName>
            {charInfo.name}
         </CharName>
      </div>
   )
}

export default Character