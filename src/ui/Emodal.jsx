import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog'
import {useSelector, useDispatch} from 'react-redux'
import {closeModal} from '../store/actions'

const Emodal = () => {
  /* const [open, setOpen] = useState(true) */

  const open = useSelector((state) => state.dataApp.statusModal)
  const dispatch = useDispatch()
  const handleClose = () => {
    dispatch(closeModal())
  }
  const styled = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#fff',
    boxShadow: 24,
    p: 4,
  }
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
    ></Dialog>
  )
}
export default Emodal
