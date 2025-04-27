import React, { useEffect, useRef } from "react";
import "./Background.css";

const AnimatedBackground = () => {
  const backgroundRef = useRef(null);

  useEffect(() => {
    const background = backgroundRef.current;
    
    // Создаем блики
    const createFlares = () => {
      // Очистим существующие блики
      const existingParticles = background.querySelector('.particles');
      if (existingParticles) {
        existingParticles.remove();
      }
      
      const particles = document.createElement('div');
      particles.className = 'particles';
      
      // Создаем случайное количество бликов
      const numFlares = 50;
      
      for (let i = 0; i < numFlares; i++) {
        const flare = document.createElement('div');
        flare.className = 'flare';
        
        // Случайное положение
        flare.style.left = `${Math.random() * 100}%`;
        flare.style.top = `${Math.random() * 100}%`;
        
        // Случайный размер
        const size = Math.random() * 4 + 1;
        flare.style.width = `${size}px`;
        flare.style.height = `${size}px`;
        
        // Случайная задержка анимации
        flare.style.animationDelay = `${Math.random() * 10}s`;
        
        // Случайная продолжительность анимации
        flare.style.animationDuration = `${Math.random() * 10 + 5}s`;
        
        particles.appendChild(flare);
      }
      
      background.appendChild(particles);
    };
    
    // Создаем световые линии
    const createLightLines = () => {
      const numLines = 5; // Количество линий
      
      for (let i = 0; i < numLines; i++) {
        const line = document.createElement('div');
        line.className = 'light-line';
        
        // Случайное положение по вертикали
        line.style.top = `${Math.random() * 100}%`;
        
        // Небольшой случайный наклон
        const rotateAngle = Math.random() * 4 - 2; // от -2 до 2 градусов
        line.style.setProperty('--rotate-angle', `${rotateAngle}deg`);
        
        // Разная прозрачность для каждой линии, но очень прозрачные
        const maxOpacity = Math.random() * 0.07 + 0.03; // от 0.03 до 0.1
        line.style.setProperty('--max-opacity', maxOpacity);
        
        // Разная задержка для каждой линии
        line.style.animationDelay = `${Math.random() * 15}s`;
        
        // Разная продолжительность анимации
        line.style.animationDuration = `${Math.random() * 15 + 20}s`;
        
        background.appendChild(line);
      }
    };
    
    // Создаем падающую звезду - РАЗВЕРНУТО НА 180 ГРАДУСОВ
    const createShootingStar = () => {
      const star = document.createElement('div');
      
      // Определяем размер
      const sizeClass = Math.random() > 0.7 ? 'large' : (Math.random() > 0.4 ? 'medium' : 'small');
      star.className = `shooting-star ${sizeClass}`;
      
      // Случайная начальная позиция (теперь нижняя часть экрана вместо верхней)
      const startX = Math.random() * window.innerWidth;
      const startY = window.innerHeight - Math.random() * (window.innerHeight * 0.5); // Изменено с верха на низ
      star.style.left = `${startX}px`;
      star.style.top = `${startY}px`;
      
      // Случайная длина звезды
      const length = Math.random() * 150 + 50;
      star.style.width = `${length}px`;
      
      // Случайный угол падения (теперь вверх вместо вниз)
      const angle = -(Math.random() * 60 + 30); // Отрицательный угол для движения вверх
      
      // Вычисляем расстояние перемещения
      const travelDistance = Math.max(window.innerWidth, window.innerHeight) * 1.5;
      const radians = angle * (Math.PI / 180);
      const travelX = Math.cos(radians) * travelDistance;
      const travelY = Math.sin(radians) * travelDistance; // Будет отрицательным для движения вверх
      
      // Устанавливаем CSS переменные для анимации
      star.style.setProperty('--angle', `${angle}deg`);
      star.style.setProperty('--travel-x', `${travelX}px`);
      star.style.setProperty('--travel-y', `${travelY}px`);
      star.style.setProperty('--duration', `${Math.random() * 2 + 1}s`);
      star.style.setProperty('--delay', `0s`);
      
      background.appendChild(star);
      
      // Удаляем звезду после завершения анимации
      setTimeout(() => {
        if (star.parentNode === background) {
          background.removeChild(star);
        }
      }, 5000); // Достаточно времени для завершения анимации
    };
    
    // Инициализация
    createFlares();
    createLightLines();
    
    // Интервал для обновления световых линий
    const lightLinesInterval = setInterval(() => {
      // Удаляем все существующие линии
      const existingLines = background.querySelectorAll('.light-line');
      existingLines.forEach(line => line.remove());
      
      // Создаем новые
      createLightLines();
    }, 30000); // Обновляем каждые 30 секунд
    
    // Интервал для создания падающих звезд
    const shootingStarInterval = setInterval(() => {
      if (Math.random() > 0.7) { // 30% шанс создать звезду при каждой проверке
        createShootingStar();
      }
    }, 2000); // Проверка каждые 2 секунды
    
    // Очистка при размонтировании
    return () => {
      clearInterval(lightLinesInterval);
      clearInterval(shootingStarInterval);
    };
  }, []);

  return <div ref={backgroundRef} className="animated-background"></div>;
};

export default AnimatedBackground;