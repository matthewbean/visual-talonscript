import React from 'react'

import './App.css'


import AppState from './context/AppState'
import Board from './components/Board'
import NavBar from './components/NavBar'

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
    <CssBaseline />
    <AppState>
    <div className="App">
      <NavBar />
      <Board />
    </div>
    </AppState>
    </ThemeProvider>
  )
}

export default App
