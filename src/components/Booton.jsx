import React from 'react'

export const Booton = ( { claseName, texto, handleClick } ) => {
  return (
    <button className={claseName} onClick={handleClick}>
        {texto}
    </button>
  )
}
