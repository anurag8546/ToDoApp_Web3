import '../styles/globals.css'

// Internal imports (set the provider)



import {ToDolistProvider, ToDolistContext} from '../context/ToDolistApp'

import { Component } from 'react';
// by this arrow function we instantly get to access all the information
// all the data throughout the application
// because of context API

const MyApp = ({ Component, pageProps }) =>(
  <ToDolistProvider>
    <div>
  return <Component {...pageProps} />
</div>
  </ToDolistProvider>
);

export default MyApp;
