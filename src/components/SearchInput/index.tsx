import React from 'react';

import styles from './styles.module.css';
import Image from 'next/image';
import SearchIcon from '../../../public/search.svg'

interface ISearchInputProps {
  value: string;
  handleChange: (e: { target: { value: string } }) => void;
}

const SearchInput: React.FC<ISearchInputProps> = ({ value, handleChange }) => {
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Search"
        onChange={handleChange}
        value={value}
        className={styles.input}
      />
      <div className={styles.glass}>
        <Image alt='Search icon' src={SearchIcon} width={18} height={18}/>
      </div>
    </div>
  );
};

export default SearchInput;