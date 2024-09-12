import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));

const App: React.FC = () => {
  const exampleValue = useSelector((state: RootState) => state.example.value);

  return (
    <div>
      <h1>Advanced React App</h1>
      <h2>Value from Redux Store: {exampleValue}</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
