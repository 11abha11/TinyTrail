import { useState } from "react"

const LinkShortener = ({setInputValue}) => {
  const [value , setValue] = useState("");
  const handleClick = () => {
    setInputValue(value);
    setValue("");
  }

  return (
    <div className='inputContainer'>
      <h1>tiny<span>Trail</span></h1>
      <p>Shorten your URLs with ease!</p>
      <div>
        <input 
          type='text' 
          placeholder='Enter the URL...' 
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button onClick={handleClick}>Shorten</button>
      </div>
    </div>
  )
}

export default LinkShortener