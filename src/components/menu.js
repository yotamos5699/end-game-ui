import React from 'react'
function Menu({handleClick}) {
  return (
    <div className='menu'>
        <button name='stats' onClick={handleClick}>סטטוס מוזמנים</button>
        <button name='contects'onClick={handleClick}>קלוט מוזמנים</button>
        <button name='plan'onClick={handleClick}>פירוט תוכנית</button>
        <button name='script'onClick={handleClick}>תסריט הודעות</button>


    </div>
  )
}
export default Menu