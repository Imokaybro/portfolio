import React, { useEffect, useRef } from "react";
import "./Form.css";
// Импортируем необходимые модули Bootstrap
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export const JobExperience = () => {
  const jumbotronRef = useRef(null);
  const sovocTimer = calculateTime();
  const overTime = calculateTime(true);


  function calculateTime(over) {
    const startDate = new Date(2022, 1, 1);
    const currentDate = new Date();
    let years = currentDate.getFullYear() - startDate.getFullYear();
    let months = currentDate.getMonth() - startDate.getMonth();
    if (months < 0) {
      years--;
      months += 12;
    }
    if (over) {
      months += 10;
    }
    const yearsText = formatYears(years, months);
    const monthsText = formatMonths(months);
    
    if (years > 0 && months > 0 && months < 12) {
      return `${yearsText} и ${monthsText}`;
    } else if (years > 0) {
      return yearsText;
    } else {
      return monthsText;
    }
  }
  
  /**
   * Форматирует количество лет с правильным окончанием
   * @param {number} years Количество лет
   * @returns {string} Отформатированная строка
   */
  function formatYears(years, months) {
    if (years === 0) return "";
    if (months === 12) years  = years + 1
    
    if (years % 10 === 1 && years % 100 !== 11) {
      return `${years} год`;
    } else if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100)) {
      return `${years} года`;
    } else {
      return `${years} лет`;
    }
  }
  
  /**
   * Форматирует количество месяцев с правильным окончанием
   * @param {number} months Количество месяцев
   * @returns {string} Отформатированная строка
   */
  function formatMonths(months) {
    if (months === 0) return "0 месяцев";
    
    if (months % 10 === 1 && months % 100 !== 11) {
      return `${months} месяц`;
    } else if ([2, 3, 4].includes(months % 10) && ![12, 13, 14].includes(months % 100)) {
      return `${months} месяца`;
    } else {
      return `${months} месяцев`;
    }
  }
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
        <div className="jobExp">
          <div className="display-4">Общий опыт работы в IT: {overTime}</div>
        </div>
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
                  ООО "Совкомбанк Технологии". Стаж c февраля 2022г. по настоящее время ({sovocTimer})
                </button>
              </h2>
              <div 
                id="collapseSoft" 
                className="accordion-collapse collapse show" 
                aria-labelledby="headingSoft" 
                data-bs-parent="#skillsAccordion"
              >
                <div className="accordion-body">
                  <div className="lead">
                    <strong>Должность:</strong> Ведущий тестировщик группы автоматизированного тестирования на JavaScript
                    <div><br></br></div>
                  </div>
                  <div className="lead">Основные обязанности:</div>
                  <div><br></br></div>
                  <ul className="list-group">
                    <li className="list-group-item">1. Тестирование WEB + API</li>
                    <li className="list-group-item">2. Подготовка, реализация и актуализация артефактов тестирования</li>
                    <li className="list-group-item">3. Документирование найденных ошибок в системе баг-трекинга, контроль их исправления</li>
                    <li className="list-group-item">4. Тест менеджмент</li>
                    <li className="list-group-item">5. Коммуникация с мастер-системами, смежными командами</li>
                    <li className="list-group-item">6. Развитие и поддержка автотестов и инфраструктуры</li>
                    <li className="list-group-item">7. Проведение код-ревью</li>
                    <li className="list-group-item">8. Разработка и актуализация тестов на TypeScript и - Playwright</li>
                    <li className="list-group-item">9. Разработка и актуализация тестов на JavaScript и CodeceptJS</li>
                    <li className="list-group-item">10. Разработка Helper's для улучшения качества автотестов. Например разработал кастомный воркер с распараллеливанием и балансировщиком с определением приоритета теста</li>
                    <li className="list-group-item">11. Поддержка проектов автоматизации в актуальном состоянии с улучшением качества кода(рефакторинг)</li>
                    <li className="list-group-item">12. Планирование работ и формирование оценок требующихся ресурсов тестирования по задаче</li>
                    <li className="list-group-item">13. Поддержка продукта после релиза</li>
                    <li className="list-group-item">14. Сбор и анализ логов, анализ ошибок</li>
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
                  АО "Неофлекс Консалтинг". Стаж с июня 2021г. по март 2022г. <strong> (10 месяцев)</strong>
                </button>
              </h2>
              <div 
                id="collapseHard" 
                className="accordion-collapse collapse" 
                aria-labelledby="headingHard" 
                data-bs-parent="#skillsAccordion"
              >
                <div className="accordion-body">
                  <div className="lead">
                    <strong>Должность:</strong> Тестировщик</div>
                    <div><br></br></div>
                  <div className="lead">Основные обязанности:</div>
                  <div><br></br></div>
                  <ul className="list-group">
                    <li className="list-group-item">1. Тестирование WEB</li>
                    <li className="list-group-item">2. Составление тестовой документации</li>
                    <li className="list-group-item">3. Функциональное тестирование</li>
                    <li className="list-group-item">4. Интеграционное тестирование</li>
                    <li className="list-group-item">5. Инсталляционное тестирование</li>
                    <li className="list-group-item">6. Регрессионное тестирование</li>
                    <li className="list-group-item">7. Оценка трудозатрат</li>
                    <li className="list-group-item">8. Составление отчетов по тестированию</li>
                    <li className="list-group-item">9. Ревью кейсов/ридми/ТЗ</li>
                    <li className="list-group-item">10. Поддержка продукта после релиза</li>
                    <li className="list-group-item">11. Коммуникации с заказчиком доработок</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};