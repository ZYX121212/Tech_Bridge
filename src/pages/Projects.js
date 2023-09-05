import React from 'react'
import ItemDesc from '../components/investment/ItemDesc'
import ItemSelectCase from '../components/investment/ItemSelectCase'
import ItemShowCase from '../components/investment/ItemShowCase'
import { OPT_PROJECTS } from '../contants/Options'

export default function Projects() {
  return (
    <div>
      <ItemDesc>
        <h1>欢迎来到项目库</h1>
        <p>项目库是一个连接创意与实现的平台，为创业者、投资者和合作伙伴提供机会。</p>

        <h2>我们的使命：</h2>
        <p>我们致力于帮助有创意、野心和愿景的人们找到支持、资源和机遇，从而将他们的梦想变成现实。</p>

        <h2>您的机会：</h2>
        <p>创业者可以在项目库寻找资金、技术合作和市场渠道，投资者可以发现潜在的投资项目，合作伙伴可以找到新的商业机会。</p>

        <h2>加入我们：</h2>
        <p>无论您是创业者还是投资者，项目库都欢迎您加入我们的社区，共同构建更加创新和繁荣的未来。</p>
      </ItemDesc>
      <ItemSelectCase options={OPT_PROJECTS}></ItemSelectCase>
      <ItemShowCase></ItemShowCase>
    </div>
  )
}
