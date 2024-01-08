import React from 'react';
import CustomDropdown from '../components/CustomDropdown.tsx';

export const DropDownSection = () => {
  return (
    <div className='space-y-3'>
      <h1 className='text-2xl font-semibold'>Select Dropdown</h1>
      <div className='grid grid-cols-6 gap-6'>
        <div className='col-span-2'>
          <CustomDropdown
            options={['Meghalaya', 'Dawki', 'Tawang']}
            onSelect={(text) => {
              console.log(text, 'has been selected.');
            }}
          />
          <p className='mt-2'>Array Options - just specify the array item.</p>
        </div>
        <div className='col-span-2'>
          <CustomDropdown
            options={[
              { id: 1, des_name: 'Meghalaya' },
              { id: 2, des_name: 'Dawki' },
              { id: 3, des_name: 'Tawang' },
            ]}
            displayKey='des_name'
            onSelect={(text) => {
              console.log(text, 'has been selected.');
            }}
          />
          <p className='mt-2'>
            Object Options - specify "displayKey" (which key you want to
            display)
          </p>
        </div>
        <div className='col-span-2'>
          <CustomDropdown
            options={[
              { id: 1, des_name: 'Meghalaya' },
              { id: 2, des_name: 'Dawki' },
              { id: 3, des_name: 'Tawang' },
            ]}
            displayKey='des_name'
            onSelect={(text) => {
              console.log(text, 'has been selected.');
            }}
            search
          />
          <p className='mt-2'>
            Dropdown with search functionality specify search={`${`{true}`}`}
          </p>
        </div>
      </div>
    </div>
  );
};
