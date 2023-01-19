'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react'

const FormAdd = () => {

  const router = useRouter();

const [title, setTitle] = useState('');
const [content, setContent] = useState('');

const addnote = async (e) => {
  e.preventDefault();
  await fetch('http://127.0.0.1:8090/api/collections/notes/records', {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title,
      content
    }),
  });
  setContent('');
  setTitle('');

  router.push('/notes');
}

  return (
    <form onSubmit={addnote} className='bg-slate-200 flex flex-col
    p-2 mt-2'>
 <div className="mb-2">
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">Titulo</label>
                <input type="text" name="title" id="title" autoComplete="given-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" value={title} onChange={e => setTitle(e.target.value)}/>
              </div>
      <div>
              <label htmlFor="about" className="block text-sm font-medium text-gray-700">Contenido</label>
              <div className="mt-1">
                <textarea id="about" name="about" rows={3} className="p-2 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" placeholder="Descripcion de la tarea"  value={content} onChange={e => setContent(e.target.value)}></textarea>
              </div>
            </div>
                  <button
                    type="submit"
                    className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 mt-2"
                  >
                    Agregar
                  </button>
    </form>
  )
}

export default FormAdd