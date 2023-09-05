import React from 'react'
import classes from './ItemDesc.module.css'

export default function ItemDesc(props) {
  return (
    <div className={classes.desc}>
      {
        props.children
      }
    </div>
  )
}
