import React from 'react';

// Компонент-заготовка для домашнього завдання
// Учні мають вручну скопіювати його та змінити дані
function ProjectCard() {
  const projectName = "Назва вашого проєкту";
  const projectDescription = "Короткий опис, що робить ваш проєкт.";
  const projectImage = "https://cdn.pixabay.com/photo/2016/11/29/05/45/astronomy-1867616_1280.jpg"; // Зображення-заглушка

  return (
    <div className="project-card">
      <h2>{projectName}</h2>
      <img src={projectImage} alt={projectName} className="project-image" />
      <p>{projectDescription}</p>
      <button className="details-button">Детальніше</button>
    </div>
  );
}

export default ProjectCard;