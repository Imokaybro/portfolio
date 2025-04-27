import React, { useEffect, useRef } from "react";
import "./Form.css"; // Исправлено название файла

export const Contacts = () => {
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
          <h1 className="display-4">Contacts</h1>
          <p className="lead">
            <div><a href="https://t.me/imokaym" target="_blank">Мой Telegram</a></div>
            <div><a href="tel:+79610534347">+79610534347</a></div>
          </p>
        </div>
      </div>
    </div>
  );
}