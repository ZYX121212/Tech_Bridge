import React from 'react'

import classes from './ItemSelectCase.module.css'
import SelectorFilter from '../ui/SelectorFilter'

const options = ['汽车', '火车', '飞机'];

export default function ItemSelectCase(props) {
  return (
    <div className={classes.selectorBox}>
   {
    props.options.map(item=>{
      return (
        <SelectorFilter title={item.name} 
        options={item.options}></SelectorFilter>
      )
    })
   }
      {/* <SelectorFilter title={'投资内容'} options={options}></SelectorFilter>
      <SelectorFilter title={'投资内容'} options={options}></SelectorFilter>
      <SelectorFilter title={'投资内容'} options={options}></SelectorFilter> */}
    </div>
  )
}
