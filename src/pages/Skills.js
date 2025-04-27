import React, { useEffect, useRef } from "react";
import "./Form.css";
// Импортируем необходимые модули Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const Skills = () => {
  const jumbotronRef = useRef(null);
  
  useEffect(() => {
    // Анимация появления
    const timer = setTimeout(() => {
      if (jumbotronRef.current) {
        jumbotronRef.current.classList.add('slide-in');
      }
    }, 100); 
    
    // Инициализируем все компоненты Bootstrap
    // Если стандартная инициализация не сработала, можно попробовать вручную
    if (typeof window.bootstrap !== 'undefined') {
      const accordionElement = document.getElementById('skillsAccordion');
      if (accordionElement) {
        // Инициализация всех collapse элементов внутри аккордеона
        const collapseElementList = accordionElement.querySelectorAll('.accordion-collapse');
        [...collapseElementList].forEach(collapseEl => {
          new window.bootstrap.Collapse(collapseEl, {
            toggle: false // Не открывать сразу 
          });
        });
      }
    }
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="home-container">
      <div 
        className="jumbotron custom-jumbotron" 
        ref={jumbotronRef}
      >
        <div className="container">
          <div className="accordion" id="skillsAccordion">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingSoft">
                <button 
                  className="accordion-button" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseSoft" 
                  aria-expanded="true" 
                  aria-controls="collapseSoft"
                >
                  Soft Skills
                </button>
              </h2>
              <div 
                id="collapseSoft" 
                className="accordion-collapse collapse show" 
                aria-labelledby="headingSoft" 
                data-bs-parent="#skillsAccordion"
              >
                <div className="accordion-body">
                  <ul className="list-group">
                    <li className="list-group-item">Эффективная коммуникативность и умение работать в команде</li>
                    <li className="list-group-item">Аналитическое мышление(критическое) и умение решать проблемы</li>
                    <li className="list-group-item">Адаптивность к работе в команде и использованием новых технологий</li>
                    <li className="list-group-item">Тайм-менеджмент и организация работы</li>
                    <li className="list-group-item">Управленческие навыки и лидерские качества</li>
                    <li className="list-group-item">Гибкость и адаптивность</li>
                    <li className="list-group-item">Внимание к деталям</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingHard">
                <button 
                  className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target="#collapseHard" 
                  aria-expanded="false" 
                  aria-controls="collapseHard"
                >
                  Hard Skills
                </button>
              </h2>
              <div 
                id="collapseHard" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingHard" 
                data-bs-parent="#skillsAccordion"
              >
                <div className="accordion-body">
                  <div className="row">
                    <div className="col-md-6">
                      <h5>Языки программирования</h5>
                      <ul className="list-group">
                        <li className="list-group-item">JavaScript/TypeScript</li>
                        <li className="list-group-item">Python</li>
                        <li className="list-group-item">Java</li>
                        <li className="list-group-item">HTML/CSS</li>
                        <li className="list-group-item">JSON</li>
                        <li className="list-group-item">XML</li>
                        <li className="list-group-item">SQL</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <h5>Фреймворки и технологии</h5>
                      <ul className="list-group">
                        <li className="list-group-item">React</li>
                        <li className="list-group-item">Node.js</li>
                        <li className="list-group-item">Spring Boot</li>
                        <li className="list-group-item">Git</li>
                        <li className="list-group-item">Playwright</li>
                        <li className="list-group-item">CodeceptJS</li>
                        <li className="list-group-item">Axios</li>
                        <li className="list-group-item">Chai</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};