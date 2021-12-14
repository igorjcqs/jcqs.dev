import React from 'react';

import GlobalStyle from './styles/global';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <GlobalStyle />
    </div>
  );
}

export default App;