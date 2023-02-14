import React, {FC} from 'react'
import logoImg from './vk-logo.png'

import s from './Header.module.css'

const Header:FC = () => {
  return (
    <header className={s.header}>
      <div className={s.imgWrapper}>
        <img src={logoImg} alt="" />
      </div>
      <div className={s.wrapper}>
        <input type="text" placeholder='Поиск'/>
      </div>
    </header>
  )
}

export default Header