import React, { useState } from 'react'
import QRCode from 'react-qr-code'



export default function Qrbox() {
  const [text, setText] = useState('I\'m a Devoloper follow me on https://www.linkedin.com/in/nur-ahamed-mondal/');
    
  // const handleClick =()=>{
  //     console.log("Handle was clicked")
  //     let newText = text.;
  //     setText(newText);
  //   }

  
  const handleOnChange =(event)=>{
      setText(event.target.value);
  }  

  return (
    <div className="container">

      <h1>Enter Url or text to convert QR code</h1>
      <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} id="myBox" rows="1">
             </textarea>
        
      </div>
      <div>
      <QRCode value={text} />
      </div>

     {/* <button type="button" onClick={handleClick} className="btn btn-primary">Generate QR Code</button>
      <QRCode value={text} */}

         
    </div>
  )
}
