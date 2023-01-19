import Link from 'next/link';
import React from 'react'

const note = ({note}) => {

  const { id, title } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className='bg-yellow-100 my-2 p-2 '>
        <h2>{title}</h2>
      </div>
    </Link>
  )
}

export default note