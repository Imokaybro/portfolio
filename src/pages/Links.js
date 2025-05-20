import React, { useEffect, useRef } from "react";
import "./Form.css"; // Исправлено название файла

export const Links = () => {
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
          <h1 className="display-4">Links</h1>
          <p className="lead-2"><a href="https://hh.ru/resume/be5dbd1fff08d3c88e0039ed1f35766641666c" target="_blank">Ссылка на мое резюме HH</a></p>
          
        </div>
      </div>
    </div>
  );
}