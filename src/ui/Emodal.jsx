import React, {useState} from 'react'
import Modal from '@mui/material/Modal'
import Box from '@mui/material/Box'
import {useSelector, useDispatch} from 'react-redux'
import {closeModal} from '../store/actions'

const Emodal = () => {
  /*   const [open, setOpen] = useState(true)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false) */

  const dispatch = useDispatch()
  const open = useSelector((state) => state.statusModal)
  const handleClose = () => dispatch(closeModal)

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
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={styled}></Box>
    </Modal>
  )
}
export default Emodal
