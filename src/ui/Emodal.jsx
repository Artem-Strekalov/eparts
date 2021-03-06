import React, {useState, useEffect} from 'react'
import Dialog from '@mui/material/Dialog'
import {useSelector, useDispatch} from 'react-redux'
import {
  closeModal,
  addDataToBascket,
  showBascketMessage,
} from '../store/actions'
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
  const open = useSelector((state) => state.helper.statusModal)
  const selectProduct = useSelector((state) => state.user.selectedProduct)
  const [showError, setShowError] = useState(false)
  const dispatch = useDispatch()

  function handleClose() {
    dispatch(closeModal())
    setPrice('')
    setAmount(1)
  }

  function handleChange(event) {
    setPrice(event.target.value)
  }

  function addDataToCart() {
    const product = {
      ...selectProduct,
      selectedPrice: price,
      quantityGoods: amount,
    }
    if (price) {
      dispatch(addDataToBascket(product))
      handleClose()
      dispatch(showBascketMessage())
    } else {
      setShowError(true)
      return
    }
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
        selectProduct.image
          ? `url(${selectProduct.image})`
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
    error: {
      color: 'red',
      fontSize: '12px',
      marginBottom: '10px',
    },
  }

  return (
    <Dialog open={open} onClose={handleClose}>
      <div style={styled}>
        <div style={styled.content}>
          <div style={styled.img}></div>
          <div style={styled.infoParts}>
            <span style={styled.nameParts}>{selectProduct.name}</span>
            {showError ? (
              <p style={styled.error}>???????????????????? ?????????????? ??????????????????</p>
            ) : (
              ''
            )}
            <FormControl>
              <InputLabel>???????????????? ??????????????????</InputLabel>
              <Select
                value={price}
                label='???????????????? ??????????????????'
                onChange={handleChange}
              >
                <MenuItem value={selectProduct.stockPrice}>
                  ???? ???????????? - {selectProduct.stockPrice} ??????.
                </MenuItem>
                <MenuItem value={selectProduct.priceOnOrder}>
                  ?????? ?????????? - {selectProduct.priceOnOrder} ??????.
                </MenuItem>
              </Select>
            </FormControl>
            <div style={styled.blockCounter}>
              <span>?????????????? ??????-????:</span>
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
              onClick={addDataToCart}
            >
              ???????????????? ?? ??????????????
            </Button>
            <Button
              style={{marginTop: '10px'}}
              size='small'
              variant='outlined'
              onClick={handleClose}
            >
              ????????????
            </Button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}
export default Emodal
