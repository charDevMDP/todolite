import Link from 'next/link';
import React from 'react'

const note = ({note}) => {

  const { id, title } = note || {};

  return (
    <Link href={`/notes/${id}`}>
      <div className='bg-yellow-100 my-2 p-2 rounded-br-lg shadow-md h-[6rem] flex justify-center items-center hover:scale-105 ease-linear duration-200'>
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default note