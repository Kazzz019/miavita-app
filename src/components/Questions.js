import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, } from 'react-router-dom';

function Questions({ scores, setScores }) {
    const [currentQuestion, setCurrentQuestion] = useState(4);
    const navigate = useNavigate();
    
    const questions = [
        'あなたの今の仕事や役割は、自分にとって意味があると感じますか？',
        'あなたは、自分のキャリアの方向性を明確に持っていますか？',
        'この１年で、職業的なスキルや知識を向上させる機会がありましたか？',
        '仕事の人間関係や人脈が、あなたのキャリア成長に寄与していますか？',
        '現在の仕事とプライベートのバランスはベストだと感じますか？'
    ];

    const answerScores = {
        '非常に該当する': 20,
        'やや該当する': 15,
        'どちらとも言えない': 10,
        'あまり該当しない': 5,
        '全く該当しない': 0
    };

    const handleAnswerClick = (score) => {
        setScores(prevScores => {
            const newScores = [...prevScores, score];
            return newScores;
        });

        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        } else {
            navigate("/result");
        }
    };

    const progress = ((5 - currentQuestion) / questions.length) * 100;

    return (
        <main>
            <div className="flex items-center justify-center min-h-screen flex-col">
                <div className="bg-white grid grid-cols-1 gap-5 md:w-2/3 w-5/6 p-8 rounded-lg shadow-lg mb-8">

                    <div className="flex justify-start items-center my-4">
                        <img src="robot.png" alt="Example Image" className="w-16 h-16 md:w-32 md:h-32 mr-4 "/>

                        <div className="balloon-008 font-bold">
                            30秒でできる簡単健康チェック 
                            <br/>
                            残り{currentQuestion + 1}問だよ
                        </div>
                    </div>
                    <h1 className='text-xl'>{questions[currentQuestion]}</h1>
                    {Object.entries(answerScores).map(([answer, score]) => (
                        <button
                            key={answer}
                            className="relative inline-flex items-center justify-center px-4 py-5  mr-2 text-sm font-bold text-gray-900 rounded-lg border border-[#52b4b9] bg-white dark:bg-gray-900 transition-all ease-in duration-75 hover:bg-gradient-to-br from-[#52b4b9] to-[#52b4b9] hover:text-white dark:text-white  focus:outline-none"
                            onClick={() => handleAnswerClick(score)}
                        >
                            {answer}
                        </button>
                    ))}
                    <div className=" h-4 rounded w-full">
                        <div
                            className="backgroundColor h-full rounded text-xs leading-none py-1 text-center text-white"
                            style={{ width: `${progress}%` }}
                            role="progressbar"
                            aria-valuenow={progress}
                            aria-valuemin="0"
                            aria-valuemax="100"
                        ></div>
                    </div>
                </div>
                <button 
                    type="button" 
                    className="text-white backgroundColor hover:bg-gradient-to-br font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 " 
                    onClick={() => navigate('/')}
                >
                    簡単診断TOPに戻る
                </button>
                
            </div>
            <footer className='mt-10 text-center'> © mea vita All Rights Reserved.</footer>

        </main>
    );
}

export default Questions;
