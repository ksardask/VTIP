import React, { useState, useEffect } from 'react';
import './SetText.css';

const SetText = () => {
  const [minWords, setMinWords] = useState(1);
  const [maxWords, setMaxWords] = useState(10);
  const [text, setText] = useState('');
  const [error, setError] = useState('');
  const [wordCount, setWordCount] = useState(0);

  // Автоматическая корректировка maxWords при изменении minWords
  useEffect(() => {
    if (minWords >= maxWords) {
      setMaxWords(minWords + 1);
    }
  }, [minWords, maxWords]);

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    setText(inputText);
    
    const words = inputText.trim().split(/\s+/).filter(Boolean);
    const currentWordCount = words.length;
    setWordCount(currentWordCount);

    if (currentWordCount < minWords) {
      setError(`Необходимо ввести минимум ${minWords} слова`);
    } else if (currentWordCount > maxWords) {
      setError(`Максимально допустимо ${maxWords} слов`);
    } else {
      setError('');
    }
  };

  const handleMinChange = (e) => {
    const value = Math.max(1, Number(e.target.value));
    setMinWords(value);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(minWords + 1, Number(e.target.value));
    setMaxWords(value);
  };

  return (
    <div className="set-text-container">
      <div className="controls">
        <div className="input-group">
          <label htmlFor="minWords">Минимум слов:</label>
          <input
            id="minWords"
            type="number"
            value={minWords}
            onChange={handleMinChange}
            min="1"
            className="number-input"
          />
        </div>

        <div className="input-group">
          <label htmlFor="maxWords">Максимум слов:</label>
          <input
            id="maxWords"
            type="number"
            value={maxWords}
            onChange={handleMaxChange}
            min={minWords + 1}
            className="number-input"
          />
        </div>
      </div>

      <div className="text-input-group">
        <label htmlFor="userText">
          Введите текст ({minWords}-{maxWords} слов):
        </label>
        <textarea
          id="userText"
          value={text}
          onChange={handleTextChange}
          className={error ? 'error' : ''}
          rows="4"
        />
      </div>
      
      <div className="feedback">
        {error && <div className="error-message">{error}</div>}
        <div className={`word-count ${error ? 'error' : ''}`}>
          Слов введено: {wordCount}
        </div>
      </div>
    </div>
  );
};

export default SetText;