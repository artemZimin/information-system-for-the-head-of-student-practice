import MainLayout from '@/Layouts/MainLayout'
import { Breadcrumbs, Button, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { Head, router, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function ResourceCreate({ currentRoute, fields, title, backTitle }) {

    const [data, setData] = useState(fields.map(field => ({ type: field.type, name: field.name, value: '' })))
    const errors = usePage().props.errors

    const redirectToIndex = () => router.get(route(`${currentRoute}.index`))

    const submitHandle = event => {
        event.preventDefault()
        const result = Object.fromEntries(data.map(e => [e.name, e.value]))
        
        router.post(route(`${currentRoute}.store`), result)
    }

    const changeHandle = name => event => {
        setData(data => data.map(e => e.name === name ? { ...e, value: event.target.value } : e))
    }

    return (
        <>
            <Head><title>{title}</title></Head>
            <MainLayout>
                <Breadcrumbs style={{ marginBottom: '2rem' }} aria-label="breadcrumb">
                    <Link
                        underline="hover"
                        color="inherit"
                        onClick={redirectToIndex}
                        style={{ cursor: 'pointer' }}
                    >
                        {backTitle}
                    </Link>
                    <Typography color="text.primary">{title}</Typography>
                </Breadcrumbs>
                <Typography variant="h3" gutterBottom>
                    {title}
                </Typography>
                <form onSubmit={submitHandle}>
                    {
                        fields.map(field => {
                            if (field.type === 'text' || field.type === 'number') {
                                return (
                                    <div key={field.name} style={{ margin: '1rem 0' }}>
                                        <Typography variant="subtitle2" gutterBottom>{field.title}</Typography>
                                        <TextField
                                            style={{ width: '100%' }}
                                            label={field.title}
                                            error={errors[field.name]}
                                            variant="outlined"
                                            value={data.find(e => e.name === field.name).value}
                                            onChange={changeHandle(field.name)}
                                            helperText={errors[field.name]}
                                        />
                                    </div>
                                )
                            }
                        })
                    }
                    <Button type="submit" variant="contained">Создать</Button>
                </form>
            </MainLayout>
        </>
    )
}
