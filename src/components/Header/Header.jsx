import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Basket } from '../../images/basket.svg';
import { FaPhone } from 'react-icons/fa6';
import css from './Header.module.css';
import { Link } from 'react-scroll';

import React, { useState, useEffect } from 'react';

export const Header = () => {
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      const pageHeight = document.body.clientHeight;

      if (!showHeader && scrollPosition >= pageHeight / 2 - windowHeight / 2) {
        setShowHeader(true);
      } else if (showHeader && scrollPosition < pageHeight / 2 - windowHeight / 2) {
        setShowHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [showHeader]);

  
  return (
    <header className={`${css.header} ${showHeader ? css.showHeader : ''}`}>
      <div className={css.container}>
        <Logo className={css.logo} />
        <ul className={css.headerList}>
          <li ><Link to="about" smooth={true} duration={500} className={css.headerListElement}>Про мене</Link></li>
          <li className={css.headerListElement}>Торт за ескізом</li>
          <li className={css.headerListElement}>Каталог</li>
          <li className={css.headerListElement}>Ціни</li>
          <li className={css.headerListElement}>Контакти</li>        
        </ul>
        <Basket className={css.headerBasket} />
        <a href="tel:+380730368141" className={css.headerTel}>
          <FaPhone size={18} />
          073-036-81-41
        </a>
      </div>
    </header>
  );
};
