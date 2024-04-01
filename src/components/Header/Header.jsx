import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Basket } from '../../images/basket.svg';
import { FaPhone } from 'react-icons/fa6';
import css from './Header.module.css';

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <Logo className={css.logo} />
        <ul className={css.headerList}>
          <li className={css.headerListElement}>Про мене</li>
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
