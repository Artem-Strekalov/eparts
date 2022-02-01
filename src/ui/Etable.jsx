import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Button from '@mui/material/Button'
import {useSelector, useDispatch} from 'react-redux'
import {chooseProduct, showModal} from '../store/actions'

const Etable = ({data}) => {
  const rows = JSON.parse(data)
  const dispatch = useDispatch()
  
  function selectProduct(obj) {
    dispatch(chooseProduct(obj))
    dispatch(showModal())
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{minWidth: 650}} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>Наименование</TableCell>
            <TableCell align='right'>Артикул</TableCell>
            <TableCell align='right'>Количество</TableCell>
            <TableCell align='right'>Цена на складе</TableCell>
            <TableCell align='right'>Цена под заказ</TableCell>
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
              <TableCell align='right'>{row.stockPrice}</TableCell>
              <TableCell align='right'>{row.priceOnOrder}</TableCell>
              <TableCell align='right'>
                <Button
                  size='small'
                  variant='contained'
                  onClick={() => selectProduct(row)}
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
