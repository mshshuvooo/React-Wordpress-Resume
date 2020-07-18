import React from 'react';
import './App.css';
import { PwaProvider } from './PwaContext';
import Layout from './Layout';

function App() {

  return (
    
      <PwaProvider>
        <Layout />
      </PwaProvider>
      
    
  );
}

export default App;
