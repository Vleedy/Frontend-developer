import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import { scrollRedirect } from '../../utils/transition';
import styles from './AboutMe.module.scss';

const AboutMe = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [delay, setDelay] = React.useState(true);
  const wrapperRef = React.useRef(null);
  const textRef = React.useRef(null);
  React.useEffect(() => {
    const identificator = setTimeout(() => setDelay(false), 1500);
    if (location.state === '/skills') {
      gsap.fromTo('.content', { opacity: 0, x: '100%' }, { opacity: 1, x: 0, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: '#575757' });
    } else if (location.state === '/contacts') {
      gsap.fromTo('.content', { opacity: 0, x: '-100%' }, { opacity: 1, x: 0, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: '#575757' });
    } else {
      gsap.to('.content', { opacity: 1, duration: 1.5 });
      gsap.from(wrapperRef.current, { width: 0, height: 0, opacity: 0, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: '#575757' });
      gsap.from(textRef.current, { opacity: 0, duration: 1.5, delay: 1.1 });
    }
    return () => clearTimeout(identificator);
  }, []);
  return (
    <div
      onWheel={(e) =>
        scrollRedirect(e, gsap, location.pathname, navigate, '/contacts', '/skills', delay)
      }
      className={styles.container}>
      <div ref={wrapperRef} className={styles.wrapper}>
        <div className={styles.card}>
          <div className={styles.front}></div>
          <div className={styles.back}>
            <h4>{t('about.first')}</h4>
          </div>
        </div>
        <div className={styles.card}>
          <div className={styles.front}>
            <h4 ref={textRef}>{t('about.second')}</h4>
          </div>
          <div className={styles.back}></div>
        </div>
        <div className={styles.card}>
          <div className={styles.front}></div>
          <div className={styles.back}>
            <h4 className={styles.title}>{t('about.thirt.education')}</h4>
            <ul>
              <li className={styles.subtitle}>{t('about.thirt.bsmu')}:</li>
              <li className={styles.listItem}>{t('about.thirt.doc')}</li>
              <li className={styles.subtitle}>{t('about.thirt.udemy')}:</li>
              <a
                href="https://www.udemy.com/certificate/UC-a8272c2d-6dd0-4e55-861b-526e223e6d39/"
                className={styles.listItem}>
                {t('about.thirt.web')}
              </a>
              <a
                href="https://www.udemy.com/certificate/UC-a0af64de-c351-4dfd-bc39-f3f4e492f955/"
                className={styles.listItem}>
                {t('about.thirt.full')}
              </a>
            </ul>
            <h4 className={styles.title}>COMMERCIAL EXPERIENCE</h4>
            <ul>
              <li className={styles.subtitle}>YOUX.systems:</li>
              <li className={styles.listItem}>Feb, 2022 - May, 2023: Trainee Frontend developer</li>
              <li className={styles.subtitle}>YOUX.systems:</li>
              <li className={styles.listItem}>May, 2022 - Jan, 2023: Junior Frontend developer</li>
            </ul>
            <h4 className={styles.title}>{t('about.thirt.language')}</h4>
            <ul>
              <li className={styles.listItem}>{t('about.thirt.ru')}</li>
              <li className={styles.listItem}>{t('about.thirt.en')}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
