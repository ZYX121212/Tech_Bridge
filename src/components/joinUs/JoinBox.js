import React from 'react'
import classes from './JoinBox.module.css'
export default function JoinBox(props) {
  return (
    <div className={classes.box}>
      {props.title}
    </div>
  )
}
