import React from 'react';

import styles from './styles.module.css';
import { useCharacterContext } from '@/contexts/CharactersContext';
import { useRouter } from 'next/router';
import { ICharacter } from '@/types/Character';

interface ICardProps {
  character: ICharacter;
}

const Card: React.FC<ICardProps> = ({ character }) => {
  const { setCharacter } = useCharacterContext()
  const router = useRouter()
  
  const { name, events, thumbnail, series } = character;
  
  const handleRedirect = () => {
    setCharacter(character);
    router.push('/character');
  }

  return(
    <div className={styles.container} onClick={() => handleRedirect()}>
      <div className={styles.characterName}>
        <img alt={`${name}'s image`} src={`${thumbnail.path}/standard_fantastic.${thumbnail.extension}`} className={styles.img}/>
        <p className={styles.name}>{ name }</p>
      </div>
        
        <div className={styles.characterComics}>
          {series.items.slice(0, 3).map((comic, i) => {
            return(
              <p key={i} className={styles.comic}>{comic.name}</p>
            )
          })}
        </div>

        <div className={styles.characterEvents}>
          {events.items.slice(0, 3).map((event, i) => {
            return(
              <p key={i} className={styles.event}>{event.name}</p>
            )
          })}

        </div>
    </div>
  );
}

export default Card;