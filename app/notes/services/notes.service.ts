import PocketBase from 'pocketbase'

export const getNotes = async ():Promise<any> => {

  const db = new PocketBase('http://127.0.0.1:8090')
  const data = await db.collection('notes').getList();
  return data?.items as any[]
}

export const getNote = async (noteId:string) => {
  const res= await fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,{next:{revalidate:60}});
  const data = await res.json();
  return data;
}  


