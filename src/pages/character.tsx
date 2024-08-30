import React from 'react';

import styles from "@/styles/Home.module.css";
import CharacterSection from '@/components/CharacterSection';
import { useRouter } from 'next/router';


const Character: React.FC = () => {
  const router = useRouter()

  return(
      <main className={`${styles.main}`}>
        <div className={styles.back} onClick={() =>  router.push('/')}>
          <div className={styles.arrowLeft}/> <p>Voltar para pagina principal</p>
        </div>
        <CharacterSection/>
      </main>
  );
}

export default Character;