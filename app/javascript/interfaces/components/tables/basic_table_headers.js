import React from 'react';
import {
    Box,
    TableContainer,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export default function BasicTableHeaders(props) {
  const { headers, sortHandler, order, orderBy } = props;

  return (
    <TableHead>
        <TableRow>
            { headers.map((item) => {
                if (item?.sortable && sortHandler) {
                    return (
                        <TableCell key={item?.slug || item}>
                            <TableSortLabel
                                active={orderBy === item.value}
                                direction={order}
                                onClick={() => sortHandler(item.value)}>
                                {item.name}
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc'
                                    ? 'sorted descending'
                                    : 'sorted ascending'}
                                </Box>
                            </TableSortLabel>
                        </TableCell>
                    )
                } else {
                    return (
                        <TableCell key={item.slug}>{item.name}</TableCell>
                    );
                }
            }) }
        </TableRow>
    </TableHead>
  );
}
