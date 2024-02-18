import React, { useState } from 'react';
import QuizComponent from './QuizComponent';
import RadarChart from './RadarChart';

const Quiz = () => {
    const [showChart, setShowChart] = useState(false);
    const [answers, setAnswers] = useState([]);

    const questions = [
        {
            question: "问题1:胡然叫什么?",
            options: ["胡然", "古月然", "然胡", "胡老师"]
        },
        {
            question: "问题2:胡然多少岁?",
            options: ["0", "20", "50", "100"]
        },
        {
            question: "问题3:胡然的性别是什么?",
            options: ["男", "女", "购物袋", "直升机"]
        }
    ];

    const handleQuizComplete = (userAnswers) => {
        setAnswers(userAnswers);
        setShowChart(true);
    };

    return (
        <div className="Quiz">
            {!showChart ? (
                <QuizComponent questions={questions} onComplete={handleQuizComplete} />
            ) : (
                <RadarChart answers={answers} />
            )}
        </div>
    );
};

export default Quiz;
