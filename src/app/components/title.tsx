import React from 'react'

const Title = ({ title = ''}) => {
  return (
    <div className='my-4'>
      <p className='font-medium text-lg md:text-2xl'>{ title }</p>
    </div>
  )
}

export default Title