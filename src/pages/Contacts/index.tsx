import React from 'react';
import gsap from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollRedirect } from '../../utils/transition';
import { useTranslation } from 'react-i18next';
import mail from '../../assets/img/contacts/mail.svg';
import github from '../../assets/img/contacts/github.svg';
import insta from '../../assets/img/contacts/insta.svg';
import telegram from '../../assets/img/contacts/telegram.svg';
import linkedin from '../../assets/img/contacts/linkedin.svg';
import location from '../../assets/img/contacts/location.svg';
import phone from '../../assets/img/contacts/phone.svg';
import person from '../../assets/img/contacts/person.svg';
import styles from './Contacts.module.scss';

const links = [
  { link: 'https://vleedy.github.io/StarBurger/', name: 'StarBurger' },
  { link: 'https://vleedy.github.io/BankApp/', name: 'Bank App' },
  { link: 'https://vleedy.github.io/TodosList/', name: 'TodosList' },
  { link: 'https://vleedy.github.io/Unloading-map/', name: 'Unloading map' },
  { link: 'https://vleedy.github.io/Events-Calendar/', name: 'Events Calendar' },
  { link: 'https://vleedy.github.io/Photo-Collection/', name: 'Photo Collection' },
  { link: 'https://vleedy.github.io/employees_template/', name: 'Employees template' },
  { link: 'https://vleedy.github.io/Event-table/', name: 'Events table' },
];
const contacts = [
  { icon: person, describe: 'name' },
  { icon: location, describe: 'location' },
  { icon: phone, describe: 'number' },
];

const Contacts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const projectsRef = React.useRef(null);
  const [delay, setDelay] = React.useState(true);

  React.useEffect(() => {
    const identificator = setTimeout(() => setDelay(false), 1500);
    if (location.state === '/aboutMe') {
      gsap.fromTo('.content', { opacity: 0, x: '100%' }, { opacity: 1, x: 0, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: '#575757' });
      gsap.from(projectsRef.current, { opacity: 0, duration: 1.5, y: 200, delay: 1.5 });
    } else if (location.state === '/') {
      gsap.fromTo('.content', { opacity: 0, x: '-100%' }, { opacity: 1, x: 0, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: '#575757' });
      gsap.from(projectsRef.current, { opacity: 0, duration: 1.5, y: 200, delay: 1.5 });
    } else {
      gsap.to('.content', { opacity: 1, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: '#575757' });
      gsap.from(projectsRef.current, { opacity: 0, duration: 1.5, y: 200, delay: 0.5 });
    }

    return () => clearTimeout(identificator);
  }, []);
  return (
    <div
      onWheel={(e) => scrollRedirect(e, gsap, location.pathname, navigate, '/', '/aboutMe', delay)}
      className={styles.container}>
      <div className={styles.contacts}>
        <div className={styles.wrapper}>
          <div className={styles.photo}></div>
          {contacts.map((item) => (
            <div key={item.describe} className={styles.contact}>
              <img className={styles.icon} src={item.icon} alt="icon" />
              <h4>{t(`contacts.${item.describe}`)}</h4>
            </div>
          ))}
        </div>

        <div className={styles.icons_wrapper}>
          <div className={styles.icons}>
            <a href="https://www.linkedin.com/in/vlad-poleschuk/" className={styles.contact}>
              <img className={styles.icon} src={linkedin} alt="icon" />
            </a>
            <a href="https://t.me/vladislav_poleschuk" className={styles.contact}>
              <img className={styles.icon} src={telegram} alt="icon" />
            </a>
            <a href="https://github.com/Vleedy" className={styles.contact}>
              <img style={{ width: '1.6vw' }} className={styles.icon} src={github} alt="icon" />
            </a>
            <a
              href="https://www.instagram.com/vlad_poleschuk_/?igshid=YmMyMTA2M2Y%3D"
              className={styles.contact}>
              <img className={styles.icon} src={insta} alt="icon" />
            </a>
          </div>
          <div className={styles.mail}>
            <img className={styles.icon} src={mail} alt="icon" />
            <h4>vladkeeper@icloud.com</h4>
          </div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div ref={projectsRef} className={styles.projects}>
        {links.map((item) => (
          // eslint-disable-next-line jsx-a11y/anchor-has-content
          <a key={item.name} href={item.link} className={styles.project}>
            <div className={styles.name}>{item.name}</div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
