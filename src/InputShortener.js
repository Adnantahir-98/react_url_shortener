import React, { useState } from 'react'

const InputShortener = ({ setInputValue }) => {
  
  const [value, setValue] = useState("");

  const handleShrink = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className="inputContainer">
      <h1>URL <span>Shortener</span></h1>
      <div>
        <input
          type="text"
          placeholder="Paste a link to shorten it"
          value={value}
          onChange={e => setValue(e.target.value)}  
        />
        <button onClick={handleShrink}>shorten</button>
      </div>
    </div>
  )
}

export default InputShortener