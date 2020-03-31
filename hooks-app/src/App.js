import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import useForm from './useForm';

function App() {

  const [values, handleChange] = useForm({email: '', password: ''});

  useEffect(() => {
    console.log('render');
  },[values.password])

  return (
    <div className="App">
      <input name="email" value={values.email} onChange={handleChange} />
      <input type="password" value={values.password} name="password" onChange={handleChange} />
    </div>
  );
}

export default App;
