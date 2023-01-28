'use client'

const Error = ({error, reset }:any) => {
  return (
    <div>
      No se puedo cargar: { error.message}
      <button onClick={() => reset()}>RECARGAR</button>
    </div>
  )
}

export default Error