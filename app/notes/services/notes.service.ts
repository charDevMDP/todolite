import PocketBase from 'pocketbase'

export const getNotes = async ():Promise<any> => {

  //const db = new PocketBase('http://127.0.0.1:8090')
  //return await db.collection('notes').getList();
  const url = `https://rickandmortyapi.com/api/character`
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.results)
}

export const getNote = async (noteId:string) => {
  const url:any = fetch(`http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,{next:{revalidate:60}});
  return fetch(url)
    .then((resp) => resp.json())
    .then((data) => data.results)
}  


