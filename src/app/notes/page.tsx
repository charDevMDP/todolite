import Note from "../components/note";
import PocketBase from 'pocketbase'


async function getNotes() {

  const db = new PocketBase('http://127.0.0.1:8090')
  const data = await db.collection('notes').getList();
  return data?.items as any[]
}

const NotesPage = async () => {

  const notes = await getNotes();

  return (
    <div>
      <h2>Notas</h2>
      {
        notes?.map((note)=>{
          return <Note key={note.id} note={note} />
        })
      }
    </div>
  )
}

export default NotesPage