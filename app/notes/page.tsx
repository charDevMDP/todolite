import Note from "../components/note";
import PocketBase from 'pocketbase'
import Title from "../components/title";

async function getNote() {

  const db = new PocketBase('http://127.0.0.1:8090')
  const data = await db.collection('notes').getList();
  return data?.items as any[]
}



const NotesPage = async () => {

  const notes = await getNote();

  return (
    <div>
      <Title title="Notas" />
      <div className='mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8' >
      {
        notes?.map((note)=>{
          return <Note key={note.id} note={note} />
        })
      }
      </div>
    </div>
  )
}

export default NotesPage