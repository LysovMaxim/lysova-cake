import css from './About.module.css';
import bubblesAbout from '../../images/bubbles-about.png';
import photoUser from '../../images/photo-user.jpg';

export const About = () => {
  return (
    <section className={css.about} id="section">
      <div className={css.container}>
        <div>
          <h2 className={css.aboutTitle}>Трохи про мене</h2>
          <p className={css.aboutTitleInfo}>
            Привіт! Моє життя - це солодкий шлях, який я обираю щодня. Робота
            вдома дозволяє мені розвиватися в своєму хобі, перетворюючи його в
            щось більше, ніж просто хобі - це моє покликання.
          </p>
          <p className={css.aboutTitleInfo}>
            Моя кухня - моє місце сили, моє поле творчості. Тут я можу вільно
            експериментувати з рецептами, створюючи найсмачніші і найкрасивіші
            десерти. Від ніжних кремів до незвичних капкейків - кожна страва є
            моїм витвором мистецтва.
          </p>
          <p className={css.aboutTitleInfo}>
            Найбільше задоволення я отримую, коли бачу радість на обличчях своїх
            клієнтів. Вони - моє натхнення, моя мотивація. Знаючи, що мої
            десерти можуть зробити чийсь день яскравішим і щасливішим, я
            відчуваю, що моя робота дійсно має значення.
          </p>
          <p className={css.aboutTitleInfo}>
            Творчість у кондитерському мистецтві допомагає мені виразити себе і
            поділитися своєю любов'ю до солодощів з іншими. Я горда тим, що можу
            створювати щастя через кожен шматочок моєї роботи.
          </p>
        </div>
        <div>
          <img className={css.bubblesAbout} src={bubblesAbout} alt="bubbles" />
          <img className={css.photoUser} src={photoUser} alt="photoCake" />
        </div>
      </div>
    </section>
  );
};
