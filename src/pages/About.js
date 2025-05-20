import React, { useEffect, useRef } from "react";
import "./Form.css";

export const About = () => {
  const jumbotronRef = useRef(null);
  const divRef = useRef(null);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (jumbotronRef.current) {
        jumbotronRef.current.classList.add('slide-in');
      }
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  const handleLinkClick = (event) => {
    event.preventDefault();
    divRef.current.style.backgroundColor = 'red';
    setTimeout(() => {
      divRef.current.style.backgroundColor = '';
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
              <div className="lead">1) Я очень быстро адаптируюсь к различным ситуациям, в том числе стрессовым; </div>
              <div className="lead">2) Достаточно быстро обучаюсь, если нахожу предметную область интересной. 
              Как пример, первый для меня ЯП(JavaScript), я освоил за 4 месяца вместе с фреймом CodeceptJS, базой NodeJS и GIT(это с учетом того, что были новогодние праздники и куча работы(никакого code-freeze не случилось));</div>
              <div id="one" ref={divRef} className="lead">3) Очень ревностно отношусь к качеству проекта, на котором работаю;</div>
            </div>
            
            <div className="text-container"><strong>Из точек роста, знаю, что нужно улучшить:</strong>
              <div className="lead">1) Самомотивацию. Считаю, что это полезный навык.</div>
              <div className="lead">2) Менее критично относится к непониманию продукта. <br></br>См. пункт номер <a href="#one" onClick={handleLinkClick}>3)</a>.
              <br></br>Очень тяжело доказать бизнесу, что некоторые вещи лучше делать сразу хорошо, а дорабатывать потом;</div>
              <div className="lead">3) Эмпатию. Ну тут, очевидно, что это полезный навык. Признаюсь, что иногда пытаюсь сделать не то, что хочет бизнес, а то, что я хочу.</div>
            </div>
        </div>
      </div>
    </div>
  );
}