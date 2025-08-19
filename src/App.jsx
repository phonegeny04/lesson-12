import React from 'react';
import './App.css'; // Імпортуємо стилі
import MyCard from './components/MyCard';
import ColorButton from './components/ColorButton';
import ProjectCard from './components/ProjectCard';

function App() {
  return (
    <>
      <h1>Практичні завдання</h1>

      {/* Завдання 1 */}
      <h2>Завдання 1: Картка-візитка</h2>
      <MyCard />

      <hr /> {/* Горизонтальна лінія для візуального розділення */}

      {/* Завдання 2 */}
      <h2>Завдання 2: Кольорова кнопка</h2>
      <ColorButton />
      <ColorButton />
      <ColorButton />
      
      <hr />

      {/* Домашнє Завдання: тут учні мають додати свій код */}
      <h2>Домашнє завдання: Картки проєктів</h2>
      <p>Нижче розмістіть три картки ProjectCard з різними даними.</p>
      
      {/* Приклад, як можна використати компонент з різними даними: */}
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      
    </>
  );
}

export default App;