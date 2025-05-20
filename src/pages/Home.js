import React, { useEffect, useRef } from "react";
import "./Form.css"; // Исправлено название файла

export const Home = () => {
  const jumbotronRef = useRef(null);
  
  useEffect(() => {
    // Добавляем класс для запуска анимации после монтирования компонента
    const timer = setTimeout(() => {
      if (jumbotronRef.current) {
        jumbotronRef.current.classList.add('slide-in');
      }
    }, 100); 
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="home-container">
      <div 
        className="jumbotron custom-jumbotron" 
        ref={jumbotronRef}
      >
        <div className="container">
          <h1 className="display-4">Привет!</h1>
          <p className="lead">
            Этот сайт создан как портфолио, демонстрирующее мой подход в 
            разработке. Здесь вы найдете информацию о моих навыках, 
            проектах и опыте. 
          </p>
          <p className="lead">Разработка этого сайта сама по себе стала проектом, который позволил развить свои навыки.</p>
          <p className="lead">Сайт разработан с использованием React и современных библиотек. Для создания некоторых элементов 
          дизайна и содержимого была применена модель ИИ(DeepSeek Coder-v2, gigacode, copilot в т.ч. с использованием ollama),
          что позволило создать более интуитивный пользовательский интерфейс и избежать количество ошибок. К тому же, изучение ReactJS с нуля, заняло гораздо больше времени.</p>
        </div>
      </div>
    </div>
  );
}