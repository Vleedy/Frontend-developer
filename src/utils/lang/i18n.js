import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        header: {
          main: 'Main',
          skills: 'Skills',
          about: 'About me',
          contacts: 'Contacts',
        },
        main: {
          hi: "Hi, I'm Vlad Poleschuk, I'm a",
          frontend: 'FRONTEND DEVELOPER',
          scroll: 'Use the scroll to move',
        },
        about: {
          first:
            "My name is Vladislav, I'm 25. I am a hardworking, purposeful and responsible person with good self-management skills. I have a high working capacity, I quickly adapt to new working conditions. Always ready to learn something new and ready for new challenges.",
          second:
            'Front end developer with about 1+ year of experience. I specialize in developing web applications using the React/Redux stack. I have a strong theoretical and practical base of JavaScript, TypeScript, React, Redux. I have experience in developing interfaces with complex layout.',
          thirt: {
            education: 'EDUCATION',
            bsmu: 'BSMU 2015 - 2021',
            doc: 'DOCTOR: ANESTHESIOLOGIST-RESUSCITATOR',
            udemy: 'Udemy courses certificates',
            web: '"WEB Developer 2022"',
            full: '"Full JavaScript Course + React - from scratch to the result"',
            language: 'Languages',
            ru: 'Russian - native',
            en: 'English - Intermediate (B1)',
          },
        },
        contacts: {
          contacts: 'CONTACT INFORMATION',
          pet: 'PET PROJECTS',
          name: 'Vladislav Poleschuk',
          location: 'Belarus, Minsk',
          number: '+375259288265',
        },
      },
    },
    ru: {
      translation: {
        header: {
          main: 'Главная',
          skills: 'Навыки',
          about: 'Обо мне',
          contacts: 'Контакты',
        },
        main: {
          hi: 'Привет, я Владислав Полещук, я ',
          frontend: 'ФРОНТЕНД РАЗРАБОТЧИК',
          scroll: 'Используй скролл для перемещения',
        },
        about: {
          first:
            'Меня зовут Владислав, мне 25. Я трудолюбивый, целеустремленный и ответственный человек с хорошими навыками самоуправления. Обладаю высокой работоспособностью, быстро адаптируюсь к новым условиям работы. Постоянно совершенствуюсь и наращиваю свой технологический стек.',
          second:
            'Front-end разработчик с опытом работы более 1 года. Я специализируюсь на разработке веб-приложений с использованием стека React/Redux. Имею крепкую теоретическую и практическую база JavaScript, TypeScript, React, Redux. Есть опыт разработки интерфейсов со сложной вёрсткой.',
          thirt: {
            education: 'ОБРАЗОВАНИЕ',
            bsmu: 'BSMU 2015 - 2021',
            doc: 'ВРАЧ АНЕСТЕЗИОЛОГ-РЕАНИМАТОЛОГ',
            udemy: 'Сертификаты курсов Udemy',
            web: '"WEB-разработчик 2022"',
            full: '"Полный курс по JavaScript + React - с нуля до результата"',
            language: 'Языки',
            ru: 'Русский - родной',
            en: 'Английский - (B1)',
          },
        },
        contacts: {
          contacts: 'КОНТАКТНАЯ ИНФОРМАЦИЯ',
          pet: 'ПЕТ ПРОЕКТЫ',
          name: 'Владислав Полещук',
          location: 'Беларусь, Минск',
          number: '+375259288265',
        },
      },
    },
  },
});

export default i18n;
