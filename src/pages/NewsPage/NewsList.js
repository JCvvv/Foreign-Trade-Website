import React from 'react'
import { Box } from '@mui/material'
import NewsSection from './NewsSection'

function NewsList () {
  const newsData = [
    {
      title: '市场信息',
      articles: [
        { title: '胡然老师解读最新市场趋势：未来投资的机遇与挑战', url: 'https://baidu.com' },
        { title: '胡然老师专访：如何把握当前的股市波动', url: '#' },
        { title: '专家视角：胡然老师谈数字货币的未来发展', url: '#' },
        { title: '胡然老师深度分析：房地产市场的新动态', url: '#' },
        { title: '投资策略揭秘：胡然老师的黄金投资法则', url: '#' },
        { title: '胡然老师预测：2024年全球经济展望', url: '#' },
        { title: '消费者行为变化：胡然老师解析疫情后的市场趋势', url: '#' },
        { title: '胡然老师点评：新兴技术对市场的影响及应对策略', url: '#' },
      ],
    },
    {
      title: '行业快讯',
      articles: [
        { title: '胡然老师分享：5G技术在各行业的应用前景', url: '#' },
        { title: '胡然老师分享：5G技术在各行业的应用前景', url: '#' },
        { title: '胡然老师探讨：人工智能如何重塑传统产业', url: '#' },
        { title: '新零售时代：胡然老师分析线上线下融合趋势', url: '#' },
        { title: '胡然老师观点：医疗健康行业的创新与挑战', url: '#' },
        { title: '未来出行：胡然老师对电动汽车市场的展望', url: '#' },
        { title: '胡然老师解读：区块链技术在金融行业的应用', url: '#' },
        { title: '胡然老师讲述：教育行业的数字化转型之路', url: '#' },
      ],
    },
    {
      title: '国际新闻',
      articles: [
        { title: '胡然老师分析：全球疫情对国际贸易的影响', url: '#' },
        { title: '胡然老师评论：美国大选对国际政治格局的影响', url: '#' },
        { title: '胡然老师探讨：欧洲经济复苏的挑战与机遇', url: '#' },
        { title: '胡然老师解读：中美贸易战的最新动态', url: '#' },
        { title: '胡然老师点评：英国脱欧后的经济前景', url: '#' },
        { title: '胡然老师讲解：亚洲市场的增长潜力与风险', url: '#' },
        { title: '胡然老师分享：非洲发展中的机遇与挑战', url: '#' },
        { title: '胡然老师预测：全球气候变化对经济的长期影响', url: '#' },
      ],
    },
  ]

  return (
    <Box sx={{ '& > *:not(:last-child)': { marginBottom: '50px' } }}>
      {newsData.map((section, index) => (
        <NewsSection key={index} title={section.title} articles={section.articles} />
      ))}
    </Box>
  )
}

export default NewsList
