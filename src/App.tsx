import { useState } from 'react';
import Header from './components/Header';
import Main from './components/board';
import Button from './components/Button';

function App() {
  const [start, setStart] = useState(false);

  return (
    <>
    <Header></Header>
    {start?<Main></Main>:<Button start={start} setStart={setStart}></Button>}
    
    </>

  );}

export default App
