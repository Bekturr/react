import React, { useState } from 'react'


function Header(props) {
  const [first, setfirst] = useState()

  const inputValue = (el)=>{
    setfirst(el.target.value)
  }


  const clickHandler = ()=> {
    const obj = {
      text : first,
    }
    props.onObj(obj)
  }

  return (
    <div>
        <input onChange={inputValue} type="text" />
        <button onClick={clickHandler}>ADD</button>
    </div>
  )
}

export default Header;
