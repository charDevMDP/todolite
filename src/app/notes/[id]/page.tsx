import React from 'react'


const getNote = async (noteId:string) => {
  const res= await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,{next:{revalidate:10}});
  const data = await res.json();
  return data;
}

const Notepage = async ({params}) => {

  const note = await getNote(params.id);

  const { id, title, content, created } = note || {};

  return (
    <div>
        <div className='bg-yellow-300 p-2 '>
        <h2>{title}</h2>
        <h5>{content}</h5>
        <p>{created}</p>
      </div>
    </div>
  )
}

export default Notepage