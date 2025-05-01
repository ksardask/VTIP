import React from 'react';
import SetText from './components/SetText/SetText';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Контроль количества слов</h1>
        <p>Укажите границы и введите текст для проверки</p>
      </header>
      <main className="app-main">
        <SetText />
      </main>
    </div>
  );
}

export default App;