import React, { useState } from 'react'
import style from './header.module.css'

function Header() {

  const [changeFont, setChangeFont] = useState(false)

  const changeFontHandler=()=>{
    setChangeFont(!changeFont)
  }

  console.log(changeFont);
  

  return (
    <div className={changeFont ? style.container : style.containerDark}>
      <p onClick={changeFontHandler}>{changeFont ? "Dark Mode" : "Light Mode"}</p>
        <ul className={changeFont ? style.changeFont : style.ulDark}>
            <li>Home</li>
            <li>Contact</li>
            <li>About Us</li>
        </ul>
    </div>
  )
}
export default Header