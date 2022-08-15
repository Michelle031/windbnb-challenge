import React, { useEffect } from 'react';
import Header from './components/Header';
import './App.css';
import { useDispatch} from 'react-redux';
import { fetchStays } from './features/staysSlice';
import Stays from './components/Stays';

function App() {

  const dispatch = useDispatch();


  // dispatch our thunk when component first mounts
  useEffect(() => {
    dispatch(fetchStays())
  }, [dispatch])


  return (
    <div className="App">
      <Header />
      <Stays />
    </div>
  );
}

export default App;
