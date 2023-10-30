import React from 'react'
import '../css/Loader.css'
import { Backdrop, Modal } from '@mui/material'

const Loader = ({isLoading}) => {
  return (
 
        <Modal open={isLoading}
         sx={{
          display:'flex', 
          justifyContent:'center', 
          alignItems:'center', 
          pointerEvents:'none',
          MozUserSelect:'none', 
          WebkitUserSelect:'none', 
          msUserSelect:'none',
          userSelect:'none', 
          borderStyle:'none'}}>
            <div className="loader"></div>
        </Modal>
  )
}

export default Loader