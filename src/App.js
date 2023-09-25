import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Questions from './components/Questions';  // Questions コンポーネントをインポートする
import Result from './components/Result';
import StartPage from './components/StartPage';

function App() {
    // scoresとsetScoresの状態を定義
    const [scores, setScores] = useState([]);

    return (

      <body>
      <Router>
          <Routes>
                <Route path="/" element={<StartPage />} /> 
                <Route path="/questions" element={<Questions scores={scores} setScores={setScores} />} />
              <Route path="/result" element={<Result scores={scores} />} />

          </Routes>
      </Router>
      </body>

    );
}

export default App;
