import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/layout/Header/Header';
import { MainPage } from './components/pages/MainPage';

function App() {
  return (
    <>
      <Header />
      <MainPage />
    </>
  );
}

export default App;
