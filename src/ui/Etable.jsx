import React from 'react'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

const Etable = (props) => {
  const rows = [
    createData(
      '45180 Подшипник 118370, 142088, СА0118370, 141591, 6195530M91, 399037, 562504, AL161291, 52559248, 0.900.1360.6, VOE17220227',
      45180,
      10,
      '23 000 тыс',
      4.0,
    ),
  ]
  function createData(name, vendorCode, amount, price, buy) {
    return {name, vendorCode, amount, price, buy}
  }
  const styled = {
    btn: {
      padding: '5px',
      background: '#0075c4',
      color: '#fff',
      borderRadius: '5px',
      cursor: 'pointer',
    },
  }
  return (
    <TableContainer component={Paper}>
      {props.data}
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
                <button style={styled.btn}>В корзину</button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
export default Etable
