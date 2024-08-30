import React, { useEffect, useState } from 'react';

import styles from './styles.module.css';
import { useCharacterContext } from '@/contexts/CharactersContext';
import { getCharacterComic } from '@/api/character';
import { IComic } from '@/types/Comic';

const CharacterSection: React.FC = () => {
    const { character } = useCharacterContext()
    const [comics, setComics] = useState<IComic[]>();


    useEffect(() => {
        const loadComics = async () => {
            const response = await getCharacterComic(character.id);
            setComics(response.results);
        }
        loadComics();
    }, [])

    
  return(
    <div className={styles.container}>
        <div className={styles.mainInfo}>
            <img src={`${character.thumbnail.path}/standard_fantastic.${character.thumbnail.extension}`} alt={`${character.name}'s image`} className={styles.characterImg}/>

            <div className={styles.characterInfo}>
                <h1 className={styles.name}>{character.name}</h1>
                <div className={styles.details}>
                    <p>Quadrinhos: {character.comics.available}</p>
                    <p>Eventos: {character.events.available}</p>
                </div>
            </div>
        </div>

        <div className={styles.description}>
            <p>{ character.description || 'Sem descrição disponível' }</p>
        </div>

        <div className={styles.lastComics}>
            <p>Últimos lançamentos</p>
            <div className={styles.comics}>
                {comics?.map((comic, i) => {
                    return(
                        <div className={styles.comic}>
                            <img src={`${comic.thumbnail.path}/standard_fantastic.${comic.thumbnail.extension}`} alt={`Cover image from the comic ${comic.title}`} className={styles.comicImg}/>
                            <p>{comic.title}</p>
                        </div> 
                    )
                })}
            </div>
        </div>
    </div>
  );
}

export default CharacterSection;