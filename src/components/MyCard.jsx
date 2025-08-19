import React from 'react';

// Компонент, що відображає персональну картку
function MyCard() {
  const name = 'Ваше Ім\'я';
  const hobby = 'Ваше хобі';
  const hobbyPhoto = 'https://cdn.pixabay.com/photo/2021/08/04/13/06/software-developer-6521720_1280.jpg'; // Замініть на ваше посилання

  return (
    <div className="my-card">
      <h2>{name}</h2>
      <p>Мене захоплює {hobby}.</p>
      <img src={hobbyPhoto} alt="Фото, що ілюструє хобі" className="hobby-photo" />
    </div>
  );
}

export default MyCard;