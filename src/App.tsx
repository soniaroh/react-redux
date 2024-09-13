import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';
import GlobalStyle from './styles/globalStyles';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const App: React.FC = () => {
  const exampleValue = useSelector((state: RootState) => state.example.value);

  return (
    <>
      <GlobalStyle/>
      <h1>Advanced React App</h1>
      <h2>Value from Redux Store: {exampleValue}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
