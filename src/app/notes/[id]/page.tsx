
import Title from '@/app/components/title';
import React from 'react'
import OptionsNote from '../../components/optionsNote'

const getNote = async (noteId:string) => {
  const res= await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,{next:{revalidate:60}});
  const data = await res.json();
  return data;
}  


const Notepage = async ({params}) => {

  //const router = useRouter();
  
  
  const note = await getNote(params.id);


  const { id, title, content, created } = note || {};

  return (
    <div>
       <Title title="Detalle Nota" />
       <div className='flex flex-col items-center justify-center'>
          <div  className='bg-yellow-100 my-2 p-5 rounded-br-lg shadow-md h-48 w-100 md:w-1/2 flex flex-col justify-around'>
          <p className='text-3xl font-semibold text-center'>{title}</p>
          <p className='text-lg text-center'>{content}</p>
          <p className='text-sm text-gray-700 italic text-right'>{created}</p>
        </div>
        <OptionsNote id={params.id} />
        </div>
    </div>
  )
}

export default Notepage