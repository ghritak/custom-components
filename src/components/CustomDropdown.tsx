/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

interface CustomDropdownProps<T> {
  options: T[];
  onSelect: (selectedOption: T) => void;
  search?: boolean;
  placeholder?: string;
  displayKey?: keyof T;
}

const CustomDropdown = <T extends string | Record<string, any>>({
  options,
  onSelect,
  search = false,
  placeholder = 'Select an option',
  displayKey = 'name' as keyof T,
}: CustomDropdownProps<T>) => {
  const [selectedOption, setSelectedOption] = useState<T | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleSelect = (option: T) => {
    setSelectedOption(option);
    onSelect(option);
    closeDropdown();
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setSearchTerm('');
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      closeDropdown();
    }
  };

  const getOptionLabel = (option: T): string => {
    if (typeof option === 'string') {
      return option;
    }

    return (option[displayKey] as string) || '';
  };

  const filteredOptions = options.filter((option) =>
    getOptionLabel(option).toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='relative inline-block text-left w-full' ref={dropdownRef}>
      <div>
        <span className='rounded-md shadow-sm'>
          <button
            type='button'
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`inline-flex justify-between w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:border-black active:bg-gray-200 ${
              !selectedOption ? 'text-gray-500' : ''
            }`}
            id='options-menu'
            aria-haspopup='true'
            aria-expanded={isDropdownOpen}
            style={{
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            {selectedOption ? getOptionLabel(selectedOption) : placeholder}

            <FaChevronDown className='ml-2 mt-1' />
          </button>
        </span>
      </div>

      {isDropdownOpen && (
        <div
          className='z-20 origin-top-right absolute right-0 mt-2 w-full max-h-60 overflow-y-auto rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
          role='menu'
          aria-orientation='vertical'
          aria-labelledby='options-menu'
        >
          <div className='py-1' role='none'>
            {search && (
              <div className='relative p-2'>
                <input
                  type='text'
                  placeholder='Search...'
                  className='w-full border-[1px] text-sm border-gray-300 rounded-md pl-8 pr-2 py-1 focus:outline-none focus:border-black'
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <FaSearch
                  size={14}
                  className='absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-500'
                />
              </div>
            )}
            {filteredOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelect(option)}
                className={`block px-4 py-2 text-sm text-left w-full hover:bg-gray-100 ${
                  option === selectedOption ? 'bg-gray-100' : ''
                }`}
                role='menuitem'
              >
                {getOptionLabel(option)}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
