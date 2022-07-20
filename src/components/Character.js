// Write your Character component here
import React, { } from 'react'

const Character = props => {
   const { charInfo } = props

   return (
      <div>
         {charInfo.name}
      </div>
   )
}

export default Character