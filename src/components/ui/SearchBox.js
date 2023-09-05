import React, { useState } from 'react';
import styles from './SearchBox.module.css'; // 导入CSS模块
// ...

function SearchBox() {
  const [searchTerm, setSearchTerm] = useState('');
  const [voiceRecognitionActive, setVoiceRecognitionActive] = useState(false);

  // 处理文本输入
  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // 处理语音搜索
  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window) {
      const recognition = new window.webkitSpeechRecognition();
      recognition.lang = 'en-US';

      recognition.onstart = () => {
        setVoiceRecognitionActive(true);
      };

      recognition.onresult = (event) => {
        const voiceInput = event.results[0][0].transcript;
        setSearchTerm(voiceInput);
        recognition.stop();
      };

      recognition.onend = () => {
        setVoiceRecognitionActive(false);
      };

      recognition.start();
    } else {
      alert('Web Speech API is not supported in your browser');
    }
  };

  // 处理文本搜索
  const handleTextSearch = () => {
    // 在这里处理文本搜索逻辑，可以将searchTerm传递给后端API或其他操作
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className={styles['search-box-container']}>
      <div className={styles['search-box']}>
        <input
          className={styles['search-input']}
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <button
          className={`${styles['search-button']} ${voiceRecognitionActive ? styles['listening'] : ''}`}
          onClick={voiceRecognitionActive ? null : handleTextSearch}
        >
          {voiceRecognitionActive ? 'Listening...' : '🔍Search'}
        </button>
        <button
          className={styles['voice-search-button']}
          onClick={handleVoiceSearch}
        >
          🎙️ Voice Search
        </button>
      </div>
    </div>
  );
}

export default SearchBox;
