import { useRef, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import gsap from 'gsap';
import LangSelector from './LangSelector';
import styles from './Header.module.scss';

const headerElements = [
  { pathname: '/', text: 'header.main' },
  { pathname: '/skills', text: 'header.skills' },
  { pathname: '/aboutMe', text: 'header.about' },
  { pathname: '/contacts', text: 'header.contacts' },
];

const Header = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const headerRef = useRef(null);

  const redirect = async (e: React.MouseEvent, path: string) => {
    e.preventDefault();
    await gsap.to('.content', { opacity: 0, duration: 1 });
    navigate(path, { replace: true });
  };

  useEffect(() => {
    if (location.pathname === '/')
      gsap.from(headerRef.current, { y: '-100px', opacity: 0, duration: 1.5, delay: 2 });
  }, []);
  return (
    <header ref={headerRef} className={styles.container}>
      {headerElements.map((item) => (
        <button
          key={item.pathname}
          disabled={location.pathname === item.pathname}
          onClick={(e) => redirect(e, item.pathname)}>
          <h4 className={styles.nav_item}>{t(item.text)}</h4>
        </button>
      ))}
      <LangSelector />
    </header>
  );
};

export default Header;
