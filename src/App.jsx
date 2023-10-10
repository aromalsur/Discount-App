
import './App.css';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';

import { useState } from 'react';

function App() {

  const [amount,setAmount]=useState('')
  const [discount,setDiscount]=useState('')
  const [discrate,setDiscrate]=useState('')
  const [saved,setSaved]=useState('')


const calculate=(e)=>{
  let result=amount*discount/100
  console.log(result);
  setSaved(result)

  let Discountrate=amount-result
  setDiscrate(Discountrate)
 
}

  const reset=(e)=>{
    setAmount(0)
    setDiscount(0)
    setDiscrate(0)
    setSaved(0)

  }
  return (
    <><div className="App">

      <div className="container">
        <h1 style={{fontFamily:'monospace'}}>DISCOUNT CALCULATOR</h1>

<div className="input">
   
<TextField onChange={e=>setAmount(e.target.value)} value={amount} id="outlined-basic" label="Amount" variant="outlined"  style={{marginBottom:'10px'}} />



    <div className="slider">
      <h3>Discount(%)</h3>
    <Slider defaultValue={10} aria-label="Default" valueLabelDisplay="auto" onChange={e=>setDiscount(e.target.value)}  />
    </div>
</div>
<div className='Buttons'>
<Button variant="outlined" color="error" onClick={calculate}>
Calculate
</Button>

<Button variant="outlined" color="error" onClick={reset}>
Reset
</Button>
</div>

<div>
<h2 style={{fontFamily:'monospace'}}>You Saved: {saved}</h2>
<h2 style={{fontFamily:'monospace'}}>Discount Price:{discrate}</h2>
</div>
  
  






      </div>

     
   
   
   
   
    </div>




   
      </>

  );
}

export default App;
