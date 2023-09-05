import React from 'react'
import classes from './SeletorFilter.module.css'



export default function SelectorFilter(props) {
  return (
    <div className={classes.box}>
      <h1 className={classes.title}>{props.title}</h1>
      <ul className={classes.lists}>
        {
          props.options.map((item) => {
            return (<li className={classes.list}>{item}</li>)
          })
        }
      </ul>
    </div>
  )
}
