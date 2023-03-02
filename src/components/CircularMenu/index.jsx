import React from 'react';
import gsap from 'gsap';
import html from '../../assets/img/html.svg';
import css from '../../assets/img/css.svg';
import javascript from '../../assets/img/javascript.svg';
import typescript from '../../assets/img/typescript.svg';
import react from '../../assets/img/react.svg';
import redux from '../../assets/img/redux.svg';
import skills from '../../assets/img/skills.svg';
import cross from '../../assets/img/cross.svg';
import styles from './CircularMenu.module.scss';

const icons = [
  { icon: redux, description: 'Redux. Toolkit, Thunk, Slice, Saga, Persist...' },
  {
    icon: css,
    description:
      'CSS/CSS3. Responsive and Adaptive layout, BEM, SaSS/SCSS preprocessors, CSS modules...',
  },
  {
    icon: javascript,
    description: 'JavaScript. Event loop, Promises, async/await, AJAX, closure, spread, rest...',
  },
  {
    icon: typescript,
    description: 'TypeScript. Types, Interfaces, Generics...',
  },
  {
    icon: react,
    description:
      'React. Classes, Hooks, HOCs, Portals, lazy... React Router v6+, GSAP, React Transition Group, MUI, Formik... ',
  },
  { icon: html, description: 'HTML/HTML5. Semantic tags, svg, SEO...' },
];

const CircularMenu = () => {
  const [isActive, setIsActive] = React.useState(false);
  const [skill, setSkill] = React.useState(false);
  const [disable, setDisable] = React.useState(true);
  const descrTextRef = React.useRef(null);
  React.useEffect(() => {
    const delay = setTimeout(() => setIsActive(true), 500);
    return () => clearTimeout(delay);
  }, []);
  React.useEffect(() => {
    const delay = setTimeout(() => setDisable(false), 1800);
    gsap.from(descrTextRef.current, { opacity: 0, duration: 1.8 });
    return () => clearTimeout(delay);
  }, [skill]);
  const handleClickSkill = (i) => {
    setSkill(i === skill ? false : i);
    setDisable(true);
  };
  return (
    <div className={styles.menu}>
      <div
        onClick={() => setIsActive(!isActive)}
        className={skill || skill === 0 ? styles.sleep : styles.toggle}>
        <img src={skills} alt="skills" />
      </div>
      {skill || skill === 0 ? (
        <div className={styles.description}>
          <h4 ref={descrTextRef}>{icons[skill].description}</h4>
        </div>
      ) : null}
      {icons.map((item, i) => (
        <button
          disabled={disable}
          onClick={() => handleClickSkill(i)}
          className={isActive ? styles.active : styles.hide}
          key={i}
          style={{ '--i': i }}>
          <div className={styles.img__wrapper}>
            {skill === i ? (
              <img src={cross} alt="back" />
            ) : (
              <img src={item.icon} alt="technical skill" />
            )}
          </div>
        </button>
      ))}
    </div>
  );
};

export default CircularMenu;
