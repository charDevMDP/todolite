'use client'
import React from 'react'
import PocketBase from 'pocketbase'
import { useRouter } from 'next/navigation'

async function deleteNote(id:string) {
  const db = new PocketBase('http://127.0.0.1:8090')
  const data = await db.collection('notes').delete(id);
  return data
}


const optionsNote = ({id}) => {

  const router = useRouter();

  const dlt = () => {
    deleteNote(id)
      .then(e => { router.push('/notes') })
      .catch(e => console.log(e))
  }


  return (

      <div className='flex justify-between w-[16rem] mt-5'>
        <button onClick={() => router.push(`/notes/update/${id}`)} className="bg-cyan-300 hover:bg-cyan-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Actualizar</span>
        </button>
        <button  onClick={dlt}  className="bg-red-300 hover:bg-red-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <span>Eliminar</span>
        </button>
        </div>

  )
}

export default optionsNote