import React, { useState, useEffect } from 'react'
import {
    Grid,
    Typography,
    Paper
} from '@mui/material';

export default function Home() {
    const [itemArr, setItemArr] = useState([])

    let api = `https://fakestoreapi.com/products`;

    const getData = async () => {
        const response = await fetch(api)
        const allItems = await response.json()
        setItemArr(allItems)
        console.log("hii", allItems)
    }

    useEffect(() => {
        getData()
    }, []);



    return (
        <>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    itemArr.map((item, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Paper elevation={3} style={{ padding: '16px' }}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    style={{ width: '40%', height: '200px' }}
                                />
                                <Typography variant="subtitle1">{item.title}</Typography>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
          
        </>
    )
}
