import React from 'react'
import JoinBox from '../components/joinUs/JoinBox'
import classes from './JoinUs.module.css'
import Footer from '../layout/Footer'

export default function JoinUs() {
  return (
    <>
      <div className={classes.joinList}>
        <JoinBox title='加入投资者库'></JoinBox>
        <JoinBox title='加入人才库'></JoinBox>
        <JoinBox title='投递项目库'></JoinBox>
        <JoinBox title='加入我们'></JoinBox>
        <JoinBox title='寻找职业经理人'></JoinBox>
      </div>
      <Footer></Footer>
    </>
  )
}
