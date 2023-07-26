import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {createTheme,ThemeProvider, Typography} from "@mui/material";
import { red } from '@mui/material/colors';
//import { BrowserRouter as Router } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main : "#013e87",
    },
    secondary:{
      main : "#FFFFFF",
    },

  },
  typography : {
    h1 : {
      fontSize : "3rem",
      fontWeight : 600 , 
    },

    h2 : {
      fontSize : "1.75rem",
      fontWeight : 600 ,
    } ,

    h3 : {
      fontSize : "1.5rem",
      fontWeight : 600 ,
    },


  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme = {theme}>
      <App/>
    </ThemeProvider>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
