import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import Particles from '../../components/Particle';
import styles from './Main.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollRedirect } from '../../utils/transition';

const Main = () => {
  const { t } = useTranslation();
  const subtitleRef = useRef(null);
  const titleRef = useRef(null);
  const mouseRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const [delay, setDelay] = useState(true);
  useEffect(() => {
    const identificator = setTimeout(() => setDelay(false), 1500);
    if (location.state === '/contacts') {
      gsap.fromTo(
        '.content',
        { opacity: 0, x: '100%' },
        { opacity: 1, x: 0, duration: 1.5, height: '100vh' }
      );
      gsap.to('.container', { opacity: 1, duration: 1.5, background: 'black' });
    } else if (location.state === '/skills') {
      gsap.fromTo('.content', { opacity: 0, x: '-100%' }, { opacity: 1, x: 0, duration: 1.5 });
    } else {
      gsap.to('.content', { opacity: 1, duration: 1.5 });
      gsap.from(subtitleRef.current, {
        y: '-100px',
        opacity: 0,
        duration: 2,
      });
      gsap.from(titleRef.current, {
        display: 'none',
        opacity: 0,
        duration: 3,
        delay: 1.8,
      });
      gsap.from(mouseRef.current, {
        opacity: 0,
        y: '100px',
        duration: 1.5,
        delay: 2,
      });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: 'black' });
    }
    return () => clearTimeout(identificator);
  }, []);
  return (
    <div
      onWheel={(e) =>
        scrollRedirect(e, gsap, location.pathname, navigate, '/skills', '/contacts', delay)
      }
      className={styles.container}>
      <Particles />
      <div className={styles.text}>
        <h2 ref={subtitleRef}>{t('main.hi')}</h2>
        <h1 ref={titleRef}>{t('main.frontend')}</h1>
      </div>
      <div ref={mouseRef} className={styles.mouse}>
        <div className={styles.mouse__icon}>
          <div className={styles.mouse__scroll}></div>
        </div>
        <h6 className={styles.mouse__text}>{t('main.scroll')}</h6>
      </div>
    </div>
  );
};

export default Main;
