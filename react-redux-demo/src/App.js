import React from 'react';
import { Provider } from 'react-redux'
import store from './redux/store'
import './App.css';
import CakeComponent from './components/CakeComponent';
import IceCreamComponent from './components/IceCreamComponent';
import HooksCakeComponent from './components/HooksCakeComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeComponent />
        <IceCreamComponent />
        <HooksCakeComponent />
      </div>
    </Provider>
  );
}

export default App;
