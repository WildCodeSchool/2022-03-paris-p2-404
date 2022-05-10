import React from 'react'
import {Audio} from 'react-loader-spinner'

export const LoaderSpinner = () => {
  return (
    <div>

<Audio className='h-80 w-80 text-black' ariaLabel='Loading'/>

    </div>
  )
}
