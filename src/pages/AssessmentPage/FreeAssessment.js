import React, { useState } from 'react'
import { Box, Typography, FormControl, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const dimensions = [
  {
    title: '财务实力',
    questions: [
      {
        text: '1. 年收入：您的企业去年的总收入达到了多少？',
        options: [
          { label: '超过1亿元', score: 5 },
          { label: '5000万至1亿元', score: 4 },
          { label: '1000万至5000万元', score: 3 },
          { label: '少于1000万元', score: 2 },
          { label: '刚起步，暂无收入', score: 1 },
        ],
      },
      {
        text: '2. 盈利能力：您的企业去年的盈利情况如何？',
        options: [
          { label: '高盈利', score: 5 },
          { label: '盈利稳定', score: 4 },
          { label: '盈亏平衡', score: 3 },
          { label: '轻微亏损', score: 2 },
          { label: '重大亏损', score: 1 },
        ],
      },
      {
        text: '3. 资产负债率：您的企业当前的资产负债率是多少？',
        options: [
          { label: '低于20%', score: 5 },
          { label: '20%-40%', score: 4 },
          { label: '40%-60%', score: 3 },
          { label: '60%-80%', score: 2 },
          { label: '高于80%', score: 1 },
        ],
      },
    ],
  },
  {
    title: '创新能力',
    questions: [
      {
        text: '4. 研发投入比例：您的企业在研发上的投入比例是怎样的？',
        options: [
          { label: '高于行业平均', score: 5 },
          { label: '等于行业平均', score: 4 },
          { label: '略低于行业平均', score: 3 },
          { label: '低于行业平均', score: 2 },
          { label: '无研发投入', score: 1 },
        ],
      },
      {
        text: '5. 产品创新：您的企业在推出新产品方面的频率如何？',
        options: [
          { label: '持续推出创新产品', score: 5 },
          { label: '定期推出创新产品', score: 4 },
          { label: '偶尔推出创新产品', score: 3 },
          { label: '很少推出创新产品', score: 2 },
          { label: '从不推出创新产品', score: 1 },
        ],
      },
      {
        text: '6. 技术创新：您的企业在技术创新方面的表现如何？',
        options: [
          { label: '拥有行业领先技术', score: 5 },
          { label: '技术先进', score: 4 },
          { label: '技术一般', score: 3 },
          { label: '技术落后', score: 2 },
          { label: '无技术创新', score: 1 },
        ],
      },
      {
        text: '7. 创新文化：您认为您的企业在培养创新文化方面做得如何？',
        options: [
          { label: '强烈且普遍', score: 5 },
          { label: '良好', score: 4 },
          { label: '一般', score: 3 },
          { label: '较弱', score: 2 },
          { label: '几乎没有', score: 1 },
        ],
      },
    ],
  },
  {
    title: '市场地位',
    questions: [
      {
        text: '8. 出口市场多样性：您的企业的产品或服务出口到了多少个不同的国家或地区？',
        options: [
          { label: '出口到多个国家和地区', score: 5 },
          { label: '出口到几个主要国家', score: 4 },
          { label: '主要集中在一个国家', score: 3 },
          { label: '刚开始拓展国际市场', score: 2 },
          { label: '未出口', score: 1 },
        ],
      },
      {
        text: '9. 市场份额：您的企业在其主要市场中的市场份额如何？',
        options: [
          { label: '市场领导者', score: 5 },
          { label: '主要竞争者之一', score: 4 },
          { label: '有一定市场份额', score: 3 },
          { label: '市场新进入者', score: 2 },
          { label: '市场份额极小', score: 1 },
        ],
      },
      {
        text: '10. 品牌影响力：您认为您的品牌在市场上的影响力如何？',
        options: [
          { label: '品牌极具影响力', score: 5 },
          { label: '品牌较有影响力', score: 4 },
          { label: '品牌有一定影响力', score: 3 },
          { label: '品牌影响力一般', score: 2 },
          { label: '品牌无影响力', score: 1 },
        ],
      },
      {
        text: '11. 国际市场品牌知名度：在国际市场上，您的品牌的知名度如何？',
        options: [
          { label: '非常知名', score: 5 },
          { label: '较为知名', score: 4 },
          { label: '一般', score: 3 },
          { label: '较不知名', score: 2 },
          { label: '完全不知名', score: 1 },
        ],
      },
      {
        text: '12. 市场定位：您的企业在市场上的定位有多明确？',
        options: [
          { label: '非常明确', score: 5 },
          { label: '较为明确', score: 4 },
          { label: '一般清晰', score: 3 },
          { label: '不太清晰', score: 2 },
          { label: '模糊', score: 1 },
        ],
      },
      {
        text: '13. 广告与推广：您的企业在过去一年中如何进行广告和推广？',
        options: [
          { label: '广泛且有效', score: 5 },
          { label: '适当且有成效', score: 4 },
          { label: '一般', score: 3 },
          { label: '较少且效果有限', score: 2 },
          { label: '几乎没有', score: 1 },
        ],
      },
      {
        text: '14. 市场适应性：您的企业面对市场变化的适应能力如何？',
        options: [
          { label: '极强', score: 5 },
          { label: '较强', score: 4 },
          { label: '一般', score: 3 },
          { label: '较弱', score: 2 },
          { label: '非常弱', score: 1 },
        ],
      },
    ],
  },
  {
    title: '运营效率',
    questions: [
      {
        text: '15. 资源利用率：您认为您的企业在资源利用效率方面表现如何？',
        options: [
          { label: '极高', score: 5 },
          { label: '高', score: 4 },
          { label: '适中', score: 3 },
          { label: '低', score: 2 },
          { label: '非常低', score: 1 },
        ],
      },
      {
        text: '16. 流程优化：您的企业在流程优化方面的情况如何？',
        options: [
          { label: '非常优化', score: 5 },
          { label: '较为优化', score: 4 },
          { label: '一般优化', score: 3 },
          { label: '未优化', score: 2 },
          { label: '流程混乱', score: 1 },
        ],
      },
      {
        text: '17. 国际物流效率：您的企业在处理国际物流方面的效率如何？',
        options: [
          { label: '非常高效', score: 5 },
          { label: '较高效', score: 4 },
          { label: '一般', score: 3 },
          { label: '较低效', score: 2 },
          { label: '非常低效', score: 1 },
        ],
      },
    ],
  },
  {
    title: '组织与管理',
    questions: [
      {
        text: '18. 员工满意度：您的员工对工作环境的满意度如何？',
        options: [
          { label: '极高', score: 5 },
          { label: '较高', score: 4 },
          { label: '一般', score: 3 },
          { label: '较低', score: 2 },
          { label: '极低', score: 1 },
        ],
      },
      {
        text: '19. 团队协作：您的企业在团队协作方面表现如何？',
        options: [
          { label: '极为卓越', score: 5 },
          { label: '良好', score: 4 },
          { label: '一般', score: 3 },
          { label: '较差', score: 2 },
          { label: '非常差', score: 1 },
        ],
      },
      {
        text: '20. 领导力：您如何评价您的企业领导层的领导力？',
        options: [
          { label: '强大且富有远见', score: 5 },
          { label: '良好且稳健', score: 4 },
          { label: '一般', score: 3 },
          { label: '较弱', score: 2 },
          { label: '缺乏领导力', score: 1 },
        ],
      },
      {
        text: '21. 跨文化沟通能力：您的企业在跨文化沟通方面的能力如何？',
        options: [
          { label: '极其出色', score: 5 },
          { label: '良好', score: 4 },
          { label: '一般', score: 3 },
          { label: '较差', score: 2 },
          { label: '非常差', score: 1 },
        ],
      },
      {
        text: '22. 决策效率：您的企业做出决策的速度如何？',
        options: [
          { label: '极高', score: 5 },
          { label: '高', score: 4 },
          { label: '一般', score: 3 },
          { label: '低', score: 2 },
          { label: '极低', score: 1 },
        ],
      },
      {
        text: '23. 内部沟通：您的企业内部沟通流畅吗？',
        options: [
          { label: '极为流畅', score: 5 },
          { label: '流畅', score: 4 },
          { label: '一般', score: 3 },
          { label: '较差', score: 2 },
          { label: '非常差', score: 1 },
        ],
      },
      {
        text: '24. 组织灵活性：您的企业在组织结构上的灵活性如何？',
        options: [
          { label: '极其灵活', score: 5 },
          { label: '较灵活', score: 4 },
          { label: '一般灵活性', score: 3 },
          { label: '较为僵化', score: 2 },
          { label: '完全僵化', score: 1 },
        ],
      },
      {
        text: '25. 国际业务部门：您的企业是否设有专门的国际业务部门，其运作情况如何？',
        options: [
          { label: '设有专门部门，运作良好', score: 5 },
          { label: '设有专门部门，运作一般', score: 4 },
          { label: '无专门部门，但有相关职能', score: 3 },
          { label: '无专门部门，职能不明确', score: 2 },
          { label: '完全没有相关部门或职能', score: 1 },
        ],
      },
      {
        text: '26. 员工技能与培训：您的企业对员工的技能与培训投入如何？',
        options: [
          { label: '高度技能，持续培训', score: 5 },
          { label: '良好技能，定期培训', score: 4 },
          { label: '一般技能，偶尔培训', score: 3 },
          { label: '技能欠缺，缺乏培训', score: 2 },
          { label: '技能严重不足，无培训', score: 1 },
        ],
      },
      {
        text: '27. 员工留存率：您的企业员工留存率如何？',
        options: [
          { label: '非常高', score: 5 },
          { label: '较高', score: 4 },
          { label: '一般', score: 3 },
          { label: '较低', score: 2 },
          { label: '非常低', score: 1 },
        ],
      },
      {
        text: '28. 劳动力成本控制：您的企业在控制劳动力成本方面的效果如何？',
        options: [
          { label: '非常有效', score: 5 },
          { label: '有效', score: 4 },
          { label: '一般', score: 3 },
          { label: '不够有效', score: 2 },
          { label: '完全无控制', score: 1 },
        ],
      },
      {
        text: '29. 国际业务员工语言能力：您的企业在国际业务中员工的语言能力如何？',
        options: [
          { label: '大部分员工掌握多种语言', score: 5 },
          { label: '一些关键员工掌握多种语言', score: 4 },
          { label: '少数员工掌握多种语言', score: 3 },
          { label: '很少员工掌握外语', score: 2 },
          { label: '几乎无员工掌握外语', score: 1 },
        ],
      },
    ],
  },
  {
    title: '风险管理',
    questions: [
      {
        text: '30. 应对变化能力：您的企业对变化的应对能力如何？',
        options: [
          { label: '极强', score: 5 },
          { label: '较强', score: 4 },
          { label: '一般', score: 3 },
          { label: '较弱', score: 2 },
          { label: '非常弱', score: 1 },
        ],
      },
      {
        text: '31. 危机处理：面对危机时，您的企业的处理效率如何？',
        options: [
          { label: '极其有效', score: 5 },
          { label: '有效', score: 4 },
          { label: '一般', score: 3 },
          { label: '不够有效', score: 2 },
          { label: '无法应对', score: 1 },
        ],
      },
      {
        text: '32. 外汇风险管理：您的企业如何管理外汇风险？',
        options: [
          { label: '完全管理', score: 5 },
          { label: '较好管理', score: 4 },
          { label: '一般管理', score: 3 },
          { label: '较差管理', score: 2 },
          { label: '无管理', score: 1 },
        ],
      },
    ],
  },
  {
    title: '环境与社会责任',
    questions: [
      {
        text: '33. 环境责任：您的企业在承担环境责任方面的表现如何？',
        options: [
          { label: '完全符合可持续发展', score: 5 },
          { label: '大部分符合', score: 4 },
          { label: '一般符合', score: 3 },
          { label: '较少符合', score: 2 },
          { label: '完全不符合', score: 1 },
        ],
      },
      {
        text: '34. 社会贡献：您的企业对社会做出了哪些贡献？',
        options: [
          { label: '显著贡献', score: 5 },
          { label: '一定贡献', score: 4 },
          { label: '基本贡献', score: 3 },
          { label: '很少贡献', score: 2 },
          { label: '无贡献', score: 1 },
        ],
      },
      {
        text: '35. 国际市场环境适应：您的企业对国际市场环境的适应能力如何？',
        options: [
          { label: '完全适应多种市场环境', score: 5 },
          { label: '适应某些特定市场环境', score: 4 },
          { label: '一般适应性', score: 3 },
          { label: '适应性较差', score: 2 },
          { label: '完全不适应', score: 1 },
        ],
      },
    ],
  },
  {
    title: '国际合作',
    questions: [
      {
        text: '36. 国际合作伙伴数量：您的企业有多少个国际合作伙伴？',
        options: [
          { label: '多个强大合作伙伴', score: 5 },
          { label: '几个合作伙伴', score: 4 },
          { label: '一两个合作伙伴', score: 3 },
          { label: '正在寻求合作伙伴', score: 2 },
          { label: '没有国际合作伙伴', score: 1 },
        ],
      },
      {
        text: '37. 国际业务网络：您的企业的国际业务网络有多广泛？',
        options: [
          { label: '广泛且强大的国际网络', score: 5 },
          { label: '有一定的国际网络', score: 4 },
          { label: '一般的国际网络', score: 3 },
          { label: '国际网络较弱', score: 2 },
          { label: '几乎没有国际网络', score: 1 },
        ],
      },
    ],
  },
  {
    title: '出口产品与服务',
    questions: [
      {
        text: '38. 产品国际竞争力：您认为您的产品在国际市场上的竞争力如何？',
        options: [
          { label: '极具竞争力', score: 5 },
          { label: '有竞争力', score: 4 },
          { label: '一般竞争力', score: 3 },
          { label: '竞争力较弱', score: 2 },
          { label: '无竞争力', score: 1 },
        ],
      },
      {
        text: '39. 售后服务与支持：您的企业提供的售后服务和支持在国际上如何？',
        options: [
          { label: '出色的国际售后服务', score: 5 },
          { label: '良好的售后服务', score: 4 },
          { label: '一般的售后服务', score: 3 },
          { label: '较差的售后服务', score: 2 },
          { label: '无售后服务', score: 1 },
        ],
      },
      {
        text: '40. 国际市场反应速度：您的企业对国际市场反馈的响应速度如何？',
        options: [
          { label: '极快', score: 5 },
          { label: '快', score: 4 },
          { label: '一般', score: 3 },
          { label: '慢', score: 2 },
          { label: '非常慢', score: 1 },
        ],
      },
      {
        text: '41. 产品国际认证：您的产品获得了哪些国际认证？',
        options: [
          { label: '拥有多个国际认证', score: 5 },
          { label: '拥有某些国际认证', score: 4 },
          { label: '正在申请国际认证', score: 3 },
          { label: '未有国际认证', score: 2 },
          { label: '不适用国际认证', score: 1 },
        ],
      },
      {
        text: '42. 出口产品适应性：您的产品在不同国际市场的适应性如何？',
        options: [
          { label: '产品在多个市场都非常受欢迎', score: 5 },
          { label: '产品在某些市场受欢迎', score: 4 },
          { label: '产品适应性一般', score: 3 },
          { label: '产品需要改进以适应市场', score: 2 },
          { label: '产品不适合国际市场', score: 1 },
        ],
      },
    ],
  },

  // 其他维度...
]

function FreeAssessment () {
  const [answers, setAnswers] = useState(Array(dimensions.length).fill(null).map(() => Array(0).fill(null)))
  const navigate = useNavigate()

  const handleAnswerChange = (dimensionIndex, questionIndex, score) => {
    const newAnswers = [...answers]
    newAnswers[dimensionIndex][questionIndex] = score
    setAnswers(newAnswers)
  }

  const handleSubmit = () => {
    const isAllAnswered = answers.every((dimensionAnswers, index) =>
      dimensionAnswers.length === dimensions[index].questions.length && dimensionAnswers.every((answer) => answer !== null)
    )

    if (!isAllAnswered) {
      alert('有题目未完成')
      return
    }

    const scores = answers.map((dimensionAnswers) => dimensionAnswers.reduce((acc, score) => acc + score, 0))
    const totalScore = scores.reduce((acc, score) => acc + score, 0) // Calculate the total score
    scores.push(totalScore) // Add the total score to the scores array

    navigate('/assessment/report', { state: { scores } })
  }





  return (
    <Box sx={{ padding: 2 }}>
      {dimensions.map((dimension, dimensionIndex) => (
        <Box key={dimension.title} sx={{ marginBottom: 4 }}>
          <Typography variant="h4" sx={{ textTransform: 'uppercase', marginBottom: 2 }}>
            {dimension.title}
          </Typography>
          {dimension.questions.map((question, questionIndex) => (
            <FormControl key={question.text} component="fieldset" sx={{ width: '100%', padding: '10px' }}>
              <Typography variant="h5">{question.text}</Typography>
              <RadioGroup
                row
                value={answers[dimensionIndex][questionIndex] || ''}
                onChange={(event) => handleAnswerChange(dimensionIndex, questionIndex, parseInt(event.target.value, 10))}
              >
                {question.options.map((option, optionIndex) => (
                  <FormControlLabel key={option.label} value={option.score} control={<Radio />} label={option.label} />
                ))}
              </RadioGroup>
            </FormControl>
          ))}
        </Box>
      ))}
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          padding: '10px 20px', // Increase padding
          fontSize: '1.2rem', // Increase font size
        }}
      >
        生成报告
      </Button>

    </Box>
  )
}

export default FreeAssessment
