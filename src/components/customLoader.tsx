import React from 'react';

interface CustomLoaderProps {
  stoke: number;
  size: number;
  layer: boolean;
  color: string;
  backgroundColor: string;
}

const CustomLoader = ({
  stoke,
  size,
  layer,
  color,
  backgroundColor,
}: CustomLoaderProps) => {
  const defaultSize = 100;
  const _stoke = stoke || defaultSize / 5;
  const _size = size || defaultSize;
  const _layer = layer || false;
  const _color = color || 'blue';
  const _backgroundColor = backgroundColor || 'white';

  return (
    <div className='flex items-center justify-center'>
      <div
        className=' relative animate-spin'
        style={{ height: _size, width: _size }}
      >
        <div
          className='absolute w-full  bg-blue-500 top-0 rounded-t-full'
          style={{ height: _size / 2, width: '100%', backgroundColor: _color }}
        />
        <div
          className='absolute w-full bottom-0 rounded-b-full'
          style={{
            height: _size / 2,
            width: '100%',
            backgroundColor: _layer ? '#ccc' : 'white',
          }}
        />
        <div
          className='absolute rounded-full left-1/2 transform -translate-x-2/4'
          style={{
            height: _size - _stoke,
            width: _size - _stoke,
            top: _stoke / 2,
            backgroundColor: _backgroundColor,
          }}
        />
      </div>
    </div>
  );
};

export default CustomLoader;
