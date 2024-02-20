

import React from 'react'
import { Box, Typography } from '@mui/material'
import ReactECharts from 'echarts-for-react'
import { useLocation } from 'react-router-dom'


function FreeAssessmentReport () {
  const location = useLocation()
  // 从路由状态中获取评估数据
  const mockScores = location.state.scores

  const assessmentResult = {
    '财务实力': [
      { range: [3, 5], level: '弱', description: '企业财务状况不佳，需要立即采取措施改善财务管理和资金调度能力。' },
      { range: [6, 8], level: '较弱', description: '企业在财务管理方面存在一些问题，资金运作能力有待加强。' },
      { range: [9, 11], level: '中等', description: '企业具有一定的财务管理和资金调度能力，但还有提升空间。' },
      { range: [12, 14], level: '强', description: '企业财务状况健康，资金调度能力强，为企业发展提供了可靠保障。' },
      { range: [15, 15], level: '极强', description: '您的企业在财务管理方面展现出卓越性能，具备非常强的资金运作和财务稳定性。' },
    ],
    '创新能力': [
      { range: [4, 7], level: '弱', description: '企业缺乏创新，难以适应市场变化和需求。' },
      { range: [8, 10], level: '较弱', description: '企业创新能力有限，难以在竞争中脱颖而出。' },
      { range: [11, 13], level: '中等', description: '企业在创新方面做出了努力，但仍需进一步加强创新驱动力。' },
      { range: [14, 16], level: '强', description: '企业具有较强的创新能力，能够持续推出新技术或产品。' },
      { range: [17, 20], level: '极强', description: '您的企业是行业创新的领跑者，不断推动技术和产品的创新发展。' },
    ],
    '市场地位': [
      { range: [7, 13], level: '弱', description: '企业市场影响力较小，亟需提升市场地位和品牌知名度。' },
      { range: [14, 18], level: '较弱', description: '企业市场地位不稳定，需要加强市场竞争力。' },
      { range: [19, 23], level: '中等', description: '企业在市场上有一定的知名度和竞争力，但仍有上升空间。' },
      { range: [24, 28], level: '强', description: '企业在市场上具有较强的竞争力和较好的品牌知名度。' },
      { range: [29, 35], level: '极强', description: '您的企业在市场上占据领导地位，品牌影响力极强。' },
    ],
    '运营效率': [
      { range: [3, 5], level: '弱', description: '企业运营效率低下，亟需改进流程和提高效率。' },
      { range: [6, 8], level: '较弱', description: '企业运营效率不高，成本控制和资源利用需优化。' },
      { range: [9, 11], level: '中等', description: '企业运营效率一般，存在一定的改进空间。' },
      { range: [12, 14], level: '强', description: '企业拥有较好的运营效率，有效管理成本与资源。' },
      { range: [15, 15], level: '极强', description: '企业运营效率极高，流程优化，成本控制出色。' },
    ],
    '组织与管理': [
      { range: [12, 20], level: '弱', description: '企业管理混乱，缺乏有效的组织结构和团队协作。' },
      { range: [21, 30], level: '较弱', description: '企业管理层面存在问题，需要加强组织和管理能力。' },
      { range: [31, 40], level: '中等', description: '企业管理和组织结构合理，但仍有提升空间。' },
      { range: [41, 50], level: '强', description: '企业具有较强的管理能力和团队协作精神。' },
      { range: [51, 60], level: '极强', description: '企业展现出卓越的组织和管理能力，团队协作流畅。' },
    ],
    '风险管理': [
      { range: [3, 5], level: '弱', description: '企业缺乏有效的风险管理，经常面临不可预见的风险挑战。' },
      { range: [6, 8], level: '较弱', description: '企业风险管理能力不足，面临较大的经营风险。' },
      { range: [9, 11], level: '中等', description: '企业在风险管理上有所作为，但识别和应对风险的能力还需加强。' },
      { range: [12, 14], level: '强', description: '企业具有较好的风险管理能力，能较好地控制和规避风险。' },
      { range: [15, 15], level: '极强', description: '企业在风险管理方面做得非常好，能有效识别和应对各种风险。' },
    ],
    '环境与社会责任': [
      { range: [3, 5], level: '弱', description: '企业在环境保护和社会责任方面的表现不足，需要加大力度改进。' },
      { range: [6, 8], level: '较弱', description: '企业在承担社会责任和环境保护方面表现一般。' },
      { range: [9, 11], level: '中等', description: '企业在环境和社会责任方面有所关注，但还可以做得更好。' },
      { range: [12, 14], level: '强', description: '企业在环境保护和社会责任方面做了较多努力。' },
      { range: [15, 15], level: '极强', description: '企业在承担社会责任和环保方面表现出色，为社会可持续发展做出了贡献。' },
    ],
    '国际合作': [
      { range: [2, 3], level: '弱', description: '企业缺乏有效的国际合作，国际市场开拓能力弱。' },
      { range: [4, 5], level: '较弱', description: '企业在国际合作方面存在挑战，需进一步开拓国际市场。' },
      { range: [6, 7], level: '中等', description: '企业有一定的国际合作经验，但国际影响力有限。' },
      { range: [8, 8], level: '强', description: '企业具有良好的国际合作能力，成功开展了多项国际合作。' },
      { range: [9, 10], level: '极强', description: '企业在国际合作方面取得显著成就，建立了广泛的国际伙伴关系。' },
    ],
    '出口产品与服务': [
      { range: [5, 9], level: '弱', description: '企业的出口产品和服务质量较差，急需提升以满足国际标准。' },
      { range: [10, 13], level: '较弱', description: '企业出口产品和服务在质量上存在不足，影响国际市场竞争力。' },
      { range: [14, 17], level: '中等', description: '企业的出口产品和服务质量一般，满足基本国际市场需求。' },
      { range: [18, 21], level: '强', description: '企业出口产品和服务质量较好，受到国际客户的认可。' },
      { range: [22, 25], level: '极强', description: '企业的出口产品和服务在国际市场上享有极高声誉，质量上乘。' },
    ],
    '企业出口竞争力水平': [
      { range: [42, 119], level: '弱', description: '企业在国际市场上的竞争力不足，需要全面提升出口能力和产品服务质量。' },
      { range: [120, 139], level: '较弱', description: '企业出口竞争力较弱，难以在国际市场上获得较好的位置。' },
      { range: [140, 159], level: '中等', description: '企业的出口产品和服务质量一般，满足基本国际市场需求。' },
      { range: [160, 185], level: '强', description: '企业具有较强的出口竞争力，能够在国际市场上占据有利地位。' },
      { range: [186, 210], level: '极强', description: '极强：您的企业在全球市场上具有极强的竞争力，是行业的领导者。' },
    ]
  }

  const getLevelDescription = (score, dimension) => {
    const result = assessmentResult[dimension].find(
      (item) => score >= item.range[0] && score <= item.range[1]
    )
    return result ? `${result.level}: ${result.description}` : '无法评估'
  }

  const levelToGrade = {
    '极强': 'A+',
    '强': 'A',
    '中等': 'B+',
    '较弱': 'B',
    '弱': 'C'
  }

  const levelToScore = {
    'A+': 5,
    'A': 4,
    'B+': 3,
    'B': 2,
    'C': 1
  }

  const radarData = mockScores.slice(0, -1).map((score, index) => {
    const level = getLevelDescription(score, Object.keys(assessmentResult)[index]).split(':')[0]
    return levelToScore[levelToGrade[level]]
  })

  const radarChartOption = {
    radar: {
      indicator: Object.keys(assessmentResult).map((dimension, index) => {
        const level = getLevelDescription(mockScores[index], dimension).split(':')[0]
        return {
          // 使用富文本标签应用样式
          name: `{a|${dimension}} {b|${levelToGrade[level]}}`,
          max: 5
        }
      }).slice(0, -1),
      radius: '65%',
      name: {
        // 定义富文本样式
        rich: {
          a: {
            color: '#000',
            fontSize: 14,
            fontWeight: 'normal'
          },
          b: {
            color: '#ff0000',
            fontSize: 16,
            fontWeight: 'bold'
          }
        }
      }
    },
    series: [{
      name: '测评结果',
      type: 'radar',
      data: [
        {
          value: radarData,
          name: '测评结果'
        }
      ]
    }]
  }




  return (
    <Box sx={{ display: 'flex', height: '90vh', marginTop: '5vh' }}>
      <Box sx={{ width: '50%', height: '90%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', paddingLeft: 4 }}>
        <Typography variant="h4" align="left">您的测评结果是：</Typography>
        <Typography variant="h4" align="left">
          总评：
          <Typography component="span" variant="h1" sx={{ fontWeight: 'bold', color: '#ff0000' }}>
            {levelToGrade[getLevelDescription(mockScores[mockScores.length - 1], '企业出口竞争力水平').split(':')[0]]}
          </Typography>
        </Typography>
        <ReactECharts option={radarChartOption} style={{ height: '70%', width: '100%' }} />
      </Box>


      <Box sx={{ width: '5%' }}></Box>
      <Box sx={{ width: '45%', height: '90%', overflowY: 'auto' }}>
        <Typography variant="h4" sx={{ marginBottom: 2 }}>
          评测结果
        </Typography>
        {Object.keys(assessmentResult).map((dimension, index) => (
          <Box key={dimension} sx={{ marginBottom: 4 }}>
            <Typography variant="h5" sx={{ marginBottom: 1 }}>
              {dimension}
            </Typography>
            <Typography>{getLevelDescription(mockScores[index], dimension)}</Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default FreeAssessmentReport
