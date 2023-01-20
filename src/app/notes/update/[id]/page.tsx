import FormNote from '@/app/components/formNote'
import Title from '@/app/components/title'
import React from 'react'

const getNote = async (noteId:string) => {
  const res= await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,{next:{revalidate:60}});
  const data = await res.json();
  return data;
}  

const UpdateNotePage = async ({params}) => {


  const note = await getNote(params.id);

  return (
    <div>
    <Title title="Actualizar Nota" />
    <div>
      <FormNote note={note}/>
    </div>
  </div>
  )
}

export default UpdateNotePage