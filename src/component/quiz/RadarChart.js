import React, { useEffect, useRef } from 'react';
import * as echarts from 'echarts';

const BarChart = ({ answers }) => {
    const chartRef = useRef(null);

    useEffect(() => {
        if (chartRef.current) {
            console.log('Answers:', answers); // 添加日志以检查数据

            // 统计每个选项的出现次数
            const optionCounts = {
                'A': 0,
                'B': 0,
                'C': 0,
                'D': 0
            };

            answers.forEach(answer => {
                optionCounts[answer]++;
            });


            const myChart = echarts.init(chartRef.current);

            const option = {
                xAxis: {
                    type: 'category',
                    data: ['A', 'B', 'C', 'D']
                },
                yAxis: {
                    type: 'value'
                },
                series: [
                    {
                        data: [
                            optionCounts['A'],
                            optionCounts['B'],
                            optionCounts['C'],
                            optionCounts['D']
                        ],
                        type: 'bar'
                    }
                ]
            };

            myChart.setOption(option);

            return () => {
                myChart.dispose();
            };
        }
    }, [answers]);

    return (
        <div ref={chartRef} style={{ height: '400px' }}></div>
    );
};

export default BarChart;
