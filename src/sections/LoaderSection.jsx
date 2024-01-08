import React from 'react';
import CustomLoader from '../components/customLoader.tsx';

export const LoaderSection = () => {
  return (
    <div className='space-y-3'>
      <h1 className='text-2xl font-semibold'>Custom Loader</h1>
      <div className='grid grid-cols-6 gap-6'>
        <div className='col-span-2 '>
          <div className='flex justify-center items-center  h-[120px]'>
            <CustomLoader size={50} stoke={10} color='green' />
          </div>
          <p className='text-center mt-6'>size=50, stoke=10, color=green</p>
        </div>
        <div className='col-span-2 '>
          <div className='flex justify-center items-center h-[120px]'>
            <CustomLoader size={100} stoke={10} color='blue' />
          </div>
          <p className='text-center mt-6'>size=100, stoke=10, color=blue</p>
        </div>
        <div className='col-span-2 '>
          <div className='flex justify-center items-center  h-[120px]'>
            <CustomLoader size={50} stoke={20} color='red' />
          </div>
          <p className='text-center mt-6'>size=50, stoke=20, color=red</p>
        </div>
      </div>
    </div>
  );
};
