import React from 'react';
import './App.less';
import { AButton, AMenu } from './components/atoms';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <div>
      <AMenu />
      <AButton>
        test
      </AButton>
    </div>
  );
}

export default App;
