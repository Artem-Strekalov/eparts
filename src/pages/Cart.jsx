import React from 'react'
import Eheader from '../ui/Eheader'
import Button from '@mui/material/Button'
import DeleteIcon from '@mui/icons-material/Delete'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import {useSelector} from 'react-redux'

const Cart = () => {
  const rows = useSelector((state) => state.user.dataBascket)
  const styled = {
    content: {
      width: '100%',
      height: '600px',
      background: '#f1f1f1',
      padding: '20px 20px 0 20px',
    },
    nameCart: {
      color: '#333',
      marginBottom:'20px'
    },
    product: {
      display: 'flex',
      alignItems: 'center',
    },
    foto: {
      width: '100px',
      height: '100px',
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundRepeat: 'no-repeat',
      marginRight: '30px',
    },
    nameText: {
      maxWidth: '300px',
      width: '100%',
    },
  }
  return (
    <div>
      <Eheader />
      <div style={styled.content}>
        <h2 style={styled.nameCart}>Корзина заказов</h2>
        <TableContainer component={Paper}>
          <Table sx={{minWidth: 650}} aria-label='simple table'>
            <TableHead>
              <TableRow style={{background: '#efa00b'}}>
                <TableCell>Товар</TableCell>
                <TableCell align='right'>Количество</TableCell>
                <TableCell align='right'>Стоимость</TableCell>
                <TableCell align='right'></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell sx={{maxWidth: 300}} component='th' scope='row'>
                    <div style={styled.product}>
                      <div
                        style={{
                          ...styled.foto,
                          backgroundImage: `${
                            row.image
                              ? `url(${row.image})`
                              : `url(${
                                  process.env.PUBLIC_URL +
                                  '/image/png/nofoto.jpg'
                                })`
                          }`,
                        }}
                      ></div>
                      <span style={styled.nameText}>{row.name}</span>
                    </div>
                  </TableCell>
                  <TableCell align='right'>{row.amount}</TableCell>
                  <TableCell align='right'>{row.stockPrice} руб.</TableCell>
                  <TableCell align='right'>
                    <Button size='small' variant='outlined'>
                      Убрать из корзины
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  )
}
export default Cart
