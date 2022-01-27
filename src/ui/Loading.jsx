import React from 'react'
import CircularProgress from '@mui/material/CircularProgress'

const Loading = () => {
  const styled = {
    position: 'absolute',
    top: '0px',
    bottom: '0px',
    left: '0px',
    right: '0px',
    background: '#222',
    opacity: '0.5',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }
  return (
    <div style={styled}>
      <CircularProgress />
    </div>
  )
}
export default Loading
