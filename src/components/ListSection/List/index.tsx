import React from 'react';

import styles from './styles.module.css';
import Card from '../Card';
import { ICharacter } from '@/types/Character';


interface IListProps {
    characterList: ICharacter[] | undefined
}

const List: React.FC<IListProps> = ({ characterList }) => {
  return(
    <div className={styles.container}>
        <div className={styles.labels}>
            <p className={styles.labelCharacter}>Personagem</p>
            <p className={styles.labelComics}>Séries</p>
            <p className={styles.labelEvents}>Eventos</p>
        </div>

        <ul className={styles.list}>
            {characterList?.map((character, i) => {
                return(
                    <Card key={i} character={character}/>
                )
            })}
        </ul>
    </div>
  );
}

export default List;