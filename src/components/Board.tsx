import React from 'react'
import Grid from '@mui/material/Unstable_Grid2';
import Deck from './Deck'
import Builder from './Builder'
import Commands from './Commands'
export default function Board(props) {
    

    return (
        <>
            <Grid sx={{mt:5, p:3, width:'100vw'}} container spacing={4}>
                <Grid md={4} xs={12}>
                    <Commands />
                </Grid>
                <Grid md={4} xs={12}>
                    <Deck />
                </Grid>
                <Grid md={4} xs={12}>
                    <Builder />
                </Grid>
            </Grid>
        </>
    )
}
