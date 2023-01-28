
import Title from 'app/components/title';
import OptionsNote from '../../components/optionsNote'
import { getNote } from '../services/notes.service';


const Notepage = async ({params}:any) => {

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