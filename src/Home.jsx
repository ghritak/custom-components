import React from 'react';
import { DropDownSection } from './sections/DropDownSection.jsx';
import { LoaderSection } from './sections/LoaderSection.jsx';

const Home = () => {
  return (
    <div className='m-10 space-y-3'>
      <h1 className='text-4xl font-bold'>Custom Components</h1>
      <hr />
      <DropDownSection />
      <hr />
      <LoaderSection />
    </div>
  );
};

export default Home;
