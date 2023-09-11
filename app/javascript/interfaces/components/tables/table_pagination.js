import React from 'react';
import { Pagination, Stack } from '@mui/material';

export default function TablePagination(props) {
  const { handlePageChange, pagination } = props;

  if (!handlePageChange || !pagination) {
    return;
  }

  return (
    <Stack
      sx={{ textAlign: 'center' }}
      mt={2}
      direction="row"
      justifyContent="center"
      alignItems="center">
      <Pagination
        count={Math.ceil(
          pagination?.total_count / pagination?.per_page
        )}
        page={parseInt(pagination?.page)}
        color="primary"
        onChange={handlePageChange}
      />
    </Stack>
  );
}
