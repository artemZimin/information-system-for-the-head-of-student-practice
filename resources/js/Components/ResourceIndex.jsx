import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@/Components/Pagination';
import { IconButton, Typography } from '@mui/material';
import MainLayout from '@/Layouts/MainLayout';
import { Head } from '@inertiajs/react';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { router } from '@inertiajs/react'

export default function ResourceIndex({ data, rows, title, currentRoute }) {
    const items = data.data

    const redirectToCreate = () => router.get(route(`${currentRoute}.create`))

    return (
        <>
            <Head><title>{title}</title></Head>
            <MainLayout>
                <Typography variant="h3" gutterBottom>
                    {title}
                    <IconButton onClick={redirectToCreate} size="large" color="primary" aria-label="upload picture" component="label">
                        <AddCircleIcon />
                    </IconButton>
                </Typography>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                {
                                    Object.entries(rows).map(row => <TableCell align="left" key={row[1]}>{row[1]}</TableCell>)
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map((row) => (
                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    hover
                                    style={{ cursor: 'pointer' }}
                                >
                                    {
                                        Object.entries(rows).map(item => <TableCell align="left" key={row[1]}>{row[item[0]]}</TableCell>)
                                    }
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                <Pagination data={data} />
            </MainLayout>
        </>
    );
}