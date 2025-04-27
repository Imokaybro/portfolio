import React, { useEffect, useRef } from "react";
import "./Form.css"; // Исправлено название файла

export const Examples = () => {
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
          <h1 className="display-4">Examples</h1>
          <p className="lead">asdsad</p>
        </div>
      </div>
    </div>
  );
}