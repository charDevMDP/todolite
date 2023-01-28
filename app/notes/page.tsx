import Note from "../components/note";
import Title from "../components/title";
import { getNote } from "./services/notes.service";


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