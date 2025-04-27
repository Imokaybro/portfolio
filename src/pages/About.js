import React, { useEffect, useRef } from "react";
import "./Form.css";

export const About = () => {
  const jumbotronRef = useRef(null);
  const divRef = useRef(null); // Добавляем ссылку на div
  
  useEffect(() => {
    // Добавляем класс для запуска анимации после монтирования компонента
    const timer = setTimeout(() => {
      if (jumbotronRef.current) {
        jumbotronRef.current.classList.add('slide-in');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleLinkClick = (event) => { // Добавляем обработчик событий на ссылку
    event.preventDefault(); // Предотвращаем стандартное действие ссылки
    divRef.current.style.backgroundColor = 'red'; // Меняем цвет фона div
    setTimeout(() => {
      divRef.current.style.backgroundColor = ''; // Возвращаем цвет фона div обратно
    }, 650);
  };
  
  return (
    <div className="home-container">
      <div 
        className="jumbotron custom-jumbotron" 
        ref={jumbotronRef}
      >
        <div className="container">
          <h1 className="display-4">Обо мне</h1>
          <p className="lead">На данный момент времени являюсь ведущим тестировщиком(соответственно лидом АТ) на проекте автокредитования.
            В основном занимаюсь автоматизацией регрессионного набора кейсов. На данный момент мной написано более 700 автотестов в специфике е2е. 
            </p>
              <div className="text-container"><strong>Из своих сильных сторон выделяю следующее:</strong>
              <div>1) Я очень быстро адаптируюсь к различным ситуациям, в том числе стрессовым. </div>
              <div>2) Достаточно быстро обучаюсь, если нахожу предметную область интересной. 
              Как пример, для меня первый ЯП(JavaScript), я освоил за 4 месяца вместе с фреймом CodeceptJS, базой NodeJS и GIT</div>
              <div id="one" ref={divRef}>3) Очень ревностно отношусь к качеству проекта, на котором работаю</div>
            </div>
            
            <div className="text-container"><strong>Из точек роста, знаю, что нужно улучшить:</strong>
              <div>1) Самомотивацию. Считаю, что это полезный навык. Иногда, когда включается режим критического мышления, нужно как то себя подбадривать.</div>
              <div>2) Из-за пункта номер <a href="#one" onClick={handleLinkClick}>3)</a> возникают разного рода сложности в коммуникациях, поскольку большинство руководителей
              или бизнес-заказчиков ооооооооочень не любят быть не правыми</div>
            </div>
        </div>
      </div>
    </div>
  );
}