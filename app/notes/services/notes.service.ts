import PocketBase from 'pocketbase'

export const getNote = async ():Promise<any> => {

  const db = new PocketBase('http://127.0.0.1:8090')
  const data = await db.collection('notes').getList();
  return data?.items as any[]
}

