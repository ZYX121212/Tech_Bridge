import React from 'react'
import ItemShowCase from '../components/investment/ItemShowCase'
import ItemDesc from '../components/investment/ItemDesc'
import ItemSelectCase from '../components/investment/ItemSelectCase'
import { OPT_INVESTMENT } from '../contants/Options'

export default function Investments() {
  return (
    <div >
      <ItemDesc>
        <h1>欢迎使用投资库</h1>
        <p>投资库是创业项目投资的首选平台。我们专注于连接有志创业者和寻找有潜力的项目的投资机构和职业投资人。</p>

        <p>投资库为创业者提供了以下重要优势：</p>

        <ul>
          <li><strong>资金支持：</strong> 我们联系了众多投资机构和职业投资人，他们愿意为有前景的创业项目提供资金支持。</li>
          <li><strong>导师指导：</strong> 除了资金，我们还提供了专业导师的指导，帮助您在创业过程中面对各种挑战。</li>
          <li><strong>行业网络：</strong> 通过投资库，您可以建立有价值的行业联系，与同行、合作伙伴和行业专家交流经验。</li>
          <li><strong>可持续增长：</strong> 我们不仅关注项目的初创阶段，还致力于长期可持续增长，为您的项目提供支持。</li>
        </ul>

        <p>如果您是投资机构或职业投资人，投资库为您提供了以下优势：</p>

        <ul>
          <li><strong>项目筛选：</strong> 我们精心筛选和推荐有潜力的创业项目，以节省您的时间和精力。</li>
          <li><strong>多样的投资机会：</strong> 投资库提供多样的行业和项目类型，让您可以选择最适合您的投资领域。</li>
          <li><strong>合作机会：</strong> 通过我们的平台，您可以发现潜在的合作伙伴和共同投资者，共同推动项目成功。</li>
          <li><strong>投资管理：</strong> 我们提供投资管理工具，帮助您跟踪和管理您的投资组合。</li>
        </ul>

        <p>投资库致力于促进创新和商业成功，成为创业者和投资者的理想合作伙伴。</p>

        <p>立即加入我们，探索无限的投资和创业机会！</p>
      </ItemDesc>

      <ItemSelectCase options={OPT_INVESTMENT}></ItemSelectCase>
      <ItemShowCase></ItemShowCase>
    </div>
  )
}
