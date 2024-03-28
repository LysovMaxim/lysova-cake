import css from './Hero.module.css';
import bubblesTitle from "../../images/png-bubbles-title.png"
import photoTitle from "../../images/photo-title.jpg"

export const Hero = () => {
  return (
    <section className={css.hero}>
      <div className={css.container}>
              <h1 className={css.heroTitle}>Авторські торти та десерти для вашого свята</h1>
              <p className={css.heroInfo}>Виконаю замовлення будь-якої складності та дизайну. Знаходжусь с.Нові Петрівці</p>
              <button className={css.heroBtn}><div className={css.heroBtnDecor}>Замовити торт</div></button>
              <img className={css.heroBubblesTitle} src={bubblesTitle} alt="bubbles" />
              <img className={css.heroPhotoTitle} src={photoTitle} alt="photoCake" />
      </div>
    </section>
  );
};

export default Hero;
