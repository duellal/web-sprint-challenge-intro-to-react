import React, { } from 'react'
import arrowIcons from './arrowIcons'

const Details = props => {
   const { close, charInfo } = props

   return (
      <div>
         <button onClick={close}>
            {arrowIcons.close}
         </button>

         {/* Unsure if the details paragraphs (below) of what I want to show when the arrow button is clicked should go here or not */}

         <p>{charInfo.name}'s gender is {charInfo.gender}</p>
         <p>{charInfo.name}'s birth year is {charInfo.birth_year}</p>
         <p>{charInfo.name}'s height is {charInfo.height}</p>
         <p>{charInfo.name}'s mass is {charInfo.mass}</p>
         <p>{charInfo.name}'s has been in {charInfo.films}</p>
      </div>
   )
}

export default Details