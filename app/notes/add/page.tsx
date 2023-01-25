import FormNote from 'app/components/formNote'
import Title from 'app/components/title'
import React from 'react'

const AddNotepage = () => {
  return (
    <div>
      <Title title="Agregar Nota" />
      <div>
        <FormNote/>
      </div>
    </div>
  )
}

export default AddNotepage