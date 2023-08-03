import React,{useState} from 'react';


export default function Textform(props) {
    const [text,set]=useState('Developed by Shadabb');

    const handleclick=()=>{
     let newtext=text.toUpperCase();
      set(newtext);
    props.showAlert("Converted To UpperCase","success")
    }
  
   const onchange=(event)=>{
     set(event.target.value)
   }
   const clear=()=>{
    set("");
    props.showAlert("Cleared the text","success")
   }
   const handleloclick=()=>{
    let newtextt=text.toLowerCase();
    set(newtextt);
    props.showAlert("Converted To LowerCase","success")
   }
   const count=(text)=>{
     let nofwords=text.split(" ").length
     if(nofwords===1){
      nofwords=text.split(" ").length-1;
      return nofwords;
     }
     else if(text.split(" ").length===" ")
     {
     return nofwords-1;
     }
    
   }

   const copy=()=>{
    let txt=document.getElementById('exampleFormControlTextarea1')
    txt.select();
    navigator.clipboard.writeText(txt.value)
    props.showAlert("Copied to Clipboard","success")
   }
   const extraspace=()=>{
    let newtxt=text.split(/[ ]+/);
    set(newtxt.join(" "))
    props.showAlert("Extra Spaces removed","success")
   }
    return (<>
    
      <div className="mb-3 my-4">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="6" value={text} onChange={(event)=>onchange(event)}></textarea>
        <button className="btn btn-primary my-2" onClick={()=>handleclick()}>To Upper Case</button>
        <button className="btn btn-primary my-2 mx-2" onClick={()=>handleloclick()}>To Lower Case</button>
        <button className="btn btn-primary my-2 " onClick={()=>copy()}>Copy Text</button>
        <button className="btn btn-primary my-2 mx-2" onClick={()=>extraspace()}>Remove Extra Spaces</button>
        <button className="btn btn-danger my-2" onClick={()=>clear()}>Clear</button>
      </div>

      <div className={`container text-${props.mode==='dark'?'light':'dark'}`}>
        <h2>Text summary</h2>
        <p>Number of words {count(text)} & Number of Characters {text.length}</p>
        <p>Time to read the text is {Math.round(0.008*text.split(" ").length)} Minutes</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
      </>
  ); 
 
}
