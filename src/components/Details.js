import React, { } from 'react'
import arrowIcons from './arrowIcons'

const Details = props => {
   const { charId, closeDetails, charInfo } = props

   return (
      <div className='collapse'>
         <p>{charInfo.name}'s gender is {charInfo.gender}</p>
         <p>{charInfo.name}'s birth year is {charInfo.birth_year}</p>
         <p>{charInfo.name}'s height is {charInfo.height}</p>
         <p>{charInfo.name}'s mass is {charInfo.mass}</p>
         <p>{charInfo.name}'s has been in {charInfo.films}</p>

         <button onClick={closeDetails}>
            {arrowIcons.close}
         </button>
      </div>
   )
}

export default Details