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
              разработке и технологиях. Здесь вы найдете информацию о моих навыках, 
             проектах и опыте. 
             </p>
             <p className="lead">Моя цель — не просто показать код, но и продемонстрировать подход к решению задач.</p>
             <p className="lead">Разработка этого сайта сама по себе стала интересным проектом: современные технологии, анимации и интерактивные элементы — всё это создавалось с мыслью о пользовательском опыте. </p>
             <p className="lead"> Этот сайт разработан с использованием React и современных веб-технологий. Для создания некоторых элементов дизайна и содержимого была применена модель ИИ, что позволило создать более интуитивный пользовательский интерфейс и качественный контент.</p>
        </div>
      </div>
    </div>
  );
}