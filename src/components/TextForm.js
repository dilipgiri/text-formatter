import React,{useState} from "react";

export default function TextForm(props) {
    const [text,setText] = useState("");
    const handleOnChange = (event)=>{
        
        setText(event.target.value);
    }

    const toCapital=()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const toSmall=()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const toClear=()=>{
      setText("");
    }
    
  return (
      <>
        <div className="container my-4" >
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="8" value={text} onChange={handleOnChange}
        ></textarea>
      </div>
      <button className="btn btn-outline-info mx-2" onClick={toCapital}>Capitalize</button>
      <button className="btn btn-outline-info " onClick={toSmall}>Lowercase</button>
      <button className="btn btn-outline-info mx-2 " onClick={toClear}>Clear Text</button>
    </div>

    <div className="container">
        <h3>Your text summary</h3>
        <p>{text.split(" ").filter(function(n){return n!== ""}).length} words and {text.length} characters</p>
    </div>
      </>
    
  );
}
