
import { Chart } from 'primereact/chart';
import { useNavigate } from 'react-router-dom';
import React, { useState, } from 'react';

const Result = ({ scores }) => {

    const navigate = useNavigate();
    
    const last5Scores = scores.slice(-5); // 最後から5つのスコアを取得

    const convertedScores = last5Scores.map(score => {
    switch (score) {
        case 20:
            return 100;
        case 15:
            return 75;
        case 10:
            return 50;
        case 5:
            return 25;
        case 0:
            return 0;
        default:
            return 0;  
    }
    });
    console.log("Converted Scores:", convertedScores); 
    const lastFiveScores = convertedScores.slice(-5);

    const totalScore = last5Scores.reduce((acc, curr) => acc + curr, 0); // last5Scoresを使用して合計を計算

    const present = [
    {
      image: "./image1.png",
      
      title: "初回45分オンラインキャリア相談",
      description: "これまで200名以上が相談し、新たな一歩を踏み出したオンラインキャリア相談45分を特別価格にてご利用いただけます。ご登録後すぐにお申込みいただけますので、ご希望の日時を選択の上お申込みください。"
    },
    {
      image: "./image2.png",
      
      title: "理想の働き方を叶える７ステップ動画プログラム（診断テスト付）",
      description: "40代からもっと自分らしさを活かした理想の働き方を叶えるためのステップがわかる動画プログラム。自分の現在地と課題がわかる診断テストも動画プログラムの中でお届けします。"
    },
    {
      image: "./image3.png",
     
      title: "40代から私らしいキャリアを叶える7つのヒント",
      description: "ミアビータの公式LINEにもご登録いただくと、40代から私らしいキャリアを叶えるための7つのヒントが載ったPDF冊子をプレゼントいたします。"
    }
  ];
    
   
        const [chartData] = useState({
        labels: ['仕事の意義', 'キャリアの方向性', 'スキルの成長', 'ネットワーク', 'ワークライフバランス'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(0, 100, 215,0.2)',
                borderColor: 'rgba(0,0,200,0.2)',
                pointBackgroundColor: 'rgba(0,0,200,0.2)',
                pointBorderColor: 'rgba(0,0,200,0.2)',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(179,181,198,1)',
                data: lastFiveScores
            }
        ]
    });

    

    const [lightOptions] = useState({
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            r: {
                min: 0,        
                max: 100, 
                pointLabels: {
                    display: true, 
                    font: {
                        size: 5, 
                        weight: 'bold'
                    }
                    
                },
                ticks: {    
                    display: false
                },
                grid: {
                    color: '#ebedef',
                },
                angleLines: {
                    color: '#ebedef'
                }
            }
        }
    });

    let message = '';
    let messages='';
    if (totalScore >= 80 && totalScore <= 100) {
        message = 'キャリアマスター';
        messages='キャリアの健康状態は非常に良好です。現在の状態を維持しつつ、更なる向上を目指しましょう。';
    } else if (totalScore >= 60 && totalScore <= 79) {
        message = 'キャリアの発展途上';
        messages='キャリアの健康状態は良好ですが、いくつかのポイントで改善の余地があります。具体的な目標を設定して、成長を続けてください。';
    } else if (totalScore >= 40 && totalScore <= 59) {
        message = 'キャリアのクロスロード';
        messages='キャリアの健康状態は良好ですが、いくつかのポイントで改善の余地があります。具体的な目標を設定して、成長を続けてください。';
    } else if (totalScore >= 20 && totalScore <= 39) {
        message = 'キャリアの模索者';
        messages='キャリアの健康状態には注意が必要です。アドバイスや外部のサポートを求めることを考えると良いでしょう。';
    } else {
        message = 'キャリアの原点回帰';
        messages='キャリアの健康状態には注意が必要です。アドバイスや外部のサポートを求めることを考えると良いでしょう。';
    }
    return (
<main>
    <div className="flex flex-col items-center min-h-screen pt-4 pb-4">
        <h1 className="mb-4 mt-4 text-3xl font-bold">あなたのキャリアの総合点数</h1>
        <h2 className="mb-8 text-5xl font-bold">{totalScore}点</h2>
        <div className="w-3/4 md:w-1/3 mb-8 px-1 bg-white">
            <Chart type="radar" data={chartData} options={lightOptions} />
        </div>
        <p className="mb-4 mt-8 text-4xl font-bold">{message}</p>
        <p className="mt-4 mx-8 text-xl">{messages}</p>

        <div className="flex items-center justify-center mt-24">
        <a href="https://www.facebook.com/meavita.jp" target="_blank" rel="noopener noreferrer">
            <button className="button-007" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="39" height="29">
                <path fill="#ffffff" d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
            </button>
        </a>
        <a href="https://www.instagram.com/meavita_officials" target="_blank" rel="noopener noreferrer">
            <button className="button-012 ml-3" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29" height="29">
                <path fill="#ffffff" d="M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0-2a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6.5-.25a1.25 1.25 0 0 1-2.5 0 1.25 1.25 0 0 1 2.5 0zM12 4c-2.474 0-2.878.007-4.029.058-.784.037-1.31.142-1.798.332-.434.168-.747.369-1.08.703a2.89 2.89 0 0 0-.704 1.08c-.19.49-.295 1.015-.331 1.798C4.006 9.075 4 9.461 4 12c0 2.474.007 2.878.058 4.029.037.783.142 1.31.331 1.797.17.435.37.748.702 1.08.337.336.65.537 1.08.703.494.191 1.02.297 1.8.333C9.075 19.994 9.461 20 12 20c2.474 0 2.878-.007 4.029-.058.782-.037 1.309-.142 1.797-.331.433-.169.748-.37 1.08-.702.337-.337.538-.65.704-1.08.19-.493.296-1.02.332-1.8.052-1.104.058-1.49.058-4.029 0-2.474-.007-2.878-.058-4.029-.037-.782-.142-1.31-.332-1.798a2.911 2.911 0 0 0-.703-1.08 2.884 2.884 0 0 0-1.08-.704c-.49-.19-1.016-.295-1.798-.331C14.925 4.006 14.539 4 12 4zm0-2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2z"/>
                </svg>
            </button>
        </a>
        <a href="https://www.twitter.com/meavitaofficial" target="_blank" rel="noopener noreferrer">
            <button className="button-006 ml-3" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="29" height="29">
                <path fill="#fff" d="M22.162 5.656a8.384 8.384 0 0 1-2.402.658A4.196 4.196 0 0 0 21.6 4c-.82.488-1.719.83-2.656 1.015a4.182 4.182 0 0 0-7.126 3.814 11.874 11.874 0 0 1-8.62-4.37 4.168 4.168 0 0 0-.566 2.103c0 1.45.738 2.731 1.86 3.481a4.168 4.168 0 0 1-1.894-.523v.052a4.185 4.185 0 0 0 3.355 4.101 4.21 4.21 0 0 1-1.89.072A4.185 4.185 0 0 0 7.97 16.65a8.394 8.394 0 0 1-6.191 1.732 11.83 11.83 0 0 0 6.41 1.88c7.693 0 11.9-6.373 11.9-11.9 0-.18-.005-.362-.013-.54a8.496 8.496 0 0 0 2.087-2.165z"/>
                </svg>
            </button>
        </a>
        </div>
    </div>

    <div className="flex items-center justify-center flex-col mt-8">
        <div className='text-xl md:text-3xl'>
            <h1 className="text-center mb-2 font-bold">キャリアの総合点数を上げたい方へ</h1>
            <h3 className='text-center mt-8'>無料会員登録すると今なら会員登録すると今なら３大特典プレゼント</h3>
            <section className="pt-10 pb-5 lg:pt-[30px] lg:pb-1">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap">
                        {present.map((present3, index) => (
                            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div className="mx-auto mb-10 max-w-[370px]">
                                    <div className="mb-8 overflow-hidden rounded">
                                        <img src={present3.image} alt="presents" className="w-full" />
                                    </div>
                                    <div>
                                        <h3>
                                            <div className=" text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                                                {present3.title}
                                            </div>
                                        </h3>
                                        <p className="text-body-color text-base">{present3.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
        <a href="https://service.meavita.jp/freeregistrationform">
            <button 
                type="button" 
                className=" backgroundColor hover:bg-gradient-to-br  rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2  text-black font-semibold">  
                今すぐ会員登録する
            </button>
        </a>
        <button 
            type="button" 
            className="text-white backgroundColor hover:bg-gradient-to-br font-medium rounded-lg text-lg px-5 py-2.5 text-center mr-2 mb-2 mt-12" 
            onClick={() => navigate('/')}>
            簡単診断TOPに戻る
        </button>
    </div>
    <footer className='mt-10 text-center'>© mea vita All Rights Reserved.</footer>
</main>

    );
}

export default Result;

  