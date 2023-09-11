import React, { useState, useEffect } from 'react'
import { 
  Box,
  TableContainer,
  TableBody,
  Table,
  TableRow,
  TableCell,
} from '@mui/material'
import { connect } from "react-redux"
import { useNavigate } from 'react-router-dom'
import { getUsers, hideAlert } from "../../store/actions"
import {
    TablePagination,
    BasicTableHeaders,
} from "../../components"

function UsersPage(props) {

  const { usersData } = props
  const [items, setItems] = useState([])
  const [pagination, setPagination] = useState(null)

  useEffect(() => {
    props.getUsers({})
  },[])

  useEffect(() => {
    if (usersData) {
      setItems(usersData?.users);
      console.log(usersData?.paginate);
      setPagination(usersData?.paginate);
    }
  },[usersData])

  const handlePageChange = (e, v) => {
    const query = {
      page: v,
      per_page: 10
    }
    props.getUsers(query)
  }

  const detail = (item, index) => {
    return (
      <TableRow
        key={`list-${item?.id}`}
        sx={{
          color: 'black'
        }}>
        <TableCell>{index + 1 + (pagination?.page - 1) * pagination?.per_page}</TableCell>
        <TableCell>{item?.first_name} {item?.last_name}</TableCell>
        <TableCell>{item?.email}</TableCell>
        <TableCell>{item?.username}</TableCell>
        <TableCell>{item?.country}</TableCell>
        <TableCell>{item?.address}</TableCell>
        <TableCell>{item?.phone_number}</TableCell>
        <TableCell>{item?.status}</TableCell>
      </TableRow>
    )
  }

  return (
    <Box
      sx={{
      }}>
        <TableContainer>
          <Table sx={{ minWidth: 550 }} aria-label="border-table">
            <TableBody>
              { items?.map((item, index) => detail(item, index)) }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          pagination={pagination}
          handlePageChange={handlePageChange}
        />
    </Box>
  );
}

const mapStateToProps = state => {
  return {
      loading: state.store.loading,
      showAlert: state.store.showAlert,
      msg: state.store.msg,
      authUser: state.store.authUser,
      usersData: state.store.usersData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
      getUsers: (data) => dispatch(getUsers(data)),
      hideAlert: () => dispatch(hideAlert()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(UsersPage);
