import React from 'react'

function OptionD({departamento, municipio}) {

    

  return (
    <>
        
            <option value={departamento}>{departamento}--{municipio}</option>
    </>
    
  )
}

export default OptionD