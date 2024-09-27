import React from 'react';
import Counter from '../components/Counter';
import Quiz from '../components/Quiz';
import InventoryList from '../components/InventoryLit';
const Home: React.FC = () => {
  return (
    <>
      <Counter />
      <Quiz />
      <InventoryList />
    </>
  )

};

export default Home;
