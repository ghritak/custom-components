import React from 'react';
import { DropDownSection } from './sections/DropDownSection.jsx';

const Home = () => {
  return (
    <div className='m-10 space-y-3'>
      <h1 className='text-4xl font-bold'>Custom Components</h1>
      <hr />
      <DropDownSection />
    </div>
  );
};

export default Home;
