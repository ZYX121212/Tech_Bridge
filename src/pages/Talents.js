import React from 'react'
import ItemDesc from '../components/investment/ItemDesc'
import ItemSelectCase from '../components/investment/ItemSelectCase'
import ItemShowCase from '../components/investment/ItemShowCase'
import { OPT_TALENTS } from '../contants/Options'

export default function Talents() {
  return (
    <div>
      <ItemDesc>
        <h1>欢迎来到人才库</h1>
        <p>人才库是一个汇聚各行各业顶尖人才的平台，为企业、创业者和职业发展提供宝贵资源。</p>

        <h2>我们的使命：</h2>
        <p>我们的使命是连接具有卓越才华、独特技能和丰富经验的人才与需要他们的企业和项目。</p>

        <h2>您的机会：</h2>
        <p>企业可以在人才库寻找合适的人才来推动业务增长，创业者可以找到关键团队成员，职业发展者可以发现新的职业机会。</p>

        <h2>加入我们：</h2>
        <p>无论您是企业、创业者还是寻找新职业机会的职业发展者，人才库都欢迎您加入我们的社区，共同推动卓越成就。</p>
      </ItemDesc>
      <ItemSelectCase options={OPT_TALENTS}></ItemSelectCase>
      <ItemShowCase></ItemShowCase>
    </div>
  )
}
