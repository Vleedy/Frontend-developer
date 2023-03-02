import React from 'react';
import gsap from 'gsap';
import { useLocation, useNavigate } from 'react-router-dom';
import { scrollRedirect } from '../../utils/transition';
import CircularMenu from '../../components/CircularMenu';
import styles from './Skills.module.scss';

const Skills = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [delay, setDelay] = React.useState(true);
  React.useEffect(() => {
    const identificator = setTimeout(() => setDelay(false), 1500);
    if (location.state === '/') {
      gsap.fromTo('.content', { opacity: 0, x: '100%' }, { opacity: 1, x: 0, duration: 1.5 });
    } else if (location.state === '/aboutMe') {
      gsap.fromTo('.content', { opacity: 0, x: '-100%' }, { opacity: 1, x: 0, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: 'black' });
    } else {
      gsap.to('.content', { opacity: 1, duration: 1.5 });
      gsap.to('.container', { opacity: 1, duration: 1.5, background: 'black' });
    }
    return () => clearTimeout(identificator);
  }, []);
  return (
    <div
      onWheel={(e) => scrollRedirect(e, gsap, location.pathname, navigate, '/aboutMe', '/', delay)}
      className={styles.container}>
      {Array(10)
        .fill(null)
        .map((_, i) => (
          <li key={i} className={styles.square}></li>
        ))}
      <CircularMenu />
    </div>
  );
};

export default Skills;
