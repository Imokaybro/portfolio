import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => (
  <nav className="navbar navbar-dark navbar-expand-lg bg-dark-custom">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink 
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
          to="/"
        >
          Главная
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
          to="/about"
        >
          Обо мне
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
          to="/job_experience"
        >
          Опыт работы
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
          to="/skills"
        >
          Навыки
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
          to="/examples"
        >
          Примеры работ
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
          to="/links"
        >
          Ссылки и прочая полезная информация
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink 
          className={({isActive}) => isActive ? "nav-link active" : "nav-link"} 
          to="/contacts"
        >
          Контакты
        </NavLink>
      </li>
    </ul>
  </nav>
);