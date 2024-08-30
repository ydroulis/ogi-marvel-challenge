import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';
import SearchInput from '../SearchInput';
import List from './List';
import Pagination from '../Pagination';
import { ICharacter } from '@/types/Character';
import { getCharacters } from '@/api/character';

const limit = 10;

const ListSection: React.FC = () => {
    const [ inputValue, setInputValue ] = useState('');
    const [characterList, setCharacterList] = useState<ICharacter[]>();
    const [totalCharacter, setTotalCharacter] = useState(0);
    const [offset, setOffset] = useState(0);
    const [nameStartsWith, setNameStartsWith] = useState('');

    useEffect(() => {
        const loadCharacters = async () => {
            const response = await getCharacters(offset, limit, nameStartsWith);
            setTotalCharacter(response.total)
            setCharacterList(response.results);
        }

        loadCharacters();
    }, [offset, nameStartsWith]);

    const handleInputChange = (event: { target: { value: string } }) => {
        const value = event.target.value;
        setInputValue(value)
        if (value.length >= 1) {
          setNameStartsWith(value)
        } else {
            setNameStartsWith('')
        }
    }

  return(
    <div className={styles.container}>
        <h1 className={styles.title}>Busca de personagens</h1>

        <p className={styles.subtitle}>Nome do personagem</p>

        <SearchInput value={inputValue} handleChange={(e) => handleInputChange(e)}/>

        <List characterList={characterList}/>

        <Pagination limit={limit} total={totalCharacter} offset={offset} setOffset={setOffset} />
    </div>
  );
}

export default ListSection;