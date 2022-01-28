import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'

const Etable = ({data, updateCart}) => {
  const rows = JSON.parse(data)
  const styled = {
    btn: {
      padding: '5px',
      background: '#0075c4',
      color: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  }
  const dispatch = useDispatch()
  const test = useSelector((state) => state.dataCart)
  console.log(test)
  function addDataCart(obj) {
    console.log(obj)
    dispatch({type: 'ADD_CART', payload: obj})
  }
  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Наименование</TableCell>
            <TableCell align='right'>Артикул</TableCell>
            <TableCell align='right'>Количество</TableCell>
            <TableCell align='right'>Цена</TableCell>
            <TableCell align='right'> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{'&:last-child td, &:last-child th': {border: 0}}}
            >
              <TableCell sx={{maxWidth: 100}} component='th' scope='row'>
                {row.name}
              </TableCell>
              <TableCell align='right'>{row.vendorCode}</TableCell>
              <TableCell align='right'>{row.amount}</TableCell>
              <TableCell align='right'>{row.price}</TableCell>
              <TableCell align='right'>
                <Button
                  size='small'
                  variant='contained'
                  onClick={() => addDataCart(row)}
                >
                  В корзину
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default Etable
