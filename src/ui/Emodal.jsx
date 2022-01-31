import React, {useState} from 'react'
import Dialog from '@mui/material/Dialog'
import {useSelector, useDispatch} from 'react-redux'
import {closeModal} from '../store/actions'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import Button from '@mui/material/Button'

const Emodal = () => {
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState(1)
  const open = useSelector((state) => state.dataApp.statusModal)
  const dataPart = useSelector((state) => state.dataApp.dataBascket)
  const dispatch = useDispatch()

  function handleClose() {
    dispatch(closeModal())
    setPrice('')
    setAmount(1)
  }

  const handleChange = (event) => {
    setPrice(event.target.value)
  }

  const styled = {
    width: '600px',
    padding: '20px',
    boxSizing: 'border-box',
    content: {
      display: 'flex',
      width: '100%',
      height: '100%',
    },
    img: {
      width: '50%',
      backgroundImage: `${
        dataPart.image
          ? `url(${dataPart.image})`
          : `url(${process.env.PUBLIC_URL + '/image/png/nofoto.jpg'})`
      }`,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
    },
    infoParts: {
      display: 'flex',
      flexDirection: 'column',
      width: '50%',
      height: '100%',
      paddingLeft: '10px',
    },
    nameParts: {
      marginBottom: '20px',
      fontSize: '20px',
      fontWeight: '500',
    },
    blockCounter: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '30px',
    },
    counter: {
      display: 'flex',
      alignItems: 'center',
    },
    count: {
      width: '25px',
      height: '25px',
      borderRadius: '5px',
      color: '#fff',
      background: '#0075c4',
      fontSize: '30px',
      cursor: 'pointer',
    },
    span: {
      marginLeft: '10px',
      marginRight: '10px',
      fontSize: '20px',
    },
    btnGroup: {},
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={styled}>
        <div style={styled.content}>
          <div style={styled.img}></div>
          <div style={styled.infoParts}>
            <span style={styled.nameParts}>{dataPart.name}</span>
            <FormControl>
              <InputLabel>Выберите стоимость</InputLabel>
              <Select
                value={price}
                label='Выберите стоимость'
                onChange={handleChange}
              >
                <MenuItem value={dataPart.stockPrice}>
                  Со склада - {dataPart.stockPrice} руб.
                </MenuItem>
                <MenuItem value={dataPart.priceOnOrder}>
                  Под заказ - {dataPart.priceOnOrder} руб.
                </MenuItem>
              </Select>
            </FormControl>
            <div style={styled.blockCounter}>
              <span>Укажите кол-во:</span>
              <div style={styled.counter}>
                <div
                  style={styled.count}
                  onClick={() => {
                    setAmount(amount + 1)
                  }}
                >
                  <AddIcon style={{marginBottom: '4px'}} />
                </div>
                <span style={styled.span}>{amount}</span>
                <div
                  style={styled.count}
                  onClick={() => {
                    setAmount(Math.max(amount - 1, 1))
                  }}
                >
                  <RemoveIcon style={{marginBottom: '4px'}} />
                </div>
              </div>
            </div>
            <Button
              style={{marginTop: '30px'}}
              size='small'
              variant='contained'
            >
              Оформить заказ
            </Button>
            <Button
              style={{marginTop: '10px'}}
              size='small'
              variant='outlined'
              onClick={handleClose}
            >
              Отмена
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
export default Emodal
