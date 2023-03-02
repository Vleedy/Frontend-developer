import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Main from './pages/Main';
import Skills from './pages/Skills';
import AboutMe from './pages/AboutMe';
import Contacts from './pages/Contacts';
import './styles/app.scss';

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Main />} />
          <Route path="skills" element={<Skills />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
