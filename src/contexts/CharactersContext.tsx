import { ICharacter } from "@/types/Character";
import { Dispatch, ReactNode, SetStateAction, createContext, useContext, useState } from "react";


interface CharacterContextProps {
    setCharacter: Dispatch<SetStateAction<ICharacter>>
    character: ICharacter
}

const CharacterContext = createContext<CharacterContextProps | undefined>(undefined);

export function CharacterContextProvider({ children }: {children: ReactNode}) {
    const [character, setCharacter] = useState<ICharacter>({
        name: '',
        id: 0,
        description: '',
        comics: {
            items: [{
                name: '',
            }],
            available: 0

        },
        series:  {
            items: [{
                name: '',
            }],
            available: 0

        },
        events: {
            items: [{
                name: '',
            }],
            available: 0
        },
        thumbnail: {
            path: '',
            extension: ''
        }
    });

    const contextValue = { character, setCharacter }
    
    return(
        <CharacterContext.Provider value={contextValue}>
            {children}
        </CharacterContext.Provider>
    )
}

export function useCharacterContext() {
    const context = useContext(CharacterContext);
    if (!context) {
        throw new Error(
          "useCharacterContext deve ser usado dentro de um useDocumnentosHabeisContextoProvider"
        );
      }
      return context;
}

export default CharacterContext;