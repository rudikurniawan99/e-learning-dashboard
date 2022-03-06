import * as _ from 'lodash';
import * as cuid from 'cuid';
import * as PropTypes from 'prop-types';

import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    TableFooter,
    TablePagination,
    TableSortLabel
} from '@mui/material';
import { Box } from '@mui/system';
import { visuallyHidden } from '@mui/utils';

const DataTable = ({ records, heads, pagination }) => {
    const { page, show, sortBy, orderBy } = pagination.value;
    const handleSort = (value) => {
        pagination.setValue({
            orderBy: value,
            sortBy: sortBy === 'asc' ? 'desc' : 'asc'
        });
    };

    return (
        <TableContainer component={Paper}>
            <Table aria-label="data-table">
                <TableHead>
                    <TableRow>
                        {heads.map((h) => (
                            <TableCell key={cuid()} align="center" padding="normal" sortDirection={orderBy === h.field ? sortBy : false}>
                                <TableSortLabel
                                    active={orderBy === h.field}
                                    direction={orderBy === h.field ? sortBy : 'asc'}
                                    onClick={() => handleSort(h.field)}
                                >
                                    {h.label}
                                    {orderBy === h.id ? (
                                        <Box component="span" sx={visuallyHidden}>
                                            {sortBy === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                        </Box>
                                    ) : null}
                                </TableSortLabel>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {records.data.map((d) => (
                        <TableRow key={cuid()} hover sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            {heads.map((h) => (
                                <TableCell key={cuid} align="center">
                                    {_.isEmpty(h.format) ? d[h.field] : h.format(d[h.field])}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
                <TableFooter>
                    <TablePagination rowsPerPageOptions={[10, 25, 50, 100]} count={records.total} page={page} />
                </TableFooter>
            </Table>
        </TableContainer>
    );
};

DataTable.propTypes = {
    records: PropTypes.shape({
        data: PropTypes.array,
        total: PropTypes.number
    }),
    heads: PropTypes.arrayOf(
        PropTypes.shape({
            field: PropTypes.string,
            label: PropTypes.string,
            isSortable: PropTypes.bool,
            format: PropTypes.func
        })
    ),
    pagination: PropTypes.shape({
        value: PropTypes.object,
        setValue: PropTypes.func
    })
};

export default DataTable;
