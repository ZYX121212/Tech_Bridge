import React from 'react'
import { Link } from 'react-router-dom'
import classes from './MainMenu.module.css'

export default function MainMenu() {
  return (
    <div className={classes['nav']}>
      <ul>
        <li>
          <Link to='/tb' className={classes['logo']}>SJTU</Link>
        </li>
        <li>
          <Link to='/home'>首页</Link>
        </li>
        <li>
          <Link to='/investments'>投资库</Link>
        </li>
        <li>
          <Link to='/projects'>项目库</Link>
        </li>
        <li>
          <Link to='/talents'>人才库</Link>
        </li>
        <li>
          <Link to='/joinUs'>加入我们</Link>
        </li>
      </ul>
    </div>
  )
}
